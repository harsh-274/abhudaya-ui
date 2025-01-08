import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { AlertTriangle, MessageSquare, HelpCircle } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function AppealsAndGrievances() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Appeals and Grievances</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            Submit an Appeal
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <HelpCircle className="h-4 w-4 ml-2 text-gray-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Explain why you believe the decision should be reconsidered</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </h3>
          <Textarea
            placeholder="Explain why you believe this decision should be reconsidered."
            className="mb-4"
          />
          <Button className="w-full">
            <AlertTriangle className="mr-2 h-4 w-4" />
            Submit Appeal
          </Button>
          <p className="text-sm text-gray-500 mt-2">Est. Response: 5 Days</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Report a Grievance</h3>
          <Textarea
            placeholder="Describe your concern about the application process."
            className="mb-4"
          />
          <Button variant="outline" className="w-full">
            <MessageSquare className="mr-2 h-4 w-4" />
            Submit Grievance
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

