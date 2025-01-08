import { Bell, LucideTrees, Users } from 'lucide-react'
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
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Left section with logo and welcome message */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <LucideTrees className="h-6 w-6 text-green-600" />
          
            <span className="text-xl">अभ्युदय</span>
          </div>
          
          <h2 className="text-lg font-semibold">Welcome, Priya</h2>
        </div>

        {/* Right section with controls */}
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">🇬🇧 English</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>🇬🇧 English</DropdownMenuItem>
              <DropdownMenuItem>🇮🇳 हिंदी</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-4 w-4" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
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
          <ThemeToggle />
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="Priya" />
            <AvatarFallback>PR</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}

export default Header;