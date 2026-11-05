import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { categories } from '@/data/categories';
import { getPostsByCategory } from '@/content/posts';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Layers, ArrowRight, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Editorial Categories & Topics Index',
  description:
    'Explore Readora’s specialized coverage topics: AI, Web Development, Productivity, Cybersecurity, and Online Business.',
  alternates: {
    canonical: 'https://readora.me/categories',
  },
};

export default function CategoriesIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
      <Breadcrumbs items={[{ label: 'Categories', href: '/categories' }]} />

      <header className="max-w-3xl mb-12 pt-4">
        <span className="text-xs font-mono uppercase tracking-widest text-editorial-accent font-semibold">
          Taxonomy & Subjects
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink-heading mt-2 mb-4">
          Editorial Topics & Coverage Areas
        </h1>
        <p className="text-sm sm:text-base text-ink-body font-sans leading-relaxed">
          Our publications are organized across five dedicated thematic disciplines. Browse each
          section to discover in-depth essays, architectural patterns, and verified field guides.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat) => {
          const catPosts = getPostsByCategory(cat.slug);

          return (
            <div
              key={cat.slug}
              className="bg-white border border-ink-border rounded-xl p-8 flex flex-col justify-between hover:border-editorial-accent/60 transition shadow-sm group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-editorial-accent font-semibold">
                    Category Dossier
                  </span>
                  <span className="text-xs font-mono text-ink-muted flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-ink-faint" />
                    {catPosts.length} Articles
                  </span>
                </div>

                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ink-heading mb-3 group-hover:text-editorial-accent transition">
                  <Link href={`/categories/${cat.slug}`}>{cat.name}</Link>
                </h2>

                <p className="text-sm text-ink-muted leading-relaxed mb-6 font-sans">
                  {cat.description}
                </p>
              </div>

              <div className="pt-6 border-t border-ink-borderLight flex items-center justify-between">
                <span className="text-xs font-mono text-ink-faint">
                  {catPosts.length > 0 ? `Latest: ${catPosts[0].title.slice(0, 32)}...` : 'Active Journal'}
                </span>

                <Link
                  href={`/categories/${cat.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-editorial-accent font-semibold group-hover:underline"
                >
                  <span>Explore Topic</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

