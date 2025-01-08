"use client"

import React from 'react'
import { useWizard } from '../components/WizardContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

const PostSubmission: React.FC = () => {
  const { setCurrentStep } = useWizard()

  const handleDownload = () => {
    // Here you would typically generate and download a receipt
    console.log('Downloading receipt')
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Submission Successful</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-4">
          <CheckCircle2 className="h-16 w-16 text-green-500" />
          <p className="text-center">Your application has been successfully submitted. You will receive updates via email and in-app notifications.</p>
          <Button onClick={handleDownload}>Download Receipt</Button>
          <Button variant="outline" onClick={() => setCurrentStep(1)}>Start New Application</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default PostSubmission

