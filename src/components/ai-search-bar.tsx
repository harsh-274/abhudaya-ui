"use client"

import * as React from "react"
import { Search, Mic, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

const suggestions = [
  "Pradhan Mantri Awas Yojana",
  "Ayushman Bharat",
  "PM Kisan Samman Nidhi",
  "National Pension Scheme",
  "PM Garib Kalyan Yojana",
]

export function SchemeSearch() {
  const [open, setOpen] = React.useState(false)
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
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="flex gap-3 items-center">
        <div className="relative w-full">
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-start text-muted-foreground h-16 px-5 text-lg font-semibold"
            onClick={() => setOpen(true)}
          >
            <Search className="mr-3 h-5 w-5" />
            {query || "Search schemes..."}
          </Button>
          <Button size="icon" variant="ghost" className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10">
            <Mic className="h-5 w-5" />
          </Button>
        </div>
        <Button size="icon" variant="outline" className="h-16 w-16">
          <Filter className="h-5 w-5" />
        </Button>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen} className="max-w-3xl">
        <CommandInput
          placeholder="Search schemes..."
          value={query}
          onValueChange={setQuery}
          className="h-16 text-lg font-semibold"
        />
        <CommandList className="py-4">
          <CommandEmpty className="py-6 text-lg">No results found.</CommandEmpty>
          <CommandGroup heading="AI Suggestions" className="pb-2">
            {suggestions.map((suggestion) => (
              <CommandItem
                key={suggestion}
                onSelect={() => {
                  setQuery(suggestion)
                  setOpen(false)
                }}
                className="py-3 text-lg font-medium"
              >
                {suggestion}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>

      <div className="flex items-center gap-4 mt-6">
        <div className="flex gap-3 ml-auto">
          <Button variant="outline" className="h-12 px-6 text-base font-semibold">
            Save Query
          </Button>
          <Button className="h-12 px-6 text-base font-semibold">Search</Button>
        </div>
      </div>
    </div>
  )
}

