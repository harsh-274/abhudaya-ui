import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileCheck, ShieldCheck } from 'lucide-react'

export default function ImpactMetrics() {
  const [metrics, setMetrics] = useState({
    documentsProcessed: 0,
    rejectionsPreventedPercentage: 0,
  })

  useEffect(() => {
    // Simulating real-time updates
    const interval = setInterval(() => {
      setMetrics(prevMetrics => ({
        documentsProcessed: prevMetrics.documentsProcessed + Math.floor(Math.random() * 5),
        rejectionsPreventedPercentage: Math.min(100, prevMetrics.rejectionsPreventedPercentage + Math.random() * 2),
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="bg-blue-50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-blue-800">
            Documents Processed
          </CardTitle>
          <FileCheck className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-900">{metrics.documentsProcessed}</div>
          <p className="text-xs text-blue-700">
            +{Math.floor(Math.random() * 10)} since last hour
          </p>
        </CardContent>
      </Card>
      <Card className="bg-green-50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-green-800">
            Rejections Prevented
          </CardTitle>
          <ShieldCheck className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-900">{metrics.rejectionsPreventedPercentage.toFixed(1)}%</div>
          <p className="text-xs text-green-700">
            +{(Math.random() * 2).toFixed(1)}% since last week
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

