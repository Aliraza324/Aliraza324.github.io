import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Author } from '@/data/authors';
import { Twitter, Github, Linkedin, ArrowRight } from 'lucide-react';

export const AuthorBio: React.FC<{ author: Author }> = ({ author }) => {
  return (
    <div className="bg-paper-100 border border-ink-border rounded-xl p-6 sm:p-8 my-10">
      <div className="flex flex-col sm:flex-row gap-5 items-start">
        <Link
          href={`/authors/${author.slug}`}
          className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm"
        >
          <Image
            src={author.avatar}
            alt={author.name}
            fill
            sizes="80px"
            className="object-cover"
          />
        </Link>

        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-editorial-accent font-semibold">
                Written By
              </span>
              <h4 className="font-serif font-bold text-xl text-ink-heading">
                <Link
                  href={`/authors/${author.slug}`}
                  className="hover:text-editorial-accent transition-colors"
                >
                  {author.name}
                </Link>
              </h4>
              <p className="text-xs text-ink-muted">{author.role}</p>
            </div>

            <div className="flex items-center gap-2">
              {author.social.twitter && (
                <a
                  href={author.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${author.name}'s Twitter`}
                  className="w-7 h-7 rounded border border-ink-border bg-white flex items-center justify-center text-ink-muted hover:text-ink-heading hover:bg-paper-50 transition"
                >
                  <Twitter className="w-3.5 h-3.5" />
                </a>
              )}
              {author.social.github && (
                <a
                  href={author.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${author.name}'s GitHub`}
                  className="w-7 h-7 rounded border border-ink-border bg-white flex items-center justify-center text-ink-muted hover:text-ink-heading hover:bg-paper-50 transition"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}
              {author.social.linkedin && (
                <a
                  href={author.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${author.name}'s LinkedIn`}
                  className="w-7 h-7 rounded border border-ink-border bg-white flex items-center justify-center text-ink-muted hover:text-ink-heading hover:bg-paper-50 transition"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-ink-body leading-relaxed mb-4">
            {author.longBio}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-ink-borderLight">
            <div className="flex flex-wrap gap-1.5">
              {author.expertise.map((skill) => (
                <span
                  key={skill}
                  className="bg-white border border-ink-borderLight text-ink-muted px-2 py-0.5 rounded text-[10px] font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>

            <Link
              href={`/authors/${author.slug}`}
              className="inline-flex items-center gap-1 text-xs font-mono text-editorial-accent font-semibold hover:underline"
            >
              <span>View all articles</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

