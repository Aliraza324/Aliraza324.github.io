import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { authors } from '@/data/authors';
import { getPostsByAuthor } from '@/content/posts';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Twitter, Github, Linkedin, ArrowRight, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Editorial Staff & Contributing Authors',
  description:
    'Meet the engineers, cybersecurity specialists, and technology journalists authoring Readora’s technical publications.',
  alternates: {
    canonical: 'https://readora.me/authors',
  },
};

export default function AuthorsIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
      <Breadcrumbs items={[{ label: 'Authors', href: '/authors' }]} />

      <header className="max-w-4xl mb-12 pt-4">
        <span className="text-xs font-mono uppercase tracking-widest text-editorial-accent font-semibold">
          Masthead & Bylines
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink-heading mt-2 mb-4">
          Editorial Staff & Contributing Authors
        </h1>
        <p className="text-sm sm:text-base text-ink-body font-sans leading-relaxed mb-4">
          Readora is published by an independent editorial team composed of software architects, privacy researchers,
          and seasoned technical essayists. We believe that credible technology analysis requires firsthand engineering
          experience combined with rigorous fact-checking and ethical transparency.
        </p>
        <p className="text-sm sm:text-base text-ink-muted font-sans leading-relaxed">
          Every author listed in our masthead maintains hands-on technical domain expertise in their respective coverage
          areas. Explore our writer dossiers below to learn more about each contributor’s background, specialized disciplines,
          academic citations, and full catalog of published technical essays.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {authors.map((author) => {
          const authorPosts = getPostsByAuthor(author.slug);

          return (
            <div
              key={author.id}
              className="bg-white border border-ink-border rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-editorial-accent/60 transition shadow-sm"
            >
              <div>
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-paper-100 mb-5 shadow-xs">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>

                <span className="text-[11px] font-mono text-editorial-accent uppercase tracking-wider font-semibold block mb-1">
                  {author.role}
                </span>

                <h2 className="font-serif font-bold text-2xl text-ink-heading mb-2 hover:text-editorial-accent transition">
                  <Link href={`/authors/${author.slug}`}>{author.name}</Link>
                </h2>

                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-6">
                  {author.bio}
                </p>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {author.expertise.map((item) => (
                    <span
                      key={item}
                      className="bg-paper-100 border border-ink-borderLight text-ink-heading px-2 py-0.5 rounded text-[10px] font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-ink-borderLight flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono text-ink-muted">
                  <BookOpen className="w-3.5 h-3.5 text-ink-faint" />
                  <span>{authorPosts.length} published essays</span>
                </div>

                <Link
                  href={`/authors/${author.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-mono text-editorial-accent font-semibold hover:underline"
                >
                  <span>View Bio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Author Byline & Review Standards */}
      <div className="mt-16 pt-12 border-t border-ink-border max-w-4xl">
        <h2 className="font-serif text-2xl font-bold text-ink-heading mb-4">
          Byline Transparency & E-E-A-T Standards
        </h2>
        <div className="space-y-4 text-sm text-ink-body font-sans leading-relaxed">
          <p>
            At Readora, every article is credited to a verified human writer who takes personal ownership
            over the technical accuracy and ethical stance of their work. We strictly avoid pseudonymous or
            unattributed publications.
          </p>
          <p className="text-ink-muted">
            Our contributors regularly update their publications as underlying software standards, foundation
            models, or security advisories evolve. If an article’s recommendations change, revisions are
            documented with clear update timestamps to ensure readers always access contemporary best practices.
          </p>
        </div>
      </div>
    </div>
  );
}

