import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
} from 'fumadocs-mdx/config';
import { z } from 'zod';

export default defineConfig({
  lastModifiedTime: 'git',
  mdxOptions: {
    providerImportSource: '@/mdx-components',
  },
});

export const { docs, meta } = defineDocs({
  dir: 'content/blog',
  docs: {
    schema: frontmatterSchema.extend({
      date: z.string(),
      tags: z.array(z.string()).optional(),
      readingTime: z.string().optional().default('3 min read'),
      author: z.string().optional(),
      thumbnail: z.string().optional(),
    }),
  },
});
