import { defineConfig, defineDocs, frontmatterSchema } from "fumadocs-mdx/config";
import { z } from "zod";

export const docs = defineDocs({
  dir: "content/blog",
  docs: {
    schema: frontmatterSchema.extend({
      author: z.string().default("Al-Hussein Abubakar"),
      date: z.string(),
      featured: z.boolean().default(false),
      readingTime: z.string().default("3 min read"),
      tags: z.array(z.string()).default([]),
    }),
  },
});

export default defineConfig();
