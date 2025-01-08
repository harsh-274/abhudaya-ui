import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { FileText, Upload, AlertTriangle, ChevronDown, ChevronUp, Eye, RefreshCw, Trash2, CheckCircle } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface Document {
  id: string
  name: string
  type: string
  uploadDate: string
  expirationDate: string
  status: 'valid' | 'expiring' | 'invalid'
}

interface DocumentCategory {
  name: string
  documents: Document[]
}

export default function CentralizedDocuments() {
  const [categories, setCategories] = useState<DocumentCategory[]>([
    {
      name: 'Age Proof',
      documents: [
        { id: '1', name: 'Aadhaar Card', type: 'Age Proof', uploadDate: '2023-01-15', expirationDate: '2033-01-15', status: 'valid' },
        { id: '2', name: 'Birth Certificate', type: 'Age Proof', uploadDate: '2023-02-20', expirationDate: 'N/A', status: 'valid' },
      ]
    },
    {
      name: 'Address Proof',
      documents: [
        { id: '3', name: 'Ration Card', type: 'Address Proof', uploadDate: '2023-03-10', expirationDate: '2024-03-10', status: 'expiring' },
      ]
    },
    {
      name: 'Income Proof',
      documents: [
        { id: '4', name: 'Salary Slip', type: 'Income Proof', uploadDate: '2023-04-05', expirationDate: 'N/A', status: 'valid' },
      ]
    },
    {
      name: 'Education Proof',
      documents: []
    }
  ])

  const [openCategories, setOpenCategories] = useState<string[]>(['Age Proof'])

  const toggleCategory = (categoryName: string) => {
    setOpenCategories(prev => 
      prev.includes(categoryName) 
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    )
  }

  return (
    <div className="space-y-4">
      {categories.map((category) => (
        <Collapsible 
          key={category.name} 
          open={openCategories.includes(category.name)}
          onOpenChange={() => toggleCategory(category.name)}
        >
          <Card>
            <CardHeader className="py-3">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <CardTitle className="text-lg flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  {category.name}
                </CardTitle>
                {openCategories.includes(category.name) ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </CollapsibleTrigger>
            </CardHeader>
            <CollapsibleContent>
              <CardContent>
                {category.documents.length > 0 ? (
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {category.documents.map((doc) => (
                      <Card key={doc.id} className="flex flex-col">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base flex items-center justify-between">
                            {doc.name}
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  {doc.status === 'valid' && <CheckCircle className="w-5 h-5 text-green-500" />}
                                  {doc.status === 'expiring' && <AlertTriangle className="w-5 h-5 text-yellow-500" />}
                                  {doc.status === 'invalid' && <AlertTriangle className="w-5 h-5 text-red-500" />}
                                </TooltipTrigger>
                                <TooltipContent>
                                  {doc.status === 'valid' && 'Document is valid'}
                                  {doc.status === 'expiring' && 'Document is expiring soon'}
                                  {doc.status === 'invalid' && 'Document is invalid'}
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-sm text-muted-foreground">Uploaded: {doc.uploadDate}</p>
                          <p className="text-sm text-muted-foreground">Expires: {doc.expirationDate}</p>
                        </CardContent>
                        <CardContent className="pt-0">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-1" />
                              Preview
                            </Button>
                            <Button variant="outline" size="sm">
                              <RefreshCw className="w-4 h-4 mr-1" />
                              Replace
                            </Button>
                            <Button variant="outline" size="sm">
                              <Trash2 className="w-4 h-4 mr-1" />
                              Delete
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No documents uploaded for this category.</p>
                )}
                <Button className="mt-4">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload {category.name}
                </Button>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>
      ))}
    </div>
  )
}

