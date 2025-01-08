"use client"

import React from 'react'
import { useWizard } from '../components/WizardContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const FormPreview: React.FC = () => {
  const { setCurrentStep, formData, setFormData } = useWizard()
  const { extractedData, mappings } = formData

  const handleInputChange = (key: string, value: string) => {
    setFormData((prevData: any) => ({
      ...prevData,
      extractedData: { ...prevData.extractedData, [key]: value },
    }))
  }

  const handleNext = () => {
    setCurrentStep(6)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Form Preview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {Object.entries(mappings).map(([schemeField, extractedField]) => (
            <div key={schemeField} className="space-y-2">
              <Label htmlFor={schemeField}>{schemeField}</Label>
              <Input
                id={schemeField}
                value={extractedData[extractedField]}
                onChange={(e) => handleInputChange(extractedField, e.target.value)}
              />
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between">
          <Button variant="outline" onClick={() => setCurrentStep(4)}>
            Back
          </Button>
          <Button onClick={handleNext}>Next</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default FormPreview

