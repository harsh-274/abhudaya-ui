import React, { useState } from 'react'
import { Bell } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

const notifications = [
  { id: 1, message: "Resubmit documents for PM-KISAN by Jan 15.", type: "warning" },
  { id: 2, message: "New scheme you may be eligible for: Skill India Mission.", type: "info" },
  { id: 3, message: "Congratulations! Your PMAY application has been approved.", type: "success" },
]

export default function NotificationsDropdown() {
  const [unreadCount, setUnreadCount] = useState(notifications.length)

  const handleNotificationClick = () => {
    setUnreadCount(0)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <Badge variant="destructive" className="absolute -top-2 -right-2 px-2 py-1 text-xs">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[300px]">
        {notifications.map((notification) => (
          <DropdownMenuItem key={notification.id} onClick={handleNotificationClick}>
            <span className={`w-2 h-2 rounded-full mr-2 ${
              notification.type === 'warning' ? 'bg-yellow-500' :
              notification.type === 'info' ? 'bg-blue-500' :
              'bg-green-500'
            }`}></span>
            {notification.message}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

