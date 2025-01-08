"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, TrendingUp, Users } from 'lucide-react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const regionData = [
  { name: "North", value: 4000 },
  { name: "South", value: 3000 },
  { name: "East", value: 2000 },
  { name: "West", value: 2780 },
  { name: "Central", value: 1890 },
]

export default function ImpactMetrics() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Impact Metrics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Subsidies Disbursed
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹10 crores</div>
              <p className="text-xs text-muted-foreground">
                +15% from last quarter
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Average Savings per User
              </CardTitle>
              <ArrowUpRight className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹6,000</div>
              <p className="text-xs text-muted-foreground">
                +₹500 from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Women Beneficiaries (Rural)
              </CardTitle>
              <Users className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+50% YoY</div>
              <p className="text-xs text-muted-foreground">
                Significant increase in rural areas
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">Region-wise Adoption Rates</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={regionData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Success Story</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <img src="/placeholder.svg" alt="Priya" className="w-16 h-16 rounded-full" />
              <div>
                <p className="font-semibold">Priya, PMAY Beneficiary</p>
                <p className="text-sm text-muted-foreground">
                  "Thanks to the PMAY scheme, I was able to build my own house. The application process was smooth, and I received timely updates throughout."
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}

