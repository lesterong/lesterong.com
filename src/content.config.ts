import { file, glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  loader: glob({ pattern: ['[^_]*.json'], base: 'src/projects' }),
  schema: z.array(
    z.object({
      name: z.string(),
      link: z.string().url().optional(),
      type: z.string(),
      tech: z.array(z.string()),
      isFavourite: z.boolean().optional(),
    }),
  ),
});

export const collections = {
  projects,
};
