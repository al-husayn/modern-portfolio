import type { Metadata } from "next";

import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@iconify/react";

import { getMDXComponents } from "@/components/mdx-components";
import { blog } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

const dateFormatter = new Intl.DateTimeFormat("en", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function generateStaticParams() {
  return blog.generateParams("slug");
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blog.getPage(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.data.title,
    description: post.data.description,
    openGraph: {
      title: post.data.title,
      description: post.data.description,
      type: "article",
      publishedTime: post.data.date,
      authors: [post.data.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blog.getPage(slug);

  if (!post) {
    notFound();
  }

  const MDX = post.data.body;

  return (
    <article className="site-section">
      <div className="mx-auto w-full max-w-3xl">
        <Link
          className="mb-8 inline-flex items-center gap-2 rounded-md text-sm font-medium text-foreground-600 transition-colors hover:text-primary-500"
          href="/blog"
        >
          <Icon className="h-4 w-4" icon="lucide:arrow-left" />
          Back to blog
        </Link>

        <header className="mb-10 border-b border-default-200 pb-8">
          <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-medium uppercase text-foreground-500">
            <time dateTime={post.data.date}>
              {dateFormatter.format(new Date(post.data.date))}
            </time>
            <span className="h-1 w-1 rounded-full bg-default-400" />
            <span>{post.data.readingTime}</span>
            <span className="h-1 w-1 rounded-full bg-default-400" />
            <span>{post.data.author}</span>
          </div>

          <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            {post.data.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-foreground-600">
            {post.data.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.data.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-default-200 bg-content1 px-2.5 py-1 text-xs text-foreground-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="blog-prose">
          <MDX components={getMDXComponents()} />
        </div>
      </div>
    </article>
  );
}
