import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Bell, MessageSquare, Mail } from 'lucide-react'

const notifications = [
  { id: 1, message: "Resubmit documents for PM-KISAN by Jan 15.", type: "warning" },
  { id: 2, message: "New scheme you may be eligible for: Skill India Mission.", type: "info" },
  { id: 3, message: "Congratulations! Your PMAY application has been approved.", type: "success" },
]

export default function NotificationsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4 mb-6">
          {notifications.map((notification) => (
            <li key={notification.id} className={`p-3 rounded-md ${
              notification.type === 'warning' ? 'bg-yellow-100 text-yellow-800' :
              notification.type === 'info' ? 'bg-blue-100 text-blue-800' :
              'bg-green-100 text-green-800'
            }`}>
              {notification.message}
            </li>
          ))}
        </ul>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5" />
              <Label htmlFor="whatsapp">WhatsApp Notifications</Label>
            </div>
            <Switch id="whatsapp" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bell className="h-5 w-5" />
              <Label htmlFor="sms">SMS Notifications</Label>
            </div>
            <Switch id="sms" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <Label htmlFor="email">Email Notifications</Label>
            </div>
            <Switch id="email" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

