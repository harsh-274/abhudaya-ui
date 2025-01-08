"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Funnel, FunnelChart, LabelList } from "recharts"

const sectionData = [
  { name: "Eligible Schemes", value: 400 },
  { name: "Document Vault", value: 300 },
  { name: "Application Status", value: 200 },
  { name: "Grievance Portal", value: 150 },
  { name: "FAQ Section", value: 100 },
]

const funnelData = [
  { name: "Visit Platform", value: 5000 },
  { name: "View Schemes", value: 4000 },
  { name: "Start Application", value: 3000 },
  { name: "Submit Documents", value: 2000 },
  { name: "Complete Application", value: 1000 },
]

export default function EngagementMetrics() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Engagement Metrics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold mb-2">Most Accessed Sections</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={sectionData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">User Journey Funnel</h4>
          <ResponsiveContainer width="100%" height={200}>
            <FunnelChart>
              <Tooltip />
              <Funnel
                dataKey="value"
                data={funnelData}
                isAnimationActive
              >
                <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
              </Funnel>
            </FunnelChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Daily Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,345</div>
              <p className="text-xs text-muted-foreground">+5.2% from yesterday</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Avg. Session Duration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12m 30s</div>
              <p className="text-xs text-muted-foreground">+2m from last week</p>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}

