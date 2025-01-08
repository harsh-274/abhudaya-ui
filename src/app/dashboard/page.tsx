'use client'
import { Suspense } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { EligibleSchemes } from "@/components/eligible-schemes"
import { AppliedSchemes } from "@/components/applied-schemes"
import { RecentActivities } from "@/components/recent-activities"
import { MonthlyEarnings } from "@/components/monthly-earnings"
import { LocalCenters } from "@/components/local-centers"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="container mx-auto space-y-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <EligibleSchemes />
              <AppliedSchemes />
              <RecentActivities />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Suspense fallback={<div>Loading chart...</div>}>
                <MonthlyEarnings />
              </Suspense>
              <LocalCenters />
            </div>
          </div>
        </main>
      </div>
      <Footer />
      <Chatbot />
    </div>
  )
}

