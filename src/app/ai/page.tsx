import { Metadata } from "next"
import OverviewDashboard from "@/components/overview-dashboard"
import SchemeAnalytics from "@/components/scheme-analytics"
import DocumentManagementInsights from "@/components/document-management-insights"
import PredictiveAnalytics from "@/components/predictive-analytics"
import EngagementMetrics from "@/components/engagement-metrics"
import ImpactMetrics from "@/components/impact-metrics"
import GrievanceAnalytics from "@/components/grievance-analytics"
import AIRecommendations from "@/components/newai"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"

export const metadata: Metadata = {
  title: "AI Insights Dashboard",
  description: "Comprehensive insights for government schemes platform",
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-6">AI Insights Dashboard</h1>
      <OverviewDashboard />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <SchemeAnalytics />
        <DocumentManagementInsights />
      </div>
      <PredictiveAnalytics />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <EngagementMetrics />
        <ImpactMetrics />
      </div>
      <GrievanceAnalytics />
      
    </div>
    </div>
    </div>
  )
}

