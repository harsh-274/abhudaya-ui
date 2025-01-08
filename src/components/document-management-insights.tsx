"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react'

const documentChecklist = [
  { id: "aadhaar", label: "Aadhaar Card" },
  { id: "pan", label: "PAN Card" },
  { id: "income", label: "Income Proof" },
  { id: "address", label: "Address Proof" },
  { id: "photo", label: "Passport Size Photo" },
]

export default function DocumentManagementInsights() {
  const [checkedItems, setCheckedItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setCheckedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Document Management Insights</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="flex items-center">
            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
            Verified Documents
          </span>
          <span className="font-semibold">75%</span>
        </div>
        <Progress value={75} className="w-full" />
        <div className="flex items-center justify-between">
          <span className="flex items-center">
            <AlertTriangle className="mr-2 h-4 w-4 text-yellow-500" />
            Pending Verification
          </span>
          <span className="font-semibold">20%</span>
        </div>
        <Progress value={20} className="w-full" />
        <div className="flex items-center justify-between">
          <span className="flex items-center">
            <XCircle className="mr-2 h-4 w-4 text-red-500" />
            Invalid Documents
          </span>
          <span className="font-semibold">5%</span>
        </div>
        <Progress value={5} className="w-full" />
        
        <div className="mt-6">
          <h4 className="font-semibold mb-2">Document Checklist</h4>
          <div className="space-y-2">
            {documentChecklist.map((item) => (
              <div key={item.id} className="flex items-center space-x-2">
                <Checkbox
                  id={item.id}
                  checked={checkedItems.includes(item.id)}
                  onCheckedChange={() => toggleItem(item.id)}
                />
                <label
                  htmlFor={item.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {item.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-6">
          <h4 className="font-semibold mb-2">Common Issues:</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Invalid Aadhaar format (30% of errors)</li>
            <li>Missing income proof (25% of errors)</li>
            <li>Outdated address documents (20% of errors)</li>
            <li>Blurry or unreadable scans (15% of errors)</li>
            <li>Mismatched names across documents (10% of errors)</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

