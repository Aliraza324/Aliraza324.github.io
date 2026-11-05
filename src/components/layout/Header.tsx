'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, BookOpen, Rss } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-paper-50/95 backdrop-blur-md border-b border-ink-border transition-all">
      {/* Editorial masthead top tier */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left section: date stamp / issue */}
          <div className="hidden lg:flex items-center gap-3 text-xs font-mono text-ink-muted">
            <span>ISSUE NO. 11</span>
            <span className="text-ink-border">•</span>
            <span>NOVEMBER 5, 2026</span>
          </div>

          {/* Center: Brand identity */}
          <div className="flex flex-col items-center justify-center flex-1 lg:flex-none">
            <Link href="/" className="group flex flex-col items-center">
              <span className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-ink-heading group-hover:text-editorial-accent transition-colors">
                READORA
              </span>
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-ink-muted mt-0.5">
                The Digital Editorial
              </span>
            </Link>
          </div>

          {/* Right section: utility & search */}
          <div className="flex items-center gap-3">
            <Link
              href="/blog"
              className="p-2 text-ink-muted hover:text-ink-heading hover:bg-paper-100 rounded-full transition-colors"
              title="Search and Browse Articles"
              aria-label="Search and Browse Articles"
            >
              <Search className="w-5 h-5" />
            </Link>

            <Link
              href="/feed.xml"
              className="hidden sm:flex p-2 text-ink-muted hover:text-editorial-accent hover:bg-paper-100 rounded-full transition-colors"
              title="RSS Syndication Feed"
              aria-label="RSS Feed"
            >
              <Rss className="w-4 h-4" />
            </Link>

            <Link
              href="/blog"
              className="hidden md:inline-flex items-center gap-2 bg-ink-heading text-paper-50 px-4 py-2 rounded text-xs font-sans font-medium hover:bg-editorial-accent transition-colors shadow-sm"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Read Journal</span>
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-ink-muted hover:text-ink-heading rounded-md"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Lower tier: Desktop primary navigation */}
        <nav className="hidden md:flex items-center justify-center space-x-8 py-3 border-t border-ink-borderLight text-xs uppercase font-sans tracking-widest text-ink-muted font-medium">
          {siteConfig.navigation.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors py-1 hover:text-ink-heading ${
                  isActive
                    ? 'text-editorial-accent font-semibold border-b-2 border-editorial-accent'
                    : 'text-ink-muted'
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-ink-border bg-paper-50 px-4 pt-3 pb-6 space-y-3">
          <div className="text-[11px] font-mono text-ink-faint px-3 py-1">
            NAVIGATION
          </div>
          <div className="flex flex-col space-y-1">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-ink-heading hover:bg-paper-100 rounded transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="border-t border-ink-borderLight pt-3">
            <div className="text-[11px] font-mono text-ink-faint px-3 py-1">
              EDITORIAL CATEGORIES
            </div>
            <div className="flex flex-col space-y-1 mt-1">
              {siteConfig.categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/categories/${cat.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-1.5 text-xs text-ink-muted hover:text-editorial-accent hover:bg-paper-100 rounded transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-ink-borderLight pt-3 flex items-center justify-between px-3 text-xs text-ink-muted">
            <span>Issue Date: Nov 5, 2026</span>
            <Link
              href="/feed.xml"
              className="flex items-center gap-1 text-editorial-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Rss className="w-3.5 h-3.5" />
              <span>RSS Feed</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

