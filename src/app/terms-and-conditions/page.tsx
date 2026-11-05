import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms and Conditions — User Agreement',
  description:
    'Readora’s terms and conditions outlining usage rights, intellectual property ownership, and user responsibilities.',
  alternates: {
    canonical: 'https://readora.me/terms-and-conditions',
  },
};

export default function TermsPage() {
  const lastUpdated = 'November 5, 2026';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
      <Breadcrumbs items={[{ label: 'Terms and Conditions', href: '/terms-and-conditions' }]} />

      <header className="mb-10 pt-4">
        <div className="flex items-center gap-2 text-editorial-accent mb-2">
          <FileText className="w-5 h-5" />
          <span className="text-xs font-mono uppercase tracking-widest font-semibold">
            Legal Terms
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink-heading mb-3">
          Terms & Conditions
        </h1>
        <p className="text-xs font-mono text-ink-muted">
          Last Updated: {lastUpdated} • Readora Media
        </p>
      </header>

      <div className="prose prose-lg max-w-none font-serif text-ink-body space-y-8">
        <p>
          Welcome to <strong>Readora</strong>. By accessing or using our website located at{' '}
          <code>https://readora.me</code> (the &ldquo;Service&rdquo;), you agree to be bound by these
          Terms and Conditions. If you disagree with any part of these terms, you must discontinue
          access immediately.
        </p>

        <h2 className="font-serif font-bold text-2xl text-ink-heading pt-4">
          1. Intellectual Property Rights
        </h2>
        <p>
          Unless otherwise explicitly stated, Readora Media and/or its licensors own the
          intellectual property rights for all material, code, essays, and designs published on
          Readora. All intellectual property rights are reserved.
        </p>
        <p>You may view and print pages from Readora for your own personal, non-commercial use, subject to the following restrictions:</p>
        <ul>
          <li>You must not republish material from Readora without prior written consent and canonical attribution.</li>
          <li>You must not sell, rent, or sub-license material from Readora.</li>
          <li>You must not reproduce, duplicate, or copy material from Readora for commercial syndication without a valid licensing agreement.</li>
        </ul>

        <h2 className="font-serif font-bold text-2xl text-ink-heading pt-4">
          2. Prohibited Conduct & Fair Use
        </h2>
        <p>When interacting with our platform, you agree not to:</p>
        <ul>
          <li>Deploy automated scrapers, data-mining spiders, or extraction scripts without respecting our <code>robots.txt</code> directives.</li>
          <li>Attempt to compromise the security, integrity, or availability of our servers or networks.</li>
          <li>Submit abusive, defamatory, or fraudulent messages through our <Link href="/contact">Contact Form</Link>.</li>
          <li>Engage in any activity that circumvents our access controls or causes harm to other users.</li>
        </ul>

        <h2 className="font-serif font-bold text-2xl text-ink-heading pt-4">
          3. Informational Nature of Technical Editorial
        </h2>
        <p>
          The content on Readora is provided strictly for educational and informational purposes. While
          our articles explore software engineering patterns, cybersecurity practices, and business
          economics, they do not constitute individualized legal, financial, or engineering advice.
          Always conduct independent validation before deploying code or security configurations into
          mission-critical production environments.
        </p>

        <h2 className="font-serif font-bold text-2xl text-ink-heading pt-4">
          4. External References and Third-Party Links
        </h2>
        <p>
          Readora includes hyperlinks to external third-party research papers, open-source repositories,
          and reference specifications. We have no control over the content, privacy practices, or
          availability of external websites and assume no liability for third-party materials.
        </p>

        <h2 className="font-serif font-bold text-2xl text-ink-heading pt-4">
          5. Limitation of Liability
        </h2>
        <p>
          In no event shall Readora, its directors, writers, or contributors be held liable for any
          indirect, consequential, or incidental damages arising out of or in connection with your use
          of the platform or reliance on published materials.
        </p>

        <h2 className="font-serif font-bold text-2xl text-ink-heading pt-4">
          6. Modifications to Terms
        </h2>
        <p>
          We reserve the right to revise these Terms and Conditions at any time. By continuing to use
          the Service after revisions become effective, you agree to be bound by the updated terms.
        </p>

        <h2 className="font-serif font-bold text-2xl text-ink-heading pt-4">
          7. Governing Law
        </h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of the
          State of California, United States, without regard to its conflict of law provisions.
        </p>
      </div>
    </div>
  );
}

