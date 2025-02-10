"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import {
  ChevronRight,
  Home,
  Search,
  FileText,
  Folder,
  Wrench,
  MessageSquare,
  Settings,
  LogOut,
  ComputerIcon,
} from "lucide-react"

const sidebarItems = [
  { name: "Dashboard", icon: Home, href: "/dashboard" },
  { name: "Explore Schemes", icon: Search, href: "/explore" },
  { name: "My Applied Schemes", icon: FileText, href: "/applied" },
  { name: "Document Vault", icon: Folder, href: "/docvault" },
  { name: "Services", icon: Wrench, href: "/services" },
  { name: "Grievances", icon: MessageSquare, href: "/grievances" },
  { name: "AI Insights", icon: ComputerIcon, href: "/ai" },
]

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <div className={cn("relative flex flex-col border-r bg-background", isCollapsed ? "w-[80px]" : "w-[300px]")}>
      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-3 p-4">
          {sidebarItems.map((item) => (
            <Button
              key={item.name}
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn("justify-start h-14 text-lg font-semibold", isCollapsed ? "justify-center px-2" : "px-4")}
              asChild
            >
              <Link href={item.href}>
                <item.icon className={cn("h-6 w-6", isCollapsed ? "mr-0" : "mr-3")} />
                {!isCollapsed && item.name}
              </Link>
            </Button>
          ))}
        </nav>
      </ScrollArea>
      <div className="mt-auto p-4 space-y-3">
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start h-14 text-lg font-semibold",
            isCollapsed ? "justify-center px-2" : "px-4",
          )}
        >
          <Settings className={cn("h-6 w-6", isCollapsed ? "mr-0" : "mr-3")} />
          {!isCollapsed && "Settings"}
        </Button>
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start h-14 text-lg font-semibold text-red-500",
            isCollapsed ? "justify-center px-2" : "px-4",
          )}
        >
          <LogOut className={cn("h-6 w-6", isCollapsed ? "mr-0" : "mr-3")} />
          {!isCollapsed && "Logout"}
        </Button>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-4 top-6 z-10 h-8 w-8 rounded-full bg-background shadow-md"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <ChevronRight
          className={cn("h-5 w-5 transition-transform", {
            "rotate-180": isCollapsed,
          })}
        />
      </Button>
    </div>
  )
}

