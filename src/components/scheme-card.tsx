import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Home, Heart, Leaf, AlertTriangle, Clock, Users, Building, Share2, MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface SchemeCardProps {
  name: string;
  category: 'housing' | 'health' | 'agriculture';
  summary: string;
  eligibilityPercentage: number;
  daysLeft: number;
  missingDocuments: string[];
  beneficiaries: number;
  familiesCovered: number;
}

const categoryConfig: Record<string, { color: string; icon: React.ElementType }> = {
  housing: { color: 'bg-orange-100 text-orange-800', icon: Home },
  health: { color: 'bg-blue-100 text-blue-800', icon: Heart },
  agriculture: { color: 'bg-green-100 text-green-800', icon: Leaf },
};

function CircularProgressBar({ percentage }: { percentage: number }) {
  const circumference = 2 * Math.PI * 45; // 45 is the radius of the circle
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-24 h-24">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-gray-200"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
        />
        <circle
          className="text-green-500"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold">{percentage}%</span>
      </div>
    </div>
  );
}

export function SchemeCard({
  name,
  category,
  summary,
  eligibilityPercentage,
  daysLeft,
  missingDocuments,
  beneficiaries,
  familiesCovered,
}: SchemeCardProps) {
  const { color = 'bg-gray-100 text-gray-800', icon: Icon = Home } = categoryConfig[category] || {};

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon className={`w-6 h-6 ${color.split(' ')[1]}`} />
            <h3 className="text-xl font-bold">{name}</h3>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className={color}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Badge>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share this scheme</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <p className="text-sm text-muted-foreground italic">{summary}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <Separator />
        <div className="flex items-center justify-between">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center">
                  <CircularProgressBar percentage={eligibilityPercentage} />
                  <span className="mt-2 text-sm font-medium">Eligible</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{eligibilityPercentage}% eligible based on your profile</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <Building className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <span className="text-lg font-semibold">
                  {typeof beneficiaries === 'number' ? beneficiaries.toLocaleString() : '0'}
                </span>
                <p className="text-sm text-muted-foreground">houses built</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <span className="text-lg font-semibold">
                  {typeof familiesCovered === 'number' ? familiesCovered.toLocaleString() : '0'}
                </span>
                <p className="text-sm text-muted-foreground">families covered</p>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        {daysLeft <= 5 && (
          <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 p-4 rounded-md flex items-center gap-3">
            <Clock className="w-6 h-6" />
            <span className="text-base font-medium">{daysLeft} days left to apply</span>
          </div>
        )}
        {missingDocuments.length > 0 && (
          <div className="bg-gradient-to-r from-red-100 to-red-200 text-red-800 p-4 rounded-md flex items-center gap-3">
            <AlertTriangle className="w-6 h-6" />
            <span className="text-base font-medium">
              Missing: {missingDocuments.join(', ')}
            </span>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex items-center gap-2">
        <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">Apply Now</Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Compare Scheme</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  );
}