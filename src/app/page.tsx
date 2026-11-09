import React from 'react';
import Link from 'next/link';
import {
  getFeaturedPost,
  getTrendingPosts,
  getEditorsPicks,
  getPublishedPosts,
} from '@/content/posts';
import { siteConfig } from '@/data/siteConfig';
import { FeaturedArticle } from '@/components/blog/FeaturedArticle';
import { ArticleCard } from '@/components/blog/ArticleCard';
import { TrendingStories } from '@/components/blog/TrendingStories';
import { NewsletterBox } from '@/components/newsletter/NewsletterBox';
import { HeaderAdSlot } from '@/components/ads/HeaderAdSlot';
import { ArrowRight, BookOpen, Layers, Award, Sparkles } from 'lucide-react';

export default function HomePage() {
  const featuredPost = getFeaturedPost();
  const trendingPosts = getTrendingPosts(4);
  const editorsPicks = getEditorsPicks(3);
  const allPosts = getPublishedPosts();
  const latestArticles = allPosts
    .filter((post) => post.id !== featuredPost.id)
    .slice(0, 4);

  // Group posts by primary category for category-based sections
  const aiPosts = allPosts
    .filter((p) => p.category === 'ai-and-technology')
    .slice(0, 2);
  const webDevPosts = allPosts
    .filter((p) => p.category === 'web-development-and-skills')
    .slice(0, 2);
  const businessPosts = allPosts
    .filter((p) => p.category === 'online-business')
    .slice(0, 2);

  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      {/* Optional Ad Slot (disabled by default for AdSense compliance) */}
      <HeaderAdSlot />

      {/* Main Editorial Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-paper-100 border border-ink-border px-3 py-1 rounded-full text-xs font-mono text-ink-muted mb-4">
            <Sparkles className="w-3.5 h-3.5 text-editorial-accent" />
            <span>Rigorous Technical Journalism • 2026 Edition</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-heading leading-tight">
            AI, Web Development &amp; Cybersecurity Insights
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-body font-sans leading-relaxed">
            Rigorous technical analysis and practical engineering guides on generative intelligence,
            Core Web Vitals, digital sovereignty, and sustainable online business.
          </p>
        </div>

        {/* Featured Lead Story */}
        <FeaturedArticle article={featuredPost} />
      </section>

      {/* Trending & Latest Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Latest Articles (8 cols) */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between pb-4 mb-8 border-b border-ink-border">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-editorial-accent" />
                <h2 className="font-serif font-bold text-2xl text-ink-heading tracking-tight">
                  Latest Dispatches
                </h2>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-editorial-accent font-semibold hover:underline"
              >
                <span>Browse All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {latestArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Trending Stories Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <TrendingStories articles={trendingPosts} />
            <NewsletterBox
              compact
              title="Weekly Dispatch"
              description="Direct to your inbox every Tuesday morning. Curated, high-signal, zero fluff."
            />
          </div>
        </div>
      </section>

      {/* Category Spotlight Section 1: AI & Engineering */}
      <section className="bg-paper-100/60 border-y border-ink-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-editorial-accent font-semibold">
                Section Focus
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ink-heading tracking-tight mt-1">
                Artificial Intelligence & Modern Architecture
              </h2>
            </div>
            <Link
              href="/categories/ai-and-technology"
              className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-ink-heading font-semibold hover:text-editorial-accent transition"
            >
              <span>Explore Section</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiPosts.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Editor's Picks Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pb-4 mb-8 border-b border-ink-border">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-editorial-accent" />
            <h2 className="font-serif font-bold text-2xl text-ink-heading tracking-tight">
              Editor’s Selection
            </h2>
          </div>
          <span className="text-xs font-mono text-ink-muted">Curated by Ali Raza</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {editorsPicks.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Popular Topics / Category Badges Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-ink-border rounded-xl p-8 sm:p-10">
          <div className="flex items-center gap-2 mb-6">
            <Layers className="w-5 h-5 text-editorial-accent" />
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-ink-heading">
              Explore Editorial Topics
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteConfig.categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="group p-4 rounded-lg border border-ink-border hover:border-editorial-accent/60 bg-paper-50 hover:bg-white transition-all shadow-xs"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif font-bold text-base text-ink-heading group-hover:text-editorial-accent transition-colors">
                    {cat.name}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-ink-muted group-hover:text-editorial-accent group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-xs text-ink-muted leading-relaxed line-clamp-2">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width Newsletter Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterBox />
      </section>
    </div>
  );
}

