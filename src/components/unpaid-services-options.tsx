'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Users, BookOpenIcon, VideoIcon } from 'lucide-react'

const availableLanguages = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "mr", name: "Marathi" },
  { code: "ta", name: "Tamil" },
  { code: "ml", name: "Malayalam" },
]

export function UnpaidServicesOptions() {
  const [selectedLanguage, setSelectedLanguage] = useState("en")

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-semibold mb-8 text-primary text-center">
        Free Support Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Community",
            description: "Get answers to your queries and help others.",
            icon: Users,
            action: "Explore",
            content:
              "Join our community to ask questions, share experiences, and help others with the process.",
            onClick: () => console.log("Navigate to Ask a Question page"),
          },
          {
            title: "Resource Center",
            description: "Access guides and FAQs",
            icon: BookOpenIcon,
            action: "Browse Resources",
            content:
              "Explore our comprehensive library of tutorials, guides, and frequently asked questions.",
            onClick: () => console.log("Navigate to Resource Center page"),
          },
          {
            title: "Interactive Video Call",
            description: "Speak with our AI-powered bot avatar",
            icon: VideoIcon,
            action: "Start Video Call",
            content:
              "Have a multilingual, interactive video call with our virtual assistant to get real-time support.",
            dialogTitle: "Choose Language for Video Call",
            dialogDescription:
              "Select your preferred language for the interactive video call with our virtual assistant.",
            onConfirm: () => console.log(`Starting video call in: ${selectedLanguage}`),
          },
        ].map((service, index) => (
          <Card
            key={index}
            className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-secondary/5 to-secondary/10 flex flex-col"
          >
            <CardHeader>
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-8 h-8 text-black" />
              </div>
              <CardTitle className="text-2xl text-center">
                {service.title}
              </CardTitle>
              <CardDescription className="text-center text-lg">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-center text-lg">{service.content}</p>
            </CardContent>
            <CardFooter className="flex justify-center mt-auto">
              {service.title === "Interactive Video Call" ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full">{service.action}</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>{service.dialogTitle}</DialogTitle>
                      <DialogDescription>{service.dialogDescription}</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <RadioGroup
                        value={selectedLanguage}
                        onValueChange={setSelectedLanguage}
                      >
                        {availableLanguages.map((language) => (
                          <div
                            className="flex items-center space-x-2"
                            key={language.code}
                          >
                            <RadioGroupItem
                              value={language.code}
                              id={`lang-${language.code}`}
                            />
                            <Label htmlFor={`lang-${language.code}`}>
                              {language.name}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    <Button onClick={service.onConfirm} className="w-full">
                      Start Call
                    </Button>
                  </DialogContent>
                </Dialog>
              ) : (
                <Button onClick={service.onClick} className="w-full">{service.action}</Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

