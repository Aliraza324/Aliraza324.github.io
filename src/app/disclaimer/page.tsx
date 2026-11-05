import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclaimer & Professional Disclosures',
  description:
    'Readora’s editorial disclaimer outlining technical liability limits, advertising disclosures, and informational guidance.',
  alternates: {
    canonical: 'https://readora.me/disclaimer',
  },
};

export default function DisclaimerPage() {
  const lastUpdated = 'November 5, 2026';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
      <Breadcrumbs items={[{ label: 'Disclaimer', href: '/disclaimer' }]} />

      <header className="mb-10 pt-4">
        <div className="flex items-center gap-2 text-editorial-accent mb-2">
          <AlertCircle className="w-5 h-5" />
          <span className="text-xs font-mono uppercase tracking-widest font-semibold">
            Transparency & Disclosures
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink-heading mb-3">
          Disclaimer
        </h1>
        <p className="text-xs font-mono text-ink-muted">
          Last Updated: {lastUpdated} • Readora Editorial Board
        </p>
      </header>

      <div className="prose prose-lg max-w-none font-serif text-ink-body space-y-8">
        <p>
          The information provided by <strong>Readora</strong> on <code>https://readora.me</code> is
          for general educational and informational purposes only. All information on the site is
          provided in good faith; however, we make no representation or warranty of any kind, express
          or implied, regarding the accuracy, adequacy, validity, reliability, or completeness of any
          information on the site.
        </p>

        <h2 className="font-serif font-bold text-2xl text-ink-heading pt-4">
          1. Technical and Engineering Disclaimer
        </h2>
        <p>
          Our technical essays, code snippets, architecture diagrams, and optimization benchmarks
          reflect specific software versions, runtime environments, and testing conditions as of
          their publication date. Software systems, APIs, and security protocols evolve rapidly.
        </p>
        <p>
          Before implementing any architecture pattern, code refactor, or security procedure in a
          production environment, you must conduct thorough testing within your own isolated staging
          infrastructure. Readora and its authors assume no liability for service interruptions, data
          loss, or security breaches resulting from the application of concepts discussed on this
          platform.
        </p>

        <h2 className="font-serif font-bold text-2xl text-ink-heading pt-4">
          2. Cybersecurity and Defensive Guidance
        </h2>
        <p>
          All cybersecurity articles published on Readora (such as{' '}
          <Link href="/blog/how-to-build-a-secure-online-presence">
            How to Build a Secure Online Presence in 2026
          </Link>{' '}
          and{' '}
          <Link href="/blog/essential-cybersecurity-practices-for-everyday-internet-users">
            Essential Cybersecurity Practices for Everyday Internet Users
          </Link>
          ) are authored strictly for defensive, educational, and protective purposes. We strictly
          prohibit the use of any shared concepts for unauthorized intrusion, penetration testing
          without consent, or malicious activity.
        </p>

        <h2 className="font-serif font-bold text-2xl text-ink-heading pt-4">
          3. Advertising & Commercial Disclosures
        </h2>
        <p>
          Readora may display advertisements served by Google AdSense and other compliant advertising
          networks. These advertisements are clearly demarcated from editorial content using standard
          labels (&ldquo;Advertisement&rdquo; or &ldquo;Sponsor&rdquo;). We do not accept paid payment
          in exchange for positive reviews or biased technical evaluations.
        </p>
        <p>
          For more details on our advertising ethics and separation of commercial interests, please
          read our dedicated <Link href="/editorial-policy">Editorial Policy</Link>.
        </p>

        <h2 className="font-serif font-bold text-2xl text-ink-heading pt-4">
          4. External Sources & Third-Party Endorsements
        </h2>
        <p>
          Articles published on Readora contain citations to third-party research studies, W3C
          standards, and academic papers. These citations are included to provide scholarly provenance
          and do not constitute a mutual commercial endorsement between Readora and the referenced
          institutions.
        </p>
      </div>
    </div>
  );
}

