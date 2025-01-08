import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, Sprout, Home, Heart } from "lucide-react"
import { useState } from "react"

const schemes = [
  {
    name: "PM Kisan Samman Nidhi",
    eligibility: 85,
    benefits: ["Financial support for farmer families", "₹6000 per year"],
    description: "A flagship initiative ensuring sustainable income for farmers across India. This scheme provides direct financial support to empower agricultural families.",
    icon: Sprout
  },
  {
    name: "Ayushman Bharat",
    eligibility: 70,
    benefits: ["Health coverage up to ₹5 lakhs", "Cashless treatment"],
    description: "Comprehensive healthcare protection scheme providing quality and affordable healthcare to millions of Indians.",
    icon: Heart
  },
  {
    name: "PM Awas Yojana",
    eligibility: 60,
    benefits: ["Housing for all", "Interest subsidy on home loans"],
    description: "Making the dream of owning a home a reality for every Indian family through affordable housing solutions.",
    icon: Home
  },
]

export function EligibleSchemes() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextScheme = () => {
    setCurrentIndex((prev) => (prev + 1) % schemes.length)
  }

  const previousScheme = () => {
    setCurrentIndex((prev) => (prev - 1 + schemes.length) % schemes.length)
  }

  const currentScheme = schemes[currentIndex]
  const Icon = currentScheme.icon

  return (
    <Card className="w-full relative min-h-[400px]">
      <CardHeader className="border-b pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Eligible Schemes</CardTitle>
          <span className="text-sm border px-3 py-1 rounded-full">
            Scheme {currentIndex + 1} of {schemes.length}
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 pt-4">
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="p-2 border rounded-lg">
              <Icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1">{currentScheme.name}</h3>
              <p className="text-sm text-muted-foreground">{currentScheme.description}</p>
            </div>
          </div>
          
          <div className="space-y-2 border-t pt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Eligibility Score</span>
              <span className="text-sm font-semibold">
                {currentScheme.eligibility}%
              </span>
            </div>
            <Progress value={currentScheme.eligibility} className="h-2" />
          </div>

          <div className="border rounded-lg p-3">
            <h4 className="font-medium mb-2">Key Benefits</h4>
            <ul className="space-y-2">
              {currentScheme.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3">
            <Button className="flex-1">Apply Now</Button>
            <Button variant="outline" className="flex-1">Learn More</Button>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-2 border-t">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={previousScheme}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex gap-2">
            {schemes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-200 border ${
                  index === currentIndex 
                    ? "w-6 bg-neutral-900" 
                    : "w-2 hover:bg-neutral-100"
                }`}
              />
            ))}
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={nextScheme}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}