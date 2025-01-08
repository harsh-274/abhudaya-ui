import React from 'react'
import { X, Bell, AlertTriangle, CheckCircle, Info } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface Notification {
  id: number
  type: 'warning' | 'success' | 'info'
  message: string
}

const notifications: Notification[] = [
  { id: 1, type: 'warning', message: "Resubmit documents for PM-KISAN by Jan 15." },
  { id: 2, type: 'info', message: "New scheme you may be eligible for: Skill India Mission." },
  { id: 3, type: 'success', message: "Congratulations! Your PMAY application has been approved." },
]

const notificationIcons = {
  'warning': <AlertTriangle className="h-5 w-5 text-yellow-500" />,
  'success': <CheckCircle className="h-5 w-5 text-green-500" />,
  'info': <Info className="h-5 w-5 text-blue-500" />,
}

interface NotificationsPanelProps {
  isOpen: boolean
  onClose: () => void
}

export default function NotificationsPanel({ isOpen, onClose }: NotificationsPanelProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-y-0 right-0 w-80 bg-white shadow-lg p-6 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold flex items-center">
          <Bell className="h-6 w-6 mr-2" />
          Notifications
        </h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-6 w-6" />
        </Button>
      </div>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-start p-3 bg-gray-100 rounded-lg">
            {notificationIcons[notification.type]}
            <p className="ml-3 text-sm">{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

