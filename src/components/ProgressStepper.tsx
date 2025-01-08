"use client"

import React from 'react'
import { useWizard } from '../components/WizardContext'

const steps = [
  'Welcome',
  'Upload',
  'Extract',
  'Map',
  'Preview',
  'Submit',
  'Confirmation'
]

const ProgressStepper: React.FC = () => {
  const { currentStep } = useWizard()

  return (
    <div className="mb-8">
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index + 1 <= currentStep ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
              }`}
            >
              {index + 1}
            </div>
            <span className="text-xs mt-1">{step}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressStepper

