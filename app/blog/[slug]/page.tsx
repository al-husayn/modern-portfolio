import AuthorCard from "@/components/blog/AuthorCard";
import TOC from "@/components/blog/TOC";
import { getAllPosts, getPostBySlug } from "@/lib/posts";


type Params = { params: { slug: string } };

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: Params) {
  const post = await getPostBySlug(params.slug);

  return (
    <article className='container mx-auto py-12 grid lg:grid-cols-[3fr,1fr] gap-12'>
      <div>
        <img
          alt={post.title}
          className='mb-6 rounded-xl'
          src={post.featureImage}
        />
        <h1 className='mb-2 text-4xl font-bold'>{post.title}</h1>
        <div className='mb-4 text-sm text-gray-500'>
          {post.category} • {post.date} • {post.readingTime}
        </div>
        <AuthorCard
          avatar={post.authorAvatar ?? ""}
          name={post.author ?? ""}
        />

        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          className='mt-8 prose dark:prose-invert max-w-none'
        />
      </div>

      <TOC />
    </article>
  );
}
