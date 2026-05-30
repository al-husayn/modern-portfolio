import type { MetadataRoute } from "next";

import { getBlogPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo";

const staticRoutes = ["", "/about", "/projects", "/contact", "/blog"];
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: absoluteUrl(route || "/"),
    lastModified: now,
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : 0.8,
  }));

  const blogEntries = getBlogPosts().map((post) => ({
    url: absoluteUrl(post.url),
    lastModified: new Date(post.data.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
