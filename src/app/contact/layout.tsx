import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Editorial Desk & Press Inquiries',
  description:
    'Get in touch with Readora’s editorial board, submit research tips, corrections, feedback, or press inquiries.',
  alternates: {
    canonical: 'https://readora.me/contact',
  },
  openGraph: {
    title: 'Contact Readora Editorial Desk',
    description:
      'Get in touch with Readora’s editorial board, submit research tips, corrections, feedback, or press inquiries.',
    url: 'https://readora.me/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

