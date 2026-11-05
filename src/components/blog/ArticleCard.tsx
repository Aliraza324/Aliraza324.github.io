import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types';
import { formatDate } from '@/lib/utils';
import { Clock } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
  compact?: boolean;
  showExcerpt?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  compact = false,
  showExcerpt = true,
}) => {
  return (
    <article className="group flex flex-col h-full bg-white border border-ink-border rounded-lg overflow-hidden hover:border-editorial-accent/60 transition-all duration-300 shadow-sm hover:shadow-md">
      {/* Featured Image */}
      <Link
        href={`/blog/${article.slug}`}
        className="relative block aspect-[16/10] overflow-hidden bg-paper-100"
      >
        <Image
          src={article.featuredImage}
          alt={article.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block bg-white/95 backdrop-blur-sm text-ink-heading border border-ink-borderLight px-2.5 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider font-semibold shadow-xs">
            {article.categoryName}
          </span>
        </div>
      </Link>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
        <div>
          {/* Metadata Bar */}
          <div className="flex items-center gap-3 text-xs font-mono text-ink-muted mb-2.5">
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-ink-faint" />
              {article.readingTime} min read
            </span>
          </div>

          {/* Title */}
          <h3
            className={`font-serif font-bold text-ink-heading group-hover:text-editorial-accent transition-colors tracking-tight leading-snug mb-2 ${
              compact ? 'text-lg' : 'text-xl sm:text-2xl'
            }`}
          >
            <Link href={`/blog/${article.slug}`}>{article.title}</Link>
          </h3>

          {/* Excerpt */}
          {showExcerpt && (
            <p className="text-ink-muted text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
              {article.excerpt}
            </p>
          )}
        </div>

        {/* Author Footer */}
        <div className="pt-4 mt-auto border-t border-ink-borderLight flex items-center justify-between">
          <Link
            href={`/authors/${article.author.slug}`}
            className="flex items-center gap-2.5 group/author"
          >
            <div className="relative w-7 h-7 rounded-full overflow-hidden border border-ink-border">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                fill
                className="object-cover"
                sizes="28px"
              />
            </div>
            <span className="text-xs font-sans font-medium text-ink-heading group-hover/author:text-editorial-accent transition-colors">
              {article.author.name}
            </span>
          </Link>

          <Link
            href={`/blog/${article.slug}`}
            className="text-xs font-mono uppercase tracking-wider text-editorial-accent font-semibold hover:underline"
          >
            Read →
          </Link>
        </div>
      </div>
    </article>
  );
};

