import type { Metadata } from "next";

import Link from "next/link";

import { DATA } from "@/data";
import { getBlogPosts, getReadingTime } from "@/lib/blog";
import { PageHeader } from "@/components/page-header";
import { createSeoMetadata } from "@/lib/seo";

const { description: blogDescription, intro: blogIntro } = DATA.blog;

export const metadata: Metadata = {
  ...createSeoMetadata({
    title: "Blog",
    description: blogDescription,
    path: "/blog",
    keywords: ["Web development blog", "Programming tutorials", "JavaScript"],
  }),
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
          <p className="section-copy ">{blogIntro}</p>
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
                  <li
                    key={post.url}
                    className="group grid w-full gap-2 rounded-md py-4 transition hover:bg-content2/50 sm:grid-cols-[7.5rem_1fr_auto] sm:items-baseline"
                  >
                    <Link
                      className="cursor-pointer rounded-sm px-2 text-sm font-medium text-foreground-500 outline-none transition hover:text-primary hover:underline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      href={post.url}
                    >
                      <time dateTime={post.data.date}>
                        {archiveDateFormatter.format(new Date(post.data.date))}
                      </time>
                    </Link>
                    <Link
                      className="cursor-pointer rounded-sm px-2 text-lg font-medium leading-snug text-foreground outline-none transition hover:text-primary hover:underline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background group-hover:text-primary group-hover:underline"
                      href={post.url}
                    >
                      <span>{post.data.title}</span>
                    </Link>
                    <Link
                      className="cursor-pointer rounded-sm px-2 text-sm text-foreground-500 outline-none transition hover:text-primary hover:underline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      href={post.url}
                    >
                      {getReadingTime(post)}
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
