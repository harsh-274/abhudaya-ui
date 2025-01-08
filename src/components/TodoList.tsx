import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scheme } from './types'
import { CheckCircle, AlertCircle } from 'lucide-react'

interface TodoItem {
  id: number
  schemeName: string
  action: string
  buttonText: string
  priority: 'high' | 'medium' | 'low'
}

export default function TodoList({ schemes }: { schemes: Scheme[] }) {
  const todoItems: TodoItem[] = schemes
    .filter(scheme => scheme.status !== 'approved')
    .flatMap(scheme => {
      const items: TodoItem[] = []
      if (scheme.status === 'rejected') {
        items.push({
          id: scheme.id * 10 + 1,
          schemeName: scheme.name,
          action: `Resubmit documents for ${scheme.name}`,
          buttonText: 'Resubmit',
          priority: 'high',
        })
      }
      if (scheme.status === 'in-progress') {
        items.push({
          id: scheme.id * 10 + 2,
          schemeName: scheme.name,
          action: `Submit progress update for ${scheme.name}`,
          buttonText: 'Update',
          priority: 'medium',
        })
      }
      return items
    })

  const priorityColors = {
    high: 'bg-red-100 border-red-300',
    medium: 'bg-yellow-100 border-yellow-300',
    low: 'bg-green-100 border-green-300',
  }

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>To-Do List</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {todoItems.map((item) => (
            <li key={item.id} className={`flex items-center justify-between p-3 rounded-md border ${priorityColors[item.priority]}`}>
              <div className="flex items-center space-x-3">
                {item.priority === 'high' ? (
                  <AlertCircle className="h-5 w-5 text-red-500" />
                ) : (
                  <CheckCircle className="h-5 w-5 text-primary" />
                )}
                <span>{item.action}</span>
              </div>
              <Button size="sm">{item.buttonText}</Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

