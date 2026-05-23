import type { Metadata } from "next";

import Link from "next/link";

import { DATA } from "@/data";
import { getBlogPosts, getReadingTime } from "@/lib/blog";
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

        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
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
                <span>{getReadingTime(post)}</span>
              </div>
              <h2 className="text-2xl font-semibold leading-snug text-foreground">
                {post.data.title}
              </h2>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-foreground-600">
                {post.data.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {(post.data.tags ?? []).map((tag) => (
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
