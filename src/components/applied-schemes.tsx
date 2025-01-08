import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const appliedSchemes = [
  {
    name: "PM Awas Yojana",
    progress: 66,
    deadline: "2024-03-31",
    status: "In Progress",
    timeline: [
      { status: "Document Uploaded", date: "1 week ago", completed: true },
      { status: "Application Submitted", date: "2 weeks ago", completed: true },
      { status: "Pending Benefit", date: "Action Required", completed: false },
    ],
  },
  {
    name: "PM Kisan Samman Nidhi",
    progress: 80,
    deadline: "2024-06-30",
    status: "Approved",
    timeline: [
      { status: "Benefit Received", date: "1 day ago", completed: true },
      { status: "Application Approved", date: "1 week ago", completed: true },
      { status: "Document Verification", date: "2 weeks ago", completed: true },
    ],
  },
];

export function AppliedSchemes() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [filter, setFilter] = React.useState("All");
  const [sort, setSort] = React.useState("Deadline");

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const filteredSchemes = appliedSchemes.filter(scheme => 
    filter === "All" || scheme.status === filter
  ).sort((a, b) => {
    if (sort === "Deadline") {
      return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
    }
    return b.progress - a.progress;
  });

  return (
    <Card className="relative">
      <CardHeader>
        <CardTitle>My Applied Schemes</CardTitle>
        <div className="flex gap-2">
          <Select onValueChange={setFilter} defaultValue={filter}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Submitted">Submitted</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
              <SelectItem value="Approved">Approved</SelectItem>
              <SelectItem value="Rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={setSort} defaultValue={sort}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Deadline">Deadline</SelectItem>
              <SelectItem value="Progress">Progress</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {filteredSchemes.map((scheme) => (
                <div key={scheme.name} className="flex-[0_0_100%] min-w-0 pl-4 pr-4">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold">{scheme.name}</h3>
                      <span className="text-sm text-muted-foreground">
                        Deadline: {new Date(scheme.deadline).toLocaleDateString()}
                      </span>
                    </div>
                    <Progress value={scheme.progress} />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {scheme.progress}% Complete
                      </span>
                      <span className={`text-sm font-medium ${
                        scheme.status === 'Approved' ? 'text-green-500' :
                        scheme.status === 'Rejected' ? 'text-red-500' :
                        'text-orange-500'
                      }`}>
                        {scheme.status}
                      </span>
                    </div>
                    <div className="space-y-3">
                      {scheme.timeline.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className={`h-3 w-3 rounded-full ${
                            item.completed ? 'bg-green-500' : 'bg-orange-500'
                          }`} />
                          <div>
                            <p className="text-sm font-medium">{item.status}</p>
                            <p className="text-xs text-muted-foreground">{item.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">View Details</Button>
                      <Button variant="outline" size="sm">Submit Documents</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default AppliedSchemes;