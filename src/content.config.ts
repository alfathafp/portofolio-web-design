import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().default('Case Study'),
    featured: z.boolean().default(false),
    role: z.string().optional(),
    period: z.string().optional(),
    date: z.string().optional(),
    tags: z.array(z.string()).default([]),
    metrics: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
        detail: z.string().optional(),
      })
    ).default([]),
    architecture: z.record(z.string()).optional(),
    githubUrl: z.string().url().optional(),
    liveDemoUrl: z.string().url().optional(),
    order: z.number().default(99),
  }),
});

const experienceCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    period: z.string(),
    location: z.string().default('Jakarta, Indonesia'),
    summary: z.string().optional(),
    isCurrent: z.boolean().default(false),
    order: z.number().default(99),
    keyAchievements: z.array(z.string()).default([]),
    highlights: z.array(z.string()).default([]),
    techStack: z.array(z.string()).default([]),
    skills: z.array(z.string()).default([]),
  }),
});

export const collections = {
  projects: projectsCollection,
  experience: experienceCollection,
};

