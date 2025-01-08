'use client'

import { useState } from 'react'
import { X, AlertTriangle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <Alert className="bg-yellow-100 border-yellow-400 sticky top-16 z-40">
      <AlertDescription className="flex items-center justify-between w-full text-yellow-800">
        <div className="flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2" />
          <span className="font-semibold">New ₹50,000 subsidy for rural women. Check eligibility now!</span>
        </div>
        <div className="flex items-center gap-4">
          <Button 
            variant="default"
            className="bg-yellow-500 hover:bg-yellow-600 text-white transition-colors"
          >
            Check Now
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-yellow-800 hover:bg-yellow-200"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  )
}

