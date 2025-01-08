import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, CheckSquare, CreditCard } from 'lucide-react'

const activities = [
  {
    icon: FileText,
    title: "Document Uploaded",
    description: "Aadhaar Card uploaded successfully",
    date: "1 week ago",
  },
  {
    icon: CheckSquare,
    title: "Eligibility Check Completed",
    description: "You're eligible for 3 new schemes",
    date: "2 weeks ago",
  },
  {
    icon: CreditCard,
    title: "Benefit Received",
    description: "₹2000 credited to your account",
    date: "1 month ago",
  },
]

export function RecentActivities() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="rounded-full bg-primary/10 p-2">
                <activity.icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">{activity.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
                <p className="text-xs text-muted-foreground">{activity.date}</p>
              </div>
            </div>
          ))}
        </div>
        <Button className="mt-4 w-full" variant="outline">
          View More
        </Button>
      </CardContent>
    </Card>
  )
}

