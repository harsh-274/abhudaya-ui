"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'

type WizardContextType = {
  currentStep: number
  setCurrentStep: (step: number) => void
  formData: any
  setFormData: (data: any) => void
}

const WizardContext = createContext<WizardContextType | undefined>(undefined)

export const WizardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({})

  return (
    <WizardContext.Provider value={{ currentStep, setCurrentStep, formData, setFormData }}>
      {children}
    </WizardContext.Provider>
  )
}

export const useWizard = () => {
  const context = useContext(WizardContext)
  if (context === undefined) {
    throw new Error('useWizard must be used within a WizardProvider')
  }
  return context
}

