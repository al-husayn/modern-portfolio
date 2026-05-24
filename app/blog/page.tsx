import type { Metadata } from "next";

import Link from "next/link";

import { DATA } from "@/data";
import { getBlogPosts, getReadingTime } from "@/lib/blog";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides, references, and tutorials on programming, web development, and design. ",
};

const archiveDateFormatter = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "long",
});

export default function BlogPage() {
  const posts = getBlogPosts();
  const postsByYear = posts.reduce<Record<number, typeof posts>>(
    (groups, post) => {
      const year = new Date(post.data.date).getFullYear();

      groups[year] ??= [];
      groups[year].push(post);

      return groups;
    },
    {},
  );
  const sortedYears = Object.keys(postsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <section className="site-section relative z-10">
      <div className="site-container relative z-10">
        <PageHeader {...DATA.pageHeaders.blog} />

        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="section-copy ">
            Guides, references, and tutorials on programming, web development,
            and design.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-12">
          {sortedYears.map((year) => (
            <section key={year} aria-labelledby={`year-${year}`}>
              <div className="mb-4 flex items-baseline justify-between gap-4 border-b border-default-200 pb-3">
                <h2
                  className="text-3xl font-semibold text-foreground"
                  id={`year-${year}`}
                >
                  {year}
                </h2>
                <p className="text-sm text-foreground-500">
                  {postsByYear[year].length}{" "}
                  {postsByYear[year].length === 1 ? "post" : "posts"}
                </p>
              </div>

              <ul className="divide-y divide-default-200">
                {postsByYear[year].map((post) => (
                  <li key={post.url}>
                    <Link
                      className="group grid w-full cursor-pointer gap-2 rounded-md py-4 outline-none transition hover:bg-content2/50 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:grid-cols-[7.5rem_1fr_auto] sm:items-baseline"
                      href={post.url}
                    >
                      <time
                        className="px-2 text-sm font-medium text-foreground-500"
                        dateTime={post.data.date}
                      >
                        {archiveDateFormatter.format(new Date(post.data.date))}
                      </time>
                      <span className="px-2 text-lg font-medium leading-snug text-foreground transition group-hover:text-primary group-hover:underline">
                        {post.data.title}
                      </span>
                      <span className="px-2 text-sm text-foreground-500">
                        {getReadingTime(post)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
