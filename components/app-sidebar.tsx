"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { sidebarNavItems } from "@/lib/sidebar-nav"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r border-border/50 bg-white dark:bg-slate-900">
      <SidebarHeader className="p-6 pb-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-xl font-bold text-white">SO</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Sirius Octopus</h2>
            <p className="text-sm text-muted-foreground font-medium">Master Data Management</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-2">
        <SidebarMenu className="space-y-1">
          {sidebarNavItems.map((item) => {
            const isActive = pathname === item.href

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  className="h-11 px-4 text-foreground hover:bg-primary/5 hover:text-primary data-[active=true]:bg-primary/10 data-[active=true]:text-primary data-[active=true]:font-semibold font-medium rounded-lg transition-all duration-200"
                >
                  <Link href={item.href} className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 flex-shrink-0" />
                    <span className="truncate">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-6 pt-4 mt-auto border-t border-border/50">
        <div className="text-center space-y-2">
          <p className="text-sm font-semibold text-foreground">Part of the Dogma Group</p>
          <p className="text-xs text-muted-foreground">© 2024 SiriusApp</p>
          <div className="pt-2 space-y-1">
            <p className="text-xs text-muted-foreground">www.siriusapp.co.uk</p>
            <p className="text-xs text-muted-foreground">info@siriusapp.co.uk</p>
            <p className="text-xs text-muted-foreground">01296 328689</p>
          </div>
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
