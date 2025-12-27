import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    publishDate: z.date().optional(),
    updatedDate: z.date().optional(),
    author: z.string().default('Clifton T. Canady'),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }).optional(),
    slug: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.enum([
      'WordPress Development',
      'Content Writing',
      'AI Training',
      'Speaking',
      'Photography',
      'General'
    ]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  })
});

export const collections = {
  'blog': blogCollection,
};
