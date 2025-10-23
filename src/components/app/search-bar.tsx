'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
      <Input
        type="text"
        placeholder="Search by name..."
        className="pl-10 h-12 text-base bg-white text-black placeholder:text-neutral-500"
        onChange={(e) => onSearch(e.target.value)}
        aria-label="Search contacts by name"
      />
    </div>
  );
}
