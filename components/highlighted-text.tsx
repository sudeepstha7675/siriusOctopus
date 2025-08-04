"use client"

interface HighlightedTextProps {
  text: string
  highlights: string[]
  className?: string
}

export function HighlightedText({ text, highlights, className = "" }: HighlightedTextProps) {
  if (!highlights || highlights.length === 0) {
    return <span className={className}>{text}</span>
  }

  // Sort highlights by length (longest first) to avoid partial matches
  const sortedHighlights = highlights.sort((a, b) => b.length - a.length)

  let highlightedText = text

  sortedHighlights.forEach((highlight) => {
    const regex = new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi")
    highlightedText = highlightedText.replace(
      regex,
      '<mark class="bg-primary/20 text-primary px-1 rounded font-medium">$1</mark>',
    )
  })

  return <span className={className} dangerouslySetInnerHTML={{ __html: highlightedText }} />
}
