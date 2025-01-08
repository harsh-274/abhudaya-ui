import Link from "next/link"
import { Lock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline">
            Help Center
          </Link>
          <Link href="#" className="hover:underline">
            Terms of Use
          </Link>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Lock className="h-4 w-4" />
          <span>Secured by Blockchain</span>
        </div>
      </div>
    </footer>
  )
}

