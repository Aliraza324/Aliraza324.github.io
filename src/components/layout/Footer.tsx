import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';
import { Rss, ArrowUpRight, ShieldCheck, Mail, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = 2026;

  return (
    <footer className="bg-[#18181B] text-[#E4E4E7] border-t border-neutral-800 pt-16 pb-12 font-sans transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          {/* Col 1 & 2: Publication Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl font-bold tracking-tight text-white hover:text-editorial-accentLight transition-colors">
                READORA
              </span>
            </Link>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              An independent digital editorial publication analyzing advances in artificial
              intelligence, modern software architecture, cybersecurity, and capital-efficient
              online ventures.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Editorial Integrity First
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-amber-400" />
                Worldwide Distribution
              </span>
            </div>
            <div className="pt-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-700 px-3.5 py-2 rounded transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Editorial Inquiries & News Tips</span>
              </Link>
            </div>
          </div>

          {/* Col 3: Editorial Sections */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-300 font-semibold">
              Sections
            </h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              {siteConfig.categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Publication & Trust */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-300 font-semibold">
              Publication Trust
            </h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/authors" className="hover:text-white transition-colors">
                  Editorial Staff & Authors
                </Link>
              </li>
              <li>
                <Link href="/editorial-policy" className="hover:text-white transition-colors">
                  Editorial & AI Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Press
                </Link>
              </li>
              <li>
                <Link
                  href="/feed.xml"
                  className="inline-flex items-center gap-1.5 text-editorial-accentLight hover:text-white transition-colors font-medium"
                >
                  <Rss className="w-3.5 h-3.5" />
                  <span>RSS Feed</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Compliance & Legal */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-300 font-semibold">
              Legal & Compliance
            </h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  Disclaimer & Disclosures
                </Link>
              </li>
              <li>
                <a
                  href="/ads.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>ads.txt Registry</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>
            © {currentYear} Readora Media. All rights reserved. Content published under strict
            journalistic standards.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-neutral-300 transition-colors">
              Data Privacy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-neutral-300 transition-colors">
              User Agreement
            </Link>
            <Link href="/editorial-policy" className="hover:text-neutral-300 transition-colors">
              Ethics & Corrections
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

