import { Star } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Review {
  id: number
  name: string
  avatar: string
  rating: number
  comment: string
  service: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Achintya Chavan",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    comment: "The online guidance was incredibly helpful. The expert was knowledgeable and patient.",
    service: "Online Guidance"
  },
  {
    id: 2,
    name: "Asmiya Sayyed",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    comment: "Complete application processing saved me so much time. Highly recommended!",
    service: "Complete Application Processing"
  },
  {
    id: 3,
    name: "Harsh Chhallani",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    comment: "Document collection service was prompt and efficient. Great experience overall.",
    service: "Document Collection"
  }
]

export function Reviews() {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-6 text-center">What Our Users Say</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <Card key={review.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar>
                <AvatarImage src={review.avatar} alt={review.name} />
                <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">{review.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{review.service}</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-sm">{review.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

