import { NextResponse } from 'next/server';
import { getPublishedPosts } from '@/content/posts';
import { siteConfig } from '@/data/siteConfig';

export const dynamic = 'force-static';

export async function GET() {
  const posts = getPublishedPosts();

  const rssItems = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${post.canonicalUrl}</link>
      <guid isPermaLink="true">${post.canonicalUrl}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <author>${siteConfig.contact.editorialEmail} (${post.author.name})</author>
      <category><![CDATA[${post.categoryName}]]></category>
    </item>`
    )
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${siteConfig.name} — ${siteConfig.tagline}]]></title>
    <link>${siteConfig.url}</link>
    <description><![CDATA[${siteConfig.description}]]></description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteConfig.url}/feed.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}

