import { Author } from '@/data/authors';

export interface SourceReference {
  title: string;
  url: string;
  publisher?: string;
  year?: string | number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // Rich markdown or structured HTML
  category: string; // slug e.g. 'ai-and-technology'
  categoryName: string;
  tags: string[];
  author: Author;
  publishedAt: string; // ISO string '2026-11-05T08:00:00Z'
  updatedAt?: string;
  featuredImage: string;
  imageAlt: string;
  readingTime: number; // in minutes
  seoTitle: string;
  seoDescription: string;
  canonicalUrl: string;
  sources: SourceReference[];
  status: 'published' | 'draft';
  faqs?: FaqItem[];
  tableOfContents: TocItem[];
  featured?: boolean;
  trending?: boolean;
  editorsPick?: boolean;
}

export type Category = {
  name: string;
  slug: string;
  description: string;
  accentColor: string;
};

