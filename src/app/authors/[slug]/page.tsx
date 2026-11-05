import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { authors, getAuthorBySlug } from '@/data/authors';
import { getPostsByAuthor } from '@/content/posts';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ArticleCard } from '@/components/blog/ArticleCard';
import { PersonJsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/siteConfig';
import { Twitter, Github, Linkedin, BookOpen, Sparkles } from 'lucide-react';

interface AuthorPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return authors.map((author) => ({
    slug: author.slug,
  }));
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const author = getAuthorBySlug(params.slug);

  if (!author) {
    return { title: 'Author Not Found' };
  }

  return {
    title: `${author.name} — ${author.role}`,
    description: author.bio,
    alternates: {
      canonical: `https://readora.me/authors/${author.slug}`,
    },
    openGraph: {
      title: `${author.name} — Readora Editorial`,
      description: author.bio,
      images: [
        {
          url: author.avatar.startsWith('http')
            ? author.avatar
            : `${siteConfig.url}${author.avatar}`,
        },
      ],
    },
  };
}

export default function AuthorPage({ params }: AuthorPageProps) {
  const author = getAuthorBySlug(params.slug);

  if (!author) {
    notFound();
  }

  const authorPosts = getPostsByAuthor(author.slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
      <PersonJsonLd author={author} />

      <Breadcrumbs
        items={[
          { label: 'Authors', href: '/authors' },
          { label: author.name },
        ]}
      />

      {/* Author Dossier Hero Card */}
      <div className="bg-white border border-ink-border rounded-xl p-8 sm:p-12 my-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden shrink-0 border-4 border-paper-100 shadow-md">
            <Image
              src={author.avatar}
              alt={author.name}
              fill
              sizes="144px"
              priority
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-editorial-accent font-semibold">
                  {author.role}
                </span>
                <h1 className="font-serif font-bold text-3xl sm:text-4xl text-ink-heading mt-0.5">
                  {author.name}
                </h1>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2">
                {author.social.twitter && (
                  <a
                    href={author.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${author.name}'s Twitter`}
                    className="w-8 h-8 rounded border border-ink-border bg-paper-50 flex items-center justify-center text-ink-muted hover:text-ink-heading hover:bg-paper-100 transition"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                {author.social.github && (
                  <a
                    href={author.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${author.name}'s GitHub`}
                    className="w-8 h-8 rounded border border-ink-border bg-paper-50 flex items-center justify-center text-ink-muted hover:text-ink-heading hover:bg-paper-100 transition"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {author.social.linkedin && (
                  <a
                    href={author.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${author.name}'s LinkedIn`}
                    className="w-8 h-8 rounded border border-ink-border bg-paper-50 flex items-center justify-center text-ink-muted hover:text-ink-heading hover:bg-paper-100 transition"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            <p className="font-serif text-base sm:text-lg text-ink-body leading-relaxed mb-6">
              {author.longBio}
            </p>

            <div className="pt-4 border-t border-ink-borderLight flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-ink-faint uppercase mr-2">
                Core Domains:
              </span>
              {author.expertise.map((skill) => (
                <span
                  key={skill}
                  className="bg-paper-100 border border-ink-borderLight text-ink-heading px-2.5 py-1 rounded text-xs font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Published Works by Author */}
      <section className="mt-14">
        <div className="flex items-center gap-2 pb-4 mb-8 border-b border-ink-border">
          <BookOpen className="w-5 h-5 text-editorial-accent" />
          <h2 className="font-serif font-bold text-2xl text-ink-heading">
            Published Essays by {author.name}
          </h2>
          <span className="text-xs font-mono text-ink-muted ml-auto">
            {authorPosts.length} Articles
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {authorPosts.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}

