import { Bell, LucideTrees } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-green-100/90 backdrop-blur supports-[backdrop-filter]:bg-green-100/70">
      <div className="container flex h-16 items-center justify-between">
        {/* Left section with logo and welcome message */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <LucideTrees className="h-6 w-6 text-green-600" />
            <span className="text-2xl font-bold">अभ्युदय</span>
          </div>
          <h2 className="text-xl font-bold">Welcome, Priya</h2>
        </div>

        {/* Right section with controls */}
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-lg font-semibold h-12 px-4">
                🇬🇧 English
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>🇬🇧 English</DropdownMenuItem>
              <DropdownMenuItem>🇮🇳 हिंदी</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative h-12 w-12">
                <Bell className="h-6 w-6" />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  3
                </span>
                <span className="sr-only">Notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Document Uploaded</DropdownMenuItem>
              <DropdownMenuItem>New Scheme Added</DropdownMenuItem>
              <DropdownMenuItem>Benefit Transfer Completed</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder-user.jpg" alt="Priya" />
            <AvatarFallback>PR</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}

export default Header

