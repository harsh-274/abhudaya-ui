"use client"

import React from 'react'
import { useWizard } from '../components/WizardContext'
import ProgressStepper from './ProgressStepper'
import Welcome from '../components/Welcome'
import DocumentUpload from '../components/DocumentUpload'
import DataExtraction from '../components/DataExtraction'
import DataMapping from '../components/DataMapping'
import FormPreview from '../components/FormPreview'
import Confirmation from '../components/Confirmation'
import PostSubmission from '../components/PostSubmission'

const Wizard: React.FC = () => {
  const { currentStep } = useWizard()

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Welcome />
      case 2:
        return <DocumentUpload />
      case 3:
        return <DataExtraction />
        case 4:
        return <DataMapping /> 
      case 6:
        return <FormPreview />
      case 6:
        return <Confirmation />
      case 7:
        return <PostSubmission />
      default:
        return <Welcome />
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProgressStepper />
      {renderStep()}
    </div>
  )
}

export default Wizard

