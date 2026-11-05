import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allPosts, getPostBySlug, getRelatedPosts } from '@/content/posts';
import { formatDate } from '@/lib/utils';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { TableOfContents } from '@/components/article/TableOfContents';
import { SocialShare } from '@/components/article/SocialShare';
import { AuthorBio } from '@/components/article/AuthorBio';
import { SourcesList } from '@/components/article/SourcesList';
import { FaqSection } from '@/components/article/FaqSection';
import { ArticleBody } from '@/components/article/ArticleBody';
import { RelatedArticles } from '@/components/article/RelatedArticles';
import { NewsletterBox } from '@/components/newsletter/NewsletterBox';
import { InArticleAdSlot, SidebarAdSlot } from '@/components/ads/InArticleAdSlot';
import { ArticleJsonLd } from '@/components/seo/JsonLd';
import { Clock, Calendar, RefreshCw } from 'lucide-react';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = getPostBySlug(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: {
      absolute: article.seoTitle,
    },
    description: article.seoDescription,
    authors: [{ name: article.author.name, url: `https://readora.me/authors/${article.author.slug}` }],
    alternates: {
      canonical: article.canonicalUrl,
    },
    openGraph: {
      type: 'article',
      url: article.canonicalUrl,
      title: article.title,
      description: article.seoDescription,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
      section: article.categoryName,
      tags: article.tags,
      images: [
        {
          url: article.featuredImage,
          width: 1200,
          height: 630,
          alt: article.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.seoDescription,
      images: [article.featuredImage],
    },
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getPostBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedPosts(article, 3);

  return (
    <article className="min-h-screen pb-16">
      <ArticleJsonLd article={article} />

      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            { label: 'Articles', href: '/blog' },
            { label: article.categoryName, href: `/categories/${article.category}` },
            { label: article.title },
          ]}
        />
      </div>

      {/* Article Header Container */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
        {/* Category Pill */}
        <div className="mb-4">
          <Link
            href={`/categories/${article.category}`}
            className="inline-block bg-paper-100 hover:bg-paper-200 text-editorial-accent border border-ink-borderLight px-3 py-1 rounded text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
          >
            {article.categoryName}
          </Link>
        </div>

        {/* H1 Heading */}
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink-heading leading-[1.15] mb-6">
          {article.title}
        </h1>

        {/* Subtitle / Excerpt */}
        <p className="font-serif text-lg sm:text-xl text-ink-muted leading-relaxed mb-8">
          {article.excerpt}
        </p>

        {/* Metadata & Author Bar */}
        <div className="pt-6 border-t border-ink-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Author */}
          <Link
            href={`/authors/${article.author.slug}`}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-ink-border">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink-heading group-hover:text-editorial-accent transition-colors">
                {article.author.name}
              </p>
              <p className="text-xs text-ink-muted">{article.author.role}</p>
            </div>
          </Link>

          {/* Dates & Reading Time */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-ink-muted">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-ink-faint" />
              <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
            </span>

            {article.updatedAt && (
              <span className="flex items-center gap-1 text-[11px] text-ink-faint hidden md:flex">
                <RefreshCw className="w-3 h-3" />
                Updated {formatDate(article.updatedAt)}
              </span>
            )}

            <span>•</span>

            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-ink-faint" />
              {article.readingTime} min read
            </span>
          </div>
        </div>

        {/* Social Share Bar */}
        <div className="mt-6 pt-4 border-t border-ink-borderLight flex items-center justify-between">
          <SocialShare title={article.title} url={article.canonicalUrl} />
        </div>
      </header>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-paper-100 border border-ink-border shadow-sm">
          <Image
            src={article.featuredImage}
            alt={article.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
        <p className="text-[11px] font-mono text-ink-faint text-center mt-2.5">
          {article.imageAlt}
        </p>
      </div>

      {/* Article Body Grid (TOC on Left/Right, Content in Center) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content Column (8 cols) */}
          <div className="lg:col-span-8 lg:order-1">
            {/* Structured Article Body */}
            <ArticleBody content={article.content} />

            {/* In-Article Ad Slot (disabled by default) */}
            <InArticleAdSlot />

            {/* FAQs Section */}
            <FaqSection faqs={article.faqs} />

            {/* Research Citations & Sources */}
            <SourcesList sources={article.sources} />

            {/* Tags Pill Bar */}
            <div className="my-8 pt-6 border-t border-ink-borderLight flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-ink-faint mr-1">
                Topics:
              </span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white border border-ink-border px-2.5 py-1 rounded text-xs font-mono text-ink-muted hover:border-editorial-accent transition"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Social Share Bottom */}
            <div className="p-4 bg-paper-100/60 border border-ink-border rounded-lg my-8 flex items-center justify-between">
              <span className="text-xs font-serif italic text-ink-heading">
                Enjoyed this analysis? Share with your colleagues:
              </span>
              <SocialShare title={article.title} url={article.canonicalUrl} />
            </div>

            {/* Author Biography Card */}
            <AuthorBio author={article.author} />

            {/* Newsletter CTA */}
            <NewsletterBox
              title="Never Miss a Technical Briefing"
              description="Join engineering leads, technology founders, and researchers receiving Readora's verified dispatches."
              className="my-10"
            />
          </div>

          {/* Sticky Sidebar (4 cols) */}
          <aside className="lg:col-span-4 lg:order-2 space-y-8">
            <TableOfContents items={article.tableOfContents} />
            <SidebarAdSlot />
          </aside>
        </div>

        {/* Related Articles Section */}
        <RelatedArticles articles={relatedArticles} />
      </div>
    </article>
  );
}

