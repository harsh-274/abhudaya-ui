import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SortingOptionsProps {
  onSortChange: (sortOption: string) => void
}

export function SortingOptions({ onSortChange }: SortingOptionsProps) {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium">Sort by:</span>
      <Select onValueChange={onSortChange}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select sorting option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="deadline">Deadline (Soonest First)</SelectItem>
          <SelectItem value="eligibility">Eligibility (Highest First)</SelectItem>
          <SelectItem value="easy_application">Easy Application</SelectItem>
          <SelectItem value="popularity">Popularity</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

