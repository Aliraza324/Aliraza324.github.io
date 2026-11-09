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
    languages: {
      en: 'https://readora.me/blog',
      'x-default': 'https://readora.me/blog',
    },
  },
};

export default function BlogPage() {
  const allArticles = getPublishedPosts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: 'Articles', href: '/blog' }]} />

      {/* Header Banner */}
      <div className="max-w-4xl mb-10 pt-4">
        <span className="text-xs font-mono uppercase tracking-widest text-editorial-accent font-semibold">
          The Journal Archive
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink-heading mt-2 mb-4">
          All Published Essays & Technical Guides
        </h1>
        <p className="text-sm sm:text-base text-ink-body font-sans leading-relaxed mb-4">
          Welcome to Readora’s complete library of long-form technical publications. Our editorial mission
          is centered on delivering deep, research-backed investigations that dissect frontier technologies,
          modern web architecture, autonomous intelligence systems, digital security frameworks, and
          sustainable digital business economics.
        </p>
        <p className="text-sm sm:text-base text-ink-muted font-sans leading-relaxed">
          Every piece in this archive is authored by experienced practitioners and subjected to rigorous
          factual verification. Whether you are architecting resilient full-stack systems, evaluating
          agentic workflows, or establishing defensible online business models, our publications provide
          uncompromising depth without promotional fluff or superficial summaries.
        </p>
      </div>

      {/* Interactive Blog Listing Component */}
      <BlogListingView initialArticles={allArticles} categories={categories} />

      {/* Editorial Methodology & Research Standards */}
      <div className="mt-16 pt-12 border-t border-ink-border max-w-4xl">
        <h2 className="font-serif text-2xl font-bold text-ink-heading mb-4">
          Editorial Methodology & Publication Integrity
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-ink-body font-sans leading-relaxed">
          <div>
            <h3 className="font-semibold text-ink-heading mb-1">Empirical Verification</h3>
            <p className="text-ink-muted">
              Technical claims, performance benchmarks, and architectural patterns are evaluated through
              practical implementation and deterministic code validation before publication.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-ink-heading mb-1">Independent Analysis</h3>
            <p className="text-ink-muted">
              Readora maintains strict editorial independence. None of our long-form guides, comparisons,
              or technical evaluations are sponsored by third-party software vendors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

