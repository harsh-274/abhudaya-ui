"use client"

import React, { useState } from 'react'
import { useWizard } from '../components/WizardContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'

const DataMapping: React.FC = () => {
  const { setCurrentStep, formData, setFormData } = useWizard()
  const [mappings, setMappings] = useState<Record<string, string>>({})

  const extractedFields = Object.keys(formData.extractedData || {})

  // Sample scheme fields derived from the uploaded image
  const schemeFields = [
    'Name',
    'Spouse Name',
    'Father\'s Name',
    'Date of Birth',
    'Occupation',
    'Monthly Family Income',
    'Permanent Address',
  ]

  const handleMapping = (schemeField: string, extractedField: string) => {
    setMappings((prev) => ({ ...prev, [schemeField]: extractedField }))
  }

  const handleNext = () => {
    setFormData((prevData: any) => ({ ...prevData, mappings }))
    setCurrentStep(5)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Data Mapping</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {schemeFields.map((schemeField) => (
            <div key={schemeField} className="space-y-2">
              <Label>{schemeField}</Label>
              <Select onValueChange={(value) => handleMapping(schemeField, value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a field" />
                </SelectTrigger>
                <SelectContent>
                  {extractedFields.map((field) => (
                    <SelectItem key={field} value={field}>
                      {field}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between">
          <Button variant="outline" onClick={() => setCurrentStep(3)}>
            Back
          </Button>
          <Button onClick={handleNext} disabled={Object.keys(mappings).length !== schemeFields.length}>
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default DataMapping
