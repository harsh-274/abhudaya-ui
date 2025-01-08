import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Quote, User, Send } from "lucide-react";

interface Story {
  id: number;
  name: string;
  scheme: string;
  content: string;
}

const stories: Story[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    scheme: "Pradhan Mantri Awas Yojana",
    content: "Thanks to PMAY, I was able to afford my first home. The process was smooth, and the support was excellent."
  },
  {
    id: 2,
    name: "Priya Sharma",
    scheme: "Ayushman Bharat",
    content: "Ayushman Bharat covered my medical expenses during a critical illness. It was a lifesaver for my family."
  },
  {
    id: 3,
    name: "Amit Patel",
    scheme: "PM Kisan Samman Nidhi",
    content: "The financial support from PM Kisan has helped me invest in better farming equipment and improve my crop yield."
  }
];

export function UserStories() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Quote className="h-6 w-6 text-blue-500" />
          <h2 className="text-2xl font-bold">Success Stories</h2>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-500 hover:bg-blue-600">
              <Send className="h-4 w-4 mr-2" />
              Share Your Story
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold flex items-center gap-2">
                <User className="h-5 w-5 text-blue-500" />
                Share Your Success Story
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Scheme Name</label>
                <input
                  type="text"
                  placeholder="Enter scheme name"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Story</label>
                <textarea
                  className="w-full h-32 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us how this scheme helped you..."
                ></textarea>
              </div>
              <Button className="w-full bg-blue-500 hover:bg-blue-600">
                Submit Story
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <Card key={story.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-blue-500" />
                {story.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-medium text-blue-500 mb-3">{story.scheme}</p>
              <div className="relative">
                <Quote className="h-4 w-4 text-gray-300 absolute -left-2 -top-2" />
                <p className="text-sm text-gray-600 pl-4">{story.content}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}