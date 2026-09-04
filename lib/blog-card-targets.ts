import 'server-only';

import { readdirSync } from 'node:fs';
import path from 'node:path';

const BLOG_ROUTE_PREFIX = '/blog';
const BLOG_CONTENT_DIRECTORY = path.join(process.cwd(), 'content', 'blog');
const BLOG_FILE_EXTENSIONS = new Set(['.mdx', '.md']);

const toNormalizedPathname = (pathname: string): string => {
  const withLeadingSlash = pathname.startsWith('/') ? pathname : `/${pathname}`;

  if (withLeadingSlash === '/') {
    return withLeadingSlash;
  }

  return withLeadingSlash.replace(/\/+$/, '');
};

export const collectBlogCardTargets = (
  directory: string,
  parentSegments: string[] = [],
): string[] => {
  try {
    return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
      if (entry.name.startsWith('.')) {
        return [];
      }

      if (entry.isDirectory()) {
        return collectBlogCardTargets(path.join(directory, entry.name), [
          ...parentSegments,
          entry.name,
        ]);
      }

      const extension = path.extname(entry.name).toLowerCase();

      if (!BLOG_FILE_EXTENSIONS.has(extension)) {
        return [];
      }

      const fileName = entry.name.slice(0, -extension.length);
      const rawSegments = [...parentSegments, fileName];
      const normalizedSegments =
        rawSegments[rawSegments.length - 1] === 'index' ? rawSegments.slice(0, -1) : rawSegments;

      if (normalizedSegments.length === 0) {
        return [];
      }

      return [`${BLOG_ROUTE_PREFIX}/${normalizedSegments.join('/')}`];
    });
  } catch {
    return [];
  }
};

export const BLOG_CARD_TARGETS = new Set(
  collectBlogCardTargets(BLOG_CONTENT_DIRECTORY).map((href) => toNormalizedPathname(href)),
);
