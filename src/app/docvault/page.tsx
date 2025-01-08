import DocumentVault from '@/components/DocumentVault'
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-8">Explore Schemes Platform</h1>
          <DocumentVault />
        </main>
      </div>
    </div>
  )
}
