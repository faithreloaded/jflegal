import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    date: z.date(),
    excerpt: z.string(),
    image: z.string().optional(),
    category: z.string().optional(),
    translations: z.record(z.string()).optional()
  })
});

export const collections = { blog };


