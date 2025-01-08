export interface TimelineItem {
  stage: string
  status: 'completed' | 'in-progress' | 'not-started' | 'rejected'
  date: string
}

export interface Scheme {
  id: number
  name: string
  status: 'submitted' | 'in-progress' | 'approved' | 'rejected'
  progress: number
  deadline: string
  category: string
  timeline: TimelineItem[]
}

