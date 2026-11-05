import React from 'react';
import { Article } from '@/types';
import { ArticleCard } from '@/components/blog/ArticleCard';
import { Sparkles } from 'lucide-react';

export const RelatedArticles: React.FC<{ articles: Article[] }> = ({ articles }) => {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="my-16 pt-12 border-t border-ink-border">
      <div className="flex items-center gap-2 mb-8">
        <Sparkles className="w-5 h-5 text-editorial-accent" />
        <h3 className="font-serif font-bold text-2xl text-ink-heading tracking-tight">
          Related Editorial Analyses
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} compact showExcerpt={false} />
        ))}
      </div>
    </section>
  );
};

