type BlogGridProps = {
  posts: {
    title: string;
    slug: string;
    summary: string;
    date: string;
    category: string;
  }[];
};

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
      {posts.map((post) => (
        <div key={post.slug} className='p-6 bg-white border rounded shadow'>
          <h2 className='mb-2 text-xl font-bold'>{post.title}</h2>
          <p className='mb-1 text-sm text-gray-500'>
            {post.date} • {post.category}
          </p>
          <p className='mb-2'>{post.summary}</p>
          <a
            href={`/blog/${post.slug}`}
            className='text-blue-600 hover:underline'>
            Read more
          </a>
        </div>
      ))}
    </div>
  );
}
