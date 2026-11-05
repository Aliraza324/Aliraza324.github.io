import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types';
import { formatDate } from '@/lib/utils';
import { Clock, ArrowRight } from 'lucide-react';

export const FeaturedArticle: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <section className="bg-white border border-ink-border rounded-xl overflow-hidden shadow-sm hover:border-editorial-accent/50 transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Column: Image (7 cols) */}
        <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] lg:min-h-full bg-paper-100 overflow-hidden">
          <Image
            src={article.featuredImage}
            alt={article.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-700 ease-out hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 bg-ink-heading text-white px-3 py-1 rounded text-xs font-mono uppercase tracking-wider font-semibold shadow-md">
              <span className="w-2 h-2 rounded-full bg-editorial-accent animate-pulse" />
              Lead Story
            </span>
          </div>
        </div>

        {/* Right Column: Editorial Copy (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
          <div>
            {/* Category and Date */}
            <div className="flex items-center gap-3 text-xs font-mono text-ink-muted mb-3">
              <Link
                href={`/categories/${article.category}`}
                className="text-editorial-accent font-semibold uppercase tracking-wider hover:underline"
              >
                {article.categoryName}
              </Link>
              <span>•</span>
              <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
            </div>

            {/* Title */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink-heading leading-tight mb-4 hover:text-editorial-accent transition-colors">
              <Link href={`/blog/${article.slug}`}>{article.title}</Link>
            </h2>

            {/* Excerpt */}
            <p className="text-ink-body text-sm sm:text-base leading-relaxed mb-6 font-sans">
              {article.excerpt}
            </p>
          </div>

          {/* Author and Action */}
          <div className="pt-6 border-t border-ink-borderLight flex items-center justify-between">
            <Link
              href={`/authors/${article.author.slug}`}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-ink-border">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-ink-heading group-hover:text-editorial-accent transition-colors">
                  {article.author.name}
                </p>
                <p className="text-[11px] font-mono text-ink-muted flex items-center gap-1">
                  <Clock className="w-3 h-3 text-ink-faint" />
                  {article.readingTime} min read
                </p>
              </div>
            </Link>

            <Link
              href={`/blog/${article.slug}`}
              className="inline-flex items-center gap-2 bg-editorial-accent text-white px-4 py-2.5 rounded text-xs font-sans font-medium hover:bg-editorial-accentDark transition-colors shadow-sm"
            >
              <span>Read Analysis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

