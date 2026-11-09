import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/siteConfig';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export const Breadcrumbs: React.FC<{
  items: BreadcrumbItem[];
  currentUrl?: string;
}> = ({ items, currentUrl }) => {
  const jsonLdItems = [
    { name: 'Home', url: siteConfig.url },
    ...items.map((item, index) => {
      const isLast = index === items.length - 1;
      let url = siteConfig.url;
      if (item.href) {
        url = item.href.startsWith('http') ? item.href : `${siteConfig.url}${item.href}`;
      } else if (isLast && currentUrl) {
        url = currentUrl.startsWith('http') ? currentUrl : `${siteConfig.url}${currentUrl}`;
      }
      return {
        name: item.label,
        url,
      };
    }),
  ];

  return (
    <>
      <BreadcrumbJsonLd items={jsonLdItems} />
      <nav aria-label="Breadcrumbs" className="py-3 text-xs font-sans text-ink-muted">
        <ol className="flex items-center flex-wrap gap-1.5">
          <li className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-ink-heading transition-colors"
              title="Home"
            >
              <Home className="w-3.5 h-3.5" />
              <span className="sr-only">Home</span>
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-ink-faint shrink-0" />
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-ink-heading transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-ink-heading font-medium truncate max-w-[200px] sm:max-w-xs md:max-w-md">
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

