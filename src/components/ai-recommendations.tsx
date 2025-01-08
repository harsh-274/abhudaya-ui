import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface AIRecommendationsProps {
  schemes: any[]
}

export function AIRecommendations({ schemes }: AIRecommendationsProps) {
  // This is a placeholder for AI logic. In a real application, this would be more complex.
  const getRecommendation = () => {
    const lowEligibilitySchemes = schemes.filter(scheme => scheme.eligibility < 70)
    if (lowEligibilitySchemes.length > 0) {
      const scheme = lowEligibilitySchemes[0]
      return {
        schemeName: scheme.name,
        action: `Upload ${scheme.missingDocuments[0]} to increase eligibility`,
        potentialEligibility: scheme.eligibility + 20
      }
    }
    return null
  }

  const recommendation = getRecommendation()

  if (!recommendation) return null

  return (
    <Card className="bg-blue-50 border-blue-200">
      <CardHeader>
        <CardTitle className="text-blue-800">AI Recommendation</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-blue-700 mb-2">
          For {recommendation.schemeName}, {recommendation.action} to potentially increase your eligibility to {recommendation.potentialEligibility}%.
        </p>
        <Button variant="default" className="bg-blue-500 hover:bg-blue-600 text-white">Take Action</Button>
      </CardContent>
    </Card>
  )
}

