export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
  twitterHandle: string;
  links: {
    twitter: string;
    github: string;
    linkedin: string;
    rss: string;
  };
  contact: {
    email: string;
    editorialEmail: string;
    pressEmail: string;
    location: string;
  };
  navigation: {
    title: string;
    href: string;
  }[];
  categories: {
    name: string;
    slug: string;
    description: string;
    accentColor: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: 'Readora',
  shortName: 'Readora',
  tagline: 'Modern Editorial on Technology, AI, Development & Digital Craft',
  description:
    'Readora is an authoritative digital publication exploring advances in artificial intelligence, modern web engineering, and sustainable digital business.',
  url: 'https://readora.me',
  ogImage: 'https://readora.me/images/og-default.jpg',
  author: 'Readora Editorial Team',
  twitterHandle: '@readora_mag',
  links: {
    twitter: 'https://twitter.com',
    github: 'https://github.com/Aliraza324/Aliraza324.github.io',
    linkedin: 'https://linkedin.com',
    rss: '/feed.xml',
  },
  contact: {
    email: 'contact@readora.me',
    editorialEmail: 'editorial@readora.me',
    pressEmail: 'press@readora.me',
    location: 'San Francisco, CA & Global Remote Editorial',
  },
  navigation: [
    { title: 'Home', href: '/' },
    { title: 'Articles', href: '/blog' },
    { title: 'Categories', href: '/categories' },
    { title: 'Authors', href: '/authors' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },
  ],
  categories: [
    {
      name: 'Artificial Intelligence & Technology',
      slug: 'ai-and-technology',
      description:
        'In-depth investigations into generative intelligence, agentic workflows, autonomous systems, and enterprise machine learning.',
      accentColor: '#9A3412',
    },
    {
      name: 'Web Development & Digital Skills',
      slug: 'web-development-and-skills',
      description:
        'Modern frontend architecture, full-stack performance patterns, Core Web Vitals, and contemporary software engineering craft.',
      accentColor: '#1D4ED8',
    },
    {
      name: 'Productivity & Software',
      slug: 'productivity-and-software',
      description:
        'Pragmatic workflows, distraction-free digital environments, tooling evaluations, and high-leverage cognitive systems.',
      accentColor: '#047857',
    },
    {
      name: 'Online Business',
      slug: 'online-business',
      description:
        'Sustainable unit economics, bootstrapping modern digital products, responsible automation, and audience-first publishing.',
      accentColor: '#B45309',
    },
    {
      name: 'Digital Trends & Internet',
      slug: 'digital-trends-and-internet',
      description:
        'Evolving information discovery, algorithmic search shifts, cybersecurity for internet citizens, and decentralized web protocols.',
      accentColor: '#4338CA',
    },
  ],
};

