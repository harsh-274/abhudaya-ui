"use client"

import React, { useState } from 'react'
import { useWizard } from '../components/WizardContext'
import FileUploader from './FileUploader'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const DocumentUpload: React.FC = () => {
  const { setCurrentStep, setFormData } = useWizard()
  const [files, setFiles] = useState<File[]>([])

  const handleFileUpload = (uploadedFiles: File[]) => {
    setFiles(uploadedFiles)
  }

  const handleNext = () => {
    setFormData((prevData: any) => ({ ...prevData, uploadedFiles: files }))
    setCurrentStep(3)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Upload Documents</CardTitle>
      </CardHeader>
      <CardContent>
        <FileUploader onFileUpload={handleFileUpload} />
        <div className="mt-6 flex justify-between">
          <Button variant="outline" onClick={() => setCurrentStep(1)}>
            Back
          </Button>
          <Button onClick={handleNext} disabled={files.length === 0}>
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default DocumentUpload

