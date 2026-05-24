import type { Metadata } from "next";

import Link from "next/link";

import { DATA } from "@/data";
import { getBlogPosts, getReadingTime } from "@/lib/blog";
import { PageHeader } from "@/components/page-header";
import { dateFormatter } from "@/lib/utils";

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Guides, references, and tutorials on programming, web development, and design. ',
};



export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <section className='site-section'>
      <div className='site-container'>
        <PageHeader {...DATA.pageHeaders.blog} />

        <div className='max-w-3xl mx-auto mb-12 text-center'>
          <p className='section-copy '>
            Guides, references, and tutorials on programming, web development,
            and design.
          </p>
        </div>

        <div className='grid gap-5 md:grid-cols-2'>
          {posts.map((post) => (
            <Link
              key={post.url}
              className='p-6 transition border rounded-lg shadow-sm group border-default-200 bg-content1/85 backdrop-blur hover:border-primary-400/60 hover:shadow-lg'
              href={post.url}>
              <div className='flex flex-wrap items-center gap-3 mb-4 text-xs font-medium uppercase text-foreground-500'>
                <time dateTime={post.data.date}>
                  {dateFormatter.format(new Date(post.data.date))}
                </time>
                <span className='w-1 h-1 rounded-full bg-default-400' />
                <span>{getReadingTime(post)}</span>
              </div>
              <h2 className='text-2xl font-semibold leading-snug text-foreground'>
                {post.data.title}
              </h2>
              <p className='mt-3 text-sm leading-relaxed line-clamp-3 text-foreground-600'>
                {post.data.description}
              </p>
              <div className='flex flex-wrap gap-2 mt-6'>
                {(post.data.tags ?? []).map((tag) => (
                  <span
                    key={tag}
                    className='rounded-md border border-default-200 bg-content2 px-2.5 py-1 text-xs text-foreground-600'>
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
