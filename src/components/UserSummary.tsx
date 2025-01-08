import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Scheme } from './types'
import { CheckCircle, AlertTriangle, FileText } from 'lucide-react'

interface UserSummaryProps {
  schemes: Scheme[]
}

export default function UserSummary({ schemes }: UserSummaryProps) {
  const totalSchemes = schemes.length
  const completedSchemes = schemes.filter(scheme => scheme.status === 'approved').length
  const pendingRejectedSchemes = totalSchemes - completedSchemes
  const completionPercentage = (completedSchemes / totalSchemes) * 100

  return (
    <Card className="w-full max-w-md bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <CardContent className="p-6">
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Welcome, John Doe</h2>
            <p className="text-gray-200">Here's your scheme application summary:</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <div className="flex items-center mb-2">
              <FileText className="w-5 h-5 mr-2" />
              <span>Total Applied Schemes: {totalSchemes}</span>
            </div>
            <div className="flex items-center mb-2">
              <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
              <span>Completed Schemes: {completedSchemes}</span>
            </div>
            <div className="flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-yellow-300" />
              <span>Pending/Rejected Schemes: {pendingRejectedSchemes}</span>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p className="mb-2">Overall Progress</p>
          <div className="flex items-center">
            <Progress value={completionPercentage} className="flex-grow mr-4" />
            <span className="text-lg font-semibold">{completionPercentage.toFixed(0)}%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

