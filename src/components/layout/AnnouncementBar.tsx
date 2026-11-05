import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-ink-heading text-paper-50 px-4 py-2 text-xs font-sans border-b border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="inline-flex items-center gap-1 bg-editorial-accent text-white px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider font-semibold">
            <Sparkles className="w-3 h-3" />
            Special Report
          </span>
          <span className="text-neutral-300 hidden sm:inline">
            November 2026 Editorial Review:
          </span>
          <span className="text-white font-medium truncate">
            How AI Tools Are Changing Everyday Digital Work
          </span>
        </div>
        <Link
          href="/blog/how-ai-tools-are-changing-everyday-digital-work-in-2026"
          className="inline-flex items-center gap-1 text-editorial-accentLight hover:text-white transition-colors ml-4 shrink-0 font-medium"
        >
          <span>Read Essay</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
};

