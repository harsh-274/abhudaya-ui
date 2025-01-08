"use client"

import React, { useState, useEffect } from 'react'
import { useWizard } from '../components/WizardContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CheckCircle2 } from 'lucide-react'

const DataExtraction: React.FC = () => {
  const { setCurrentStep, formData, setFormData } = useWizard()
  const [progress, setProgress] = useState(0)
  const [extractedData, setExtractedData] = useState<Record<string, string>>({})

  useEffect(() => {
    // Simulating data extraction process
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer)
          // Simulated extracted data from the uploaded form
          setExtractedData({
            name: 'John Doe',
            spouseName: 'Jane Doe',
            fathersName: 'Richard Roe',
            dob: '01/01/1980',
            occupation: 'Farmer',
            monthlyIncome: '5000',
            permanentAddress: '123 Main Street, Springfield',
          })
          return 100
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 500)

    return () => clearInterval(timer)
  }, [])

  const handleInputChange = (key: string, value: string) => {
    setExtractedData((prev) => ({ ...prev, [key]: value }))
  }

  const handleNext = () => {
    setFormData((prevData: any) => ({ ...prevData, extractedData }))
    setCurrentStep(4)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Data Extraction & Validation</CardTitle>
      </CardHeader>
      <CardContent>
        {progress < 100 ? (
          <div className="space-y-4">
            <p>Extracting data from your documents...</p>
            <Progress value={progress} className="w-full" />
          </div>
        ) : (
          <div className="space-y-4">
            {Object.entries(extractedData).map(([key, value]) => (
              <div key={key} className="space-y-2">
                <Label htmlFor={key}>{
                  key
                    .replace(/([A-Z])/g, ' $1')
                    .replace(/^./, (str) => str.toUpperCase())
                }</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id={key}
                    value={value}
                    onChange={(e) => handleInputChange(key, e.target.value)}
                  />
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="mt-6 flex justify-between">
          <Button variant="outline" onClick={() => setCurrentStep(2)}>
            Back
          </Button>
          <Button onClick={handleNext} disabled={progress < 100}>
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default DataExtraction
