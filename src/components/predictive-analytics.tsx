"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Bell, TrendingUp, TrendingDown } from 'lucide-react'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const applicationData = [
  { name: "Jan", value: 2400 },
  { name: "Feb", value: 1398 },
  { name: "Mar", value: 9800 },
  { name: "Apr", value: 3908 },
  { name: "May", value: 4800 },
  { name: "Jun", value: 3800 },
  { name: "Jul", value: 4300 },
]

const approvalRateData = [
  { name: "Jan", value: 65 },
  { name: "Feb", value: 59 },
  { name: "Mar", value: 80 },
  { name: "Apr", value: 81 },
  { name: "May", value: 56 },
  { name: "Jun", value: 55 },
  { name: "Jul", value: 40 },
]

export default function PredictiveAnalytics() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Predictive Analytics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Alert>
          <Bell className="h-4 w-4" />
          <AlertTitle>Urgent Action Required</AlertTitle>
          <AlertDescription>
            10,000 scheme applications expected to surge in Madhya Pradesh next week. Allocate additional resources to handle the influx.
          </AlertDescription>
        </Alert>
        
        <div>
          <h4 className="font-semibold mb-2">Predicted Application Submissions</h4>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={applicationData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">Projected Approval Rates</h4>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={approvalRateData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Predicted Application Surge
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+15%</div>
              <p className="text-xs text-muted-foreground">
                Increase expected in the next month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Projected Approval Rate
              </CardTitle>
              <TrendingDown className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">62%</div>
              <p className="text-xs text-muted-foreground">
                5% decrease from current month
              </p>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}

