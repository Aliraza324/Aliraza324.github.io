import React from 'react';
import Link from 'next/link';
import { Article } from '@/types';
import { formatDate } from '@/lib/utils';
import { TrendingUp, Clock } from 'lucide-react';

export const TrendingStories: React.FC<{ articles: Article[] }> = ({ articles }) => {
  return (
    <div className="bg-white border border-ink-border rounded-xl p-6 lg:p-8">
      <div className="flex items-center gap-2 pb-4 mb-6 border-b border-ink-border">
        <TrendingUp className="w-5 h-5 text-editorial-accent" />
        <h2 className="font-serif font-bold text-xl text-ink-heading tracking-tight">
          Trending Insights
        </h2>
      </div>

      <div className="divide-y divide-ink-borderLight">
        {articles.map((article, index) => (
          <article key={article.id} className="py-5 first:pt-0 last:pb-0 flex items-start gap-4 group">
            <span className="font-serif text-3xl font-bold text-neutral-300 group-hover:text-editorial-accent transition-colors select-none">
              {(index + 1).toString().padStart(2, '0')}
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-[11px] font-mono text-ink-muted mb-1">
                <span className="text-editorial-accent font-semibold uppercase tracking-wider">
                  {article.categoryName}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-ink-faint" />
                  {article.readingTime} min
                </span>
              </div>
              <h3 className="font-serif font-semibold text-base text-ink-heading group-hover:text-editorial-accent transition-colors leading-snug">
                <Link href={`/blog/${article.slug}`}>{article.title}</Link>
              </h3>
              <p className="text-xs text-ink-muted font-sans mt-1">
                By {article.author.name} • {formatDate(article.publishedAt)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

