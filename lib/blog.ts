import type { ComponentType } from "react";
import type { MDXComponents } from "mdx/types";

import { loader } from "fumadocs-core/source";
import { resolveFiles } from "fumadocs-mdx";

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
  source: {
    files: resolveFiles({ docs, meta }),
  },
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

function getSortableDateTimestamp(date: string) {
  const timestamp = Date.parse(date);

  return Number.isNaN(timestamp) ? 0 : timestamp;
}

function compareBlogPostsByDateDesc(currentPost: BlogPost, nextPost: BlogPost) {
  const currentPostTimestamp = getSortableDateTimestamp(currentPost.data.date);
  const nextPostTimestamp = getSortableDateTimestamp(nextPost.data.date);
  const dateOrder = nextPostTimestamp - currentPostTimestamp;

  if (dateOrder !== 0) {
    return dateOrder;
  }

  return currentPost.url.localeCompare(nextPost.url);
}

export function getBlogPosts() {
  return (blog.getPages() as BlogPost[]).sort(compareBlogPostsByDateDesc);
}

export function getReadingTime(post: BlogPost) {
  return post.data.readingTime ?? post.data.readTime ?? "3 min read";
}
