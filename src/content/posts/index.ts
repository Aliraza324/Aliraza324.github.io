import { Article } from '@/types';
import { post1 } from './post-1';
import { post2 } from './post-2';
import { post3 } from './post-3';
import { post4 } from './post-4';
import { post5 } from './post-5';
import { post6 } from './post-6';
import { post7 } from './post-7';
import { post8 } from './post-8';
import { post9 } from './post-9';
import { post10 } from './post-10';
import { post11 } from './post-11';

export const allPosts: Article[] = [
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
  post8,
  post9,
  post10,
  post11,
];

// Helper functions for content retrieval
export const getPublishedPosts = (): Article[] => {
  return allPosts
    .filter((post) => post.status === 'published')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
};

export const getPostBySlug = (slug: string): Article | undefined => {
  return allPosts.find((post) => post.slug === slug);
};

export const getPostsByCategory = (categorySlug: string): Article[] => {
  return getPublishedPosts().filter((post) => post.category === categorySlug);
};

export const getPostsByAuthor = (authorSlug: string): Article[] => {
  return getPublishedPosts().filter((post) => post.author.slug === authorSlug);
};

export const getFeaturedPost = (): Article => {
  return allPosts.find((post) => post.featured) || allPosts[0];
};

export const getTrendingPosts = (limit = 4): Article[] => {
  return getPublishedPosts().filter((post) => post.trending).slice(0, limit);
};

export const getEditorsPicks = (limit = 4): Article[] => {
  return getPublishedPosts().filter((post) => post.editorsPick).slice(0, limit);
};

export const getRelatedPosts = (currentPost: Article, limit = 3): Article[] => {
  return getPublishedPosts()
    .filter((post) => post.id !== currentPost.id)
    .filter(
      (post) =>
        post.category === currentPost.category ||
        post.tags.some((tag) => currentPost.tags.includes(tag))
    )
    .slice(0, limit);
};

