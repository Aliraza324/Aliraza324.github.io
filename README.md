# Readora — Premium Editorial Publishing Platform

> **An authoritative, Google AdSense–ready digital editorial magazine** built with Next.js (App Router), TypeScript, and Tailwind CSS. Featuring 10 comprehensive, research-backed long-form articles published for the modern era.

---

## 1. Overview & Architecture

**Readora** is designed as a digital editorial publication—evoking the aesthetic rigor, typographical elegance, and intellectual depth of premier periodicals (The Atlantic, Monocle, Wired, Stripe Press) while delivering technical SEO and Core Web Vitals performance.

### Key Highlights
- **10 Full-Length Published Articles**: Researched essays spanning Artificial Intelligence, Modern Web Architecture, Digital Sovereignty, Cybersecurity, and Sustainable Business Economics.
- **Server Components by Default**: Zero unnecessary hydration overhead, achieving ~87 kB shared first-load JavaScript.
- **AdSense Publisher Compliance**: Strictly adheres to Google Publisher Policies with disabled ad slots by default, `ads.txt` integration, verified authors, and comprehensive trust pages.
- **Complete Editorial & Legal Suite**: About, Contact, Privacy Policy (GDPR/CCPA/Cookie disclosures), Terms & Conditions, Disclaimer, and Editorial & AI Disclosure Policy.
- **Advanced Technical SEO**: Dynamic metadata, Open Graph cards, Twitter cards, XML Sitemap (`/sitemap.xml`), RSS Feed (`/feed.xml`), `robots.txt`, and Schema.org JSON-LD (NewsMediaOrganization, WebSite, TechArticle, Person, BreadcrumbList).

---

## 2. Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router, Server Components, Streaming)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with `@tailwindcss/typography`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Typography**: Bespoke editorial palette (Warm paper `#FAF8F5`, Charcoal ink `#141416`, Terracotta accent `#9A3412`)

---

## 3. Directory Structure

```
├── public/
│   ├── ads.txt                # AdSense Publisher verification record
│   ├── images/                # Static assets & brand graphics
│   └── CNAME                  # Custom domain configuration (readora.me)
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with masthead, nav, schema & footer
│   │   ├── page.tsx           # Editorial homepage (Hero, Trending, Picks, Sections)
│   │   ├── globals.css        # Tailwind directives and editorial typography
│   │   ├── robots.ts          # Automated robots.txt generator
│   │   ├── sitemap.ts         # Automated XML sitemap generator
│   │   ├── feed.xml/
│   │   │   └── route.ts       # Full RSS 2.0 XML syndication feed
│   │   ├── blog/
│   │   │   ├── page.tsx       # Searchable, filterable, paginated article archive
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Dynamic article view (TOC, FAQs, Sources, Sharing)
│   │   ├── categories/
│   │   │   ├── page.tsx       # All 5 editorial categories
│   │   │   └── [slug]/page.tsx# Category-specific article index
│   │   ├── authors/
│   │   │   ├── page.tsx       # Editorial masthead & author directory
│   │   │   └── [slug]/page.tsx# Author dossier & byline articles
│   │   ├── about/page.tsx     # Editorial mission & founding principles
│   │   ├── contact/page.tsx   # Interactive contact & news-tip desk
│   │   ├── privacy-policy/    # GDPR, CCPA, and cookie ad disclosures
│   │   ├── terms-and-conditions/
│   │   ├── disclaimer/        # Engineering, cyber defense, and financial disclaimers
│   │   └── editorial-policy/  # AI disclosure, fact-checking, corrections policy
│   ├── components/
│   │   ├── ads/               # AdSlot, HeaderAdSlot, InArticleAdSlot, SidebarAdSlot
│   │   ├── article/           # TOC, AuthorBio, SourcesList, FaqSection, SocialShare
│   │   ├── blog/              # ArticleCard, FeaturedArticle, TrendingStories, BlogFilters
│   │   ├── layout/            # Header, AnnouncementBar, Footer, Breadcrumbs
│   │   ├── newsletter/        # Interactive validated newsletter subscription boxes
│   │   └── seo/               # Schema.org JSON-LD structured data generators
│   ├── config/
│   │   └── ads.config.ts      # Centralized AdSense configuration toggle
│   ├── content/
│   │   └── posts/             # 10 comprehensive, researched articles
│   ├── data/
│   │   ├── authors.ts         # Real, verified editorial author profiles
│   │   ├── categories.ts      # Category taxonomies and metadata
│   │   └── siteConfig.ts      # Global site settings and social links
│   └── types/
│       └── index.ts           # Type definitions for articles, authors, categories
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 4. Installation & Getting Started

### Prerequisites
- Node.js `v18.18.0` or later (Tested on `v24.14.0`)
- npm `v9+` or `v11+`

### Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/Aliraza324/Aliraza324.github.io.git
cd Aliraza324.github.io
npm install
```

