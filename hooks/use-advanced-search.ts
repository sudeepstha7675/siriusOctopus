"use client"
import { useState, useCallback, useRef, useEffect } from "react"

export interface SearchResult {
  id: string
  section: string
  preview: string
  matches: number
  type: string
  element: Element
}

export function useAdvancedSearch() {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [currentMatch, setCurrentMatch] = useState(0)
  const [totalMatches, setTotalMatches] = useState(0)
  const [isSearching, setIsSearching] = useState(false)
  const highlightedElements = useRef<Element[]>([])
  const originalContent = useRef<Map<Element, string>>(new Map())

  // Clean up highlights
  const clearHighlights = useCallback(() => {
    try {
      // Restore original content for highlighted elements
      originalContent.current.forEach((content, element) => {
        if (element && element.parentNode) {
          element.innerHTML = content
        }
      })
      originalContent.current.clear()

      // Remove search IDs
      document.querySelectorAll("[data-search-id]").forEach((element) => {
        element.removeAttribute("data-search-id")
      })

      // Clear current match highlighting
      document.querySelectorAll(".search-current-match").forEach((element) => {
        element.classList.remove("search-current-match")
      })

      highlightedElements.current = []
      setSearchResults([])
      setCurrentMatch(0)
      setTotalMatches(0)
    } catch (error) {
      console.warn("Error clearing highlights:", error)
      // Fallback: just remove highlight classes
      document.querySelectorAll(".search-highlight").forEach((element) => {
        element.classList.remove("search-highlight")
      })
      document.querySelectorAll(".search-current-match").forEach((element) => {
        element.classList.remove("search-current-match")
      })
    }
  }, [])

  // Highlight text matches
  const highlightText = useCallback((element: Element, searchTerm: string): number => {
    try {
      // Store original content before modification
      if (!originalContent.current.has(element)) {
        originalContent.current.set(element, element.innerHTML)
      }

      const text = element.textContent || ""
      const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi")

      if (!regex.test(text)) {
        return 0
      }

      // Get all text nodes
      const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
        acceptNode: (node) => {
          // Skip if parent already has highlight class
          const parent = node.parentElement
          if (parent?.classList.contains("search-highlight")) {
            return NodeFilter.FILTER_REJECT
          }
          return NodeFilter.FILTER_ACCEPT
        },
      })

      const textNodes: Text[] = []
      let node
      while ((node = walker.nextNode())) {
        textNodes.push(node as Text)
      }

      let matchCount = 0

      // Process each text node
      textNodes.forEach((textNode) => {
        const nodeText = textNode.textContent || ""
        if (regex.test(nodeText)) {
          const matches = nodeText.match(regex) || []
          matchCount += matches.length

          // Create highlighted HTML
          const highlightedHTML = nodeText.replace(
            regex,
            '<span class="search-highlight bg-yellow-200 dark:bg-yellow-800 px-1 rounded font-medium">$1</span>',
          )

          // Create a temporary container
          const tempDiv = document.createElement("div")
          tempDiv.innerHTML = highlightedHTML

          // Replace the text node with the highlighted content
          const fragment = document.createDocumentFragment()
          while (tempDiv.firstChild) {
            fragment.appendChild(tempDiv.firstChild)
          }

          if (textNode.parentNode) {
            textNode.parentNode.replaceChild(fragment, textNode)
          }
        }
      })

      return matchCount
    } catch (error) {
      console.warn("Error highlighting text:", error)
      return 0
    }
  }, [])

  // Get searchable elements
  const getSearchableElements = useCallback(() => {
    const selectors = [
      "main h1",
      "main h2",
      "main h3",
      "main h4",
      "main h5",
      "main h6",
      "main p",
      "main li",
      "main td",
      "main th",
      "main [class*='card'] *",
      "main [class*='alert'] *",
      "main [class*='badge']",
    ]

    return Array.from(document.querySelectorAll(selectors.join(", "))).filter((element) => {
      // Skip elements that are likely navigation or UI chrome
      const skipClasses = ["sidebar", "navbar", "nav", "menu", "header", "footer", "breadcrumb"]
      const className = element.className.toLowerCase()

      if (skipClasses.some((skipClass) => className.includes(skipClass))) {
        return false
      }

      // Skip if element is inside a skip class
      const hasSkipParent = element.closest(".sidebar, .navbar, .nav, .menu, header, footer, .breadcrumb")
      if (hasSkipParent) {
        return false
      }

      // Skip empty elements or those with only whitespace
      const text = element.textContent?.trim()
      if (!text || text.length < 3) {
        return false
      }

      // Skip elements that only contain other elements (no direct text)
      const hasDirectText = Array.from(element.childNodes).some(
        (node) => node.nodeType === Node.TEXT_NODE && node.textContent?.trim(),
      )

      if (!hasDirectText && element.children.length > 0) {
        return false
      }

      return true
    })
  }, [])

  // Perform search
  const highlightMatches = useCallback(
    async (searchTerm: string) => {
      if (!searchTerm.trim()) {
        clearHighlights()
        return
      }

      setIsSearching(true)

      try {
        // Small delay to show loading state
        await new Promise((resolve) => setTimeout(resolve, 100))

        clearHighlights()

        const elements = getSearchableElements()
        const results: SearchResult[] = []
        let totalMatchCount = 0

        elements.forEach((element, index) => {
          const text = element.textContent || ""
          const regex = new RegExp(searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi")

          if (regex.test(text)) {
            const matches = highlightText(element, searchTerm)
            if (matches > 0) {
              // Add search ID for navigation
              element.setAttribute("data-search-id", `search-result-${index}`)

              // Get section context
              const sectionElement = element.closest('h1, h2, h3, [class*="card-title"], [class*="alert"]')
              const section =
                sectionElement?.textContent?.trim() ||
                element.closest('[class*="card"]')?.querySelector("h1, h2, h3, h4, h5, h6")?.textContent?.trim() ||
                `${element.tagName.toLowerCase()} content`

              // Create preview text
              const preview = text.length > 150 ? text.substring(0, 150) + "..." : text

              results.push({
                id: `search-result-${index}`,
                section,
                preview,
                matches,
                type: element.tagName.toLowerCase(),
                element,
              })

              totalMatchCount += matches
              highlightedElements.current.push(element)
            }
          }
        })

        setSearchResults(results)
        setTotalMatches(totalMatchCount)
        setCurrentMatch(0)

        // Highlight first match
        if (results.length > 0) {
          setTimeout(() => updateCurrentMatch(0), 100)
        }
      } catch (error) {
        console.error("Error during search:", error)
      } finally {
        setIsSearching(false)
      }
    },
    [clearHighlights, getSearchableElements, highlightText],
  )

  // Update current match highlighting
  const updateCurrentMatch = useCallback((matchIndex: number) => {
    try {
      // Remove previous current match highlighting
      document.querySelectorAll(".search-current-match").forEach((element) => {
        element.classList.remove("search-current-match")
      })

      // Find all highlight spans
      const allHighlights = Array.from(document.querySelectorAll(".search-highlight"))

      if (allHighlights.length > 0 && matchIndex >= 0 && matchIndex < allHighlights.length) {
        const currentHighlight = allHighlights[matchIndex]
        currentHighlight.classList.add("search-current-match")

        // Scroll to current match with better positioning
        setTimeout(() => {
          currentHighlight.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest",
          })
        }, 100)
      }
    } catch (error) {
      console.warn("Error updating current match:", error)
    }
  }, [])

  // Navigate between matches
  const navigateToMatch = useCallback(
    (direction: "next" | "prev") => {
      try {
        const allHighlights = Array.from(document.querySelectorAll(".search-highlight"))

        if (allHighlights.length === 0) return

        let newIndex
        if (direction === "next") {
          newIndex = currentMatch >= allHighlights.length - 1 ? 0 : currentMatch + 1
        } else {
          newIndex = currentMatch <= 0 ? allHighlights.length - 1 : currentMatch - 1
        }

        setCurrentMatch(newIndex)
        updateCurrentMatch(newIndex)
      } catch (error) {
        console.warn("Error navigating matches:", error)
      }
    },
    [currentMatch, updateCurrentMatch],
  )

  // Clean up on unmount
  useEffect(() => {
    return () => {
      clearHighlights()
    }
  }, [clearHighlights])

  return {
    searchResults,
    currentMatch,
    totalMatches,
    isSearching,
    highlightMatches,
    clearHighlights,
    navigateToMatch,
  }
}
