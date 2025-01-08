"use client"

import { Bell } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NotificationsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
            3
          </span>
          <span className="sr-only">View notifications</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex flex-col items-start gap-1">
          <p className="font-medium">New Scheme Added</p>
          <p className="text-sm text-muted-foreground">PM Kisan Samman Nidhi registration is now open</p>
          <p className="text-xs text-muted-foreground">2 hours ago</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex flex-col items-start gap-1">
          <p className="font-medium">Document Verification Successful</p>
          <p className="text-sm text-muted-foreground">Your Aadhaar card has been verified</p>
          <p className="text-xs text-muted-foreground">1 day ago</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex flex-col items-start gap-1">
          <p className="font-medium">Benefit Transfer Completed</p>
          <p className="text-sm text-muted-foreground">₹2000 has been credited to your account</p>
          <p className="text-xs text-muted-foreground">2 days ago</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

