"use client"

import React, { useState } from 'react'
import { useWizard } from '../components/WizardContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const Confirmation: React.FC = () => {
  const { setCurrentStep, formData } = useWizard()
  const [confirmed, setConfirmed] = useState(false)

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log('Submitting data:', formData)
    setCurrentStep(7)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Confirmation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p>Please review your information before submitting:</p>
          {Object.entries(formData.mappings).map(([schemeField, extractedField]) => (
            <div key={schemeField}>
              <strong>{schemeField}:</strong> {formData.extractedData[extractedField]}
            </div>
          ))}
          <div className="flex items-center space-x-2">
            <Checkbox id="confirm" checked={confirmed} onCheckedChange={(checked) => setConfirmed(checked as boolean)} />
            <Label htmlFor="confirm">I confirm that all information is correct and I want to submit my application.</Label>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <Button variant="outline" onClick={() => setCurrentStep(5)}>
            Back
          </Button>
          <Button onClick={handleSubmit} disabled={!confirmed}>
            Submit Application
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default Confirmation

