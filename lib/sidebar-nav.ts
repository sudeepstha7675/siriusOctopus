import {
  FileText,
  FileQuestion,
  type LucideIcon,
  Building,
  Settings2,
  BookOpen,
  Settings,
  Filter,
  Power,
  FolderSyncIcon as Sync,
} from "lucide-react"

export interface NavItem {
  title: string
  href: string
  icon: LucideIcon
  label?: string
  keywords?: string[]
}

export const sidebarNavItems: NavItem[] = [
  {
    title: "Overview",
    href: "/introduction",
    icon: BookOpen,
    keywords: ["introduction", "overview", "sirius octopus", "master data management", "getting started"],
  },
  {
    title: "General Setup",
    href: "/master-data-setup/general",
    icon: Settings2,
    keywords: ["general setup", "master company", "disabled", "basic configuration"],
  },
  {
    title: "Sync Configuration",
    href: "/sync-configuration",
    icon: Sync,
    keywords: ["sync configuration", "real time", "scheduler", "latency", "sync modes"],
  },
  {
    title: "Environment Setup",
    href: "/master-data-setup/environment-config",
    icon: Building,
    keywords: ["environment setup", "company code", "authorization", "domain", "connection"],
  },
  {
    title: "Template Management",
    href: "/master-data-setup/template-config",
    icon: FileText,
    keywords: ["template management", "templates", "companies tab", "tables tab", "data version"],
  },
  {
    title: "Field Management",
    href: "/master-data-setup/field-management",
    icon: Settings,
    keywords: ["field management", "fields", "validation", "priority", "manual modify", "constant value"],
  },
  {
    title: "Filter & Scenarios",
    href: "/filter-scenarios",
    icon: Filter,
    keywords: ["filters", "scenarios", "field filters", "conditions", "range filters"],
  },
  {
    title: "Sync Control",
    href: "/sync-control",
    icon: Power,
    keywords: ["sync control", "start sync", "stop sync", "status", "monitoring", "execution"],
  },
  {
    title: "Help & Support",
    href: "/support",
    icon: FileQuestion,
    keywords: ["help", "support", "faq", "contact", "assistance"],
  },
]
