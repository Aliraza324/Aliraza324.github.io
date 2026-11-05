'use client';

import React, { useState, useEffect } from 'react';
import { TocItem } from '@/types';
import { List } from 'lucide-react';

export const TableOfContents: React.FC<{ items: TocItem[] }> = ({ items }) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const headings = items.map((item) => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 140;

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        if (heading && heading.offsetTop <= scrollPosition) {
          setActiveId(heading.id);
          return;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Table of Contents"
      className="bg-white border border-ink-border rounded-xl p-5 sticky top-28 shadow-xs"
    >
      <div className="flex items-center gap-2 pb-3 mb-3 border-b border-ink-borderLight text-ink-heading font-serif font-bold text-sm">
        <List className="w-4 h-4 text-editorial-accent" />
        <span>In This Article</span>
      </div>

      <ul className="space-y-2 text-xs font-sans">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li
              key={item.id}
              style={{ paddingLeft: item.level === 3 ? '0.75rem' : '0' }}
            >
              <a
                href={`#${item.id}`}
                className={`block py-1 transition-colors leading-snug ${
                  isActive
                    ? 'text-editorial-accent font-semibold'
                    : 'text-ink-muted hover:text-ink-heading'
                }`}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

