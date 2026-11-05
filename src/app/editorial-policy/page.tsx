import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BookOpen, CheckCircle, Scale, Sparkles, RefreshCw } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Editorial Policy, AI Disclosure & Corrections',
  description:
    'Readora’s journalistic code of ethics, AI disclosure guidelines, fact-checking methodology, and corrections process.',
  alternates: {
    canonical: 'https://readora.me/editorial-policy',
  },
};

export default function EditorialPolicyPage() {
  const lastUpdated = 'November 5, 2026';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
      <Breadcrumbs items={[{ label: 'Editorial Policy', href: '/editorial-policy' }]} />

      <header className="mb-10 pt-4">
        <div className="flex items-center gap-2 text-editorial-accent mb-2">
          <Scale className="w-5 h-5" />
          <span className="text-xs font-mono uppercase tracking-widest font-semibold">
            Journalistic Standards
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink-heading mb-3">
          Editorial & Ethics Policy
        </h1>
        <p className="text-xs font-mono text-ink-muted">
          Last Reviewed: {lastUpdated} • Readora Editorial Board
        </p>
      </header>

      <div className="prose prose-lg max-w-none font-serif text-ink-body space-y-8">
        <p>
          At <strong>Readora</strong>, we believe that high-quality technical journalism requires an
          uncompromising commitment to accuracy, intellectual integrity, and reader transparency. This
          document establishes the operational guidelines that govern our editorial staff,
          contributors, and publishing workflows.
        </p>

        <h2 className="font-serif font-bold text-2xl text-ink-heading pt-4 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-editorial-accent not-prose" />
          <span>1. Responsible AI Assistance & Technology Disclosure</span>
        </h2>
        <p>
          In accordance with modern publishing standards, we believe in radical transparency
          regarding the use of synthetic intelligence tools. 
        </p>
        <div className="bg-paper-100 border border-ink-border rounded-lg p-5 not-prose font-sans text-xs sm:text-sm text-ink-body space-y-2">
          <p className="font-semibold text-ink-heading font-serif text-base">
            Our Official AI Disclosure Policy:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-ink-muted">
            <li>
              <strong>Augmentation, Not Substitution:</strong> Readora uses artificial intelligence
              strictly as an editorial assistant—for outlining research frameworks, verifying
              spelling and syntax, and formatting structured data tables.
            </li>
            <li>
              <strong>Mandatory Human Authorship & Review:</strong> Every article published on
              Readora is researched, structured, synthesized, and verified by an accountable human
              author. We strictly prohibit the publication of uncurated, auto-generated synthetic text.
            </li>
            <li>
              <strong>No Fabricated Content:</strong> We never use AI to fabricate quotes, simulate
              expert credentials, or generate unverified news announcements.
            </li>
          </ul>
        </div>

        <h2 className="font-serif font-bold text-2xl text-ink-heading pt-4 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-editorial-accent not-prose" />
          <span>2. Fact-Checking & Primary Source Verification</span>
        </h2>
        <p>
          Technical accuracy is our highest priority. Before any article or architectural guide is
          cleared for publication:
        </p>
        <ul>
          <li>
            <strong>Primary Source Citation:</strong> All claims regarding standards (such as W3C,
            IETF, or NIST guidelines) must link directly to the official specification or white paper.
          </li>
          <li>
            <strong>Code Verification:</strong> Code snippets and configuration manifests are tested in
            clean, isolated runtime environments to ensure syntax accuracy and reproducibility.
          </li>
          <li>
            <strong>Date Integrity:</strong> All publications reflect genuine, verifiable release
            timelines. We do not alter dates to mislead search engines or artificially inflate
            freshness metrics.
          </li>
        </ul>

        <h2 className="font-serif font-bold text-2xl text-ink-heading pt-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-editorial-accent not-prose" />
          <span>3. Advertising Independence & Commercial Separation</span>
        </h2>
        <p>
          To maintain credibility with our readers, Readora enforces strict structural separation
          between our editorial board and commercial revenue:
        </p>
        <ul>
          <li>
            <strong>Zero Editorial Interference:</strong> Advertisers and sponsors have zero influence
            over our article topics, editorial tone, or technical evaluations.
          </li>
          <li>
            <strong>No Paid Positive Coverage:</strong> We never accept financial compensation in
            exchange for favorable product reviews or omitting technical limitations.
          </li>
          <li>
            <strong>Clear Demarcation:</strong> All advertisement placements (such as Google AdSense
            units) are clearly identified with standard labels. We reject deceptive formats, native ad
            spoofing, or intrusive popups that compromise reader experience.
          </li>
        </ul>

        <h2 className="font-serif font-bold text-2xl text-ink-heading pt-4 flex items-center gap-2">
          <RefreshCw className="w-6 h-6 text-editorial-accent not-prose" />
          <span>4. Corrections and Updates Protocol</span>
        </h2>
        <p>
          Despite rigorous review, errors can occasionally occur. When an error of fact or code syntax
          is identified, we correct it promptly and transparently:
        </p>
        <ul>
          <li>
            <strong>Minor Typos:</strong> Grammatical and typographical corrections are made silently.
          </li>
          <li>
            <strong>Substantive Corrections:</strong> When a factual error, outdated benchmark, or
            technical inaccuracy is modified, an explicit correction note is appended to the article
            specifying what was altered and why.
          </li>
          <li>
            <strong>Reporting Errors:</strong> Readers who identify errors are encouraged to submit
            them directly through our{' '}
            <Link href="/contact" className="text-editorial-accent underline">
              Corrections Desk
            </Link>
            .
          </li>
        </ul>
      </div>
    </div>
  );
}

