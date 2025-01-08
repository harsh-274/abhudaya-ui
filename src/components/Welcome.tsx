"use client"

import React from 'react'
import { useWizard } from '../components/WizardContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Lock } from 'lucide-react'

const Welcome: React.FC = () => {
  const { setCurrentStep } = useWizard()

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Welcome to AI Automation</CardTitle>
        <CardDescription>
          Simplify your application process with our intelligent automation system.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Our AI-powered system will guide you through the process of applying for various schemes,
          making it easier and faster than ever before.
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          <div className="flex items-center">
            <Shield className="h-6 w-6 text-green-500 mr-2" />
            <span className="text-sm">Secure</span>
          </div>
          <div className="flex items-center">
            <Lock className="h-6 w-6 text-blue-500 mr-2" />
            <span className="text-sm">Encrypted</span>
          </div>
        </div>
        <Button onClick={() => setCurrentStep(2)} className="w-full">
          Get Started
        </Button>
      </CardContent>
    </Card>
  )
}

export default Welcome

