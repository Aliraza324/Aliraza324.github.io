import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { authors } from '@/data/authors';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ShieldCheck, BookOpen, Compass, Award, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — Editorial Mission & Standards',
  description:
    'Discover Readora’s editorial mission, our independent research principles, and the team behind our technical publications.',
  alternates: {
    canonical: 'https://readora.me/about',
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
      <Breadcrumbs items={[{ label: 'About Readora', href: '/about' }]} />

      <header className="mb-12 pt-4">
        <span className="text-xs font-mono uppercase tracking-widest text-editorial-accent font-semibold">
          Editorial Mission
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink-heading mt-2 mb-6">
          Architecting clarity in a noisy digital landscape.
        </h1>
        <p className="font-serif text-lg sm:text-xl text-ink-muted leading-relaxed">
          Readora was established to provide rigorous, long-form technical analysis, architectural
          blueprints, and clear editorial perspectives for software engineers, digital founders, and
          discerning technology leaders.
        </p>
      </header>

      {/* Featured Editorial Photography */}
      <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-12 border border-ink-border bg-paper-100 shadow-sm">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
          alt="Modern architectural editorial workspace emphasizing clarity and focus"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 896px"
          className="object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none font-serif text-ink-body space-y-8">
        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ink-heading">
          Our Founding Principles
        </h2>
        <p>
          In an era where algorithmic search and social media prioritize ephemeral sensationalism and
          automated superficial summaries, deep technical comprehension has become an increasingly
          rare commodity. Knowledge workers are inundated with synthetic snippets that explain the
          &ldquo;what&rdquo; but fail to clarify the &ldquo;why&rdquo; and the architectural
          &ldquo;how.&rdquo;
        </p>
        <p>
          Readora was conceived as an antidote to disposable content. Every article published in our
          journal undergoes meticulous technical research, firsthand benchmarking, and line-by-line
          editorial verification. We do not publish speculative hype, fabricated statistics, or
          shallow rewrites.
        </p>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10 not-prose font-sans">
          <div className="p-6 rounded-lg bg-white border border-ink-border">
            <ShieldCheck className="w-6 h-6 text-editorial-accent mb-3" />
            <h3 className="font-serif font-bold text-lg text-ink-heading mb-1">
              Verifiable Rigor
            </h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              Every technical claim is backed by reproducible benchmarks, official standards
              specifications, and verifiable primary source documentation.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-white border border-ink-border">
            <Compass className="w-6 h-6 text-editorial-accent mb-3" />
            <h3 className="font-serif font-bold text-lg text-ink-heading mb-1">
              Editorial Independence
            </h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              Our coverage is never dictated by advertisers or venture capital interests. We
              maintain strict separation between editorial content and programmatic monetization.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-white border border-ink-border">
            <BookOpen className="w-6 h-6 text-editorial-accent mb-3" />
            <h3 className="font-serif font-bold text-lg text-ink-heading mb-1">
              Human-in-the-Loop Craft
            </h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              While we study and leverage modern AI tooling as an administrative assistant, our
              editorial voice, ethical decisions, and domain judgment remain strictly human.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-white border border-ink-border">
            <Award className="w-6 h-6 text-editorial-accent mb-3" />
            <h3 className="font-serif font-bold text-lg text-ink-heading mb-1">
              Sustainable Technology
            </h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              We champion lean web standards, minimal client-side overhead, sub-second latency, and
              responsible data governance for both users and businesses.
            </p>
          </div>
        </div>

        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ink-heading pt-4">
          Meet Our Editorial Staff
        </h2>
        <p>
          Readora is authored by practicing software engineers, cybersecurity consultants, and
          experienced technology essayists:
        </p>

        {/* Authors Cards */}
        <div className="space-y-6 my-8 not-prose">
          {authors.map((author) => (
            <div
              key={author.id}
              className="p-6 bg-white border border-ink-border rounded-xl flex flex-col sm:flex-row gap-5 items-start"
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border border-ink-border">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="font-serif font-bold text-lg text-ink-heading">
                    <Link
                      href={`/authors/${author.slug}`}
                      className="hover:text-editorial-accent transition"
                    >
                      {author.name}
                    </Link>
                  </h3>
                  <span className="text-xs font-mono text-editorial-accent font-medium">
                    {author.role}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-3">
                  {author.longBio}
                </p>
                <Link
                  href={`/authors/${author.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-mono text-ink-heading hover:text-editorial-accent font-semibold"
                >
                  <span>Read Author Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ink-heading pt-4">
          Contact & Transparency
        </h2>
        <p>
          We welcome thoughtful critiques, corrections, and research submissions. For inquiries
          regarding editorial submissions, press, or syndication rights, please visit our dedicated{' '}
          <Link href="/contact" className="text-editorial-accent underline">
            Contact Portal
          </Link>{' '}
          or review our published{' '}
          <Link href="/editorial-policy" className="text-editorial-accent underline">
            Editorial and Corrections Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

