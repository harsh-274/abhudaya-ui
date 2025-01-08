'use client'

import React, { useState } from 'react'
import { Bell, Search, Mic, Download, ShieldCheck } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import SchemeCard from './SchemeCard'
import SchemeProgressTracker from './SchemeProgressTracker'
import AppealsAndGrievances from './AppealsAndGrievances'
import AIInsights from './AIInsights'
import TodoList from './TodoList'

import { Scheme } from './types'

const statusFilters = [
  { value: 'all', label: 'All', icon: '📋' },
  { value: 'submitted', label: 'Submitted', icon: '📤' },
  { value: 'in-progress', label: 'In Progress', icon: '🔄' },
  { value: 'approved', label: 'Approved', icon: '✅' },
  { value: 'rejected', label: 'Rejected', icon: '❌' },
]

const schemes: Scheme[] = [
  {
    id: 1,
    name: 'Pradhan Mantri Awas Yojana (PMAY)',
    status: 'in-progress',
    progress: 66,
    deadline: 'Mar 31, 2024',
    category: 'Housing',
    icon: '🏠',
    timeline: [
      { stage: 'Application Submitted', status: 'completed', date: 'Jan 1, 2024' },
      { stage: 'Document Verification', status: 'completed', date: 'Jan 15, 2024' },
      { stage: 'Land Allocation', status: 'in-progress', date: 'Pending' },
      { stage: 'Fund Disbursement', status: 'not-started', date: 'Not Started' },
    ],
  },
  {
    id: 2,
    name: 'Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)',
    status: 'approved',
    progress: 100,
    deadline: 'Ongoing',
    category: 'Employment',
    icon: '👷',
    timeline: [
      { stage: 'Job Card Issued', status: 'completed', date: 'Dec 1, 2023' },
      { stage: 'Work Allocation', status: 'completed', date: 'Dec 15, 2023' },
      { stage: 'Work Completion', status: 'completed', date: 'Jan 15, 2024' },
      { stage: 'Payment Processed', status: 'completed', date: 'Jan 20, 2024' },
    ],
  },
  {
    id: 3,
    name: 'PM-KISAN',
    status: 'rejected',
    progress: 33,
    deadline: 'Feb 28, 2024',
    category: 'Agriculture',
    icon: '🌾',
    timeline: [
      { stage: 'Application Submitted', status: 'completed', date: 'Dec 1, 2023' },
      { stage: 'Document Verification', status: 'rejected', date: 'Dec 15, 2023' },
      { stage: 'Benefit Transfer', status: 'not-started', date: 'Not Started' },
    ],
  },
]

export default function MyAppliedSchemes() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('none')
  const [categoryFilter, setCategoryFilter] = useState('all')

  const filteredSchemes = schemes.filter(scheme => 
    (activeFilter === 'all' || scheme.status === activeFilter) &&
    (categoryFilter === 'all' || scheme.category === categoryFilter) &&
    scheme.name.toLowerCase().includes(searchQuery.toLowerCase())
  ).sort((a, b) => {
    if (sortBy === 'deadline') {
      return new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
    } else if (sortBy === 'progress') {
      return b.progress - a.progress
    }
    return 0
  })

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <header className="flex justify-between items-center mb-8">
       
        
      </header>

      <div className="sticky top-0 bg-white z-10 py-4 mb-8 border-b">
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder="Search schemes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <Mic className="h-4 w-4" />
              <span className="sr-only">Voice search</span>
            </Button>
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Housing">Housing</SelectItem>
              <SelectItem value="Employment">Employment</SelectItem>
              <SelectItem value="Agriculture">Agriculture</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No Sorting</SelectItem>
              <SelectItem value="deadline">Deadline</SelectItem>
              <SelectItem value="progress">Progress</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={() => {
            setSearchQuery('')
            setSortBy('none')
            setCategoryFilter('all')
            setActiveFilter('all')
          }}>
            Reset Filters
          </Button>
        </div>
      </div>

      <Tabs value={activeFilter} onValueChange={setActiveFilter} className="mb-8">
        <TabsList className="grid w-full grid-cols-5 rounded-full bg-muted p-1">
          {statusFilters.map((filter) => (
            <TabsTrigger
              key={filter.value}
              value={filter.value}
              className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {filter.icon} {filter.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {statusFilters.map((filter) => (
          <TabsContent key={filter.value} value={filter.value}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredSchemes.map((scheme) => (
                <SchemeCard key={scheme.id} scheme={scheme} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <SchemeProgressTracker schemes={filteredSchemes} />

      <div className="grid gap-8 md:grid-cols-2 mt-8">
        <AppealsAndGrievances />
        <AIInsights schemes={schemes} />
      </div>

      <TodoList schemes={schemes} />

      <footer className="mt-12 flex items-center justify-between border-t pt-4">
        <div className="text-sm text-gray-600">
          <p>Applications Approved Today: 15</p>
          <p>Documents Processed: 126</p>
        </div>
        <div className="flex items-center gap-4">
          <Button>
            <Download className="mr-2 h-4 w-4" /> Download Summary
          </Button>
          <Button variant="outline">Contact Support</Button>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <ShieldCheck className="mr-2 h-4 w-4" />
          Secured by Blockchain
        </div>
      </footer>
    </div>
  )
}

