import React from 'react';
import { SourceReference } from '@/types';
import { ExternalLink, BookCheck } from 'lucide-react';

export const SourcesList: React.FC<{ sources: SourceReference[] }> = ({ sources }) => {
  if (!sources || sources.length === 0) return null;

  return (
    <section className="bg-white border border-ink-border rounded-xl p-6 sm:p-8 my-10 shadow-xs">
      <div className="flex items-center gap-2 pb-3 mb-4 border-b border-ink-border">
        <BookCheck className="w-5 h-5 text-editorial-accent" />
        <h3 className="font-serif font-bold text-xl text-ink-heading">
          Research Citations & Verified Sources
        </h3>
      </div>
      <p className="text-xs text-ink-muted mb-4">
        Readora adheres to strict journalistic verification standards. This essay references the
        following verified research reports, academic standards, and public technical documents:
      </p>

      <ul className="space-y-3">
        {sources.map((source, index) => (
          <li
            key={index}
            className="flex items-start justify-between gap-3 p-3 rounded-lg bg-paper-50 border border-ink-borderLight text-xs hover:border-editorial-accent/40 transition"
          >
            <div>
              <p className="font-medium text-ink-heading font-serif">{source.title}</p>
              <p className="text-[11px] font-mono text-ink-muted mt-0.5">
                {source.publisher} {source.year ? `(${source.year})` : ''}
              </p>
            </div>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-editorial-accent hover:underline font-mono text-[11px] shrink-0 mt-0.5"
            >
              <span>Source</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

