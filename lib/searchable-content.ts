import { sidebarNavItems } from "./sidebar-nav"

export interface SearchableItem {
  id: string
  title: string
  description?: string
  href: string
  category: string
  keywords: string[]
  content?: string
}

// Generate searchable content from navigation items
function generateSearchableContent(): SearchableItem[] {
  const items: SearchableItem[] = []

  const processNavItem = (item: any, category = "General") => {
    items.push({
      id: `nav-${item.href}`,
      title: item.title,
      href: item.href,
      category,
      keywords: item.keywords || [],
      description: `Navigate to ${item.title} section`,
    })

    if (item.items) {
      item.items.forEach((subItem: any) => {
        processNavItem(subItem, item.title)
      })
    }
  }

  sidebarNavItems.forEach((item) => {
    processNavItem(item)
  })

  // Add specific octopus setup content
  items.push(
    {
      id: "octopus-master-company",
      title: "Master Company Setup",
      description: "Configure master company settings for data synchronization",
      href: "/master-data-setup/general",
      category: "Master Data",
      keywords: ["master company", "primary entity", "data source", "central management", "octopus setup"],
      content: "Set up the master company as the primary data source for synchronization across all entities.",
    },
    {
      id: "octopus-real-time-sync",
      title: "Real Time Synchronization",
      description: "Configure real-time data synchronization between entities",
      href: "/master-data-setup/sync-mode",
      category: "Synchronization",
      keywords: ["real time", "immediate sync", "live data", "instant updates", "octopus sync"],
      content: "Enable real-time synchronization for immediate data updates across all connected entities.",
    },
    {
      id: "octopus-scheduler-setup",
      title: "Scheduler Configuration",
      description: "Set up automated data synchronization schedules",
      href: "/scheduler-config/schedule-setup",
      category: "Scheduler",
      keywords: ["scheduler", "automated sync", "batch processing", "timed sync", "octopus scheduler"],
      content: "Configure automated synchronization schedules for regular data updates between entities.",
    },
    {
      id: "octopus-connection-setup",
      title: "Entity Connection Setup",
      description: "Configure connections between master and subsidiary entities",
      href: "/master-data-setup/connection-setup",
      category: "Connections",
      keywords: ["entity connections", "network setup", "data flow", "connection configuration", "octopus network"],
      content: "Set up and configure connections between the master company and subsidiary entities for data flow.",
    },
    {
      id: "octopus-environment-config",
      title: "Environment Configuration",
      description: "Configure entity connections, authorization methods, and environment settings",
      href: "/master-data-setup/environment-config",
      category: "Environment",
      keywords: ["environment configuration", "company code", "authorization method", "domain name", "entity setup"],
      content:
        "Set up environment configuration including company codes, authorization methods, and domain settings for entity connections.",
    },
    {
      id: "octopus-template-config",
      title: "Template Configuration",
      description: "Configure synchronization templates with table and company selections",
      href: "/master-data-setup/template-config",
      category: "Templates",
      keywords: [
        "template configuration",
        "sync templates",
        "table selection",
        "companies tab",
        "data version",
        "enable template",
      ],
      content:
        "Create and configure synchronization templates that define which tables and companies participate in data synchronization.",
    },
    {
      id: "octopus-field-management",
      title: "Field Management",
      description: "Configure field-level synchronization, validation, filtering, and scenarios",
      href: "/master-data-setup/field-management",
      category: "Field Control",
      keywords: [
        "field management",
        "field validation",
        "constant values",
        "filters",
        "scenarios",
        "priority",
        "manual modify",
      ],
      content:
        "Manage field-level synchronization settings including validation, filtering, constant values, and scenario-based conditions.",
    },
    {
      id: "octopus-authorization-methods",
      title: "Authorization Methods",
      description: "Configure None or Basic & AAD authorization for entity connections",
      href: "/master-data-setup/environment-config",
      category: "Security",
      keywords: ["authorization", "none", "basic", "aad", "multi-tenant", "single tenant", "security"],
      content:
        "Choose between None (single tenant) or Basic & AAD (multi-tenant) authorization methods for secure entity connections.",
    },
    {
      id: "octopus-filter-setup",
      title: "Filter Configuration",
      description: "Set up field-level filters for selective data synchronization",
      href: "/master-data-setup/field-management",
      category: "Filtering",
      keywords: ["filters", "field filters", "range filters", "10000..20000", "selective sync", "data filtering"],
      content:
        "Configure field-level filters to synchronize only specific data ranges, such as '10000..20000' for number fields.",
    },
    {
      id: "octopus-scenario-conditions",
      title: "Scenario-based Conditions",
      description: "Create conditional synchronization rules based on field values and companies",
      href: "/master-data-setup/field-management",
      category: "Scenarios",
      keywords: [
        "scenarios",
        "conditions",
        "field conditions",
        "company conditions",
        "SC-B",
        "global dimension",
        "business unit",
      ],
      content:
        "Set up scenario-based synchronization conditions that apply different rules based on field values and target companies.",
    },
  )

  return items
}

const searchableContent = generateSearchableContent()

export function searchContent(query: string, limit = 10): SearchableItem[] {
  if (!query.trim()) return []

  const searchTerms = query
    .toLowerCase()
    .split(" ")
    .filter((term) => term.length > 0)

  const results = searchableContent
    .map((item) => {
      let score = 0
      const searchableText = [item.title, item.description || "", item.content || "", ...item.keywords]
        .join(" ")
        .toLowerCase()

      // Calculate relevance score
      searchTerms.forEach((term) => {
        if (item.title.toLowerCase().includes(term)) score += 10
        if (item.keywords.some((keyword) => keyword.toLowerCase().includes(term))) score += 5
        if (item.description?.toLowerCase().includes(term)) score += 3
        if (item.content?.toLowerCase().includes(term)) score += 2
        if (searchableText.includes(term)) score += 1
      })

      return { ...item, score }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)

  return results
}

export function shouldRedirectToFAQ(searchResult: SearchableItem): boolean {
  return searchResult.href === "/faqs" && searchResult.id.startsWith("faq-")
}

export function getFAQDirectUrl(searchResult: SearchableItem): string {
  if (searchResult.id.startsWith("faq-")) {
    const faqId = searchResult.id.replace("faq-", "")
    return `/faqs#${faqId}?expand=${faqId}`
  }
  return searchResult.href
}
