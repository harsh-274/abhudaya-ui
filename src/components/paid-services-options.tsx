'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarIcon, VideoIcon, FileTextIcon, TruckIcon } from 'lucide-react'
import { Reviews } from './reviews'

const availableSlots = [
  { day: "Monday", time: "10:00 AM" },
  { day: "Tuesday", time: "2:00 PM" },
  { day: "Wednesday", time: "11:00 AM" },
  { day: "Thursday", time: "3:00 PM" },
  { day: "Friday", time: "9:00 AM" }
]

const agents = [
  { id: 1, name: "Alice Johnson", specialty: "Document Processing", avatar: "/placeholder.svg?height=80&width=80" },
  { id: 2, name: "Bob Smith", specialty: "Application Review", avatar: "/placeholder.svg?height=80&width=80" },
  { id: 3, name: "Carol Williams", specialty: "Legal Consultation", avatar: "/placeholder.svg?height=80&width=80" },
]

export function PaidServicesOptions() {
  const [selectedSlot, setSelectedSlot] = useState("")
  const [selectedAgent, setSelectedAgent] = useState<number | null>(null)

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-semibold mb-8 text-primary text-center">Paid Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Online Guidance",
            description: "Expert assistance via video call",
            icon: VideoIcon,
            action: "Book a Session",
            content: "Get personalized guidance from our experts through a scheduled video call.",
            dialogTitle: "Schedule Your Online Guidance Session",
            dialogDescription: "Choose a convenient time for your expert consultation.",
            onConfirm: () => console.log(`Booked online guidance: ${selectedSlot}`)
          },
          {
            title: "Complete Application Processing",
            description: "End-to-end application management",
            icon: FileTextIcon,
            action: "Choose an Agent",
            content: "Let our team handle your entire application process from start to finish.",
            dialogTitle: "Select Your Dedicated Agent",
            dialogDescription: "Choose an agent to handle your application process.",
            onConfirm: () => console.log(`Selected agent: ${selectedAgent}`)
          },
          {
            title: "Document Collection",
            description: "Convenient document pickup service",
            icon: TruckIcon,
            action: "Schedule Pickup",
            content: "We'll collect all necessary documents from your location.",
            dialogTitle: "Schedule Document Pickup",
            dialogDescription: "Choose a convenient time for our agent to collect your documents.",
            onConfirm: () => console.log(`Scheduled document pickup: ${selectedSlot}`)
          }
        ].map((service, index) => (
          <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-primary/10 flex flex-col">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-center">{service.title}</CardTitle>
              <CardDescription className="text-center text-lg">{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-center text-lg">{service.content}</p>
            </CardContent>
            <CardFooter className="flex justify-center mt-auto">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="text-lg w-full">{service.action}</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>{service.dialogTitle}</DialogTitle>
                    <DialogDescription>{service.dialogDescription}</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    {service.title !== "Complete Application Processing" ? (
                      <RadioGroup value={selectedSlot} onValueChange={setSelectedSlot}>
                        {availableSlots.map((slot) => (
                          <div className="flex items-center space-x-2" key={`${slot.day}-${slot.time}`}>
                            <RadioGroupItem value={`${slot.day}-${slot.time}`} id={`${service.title}-${slot.day}-${slot.time}`} />
                            <Label htmlFor={`${service.title}-${slot.day}-${slot.time}`} className="flex items-center">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {slot.day}, {slot.time}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    ) : (
                      <RadioGroup value={selectedAgent?.toString()} onValueChange={(value) => setSelectedAgent(Number(value))}>
                        {agents.map((agent) => (
                          <div className="flex items-center space-x-2" key={agent.id}>
                            <RadioGroupItem value={agent.id.toString()} id={`agent-${agent.id}`} />
                            <Label htmlFor={`agent-${agent.id}`} className="flex items-center">
                              <Avatar className="h-10 w-10 mr-2">
                                <AvatarImage src={agent.avatar} alt={agent.name} />
                                <AvatarFallback>{agent.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{agent.name}</div>
                                <div className="text-sm text-muted-foreground">{agent.specialty}</div>
                              </div>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    )}
                  </div>
                  <Button onClick={service.onConfirm} className="w-full">Confirm</Button>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Reviews />
    </div>
  )
}

