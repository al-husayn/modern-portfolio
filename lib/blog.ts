import type { ComponentType } from "react";
import type { MDXComponents } from "mdx/types";

import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";

import { docs, meta } from "@/.source";

type BlogData = {
  author?: string;
  date: string;
  description?: string;
  readingTime?: string;
  readTime?: string;
  tags?: string[];
  title?: string;
  body: ComponentType<{ components?: MDXComponents }>;
};

export const blog = loader({
  baseUrl: "/blog",
  source: createMDXSource(docs, meta),
});

export type BlogPost = Omit<
  ReturnType<typeof blog.getPages>[number],
  "data"
> & {
  data: ReturnType<typeof blog.getPages>[number]["data"] & BlogData;
};

export function getBlogPost(slug: string[]) {
  return blog.getPage(slug) as BlogPost | undefined;
}

export function getBlogPosts() {
  const toTimestamp = (value: string) => {
    const timestamp = Date.parse(value);

    return Number.isNaN(timestamp) ? 0 : timestamp;
  };

  return (blog.getPages() as BlogPost[]).sort((a, b) => {
    const dateOrder = toTimestamp(b.data.date) - toTimestamp(a.data.date);

    if (dateOrder !== 0) {
      return dateOrder;
    }

    return a.url.localeCompare(b.url);
  });
}

export function getReadingTime(post: BlogPost) {
  return post.data.readingTime ?? post.data.readTime ?? "3 min read";
}
