import MyAppliedSchemes from '@/components/MyAppliedSchemes'
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
    <Header />
    <div className="flex flex-1">
      <Sidebar />
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <a href="#main-content" className="skip-to-main-content-link">
     
      </a>
      <MyAppliedSchemes />
    </main>
    </div>
    </div>
  )
}
