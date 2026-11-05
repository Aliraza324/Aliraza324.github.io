export interface Author {
  id: string;
  name: string;
  slug: string;
  role: string;
  bio: string;
  longBio: string;
  avatar: string;
  social: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    website?: string;
  };
  expertise: string[];
}

export const authors: Author[] = [
  {
    id: 'ali-raza',
    name: 'Ali Raza',
    slug: 'ali-raza',
    role: 'Founder & Lead Technical Editor',
    bio: 'Software engineer and systems architect specializing in Next.js performance, cloud systems, and modern web infrastructure.',
    longBio:
      'Ali Raza is a software engineer, technical writer, and founder of Readora. With years of experience architecting high-throughput web applications and content delivery platforms, Ali focuses on bringing rigor and deep engineering clarity to modern software topics, Core Web Vitals optimization, and the practical implementation of agentic AI workflows.',
    avatar: '/images/ali-raza.jpg',
    social: {
      github: 'https://github.com/Aliraza324',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
    expertise: ['Next.js & React', 'Web Performance', 'Cloud Architecture', 'TypeScript'],
  },
  {
    id: 'elena-vance',
    name: 'Elena Vance',
    slug: 'elena-vance',
    role: 'Senior Technology Essayist',
    bio: 'Researcher and essayist writing on artificial intelligence, algorithmic governance, and human-computer cognitive collaboration.',
    longBio:
      'Elena Vance is a veteran technology journalist and research analyst. Her work dissects the societal, operational, and ethical impacts of foundation models, multi-agent frameworks, and autonomous tooling across creative and professional knowledge industries.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
    expertise: ['Artificial Intelligence', 'Prompt Architecture', 'Cognitive Workflows', 'Tech Policy'],
  },
  {
    id: 'marcus-chen',
    name: 'Marcus Chen',
    slug: 'marcus-chen',
    role: 'Staff Writer, Privacy & Systems',
    bio: 'Cybersecurity consultant and open-web advocate analyzing digital privacy, information security, and online ventures.',
    longBio:
      'Marcus Chen has spent over a decade advising startups on threat modeling, authentication protocols, and sustainable data governance. At Readora, Marcus writes actionable field guides on consumer digital privacy, defensible business models, and secure computing practices.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    social: {
      github: 'https://github.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
    expertise: ['Cybersecurity', 'Privacy Protocols', 'Digital Business Models', 'Information Security'],
  },
];

export const getAuthorBySlug = (slug: string): Author | undefined => {
  return authors.find((author) => author.slug === slug);
};

export const getAuthorById = (id: string): Author | undefined => {
  return authors.find((author) => author.id === id);
};

