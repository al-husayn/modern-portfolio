import Link from "next/link";

import { PageHeader } from "../page-header";

import { formatDate, getBlogPosts } from "@/app/blog/utils";
import { DATA } from "@/data";


export default function LatestPosts() {
  let latestPosts = getBlogPosts();

  return (
    <>
      <PageHeader texts={DATA.morphingTexts.blog} />

      {latestPosts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }

          return 1;
        })
        .map((post) => (
          <article key={post.slug} className='max-w-md my-10 text-wrap'>
            <Link href={`/blog/${post.metadata.category}/${post.slug}`}>
              <h3 className='py-2 font-bold leading-5 text-foreground hover:text-primary-500'>
                {post.metadata.title}
              </h3>
            </Link>
            <p className='my-5 leading-8'>{post.metadata.summary}</p>
            <p className='text-sm text-muted-foreground'>
              {formatDate(post.metadata.publishedAt)}
              {" • "}
              {post.readingTime}
            </p>
          </article>
        ))}
    </>
  );
}