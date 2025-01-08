"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { ChevronRight, Home, Search, CheckSquare, FileText, Folder, Wrench, MessageSquare, Settings, LogOut, ComputerIcon } from 'lucide-react'

const sidebarItems = [
  { name: "Dashboard", icon: Home, href: "/dashboard" },
  { name: "Explore Schemes", icon: Search, href: "/explore" },
  
  { name: "My Applied Schemes", icon: FileText, href: "/applied" },
  { name: "Document Vault", icon: Folder, href: "/docvault" },
  { name: "Services", icon: Wrench, href: "/services" },
  { name: "Grievances", icon: MessageSquare, href: "/grievances" },
  { name: "Ai Insights", icon: ComputerIcon, href: "/ai" }
]

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "relative flex flex-col border-r bg-background",
        isCollapsed ? "w-[60px]" : "w-[240px]"
      )}
    >
      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-2 p-2">
          {sidebarItems.map((item) => (
            <Button
              key={item.name}
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn(
                "justify-start",
                isCollapsed && "justify-center px-2"
              )}
              asChild
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-5 w-5" />
                {!isCollapsed && item.name}
              </Link>
            </Button>
          ))}
        </nav>
      </ScrollArea>
      <div className="mt-auto p-2">
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start",
            isCollapsed && "justify-center px-2"
          )}
        >
          <Settings className="mr-2 h-5 w-5" />
          {!isCollapsed && "Settings"}
        </Button>
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start text-red-500",
            isCollapsed && "justify-center px-2"
          )}
        >
          <LogOut className="mr-2 h-5 w-5" />
          {!isCollapsed && "Logout"}
        </Button>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-3 top-5 z-10 h-6 w-6 rounded-full bg-background"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <ChevronRight
          className={cn("h-4 w-4 transition-transform", {
            "rotate-180": isCollapsed,
          })}
        />
      </Button>
    </div>
  )
}

