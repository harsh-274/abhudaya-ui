import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Upload, AlertTriangle, Clock, Lightbulb } from 'lucide-react'

interface DocumentSuggestion {
  id: string
  name: string
  description: string
  type: 'missing' | 'expiring' | 'recommended'
}

export default function DocumentSuggestions() {
  const [suggestions, setSuggestions] = useState<DocumentSuggestion[]>([
    { id: '1', name: 'Income Certificate', description: 'Required for income-based schemes like PMAY', type: 'missing' },
    { id: '2', name: 'Aadhaar Card', description: 'Your Aadhaar card is expiring in 30 days', type: 'expiring' },
    { id: '3', name: 'Disability Certificate', description: 'May increase eligibility for certain schemes', type: 'recommended' },
  ])

  const getIcon = (type: DocumentSuggestion['type']) => {
    switch (type) {
      case 'missing':
        return <AlertTriangle className="w-5 h-5 text-red-500" />
      case 'expiring':
        return <Clock className="w-5 h-5 text-yellow-500" />
      case 'recommended':
        return <Lightbulb className="w-5 h-5 text-blue-500" />
    }
  }

  return (
    <div className="space-y-4">
      {suggestions.map((suggestion) => (
        <Card key={suggestion.id}>
          <CardHeader className="flex flex-row items-center space-x-4 pb-2">
            {getIcon(suggestion.type)}
            <CardTitle className="text-lg">{suggestion.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">{suggestion.description}</p>
            <div className="flex space-x-2">
              <Button>
                <Upload className="w-4 h-4 mr-2" />
                Upload Now
              </Button>
              <Button variant="outline">View Details</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

