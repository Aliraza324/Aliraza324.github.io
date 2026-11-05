import { Category } from '@/types';

export const categories: Category[] = [
  {
    name: 'Artificial Intelligence & Technology',
    slug: 'ai-and-technology',
    description:
      'Rigorous analysis of generative AI models, agentic workflows, cognitive computing, and the practical implications of frontier software.',
    accentColor: '#9A3412',
  },
  {
    name: 'Web Development & Digital Skills',
    slug: 'web-development-and-skills',
    description:
      'In-depth engineering guides covering modern frontend frameworks, Core Web Vitals, server architecture, and full-stack craft.',
    accentColor: '#1D4ED8',
  },
  {
    name: 'Productivity & Software',
    slug: 'productivity-and-software',
    description:
      'Proven cognitive frameworks, distraction-resilient workspaces, modern tooling evaluations, and high-efficiency personal workflows.',
    accentColor: '#047857',
  },
  {
    name: 'Online Business',
    slug: 'online-business',
    description:
      'Sustainable bootstrapping strategies, monetization models, responsible automation, and audience-first publishing economics.',
    accentColor: '#B45309',
  },
  {
    name: 'Digital Trends & Internet',
    slug: 'digital-trends-and-internet',
    description:
      'Explorations of algorithmic search shifts, decentralized protocols, personal cybersecurity protocols, and the evolving internet culture.',
    accentColor: '#4338CA',
  },
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((cat) => cat.slug === slug);
};

