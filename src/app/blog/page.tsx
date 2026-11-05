import React from 'react';
import { Metadata } from 'next';
import { getPublishedPosts } from '@/content/posts';
import { categories } from '@/data/categories';
import { BlogListingView } from '@/components/blog/BlogListingView';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'All Articles & Editorial Essays',
  description:
    'Browse all published articles, technical research guides, and analysis across AI, web development, cybersecurity, and digital business.',
  alternates: {
    canonical: 'https://readora.me/blog',
  },
};

export default function BlogPage() {
  const allArticles = getPublishedPosts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: 'Articles', href: '/blog' }]} />

      {/* Header Banner */}
      <div className="max-w-3xl mb-10 pt-4">
        <span className="text-xs font-mono uppercase tracking-widest text-editorial-accent font-semibold">
          The Journal Archive
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink-heading mt-2 mb-4">
          All Published Essays & Technical Guides
        </h1>
        <p className="text-sm sm:text-base text-ink-body font-sans leading-relaxed">
          Comprehensive, research-backed publications analyzing modern engineering craft, artificial
          intelligence architectures, privacy frameworks, and sustainable digital enterprises.
        </p>
      </div>

      {/* Interactive Blog Listing Component */}
      <BlogListingView initialArticles={allArticles} categories={categories} />
    </div>
  );
}

