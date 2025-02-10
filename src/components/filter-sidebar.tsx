"use client"

import { useState } from "react"
import { ChevronDown, Home, Heart, Factory, GraduationCap, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FilterSidebarProps {
  onCategoryChange: (category: string | null) => void
  onEligibilityChange: (eligibility: number) => void
  onLocationChange: (location: string) => void
  onBenefitTypeChange: (benefitType: string) => void
  onUserSpecificChange: (userSpecific: string) => void
  onMinistryChange: (ministry: string) => void
  onGovernmentLevelChange: (level: string) => void
  onDBTChange: (dbt: boolean) => void
}

export function FilterSidebar({
  onCategoryChange,
  onEligibilityChange,
  onLocationChange,
  onBenefitTypeChange,
  onUserSpecificChange,
  onMinistryChange,
  onGovernmentLevelChange,
  onDBTChange,
}: FilterSidebarProps) {
  const [eligibility, setEligibility] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null)
      onCategoryChange(null)
    } else {
      setSelectedCategory(category)
      onCategoryChange(category)
    }
  }

  const handleEligibilityChange = (value: number[]) => {
    setEligibility(value[0])
    onEligibilityChange(value[0])
  }

  return (
    <div className="w-80 space-y-8 p-6">
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <h3 className="text-xl font-bold">Categories</h3>
          <ChevronDown className="h-6 w-6" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-6 space-y-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className={`w-full justify-start h-14 text-lg ${selectedCategory === "Housing" ? "bg-blue-100" : ""}`}
                  onClick={() => handleCategoryClick("Housing")}
                >
                  <Home className="mr-3 h-6 w-6 text-blue-500" /> Housing
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-base">Filter housing schemes</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className={`w-full justify-start h-14 text-lg ${selectedCategory === "Health" ? "bg-green-100" : ""}`}
                  onClick={() => handleCategoryClick("Health")}
                >
                  <Heart className="mr-3 h-6 w-6 text-green-500" /> Health
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-base">Filter health schemes</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className={`w-full justify-start h-14 text-lg ${selectedCategory === "Agriculture" ? "bg-yellow-100" : ""}`}
                  onClick={() => handleCategoryClick("Agriculture")}
                >
                  <Factory className="mr-3 h-6 w-6 text-yellow-500" /> Agriculture
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-base">Filter agriculture schemes</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className={`w-full justify-start h-14 text-lg ${selectedCategory === "Education" ? "bg-purple-100" : ""}`}
                  onClick={() => handleCategoryClick("Education")}
                >
                  <GraduationCap className="mr-3 h-6 w-6 text-purple-500" /> Education
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-base">Filter education schemes</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <h3 className="text-xl font-bold">Location</h3>
          <ChevronDown className="h-6 w-6" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-6 space-y-4">
          <Select onValueChange={onLocationChange}>
            <SelectTrigger className="h-14 text-lg">
              <SelectValue placeholder="Select State" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bihar">Bihar</SelectItem>
              <SelectItem value="maharashtra">Maharashtra</SelectItem>
              <SelectItem value="karnataka">Karnataka</SelectItem>
              {/* Add more states as needed */}
            </SelectContent>
          </Select>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <h3 className="text-xl font-bold">Benefit Type</h3>
          <ChevronDown className="h-6 w-6" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-6 space-y-4">
          <Select onValueChange={onBenefitTypeChange}>
            <SelectTrigger className="h-14 text-lg">
              <SelectValue placeholder="Select Benefit Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="financial_aid">Financial Aid</SelectItem>
              <SelectItem value="subsidies">Subsidies</SelectItem>
              <SelectItem value="free_resources">Free Resources</SelectItem>
            </SelectContent>
          </Select>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <h3 className="text-xl font-bold">User-Specific Needs</h3>
          <ChevronDown className="h-6 w-6" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-6 space-y-4">
          <Select onValueChange={onUserSpecificChange}>
            <SelectTrigger className="h-14 text-lg">
              <SelectValue placeholder="Select User Group" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single_mothers">Single Mothers</SelectItem>
              <SelectItem value="senior_citizens">Senior Citizens</SelectItem>
              <SelectItem value="women_entrepreneurs">Women Entrepreneurs</SelectItem>
              <SelectItem value="farmers">Farmers</SelectItem>
            </SelectContent>
          </Select>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <h3 className="text-xl font-bold">Ministry</h3>
          <ChevronDown className="h-6 w-6" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-6 space-y-4">
          <Select onValueChange={onMinistryChange}>
            <SelectTrigger className="h-14 text-lg">
              <SelectValue placeholder="Select Ministry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="defence">Defence</SelectItem>
              <SelectItem value="heavy_industries">Heavy Industries</SelectItem>
              <SelectItem value="social_justice">Social Justice & Empowerment</SelectItem>
              <SelectItem value="rural_development">Rural Development</SelectItem>
            </SelectContent>
          </Select>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <h3 className="text-xl font-bold">Government Level</h3>
          <ChevronDown className="h-6 w-6" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-6 space-y-4">
          <Select onValueChange={onGovernmentLevelChange}>
            <SelectTrigger className="h-14 text-lg">
              <SelectValue placeholder="Select Government Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="central">Central Government</SelectItem>
              <SelectItem value="state">State Government</SelectItem>
            </SelectContent>
          </Select>
        </CollapsibleContent>
      </Collapsible>

      <div className="space-y-6">
        <h3 className="text-xl font-bold">Eligibility</h3>
        <div className="space-y-6">
          <Slider value={[eligibility]} onValueChange={handleEligibilityChange} max={100} step={1} className="w-full" />
          <div className="flex justify-between text-base text-muted-foreground">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
          <div className="text-center text-lg font-medium">Selected: {eligibility}%</div>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <Checkbox id="dbt" className="h-6 w-6" onCheckedChange={(checked) => onDBTChange(checked as boolean)} />
        <Label
          htmlFor="dbt"
          className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Direct Benefit Transfer (DBT)
        </Label>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-5 w-5 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-base">Show only schemes that disburse benefits directly to beneficiaries' accounts</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <Button className="w-full h-14 text-lg font-semibold">Apply Filters</Button>
    </div>
  )
}

