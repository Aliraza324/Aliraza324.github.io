'use client';

import React, { useState, useMemo } from 'react';
import { Article, Category } from '@/types';
import { BlogFilters } from './BlogFilters';
import { ArticleCard } from './ArticleCard';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

interface BlogListingViewProps {
  initialArticles: Article[];
  categories: Category[];
}

export const BlogListingView: React.FC<BlogListingViewProps> = ({
  initialArticles,
  categories,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'latest' | 'oldest' | 'readingTime'>('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter and sort articles
  const filteredArticles = useMemo(() => {
    let result = [...initialArticles];

    // Filter by Category
    if (selectedCategory !== 'all') {
      result = result.filter((article) => article.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (article) =>
          article.title.toLowerCase().includes(q) ||
          article.excerpt.toLowerCase().includes(q) ||
          article.tags.some((tag) => tag.toLowerCase().includes(q)) ||
          article.author.name.toLowerCase().includes(q)
      );
    }

    // Sort
    result.sort((a, b) => {
      if (sortBy === 'latest') {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      }
      if (sortBy === 'oldest') {
        return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
      }
      if (sortBy === 'readingTime') {
        return b.readingTime - a.readingTime;
      }
      return 0;
    });

    return result;
  }, [initialArticles, selectedCategory, searchQuery, sortBy]);

  // Reset to page 1 whenever filters change
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  // Pagination calculations
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage) || 1;
  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredArticles.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredArticles, currentPage, itemsPerPage]);

  return (
    <div>
      <BlogFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {/* Results Count Bar */}
      <div className="flex items-center justify-between text-xs font-mono text-ink-muted mb-6 pb-2 border-b border-ink-borderLight">
        <span>
          Showing {paginatedArticles.length} of {filteredArticles.length} articles
        </span>
        {searchQuery && (
          <span className="text-editorial-accent">
            Filtered by: &ldquo;{searchQuery}&rdquo;
          </span>
        )}
      </div>

      {/* Grid of Articles */}
      {paginatedArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {paginatedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-ink-border rounded-xl p-12 text-center my-8">
          <BookOpen className="w-10 h-10 text-ink-muted mx-auto mb-3" />
          <h3 className="font-serif font-bold text-xl text-ink-heading mb-1">
            No articles found
          </h3>
          <p className="text-sm text-ink-muted max-w-md mx-auto mb-4">
            We couldn&apos;t find any articles matching your search criteria. Try adjusting your
            keywords or choosing another topic category.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="inline-flex items-center gap-2 bg-ink-heading text-white px-4 py-2 rounded text-xs font-medium hover:bg-editorial-accent transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-12 pt-6 border-t border-ink-border flex items-center justify-between">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs font-medium border border-ink-border bg-white text-ink-heading hover:bg-paper-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-1 text-xs font-mono">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded flex items-center justify-center font-medium transition ${
                  currentPage === page
                    ? 'bg-ink-heading text-white'
                    : 'bg-white border border-ink-border text-ink-heading hover:bg-paper-100'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs font-medium border border-ink-border bg-white text-ink-heading hover:bg-paper-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

