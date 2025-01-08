"use client"

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { FileText, Users, Lightbulb, ScanLine, Lock, Folder } from 'lucide-react'
import CentralizedDocuments from './CentralizedDocuments'
import AIScanner from './AIScanner'
import FamilyProfiles from './FamilyProfiles'
import DocumentSuggestions from './DocumentSuggestions'
import ImpactMetrics from './ImpactMetrics'

export default function DocumentVault() {
  const [uploadedDocuments, setUploadedDocuments] = useState(4)
  const totalRequiredDocuments = 6

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-2xl">Document Vault</CardTitle>
            <CardDescription>Securely manage and store your documents for all scheme applications</CardDescription>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex items-center space-x-2 bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  <Lock className="w-4 h-4" />
                  <span className="text-sm font-medium">Secured by Blockchain</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Your documents are securely hashed and stored using blockchain technology</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="mt-6 space-y-2">
          <div className="flex items-center space-x-2">
            <Folder className="w-5 h-5 text-blue-500" />
            <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${(uploadedDocuments / totalRequiredDocuments) * 100}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium">{Math.round((uploadedDocuments / totalRequiredDocuments) * 100)}% Complete</span>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <p className="text-sm text-muted-foreground">
                  {uploadedDocuments} of {totalRequiredDocuments} documents uploaded
                </p>
              </TooltipTrigger>
              <TooltipContent>
                <p>Upload {totalRequiredDocuments - uploadedDocuments} more documents to complete your profile</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="documents" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4 rounded-full p-1 bg-muted">
            <TabsTrigger value="documents" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black">
              <FileText className="w-4 h-4 mr-2" />
              Documents
            </TabsTrigger>
            <TabsTrigger value="scan" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black">
              <ScanLine className="w-4 h-4 mr-2" />
              AI Scan
            </TabsTrigger>
            <TabsTrigger value="family" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black">
              <Users className="w-4 h-4 mr-2" />
              Family
            </TabsTrigger>
            <TabsTrigger value="suggestions" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black">
              <Lightbulb className="w-4 h-4 mr-2" />
              Suggestions
            </TabsTrigger>
          </TabsList>
          <TabsContent value="documents">
            <CentralizedDocuments />
          </TabsContent>
          <TabsContent value="scan">
            <AIScanner />
          </TabsContent>
          <TabsContent value="family">
            <FamilyProfiles />
          </TabsContent>
          <TabsContent value="suggestions">
            <DocumentSuggestions />
          </TabsContent>
        </Tabs>
        <div className="mt-8">
          <ImpactMetrics />
        </div>
      </CardContent>
    </Card>
  )
}

