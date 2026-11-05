'use client';

import React from 'react';
import { Search, X } from 'lucide-react';
import { Category } from '@/types';

interface BlogFiltersProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categorySlug: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: 'latest' | 'oldest' | 'readingTime';
  onSortChange: (sort: 'latest' | 'oldest' | 'readingTime') => void;
}

export const BlogFilters: React.FC<BlogFiltersProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}) => {
  return (
    <div className="space-y-6 mb-8">
      {/* Top row: Search input and sort selector */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
        {/* Search Input */}
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search articles, topics, or keywords..."
            className="w-full bg-white border border-ink-border pl-10 pr-9 py-2.5 rounded-lg text-sm text-ink-heading placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-editorial-accent focus:border-transparent transition"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted hover:text-ink-heading"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Sort Selector */}
        <div className="flex items-center gap-2 self-end sm:self-auto text-xs font-sans text-ink-muted">
          <span className="font-mono text-ink-faint uppercase tracking-wider text-[11px]">
            Sort By:
          </span>
          <select
            value={sortBy}
            onChange={(e) =>
              onSortChange(e.target.value as 'latest' | 'oldest' | 'readingTime')
            }
            aria-label="Sort articles"
            className="bg-white border border-ink-border rounded px-3 py-2 text-xs text-ink-heading font-medium focus:outline-none focus:ring-1 focus:ring-editorial-accent cursor-pointer"
          >
            <option value="latest">Latest Publication</option>
            <option value="oldest">Earliest Publication</option>
            <option value="readingTime">Reading Time</option>
          </select>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => onSelectCategory('all')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-medium whitespace-nowrap transition-colors ${
            selectedCategory === 'all'
              ? 'bg-ink-heading text-white'
              : 'bg-white border border-ink-border text-ink-muted hover:text-ink-heading hover:bg-paper-100'
          }`}
        >
          All Topics
        </button>

        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.slug;
          return (
            <button
              key={cat.slug}
              onClick={() => onSelectCategory(cat.slug)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-medium whitespace-nowrap transition-colors ${
                isSelected
                  ? 'bg-ink-heading text-white'
                  : 'bg-white border border-ink-border text-ink-muted hover:text-ink-heading hover:bg-paper-100'
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

