"use client"
import { Input } from "@/components/ui/input"
import { Search, X, Menu, ChevronDown, ChevronUp, MapPin } from "lucide-react"
import { useState, useMemo, useRef, useEffect } from "react"
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command"
import { useRouter, usePathname } from "next/navigation"
import { searchContent } from "@/lib/searchable-content"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useAdvancedSearch } from "@/hooks/use-advanced-search"

export function AppNavbar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchMode, setSearchMode] = useState<"navigation" | "content">("navigation")
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  const {
    searchResults: contentResults,
    currentMatch,
    totalMatches,
    highlightMatches,
    clearHighlights,
    navigateToMatch,
    isSearching,
  } = useAdvancedSearch()

  const navigationResults = useMemo(() => {
    if (!searchQuery.trim() || !isSearchOpen || searchMode !== "navigation") return []
    return searchContent(searchQuery, 8)
  }, [searchQuery, isSearchOpen, searchMode])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim()) {
      if (searchMode === "content") {
        // Debounce the search to avoid too many calls
        const timeoutId = setTimeout(() => {
          highlightMatches(query)
        }, 300)
        return () => clearTimeout(timeoutId)
      }
    } else {
      clearHighlights()
    }
  }

  const handleSelectNavigationResult = (href: string) => {
    if (!href || href === "#") return
    router.push(href)
    setSearchQuery("")
    setIsSearchOpen(false)
    clearHighlights()
  }

  const handleClearSearch = () => {
    setSearchQuery("")
    clearHighlights()
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleModeSwitch = (mode: "navigation" | "content") => {
    setSearchMode(mode)
    if (mode === "content" && searchQuery.trim()) {
      highlightMatches(searchQuery)
    } else {
      clearHighlights()
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        if (inputRef.current) {
          inputRef.current.focus()
          setIsSearchOpen(true)
        }
      }

      if (e.key === "Escape" && isSearchOpen) {
        setIsSearchOpen(false)
        clearHighlights()
        inputRef.current?.blur()
      }

      // Navigation shortcuts for content search
      if (searchMode === "content" && totalMatches > 0) {
        if (e.key === "ArrowDown" && (e.ctrlKey || e.metaKey)) {
          e.preventDefault()
          navigateToMatch("next")
        }
        if (e.key === "ArrowUp" && (e.ctrlKey || e.metaKey)) {
          e.preventDefault()
          navigateToMatch("prev")
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isSearchOpen, searchMode, totalMatches, navigateToMatch, clearHighlights])

  // Clear highlights when pathname changes
  useEffect(() => {
    clearHighlights()
    setSearchQuery("")
    setIsSearchOpen(false)
  }, [pathname, clearHighlights])

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border/50 bg-white dark:bg-slate-900 px-4">
      <SidebarTrigger className="-ml-1 hover:bg-muted rounded-md p-2 transition-colors">
        <Menu className="h-5 w-5" />
      </SidebarTrigger>
      <Separator orientation="vertical" className="mr-2 h-4" />

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-muted-foreground font-medium">Setup Guide</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="ml-auto flex items-center gap-2">
        <div ref={searchRef} className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            ref={inputRef}
            type="search"
            placeholder={searchMode === "navigation" ? "Search pages... (Ctrl+K)" : "Search content... (Ctrl+K)"}
            className="pl-10 pr-10 w-[380px] h-10 rounded-lg bg-muted/30 border border-border placeholder:text-muted-foreground text-foreground font-medium focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-all duration-200"
            value={searchQuery}
            onChange={(e) => {
              handleSearch(e.target.value)
              setIsSearchOpen(true)
            }}
            onFocus={() => setIsSearchOpen(true)}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setIsSearchOpen(false)
                clearHighlights()
                inputRef.current?.blur()
              }
            }}
          />
          {searchQuery && (
            <button
              onClick={handleClearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
            >
              <X className="h-3 w-3 text-muted-foreground" />
            </button>
          )}

          {isSearchOpen && (
            <div className="absolute z-50 w-full mt-2 bg-white dark:bg-slate-900 rounded-lg border border-border shadow-xl overflow-hidden">
              {/* Search Mode Toggle */}
              <div className="flex border-b border-border bg-muted/30">
                <button
                  onClick={() => handleModeSwitch("navigation")}
                  className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
                    searchMode === "navigation"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  Pages
                </button>
                <button
                  onClick={() => handleModeSwitch("content")}
                  className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
                    searchMode === "content"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  Content
                  {totalMatches > 0 && (
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {totalMatches}
                    </Badge>
                  )}
                </button>
              </div>

              <Command className="rounded-lg border-0 shadow-md">
                <CommandList className="max-h-[60vh] overflow-auto">
                  {searchMode === "navigation" ? (
                    // Navigation Search Results
                    <>
                      {!searchQuery ? (
                        <div className="p-4 text-center text-muted-foreground text-sm">
                          Start typing to search pages and sections...
                        </div>
                      ) : navigationResults.length === 0 ? (
                        <CommandEmpty>No pages found for "{searchQuery}"</CommandEmpty>
                      ) : (
                        <CommandGroup heading={`Pages & Sections (${navigationResults.length})`}>
                          {navigationResults.map((item) => (
                            <CommandItem
                              key={item.id}
                              onSelect={() => handleSelectNavigationResult(item.href)}
                              className="cursor-pointer py-3 hover:bg-primary/5"
                              value={`${item.title}-${item.id}`}
                            >
                              <div className="flex flex-col gap-1 w-full">
                                <div className="flex items-center justify-between">
                                  <span className="font-medium text-sm">{item.title}</span>
                                  <span className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                                    {item.category}
                                  </span>
                                </div>
                                {item.description && (
                                  <span className="text-xs text-muted-foreground line-clamp-2">{item.description}</span>
                                )}
                                <span className="text-xs text-primary truncate">{item.href}</span>
                              </div>
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      )}
                    </>
                  ) : (
                    // Content Search Results
                    <>
                      {!searchQuery ? (
                        <div className="p-4 text-center text-muted-foreground text-sm">
                          Start typing to search current page content...
                        </div>
                      ) : isSearching ? (
                        <div className="p-4 text-center text-muted-foreground text-sm">Searching content...</div>
                      ) : totalMatches === 0 ? (
                        <div className="p-4 text-center text-muted-foreground text-sm">
                          No content matches found for "{searchQuery}"
                        </div>
                      ) : (
                        <div className="p-4 space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{totalMatches} matches found</span>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-muted-foreground">
                                {currentMatch + 1} of {totalMatches}
                              </span>
                              <div className="flex gap-1">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => navigateToMatch("prev")}
                                  disabled={totalMatches === 0}
                                  className="h-6 w-6 p-0"
                                >
                                  <ChevronUp className="h-3 w-3" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => navigateToMatch("next")}
                                  disabled={totalMatches === 0}
                                  className="h-6 w-6 p-0"
                                >
                                  <ChevronDown className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </div>

                          {contentResults.map((result, index) => (
                            <div
                              key={index}
                              className="p-3 rounded-lg border border-border hover:bg-muted/30 cursor-pointer transition-colors"
                              onClick={() => {
                                const element = document.querySelector(`[data-search-id="${result.id}"]`)
                                if (element) {
                                  element.scrollIntoView({ behavior: "smooth", block: "center" })
                                  setIsSearchOpen(false)
                                }
                              }}
                            >
                              <div className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-medium text-foreground mb-1">{result.section}</div>
                                  <div className="text-xs text-muted-foreground line-clamp-2">{result.preview}</div>
                                  <div className="flex items-center gap-2 mt-2">
                                    <Badge variant="outline" className="text-xs">
                                      {result.matches} match{result.matches !== 1 ? "es" : ""}
                                    </Badge>
                                    <span className="text-xs text-muted-foreground">{result.type}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}

                          <div className="pt-2 border-t border-border text-xs text-muted-foreground">
                            <div className="flex items-center justify-between">
                              <span>Use Ctrl+↑/↓ to navigate matches</span>
                              <span>ESC to close</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </CommandList>
              </Command>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
