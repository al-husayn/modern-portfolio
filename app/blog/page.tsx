import type { Metadata } from "next";

import Link from "next/link";
import { Icon } from "@iconify/react";

import { DATA } from "@/data";
import { getBlogPosts } from "@/lib/blog";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Dev notes, implementation write-ups, and practical lessons from building modern web products.",
};

const dateFormatter = new Intl.DateTimeFormat("en", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export default function BlogPage() {
  const posts = getBlogPosts();
  const featuredPost = posts.find((post) => post.data.featured) ?? posts[0];
  const otherPosts = posts.filter((post) => post.url !== featuredPost?.url);

  return (
    <section className="site-section">
      <div className="site-container">
        <PageHeader {...DATA.pageHeaders.blog} />

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="section-copy">
            Compact field notes on frontend architecture, product engineering,
            performance, and the small decisions that make interfaces feel good.
          </p>
        </div>

        {featuredPost ? (
          <Link
            className="group mb-8 grid overflow-hidden rounded-lg border border-default-200 bg-content1/85 shadow-sm backdrop-blur transition hover:border-primary-400/60 hover:shadow-lg lg:grid-cols-[1.05fr_0.95fr]"
            href={featuredPost.url}
          >
            <div className="flex min-h-72 flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-medium uppercase text-foreground-500">
                  <span>Featured</span>
                  <span className="h-1 w-1 rounded-full bg-default-400" />
                  <time dateTime={featuredPost.data.date}>
                    {dateFormatter.format(new Date(featuredPost.data.date))}
                  </time>
                  <span className="h-1 w-1 rounded-full bg-default-400" />
                  <span>{featuredPost.data.readingTime}</span>
                </div>
                <h2 className="max-w-2xl text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                  {featuredPost.data.title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground-600">
                  {featuredPost.data.description}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary-500">
                Read article
                <Icon
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  icon="lucide:arrow-right"
                />
              </div>
            </div>

            <div className="relative min-h-72 overflow-hidden border-t border-default-200 bg-content2 lg:border-l lg:border-t-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.28),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(245,158,11,0.22),transparent_30%)]" />
              <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
                <div className="rounded-lg border border-default-200 bg-background/70 p-4 font-mono text-xs text-foreground-600 shadow-sm backdrop-blur">
                  <span className="text-primary-500">const</span> post =
                  <span className="text-warning-500"> &quot;ship notes&quot;</span>;
                  <br />
                  <span className="text-foreground-400">
                    {"// written from real builds"}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ) : null}

        <div className="grid gap-5 md:grid-cols-2">
          {otherPosts.map((post) => (
            <Link
              key={post.url}
              className="group rounded-lg border border-default-200 bg-content1/85 p-6 shadow-sm backdrop-blur transition hover:border-primary-400/60 hover:shadow-lg"
              href={post.url}
            >
              <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-medium uppercase text-foreground-500">
                <time dateTime={post.data.date}>
                  {dateFormatter.format(new Date(post.data.date))}
                </time>
                <span className="h-1 w-1 rounded-full bg-default-400" />
                <span>{post.data.readingTime}</span>
              </div>
              <h2 className="text-2xl font-semibold leading-snug text-foreground">
                {post.data.title}
              </h2>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-foreground-600">
                {post.data.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {post.data.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-default-200 bg-content2 px-2.5 py-1 text-xs text-foreground-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
