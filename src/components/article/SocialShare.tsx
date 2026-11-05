'use client';

import React, { useState } from 'react';
import { Share2, Check, Copy, Twitter, Linkedin, Facebook } from 'lucide-react';

interface SocialShareProps {
  title: string;
  url: string;
  className?: string;
}

export const SocialShare: React.FC<SocialShareProps> = ({ title, url, className = '' }) => {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted mr-1 flex items-center gap-1">
        <Share2 className="w-3.5 h-3.5 text-editorial-accent" />
        Share:
      </span>

      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X / Twitter"
        className="w-8 h-8 rounded-full border border-ink-border bg-white flex items-center justify-center text-ink-muted hover:text-ink-heading hover:bg-paper-100 transition shadow-xs"
      >
        <Twitter className="w-3.5 h-3.5" />
      </a>

      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="w-8 h-8 rounded-full border border-ink-border bg-white flex items-center justify-center text-ink-muted hover:text-ink-heading hover:bg-paper-100 transition shadow-xs"
      >
        <Linkedin className="w-3.5 h-3.5" />
      </a>

      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="w-8 h-8 rounded-full border border-ink-border bg-white flex items-center justify-center text-ink-muted hover:text-ink-heading hover:bg-paper-100 transition shadow-xs"
      >
        <Facebook className="w-3.5 h-3.5" />
      </a>

      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy article link"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-ink-border bg-white text-xs font-mono text-ink-heading hover:bg-paper-100 transition shadow-xs"
      >
        {copied ? (
          <>
            <Check className="w-3 h-3 text-emerald-600" />
            <span className="text-[11px] text-emerald-700 font-semibold">Copied</span>
          </>
        ) : (
          <>
            <Copy className="w-3 h-3 text-ink-muted" />
            <span className="text-[11px]">Copy Link</span>
          </>
        )}
      </button>
    </div>
  );
};

