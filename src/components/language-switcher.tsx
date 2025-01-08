"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function LanguageSwitcher() {
  return (
    <Select defaultValue="english">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="english">🇬🇧 English</SelectItem>
        <SelectItem value="hindi">🇮🇳 हिंदी</SelectItem>
        <SelectItem value="marathi">🇮🇳 मराठी</SelectItem>
        <SelectItem value="gujarati">🇮🇳 ગુજરાતી</SelectItem>
        <SelectItem value="bengali">🇮🇳 বাংলা</SelectItem>
      </SelectContent>
    </Select>
  )
}

