import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb } from 'lucide-react'
import { Scheme } from './types'

export default function AIInsights({ schemes }: { schemes: Scheme[] }) {
  // Simulated AI-generated insights
  const insights = [
    "To increase your chances for PMAY, upload an updated income proof.",
    "Your MGNREGA application is progressing well. Consider applying for the Skill India program to complement your employment opportunities.",
    "Based on your profile, you may be eligible for the PM-KISAN scheme. Would you like to learn more?",
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI-Powered Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {insights.map((insight, index) => (
            <li key={index} className="flex items-start">
              <Lightbulb className="mr-2 h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <p>{insight}</p>
            </li>
          ))}
        </ul>
        <Button className="w-full mt-4 hover:bg-primary-dark transition-colors duration-300">
          Get Personalized Recommendations
        </Button>
      </CardContent>
    </Card>
  )
}

