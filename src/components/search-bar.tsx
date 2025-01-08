"use client"

import * as React from "react"
import { Search, Mic, Filter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const suggestions = [
  "Pradhan Mantri Awas Yojana",
  "Ayushman Bharat",
  "PM Kisan Samman Nidhi",
  "National Pension Scheme",
  "PM Garib Kalyan Yojana",
]

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिंदी" },
  { code: "bn", name: "বাংলা" },
  { code: "te", name: "తెలుగు" },
  { code: "ta", name: "தமிழ்" },
  { code: "mr", name: "मराठी" },
]

export function SchemeSearch() {
  const [open, setOpen] = React.useState(false)
  const [selectedLanguage, setSelectedLanguage] = React.useState(languages[0])
  const [query, setQuery] = React.useState("")

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="flex gap-2 items-center">
        <div className="relative w-full">
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-start text-muted-foreground h-12 px-4"
            onClick={() => setOpen(true)}
          >
            <Search className="mr-2 h-4 w-4" />
            {query || "Search schemes..."}
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-2 top-1/2 -translate-y-1/2"
          >
            <Mic className="h-4 w-4" />
          </Button>
        </div>
        <Button size="icon" variant="outline" className="h-12 w-12">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder={`Search schemes in ${selectedLanguage.name}...`}
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="AI Suggestions">
            {suggestions.map((suggestion) => (
              <CommandItem
                key={suggestion}
                onSelect={() => {
                  setQuery(suggestion)
                  setOpen(false)
                }}
              >
                {suggestion}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>

      <div className="flex items-center gap-4 mt-4">
        <div className="flex gap-2">
          {languages.slice(0, 2).map((lang) => (
            <Button
              key={lang.code}
              variant={selectedLanguage.code === lang.code ? "default" : "outline"}
              className="h-9"
              onClick={() => setSelectedLanguage(lang)}
            >
              {lang.name}
            </Button>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-9">
                More
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {languages.slice(2).map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setSelectedLanguage(lang)}
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex gap-2 ml-auto">
          <Button variant="outline" className="h-9">
            Save Query
          </Button>
          <Button className="h-9">
            Search
          </Button>
        </div>
      </div>
    </div>
  )
}



