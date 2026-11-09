import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { categories, getCategoryBySlug } from '@/data/categories';
import { getPostsByCategory } from '@/content/posts';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ArticleCard } from '@/components/blog/ArticleCard';
import { Layers, BookOpen } from 'lucide-react';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    return { title: 'Category Not Found' };
  }

  return {
    title: `${category.name} — Articles & Analysis`,
    description: category.description,
    alternates: {
      canonical: `https://readora.me/categories/${category.slug}`,
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const articles = getPostsByCategory(category.slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
      <Breadcrumbs
        items={[
          { label: 'Categories', href: '/categories' },
          { label: category.name, href: `/categories/${category.slug}` },
        ]}
        currentUrl={`https://readora.me/categories/${category.slug}`}
      />

      <header className="max-w-3xl mb-12 pt-4">
        <div className="flex items-center gap-2 mb-2">
          <Layers className="w-5 h-5 text-editorial-accent" />
          <span className="text-xs font-mono uppercase tracking-widest text-editorial-accent font-semibold">
            Thematic Section
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink-heading mb-4">
          {category.name}
        </h1>
        <p className="text-sm sm:text-base text-ink-body font-sans leading-relaxed">
          {category.description}
        </p>
      </header>

      {/* Articles Grid */}
      <section>
        <div className="flex items-center justify-between pb-4 mb-8 border-b border-ink-border">
          <div className="flex items-center gap-2 text-xs font-mono text-ink-muted">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Showing {articles.length} published dispatches</span>
          </div>
        </div>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-ink-border rounded-xl p-12 text-center my-8">
            <p className="text-sm text-ink-muted">
              No articles currently filed under this section. Check back shortly.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

