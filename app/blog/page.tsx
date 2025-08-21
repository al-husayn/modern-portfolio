import PostCard from "@/components/blog/PostCard";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className='container py-12 mx-auto'>
      <h1 className='mb-8 text-3xl font-bold'>Blog</h1>
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {posts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}
