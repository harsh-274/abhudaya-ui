import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle, Camera, Upload, X } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"

export default function AIScanner() {
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'scanned'>('idle')
  const [scannedData, setScannedData] = useState<Record<string, { value: string; isValid: boolean }>>({})
  const [feedback, setFeedback] = useState<string[]>([])
  const { toast } = useToast()

  const handleScan = () => {
    setScanState('scanning')
    setTimeout(() => {
      setScanState('scanned')
      setScannedData({
        name: { value: 'John Doe', isValid: true },
        idNumber: { value: '1234567890', isValid: true },
        dateOfIssue: { value: '2022-01-01', isValid: false },
      })
      setFeedback([
        'Document scanned successfully',
        'Name and ID number extracted and validated',
        'Please verify the date of issue',
      ])
    }, 2000)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    // Handle file drop logic here
    toast({
      title: "File Received",
      description: "Your document has been received and is being processed.",
    })
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardContent className="p-6">
          <div 
            className="aspect-video bg-muted flex flex-col items-center justify-center rounded-lg mb-4 border-2 border-dashed border-gray-300 cursor-pointer hover:border-gray-400 transition-colors"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            {scanState === 'idle' && (
              <>
                <Upload className="w-12 h-12 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground text-center">
                  Drag and drop your document here<br />or click to upload
                </p>
              </>
            )}
            {scanState === 'scanning' && <div className="animate-pulse text-lg">Scanning...</div>}
            {scanState === 'scanned' && <CheckCircle className="w-12 h-12 text-green-500" />}
          </div>
          <div className="space-y-2">
            <Button onClick={handleScan} className="w-full">
              <Camera className="w-4 h-4 mr-2" />
              {scanState === 'idle' ? 'Scan Document' : 'Rescan'}
            </Button>
            <Button variant="outline" className="w-full">
              <Upload className="w-4 h-4 mr-2" />
              Upload Image
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Extracted Information</h3>
          <div className="space-y-4">
            {Object.entries(scannedData).map(([key, { value, isValid }]) => (
              <div key={key} className="space-y-2">
                <Label htmlFor={key} className="flex items-center space-x-2">
                  <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                  {isValid ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <X className="w-4 h-4 text-red-500" />
                  )}
                </Label>
                <Input 
                  id={key} 
                  value={value} 
                  readOnly 
                  className={isValid ? "bg-green-50" : "bg-red-50"}
                />
              </div>
            ))}
            {feedback.length > 0 && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <AlertCircle className="w-5 h-5 text-blue-500 mr-2" />
                  AI Feedback:
                </h4>
                <ul className="space-y-2">
                  {feedback.map((item, index) => (
                    <li key={index} className="text-sm flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

