'use client';

import React, { useState, useEffect } from 'react';
import { SchemeCard } from '@/components/scheme-card';
import { FilterSidebar } from '@/components/filter-sidebar';
import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { SchemeSearch } from '@/components/ai-search-bar';

interface Scheme {
  id: number;
  name: string;
  category: 'housing' | 'health' | 'agriculture';
  summary: string;
  eligibilityPercentage: number;
  daysLeft: number;
  missingDocuments: string[];
  beneficiaries: number;
  familiesCovered: number;
}

const schemes: Scheme[] = [
  {
    id: 1,
    name: 'Pradhan Mantri Awas Yojana',
    category: 'housing',
    summary: '₹2.5 lakh housing grant',
    eligibilityPercentage: 85,
    daysLeft: 5,
    missingDocuments: ['Income Certificate'],
    beneficiaries: 2000000,
    familiesCovered: 2000000,
  },
  {
    id: 2,
    name: 'Ayushman Bharat',
    category: 'health',
    summary: '₹5 lakh health insurance',
    eligibilityPercentage: 100,
    daysLeft: 30,
    missingDocuments: [],
    beneficiaries: 50000000,
    familiesCovered: 10000000,
  },
  {
    id: 3,
    name: 'PM Kisan Samman Nidhi',
    category: 'agriculture',
    summary: '₹6000 annual support',
    eligibilityPercentage: 95,
    daysLeft: 15,
    missingDocuments: ['Land Records'],
    beneficiaries: 110000000,
    familiesCovered: 11000000,
  },
];

export default function Page() {
  const [filteredSchemes, setFilteredSchemes] = useState<Scheme[]>(schemes);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [eligibilityFilter, setEligibilityFilter] = useState(0);

  useEffect(() => {
    const filtered = schemes.filter(
      (scheme) =>
        (searchTerm === '' || scheme.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (categoryFilter === null || scheme.category === categoryFilter) &&
        scheme.eligibilityPercentage >= eligibilityFilter
    );
    setFilteredSchemes(filtered);
  }, [searchTerm, categoryFilter, eligibilityFilter]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="container mx-auto p-6 space-y-6">
          <SchemeSearch onSearch={(term) => setSearchTerm(term)} />
          <div className="flex gap-8">
            <FilterSidebar onCategoryChange={setCategoryFilter} onEligibilityChange={setEligibilityFilter} />
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSchemes.map((scheme) => (
                  <SchemeCard
                    key={scheme.id}
                    name={scheme.name}
                    category={scheme.category}
                    summary={scheme.summary}
                    eligibilityPercentage={scheme.eligibilityPercentage}
                    daysLeft={scheme.daysLeft}
                    missingDocuments={scheme.missingDocuments}
                    beneficiaries={scheme.beneficiaries}
                    familiesCovered={scheme.familiesCovered}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
