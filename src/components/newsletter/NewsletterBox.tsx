'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';

interface NewsletterBoxProps {
  title?: string;
  description?: string;
  compact?: boolean;
  className?: string;
}

export const NewsletterBox: React.FC<NewsletterBoxProps> = ({
  title = 'The Readora Dispatch',
  description = 'A weekly, curated briefing on artificial intelligence, modern engineering standards, and high-leverage workflows. No spam, ever.',
  compact = false,
  className = '',
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('loading');
    // Simulate real client submission with immediate responsive feedback
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 600);
  };

  if (status === 'success') {
    return (
      <div
        className={`bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-lg p-6 text-center ${className}`}
      >
        <div className="flex justify-center mb-3">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>
        <h4 className="font-serif font-bold text-lg text-emerald-950 mb-1">
          Welcome to the Dispatch
        </h4>
        <p className="text-xs text-emerald-800 max-w-sm mx-auto">
          You are now subscribed to Readora Editorial. Our weekly technical briefing arrives every
          Tuesday morning.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`bg-paper-100 border border-ink-border rounded-lg ${
        compact ? 'p-5' : 'p-8 sm:p-10'
      } ${className}`}
    >
      <div className="flex items-center gap-2 mb-2 text-editorial-accent">
        <Mail className="w-4 h-4" />
        <span className="text-[11px] font-mono uppercase tracking-widest font-semibold">
          Editorial Briefing
        </span>
      </div>

      <h3
        className={`font-serif font-bold text-ink-heading tracking-tight ${
          compact ? 'text-xl' : 'text-2xl sm:text-3xl'
        }`}
      >
        {title}
      </h3>
      <p className="text-ink-muted text-xs sm:text-sm mt-2 mb-6 max-w-xl leading-relaxed">
        {description}
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') setStatus('idle');
          }}
          placeholder="your.email@organization.com"
          required
          aria-label="Email address"
          className="flex-1 bg-white border border-ink-border px-4 py-2.5 rounded text-sm text-ink-heading placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-editorial-accent focus:border-transparent transition"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center gap-2 bg-ink-heading text-white px-5 py-2.5 rounded text-xs font-sans font-medium hover:bg-editorial-accent active:bg-editorial-accentDark transition-colors disabled:opacity-50 shrink-0"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span>Subscribing...</span>
            </>
          ) : (
            <>
              <span>Subscribe</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </form>

      {status === 'error' && (
        <p className="text-red-600 text-xs mt-2 font-medium">{errorMessage}</p>
      )}

      <p className="text-[11px] text-ink-faint mt-3">
        Zero spam. Strictly technical and editorial insights. Unsubscribe at any time.
      </p>
    </div>
  );
};

