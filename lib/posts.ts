// lib/posts.ts
import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { remark } from 'remark';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import remarkRehype from 'remark-rehype';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export type PostMeta = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  authorAvatar?: string;
  date: string;
  featureImage: string;
  readingTime: string;
};

export type Post = PostMeta & {
  content: string;
};

function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);

  return `${minutes} min read`;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);

  return {
    ...(data as PostMeta),
    slug,
    readingTime: calculateReadingTime(content),
    content: processedContent.toString(),
  };
}

export function getAllPosts(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);

    return {
      ...(data as PostMeta),
      slug,
      readingTime: calculateReadingTime(content),
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}
