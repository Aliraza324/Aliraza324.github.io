import React from 'react';
import { Article } from '@/types';
import { Author } from '@/data/authors';
import { siteConfig } from '@/data/siteConfig';

export const OrganizationJsonLd: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'NewsMediaOrganization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/images/logo.png`,
      width: 600,
      height: 60,
    },
    sameAs: [
      siteConfig.links.twitter,
      siteConfig.links.github,
      siteConfig.links.linkedin,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.contact.editorialEmail,
      contactType: 'Editorial Inquiries',
    },
    publishingPrinciples: `${siteConfig.url}/editorial-policy`,
    diversityPolicy: `${siteConfig.url}/editorial-policy`,
    correctionsPolicy: `${siteConfig.url}/editorial-policy`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const WebSiteJsonLd: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const ArticleJsonLd: React.FC<{ article: Article }> = ({ article }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.canonicalUrl,
    },
    headline: article.title,
    description: article.seoDescription,
    image: [article.featuredImage],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.role,
      url: `${siteConfig.url}/authors/${article.author.slug}`,
      image: article.author.avatar.startsWith('http')
        ? article.author.avatar
        : `${siteConfig.url}${article.author.avatar}`,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/logo.png`,
      },
    },
    articleSection: article.categoryName,
    keywords: article.tags.join(', '),
    timeRequired: `PT${article.readingTime}M`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const BreadcrumbJsonLd: React.FC<{
  items: { name: string; url: string }[];
}> = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const PersonJsonLd: React.FC<{ author: Author }> = ({ author }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    image: author.avatar.startsWith('http')
      ? author.avatar
      : `${siteConfig.url}${author.avatar}`,
    url: `${siteConfig.url}/authors/${author.slug}`,
    sameAs: Object.values(author.social).filter(Boolean),
    knowsAbout: author.expertise,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

