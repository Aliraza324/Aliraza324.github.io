import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Shield, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Protection',
  description:
    'Readora’s comprehensive privacy policy detailing our data practices, cookie disclosures, advertising technologies, and international privacy rights.',
  alternates: {
    canonical: 'https://readora.me/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'November 5, 2026';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
      <Breadcrumbs items={[{ label: 'Privacy Policy', href: '/privacy-policy' }]} />

      <header className="mb-10 pt-4">
        <div className="flex items-center gap-2 text-editorial-accent mb-2">
          <Shield className="w-5 h-5" />
          <span className="text-xs font-mono uppercase tracking-widest font-semibold">
            Legal & Data Compliance
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink-heading mb-3">
          Privacy Policy
        </h1>
        <p className="text-xs font-mono text-ink-muted">
          Effective Date: November 5, 2026 • Last Reviewed: {lastUpdated}
        </p>
      </header>

      <div className="prose prose-lg max-w-none font-serif text-ink-body space-y-8">
        <p>
          At <strong>Readora</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;),
          accessible from <code>https://readora.me</code>, the privacy of our visitors is of paramount
          importance. This Privacy Policy document outlines the types of personal information that is
          received and collected by Readora and how it is used.
        </p>
        <p>
          If you have additional questions or require more information about our Privacy Policy, do not
          hesitate to contact our Data Protection Officer at{' '}
          <a href="mailto:contact@readora.me" className="text-editorial-accent underline">
            contact@readora.me
          </a>
          .
        </p>

        <h2 className="font-serif font-bold text-2xl text-ink-heading pt-4">
          1. Information We Collect
        </h2>
        <p>
          We adhere to the principle of <strong>data minimization</strong>. We only collect
          information that is strictly necessary to deliver high-quality editorial content and
          maintain site security:
        </p>
        <ul>
          <li>
            <strong>Voluntary Correspondence:</strong> When you subscribe to our newsletter or send us
            an inquiry through our <Link href="/contact">Contact Portal</Link>, we collect your name,
            email address, and the content of your message.
          </li>
          <li>
            <strong>Log Files:</strong> Like standard web platforms, Readora utilizes log files. These
            files log visitors when they access pages. The information collected includes internet
            protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp,
            referring/exit pages, and number of clicks. These are not linked to any personally
            identifiable information and are used solely for analyzing server traffic, administering
            the site, and preventing DDoS attacks.
          </li>
        </ul>

        <h2 className="font-serif font-bold text-2xl text-ink-heading pt-4">
          2. Cookies and Web Technologies
        </h2>
        <p>
          Readora uses cookies to store information about visitors&apos; preferences, record
          user-specific information on which pages the user accesses, and customize web page content
          based on visitors&apos; browser type or other technical attributes.
        </p>
        <p>
          You can choose to disable cookies through your individual browser options. Detailed
          information about cookie management with specific web browsers can be found at the
          browsers&apos; respective websites.
        </p>

        <h2 className="font-serif font-bold text-2xl text-ink-heading pt-4">
          3. Advertising Technologies & Google AdSense Disclosures
        </h2>
        <p>
          Third-party vendors, including Google, may serve advertisements on Readora when commercial
          monetization is active:
        </p>
        <ul>
          <li>
            Google&apos;s use of advertising cookies enables it and its partners to serve ads to our
            users based on their visit to Readora and/or other sites on the Internet.
          </li>
          <li>
            Users may opt out of personalized advertising by visiting the{' '}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-editorial-accent underline"
            >
              Google Ads Settings
            </a>
            .
          </li>
          <li>
            Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for
            personalized advertising by visiting{' '}
            <a
              href="https://www.aboutads.info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-editorial-accent underline"
            >
              www.aboutads.info
            </a>
            .
          </li>
        </ul>
        <p>
          Note that Readora has no access to or control over these cookies that are used by
          third-party advertisers. Please refer to the respective privacy policies of these
          third-party ad servers for more detailed information.
        </p>

        <h2 className="font-serif font-bold text-2xl text-ink-heading pt-4">
          4. General Data Protection Regulation (GDPR) Rights
        </h2>
        <p>
          If you are a resident of the European Economic Area (EEA), you possess specific data
          protection rights under the GDPR:
        </p>
        <ul>
          <li>
            <strong>The right to access:</strong> You have the right to request copies of your personal
            data.
          </li>
          <li>
            <strong>The right to rectification:</strong> You have the right to request that we correct
            any information you believe is inaccurate.
          </li>
          <li>
            <strong>The right to erasure:</strong> You have the right to request that we erase your
            personal data, under certain conditions.
          </li>
          <li>
            <strong>The right to restrict processing:</strong> You have the right to request that we
            restrict the processing of your personal data.
          </li>
          <li>
            <strong>The right to data portability:</strong> You have the right to request that we
            transfer the data we have collected to another organization, or directly to you.
          </li>
        </ul>

        <h2 className="font-serif font-bold text-2xl text-ink-heading pt-4">
          5. California Consumer Privacy Act (CCPA / CPRA)
        </h2>
        <p>
          Under the California Consumer Privacy Act, California consumers have the right to request
          disclosure of the categories and specific pieces of personal data collected, request
          deletion of their personal data, and demand that a business not sell or share their
          personal data. <strong>Readora does not sell personal consumer data.</strong>
        </p>

        <h2 className="font-serif font-bold text-2xl text-ink-heading pt-4">
          6. Children&apos;s Privacy (COPPA)
        </h2>
        <p>
          Protecting the privacy of young children is especially important. Readora does not
          knowingly collect any Personal Identifiable Information from children under the age of 13.
          If a parent or guardian believes that Readora has in its database the personal information
          of a child under the age of 13, please contact us immediately, and we will promptly remove
          such information from our records.
        </p>

        <h2 className="font-serif font-bold text-2xl text-ink-heading pt-4">
          7. Contact Information
        </h2>
        <p>
          For privacy inquiries, rights execution, or security reports, reach out to our legal
          representatives:
        </p>
        <div className="bg-paper-100 p-4 rounded-lg not-prose border border-ink-border text-xs font-mono space-y-1">
          <p className="font-bold text-ink-heading">Readora Privacy & Compliance Office</p>
          <p>Email: contact@readora.me</p>
          <p>Domain: https://readora.me</p>
        </div>
      </div>
    </div>
  );
}