### Running Locally
Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 5. Production Build & Verification

To verify TypeScript, ESLint, and compile an optimized production static build:

```bash
# 1. Type check
npx tsc --noEmit

# 2. Linting
npm run lint

# 3. Production build
npm run build

# 4. Preview production build locally
npm run start
```

---

## 6. Environment Variables

Create a `.env.local` file in the root directory for your environment configurations:

```env
# Site Domain
NEXT_PUBLIC_SITE_URL="https://readora.me"

# Google AdSense Central Configuration (Disabled by default)
NEXT_PUBLIC_ADSENSE_ENABLED="false"
NEXT_PUBLIC_ADSENSE_CLIENT_ID="" # e.g. "ca-pub-XXXXXXXXXXXXXXXX"
NEXT_PUBLIC_ADSENSE_SLOT_HEADER=""
NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE=""
NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR=""
NEXT_PUBLIC_ADSENSE_SLOT_FOOTER=""

# Optional: Set to true only in development to preview ad slot boundaries
NEXT_PUBLIC_SHOW_AD_PLACEHOLDERS="false"
```

---

## 7. Google AdSense Application & Activation Workflow

### Step 1: Pre-Application Verification
Before submitting Readora to Google AdSense:
1. Ensure `NEXT_PUBLIC_ADSENSE_ENABLED` is set to `"false"`.
2. Confirm all 10 articles are live and indexed.
3. Review trust pages (`/about`, `/contact`, `/privacy-policy`, `/terms-and-conditions`, `/editorial-policy`).

### Step 2: Account Submission
1. Register your domain `https://readora.me` in the [Google AdSense Console](https://www.google.com/adsense/).
2. You will be assigned a Publisher ID formatted as `pub-XXXXXXXXXXXXXXXX`.

### Step 3: Configure `ads.txt`
Edit `public/ads.txt` to include your official publisher record:
```text
google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```

### Step 4: Post-Approval Activation
Once Google reviews and approves the publication:
1. In your hosting dashboard (Vercel, Cloudflare, etc.), configure:
   ```env
   NEXT_PUBLIC_ADSENSE_ENABLED="true"
   NEXT_PUBLIC_ADSENSE_CLIENT_ID="ca-pub-XXXXXXXXXXXXXXXX"
   NEXT_PUBLIC_ADSENSE_SLOT_HEADER="1234567890"
   NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE="2345678901"
   NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR="3456789012"
   NEXT_PUBLIC_ADSENSE_SLOT_FOOTER="4567890123"
   ```
2. Redeploy the application. Ad slots will immediately begin serving compliant, non-intrusive ads.

---

## 8. Content Publishing Workflow

To publish a new article:

1. Create a new file in `src/content/posts/post-[number].ts` adhering to the `Article` interface in `src/types/index.ts`.
2. Register the post in `src/content/posts/index.ts`:
   ```typescript
   import { post11 } from './post-11';
   export const allPosts: Article[] = [..., post11];
   ```
3. Run `npx tsc --noEmit` and `npm run build` to ensure static generation passes cleanly.

---

## 9. SEO & Social Syndication

- **Structured Data**: Automatically injected on all articles (`TechArticle`), author bios (`Person`), homepage (`WebSite` search and `NewsMediaOrganization`), and breadcrumbs (`BreadcrumbList`).
- **RSS Syndication**: Accessible at [`/feed.xml`](https://readora.me/feed.xml) for standard feed readers.
- **Sitemap**: Automatically generated at [`/sitemap.xml`](https://readora.me/sitemap.xml) for Google Search Console.

---

## 10. License & Copyright

All editorial text and brand assets © 2026 Readora Media. Code is released under the [MIT License](LICENSE).
