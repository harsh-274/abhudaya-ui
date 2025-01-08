import React, { useState } from 'react'
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scheme, TimelineItem } from './types'
import { CheckCircle, Clock, XCircle } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const statusIcons = {
  'completed': <CheckCircle className="h-5 w-5 text-green-500" />,
  'in-progress': <Clock className="h-5 w-5 text-yellow-500" />,
  'not-started': <Clock className="h-5 w-5 text-gray-300" />,
  'rejected': <XCircle className="h-5 w-5 text-red-500" />,
}

function TimelineItemComponent({ item }: { item: TimelineItem }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-start mb-4 cursor-pointer">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center">
              {statusIcons[item.status]}
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold">{item.stage}</h4>
              <p className="text-sm text-gray-600">{item.date}</p>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{item.stage} - {item.status}</p>
          <p>Date: {item.date}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default function SchemeProgressTracker({ schemes }: { schemes: Scheme[] }) {
  const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null)

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Scheme Progress Tracker</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {schemes.map((scheme) => (
          <Card 
            key={scheme.id} 
            className={`cursor-pointer ${selectedScheme?.id === scheme.id ? 'ring ring-blue-500' : ''}`}
            onClick={() => setSelectedScheme(scheme)}
          >
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span className="flex items-center">
                  <span className="mr-2">{scheme.icon}</span>
                  {scheme.name}
                </span>
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>

      {selectedScheme && (
        <div className="mt-8 p-6 border rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">
            {selectedScheme.icon} {selectedScheme.name}
          </h3>
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>
            {selectedScheme.timeline.map((item, index) => (
              <TimelineItemComponent key={index} item={item} />
            ))}
          </div>
          {selectedScheme.status === 'in-progress' && (
            <Button className="w-full mt-4">Take Next Action</Button>
          )}
        </div>
      )}
    </div>
  )
}
