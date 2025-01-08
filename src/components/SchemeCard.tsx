import React, { useState } from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Scheme } from './types'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Clock, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

const statusColors = {
  'submitted': 'bg-yellow-500',
  'in-progress': 'bg-blue-500',
  'approved': 'bg-green-500',
  'rejected': 'bg-red-500',
}

const statusIcons = {
  'submitted': <Clock className="h-4 w-4 text-yellow-500" />,
  'in-progress': <Clock className="h-4 w-4 text-blue-500" />,
  'approved': <CheckCircle className="h-4 w-4 text-green-500" />,
  'rejected': <XCircle className="h-4 w-4 text-red-500" />,
}

export default function SchemeCard({ scheme }: { scheme: Scheme }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold flex items-center">
            <span className="mr-2">{scheme.icon}</span>
            {scheme.name}
          </h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium text-white flex items-center ${statusColors[scheme.status]}`}>
            {statusIcons[scheme.status]}
            <span className="ml-1">{scheme.status}</span>
          </span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-gray-600 flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            Deadline: {scheme.deadline}
          </p>
          {scheme.status === 'rejected' && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="text-red-500 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    Action Required
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Resubmission needed</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <Progress value={scheme.progress} className="mb-2" />
                <p className="text-sm text-gray-600">{scheme.progress}% Complete</p>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{scheme.timeline.filter(item => item.status === 'completed').length} of {scheme.timeline.length} steps completed</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardContent>
      <CardFooter className="bg-gray-50 p-4 flex flex-col">
        <div className="flex justify-between w-full">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? 'Hide Details' : 'View Details'}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>See full timeline and history</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {scheme.status === 'rejected' && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="destructive">Resubmit</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Reapply with corrected information</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          {scheme.status === 'in-progress' && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button>Submit Documents</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Upload pending documents</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        {isExpanded && (
          <div className="mt-4 text-sm">
            <h4 className="font-semibold mb-2">Next Steps:</h4>
            <ul className="list-disc list-inside">
              {scheme.status === 'rejected' && (
                <li>Review rejection reasons and resubmit application</li>
              )}
              {scheme.status === 'in-progress' && (
                <li>Complete the {scheme.timeline.find(item => item.status === 'in-progress')?.stage} stage</li>
              )}
              {scheme.status === 'submitted' && (
                <li>Wait for document verification</li>
              )}
            </ul>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
