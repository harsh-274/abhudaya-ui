'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Wallet, Gift, Sparkles } from 'lucide-react'
import { LanguageSelector } from '@/components/language-selector'
import { PaidServicesOptions } from '@/components/paid-services-options'
import { UnpaidServicesOptions } from '@/components//unpaid-services-options'

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto py-12 px-4 bg-gradient-to-b from-background to-secondary/10">
      <header className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4 md:mb-0">
          Choose Your Perfect Service
          <Sparkles className="inline-block ml-2 text-yellow-400" size={24} />
        </h1>
        <LanguageSelector />
      </header>
      <p className="text-center mb-12 text-muted-foreground max-w-2xl mx-auto text-lg">
        Explore our comprehensive range of services designed to streamline your application process.
        Whether you need professional assistance or prefer self-service options, we've got you covered.
      </p>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
          <TabsTrigger value="overview" className="text-lg">Overview</TabsTrigger>
          <TabsTrigger value="paid" className="text-lg">Paid</TabsTrigger>
          <TabsTrigger value="unpaid" className="text-lg">Free</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Card className="w-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader className="text-center">
                <Wallet className="w-16 h-16 mx-auto text-primary mb-4" />
                <CardTitle className="text-3xl">Paid Services</CardTitle>
                <CardDescription className="text-lg">Professional assistance for your needs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Dedicated support</li>
                  <li>Streamlined processes</li>
                  <li>Expert guidance</li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center mt-auto">
                <Button onClick={() => setActiveTab("paid")} size="lg" className="text-lg w-full md:w-auto">
                  Explore Paid Services
                </Button>
              </CardFooter>
            </Card>

            <Card className="w-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-secondary/5 to-secondary/10">
              <CardHeader className="text-center">
                <Gift className="w-16 h-16 mx-auto text-black mb-4" />
                <CardTitle className="text-3xl text-black">Free Services</CardTitle>
                <CardDescription className="text-lg text-black">Free resources for self-service</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-lg text-black">
                  <li>Schedule Online Guidance</li>
                  <li>Self-help guides</li>
                  <li>Community support</li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center mt-auto">
                <Button onClick={() => setActiveTab("unpaid")} size="lg" className="text-lg w-full md:w-auto bg-black hover:bg-black/90">
                  Explore Free Services
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="paid">
          <PaidServicesOptions />
        </TabsContent>
        <TabsContent value="unpaid">
          <UnpaidServicesOptions />
        </TabsContent>
      </Tabs>
    </div>
  )
}

