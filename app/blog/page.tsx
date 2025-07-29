'use client';

import { useState, useMemo } from 'react';

import { PageHeader } from '@/components/page-header';
import { DATA } from '@/data';
import { BlogTabs } from '@/components/blog/blogTab';
import { BlogGrid } from '@/components/blog/blogGrid';

const BlogPage = () => {
  const allPosts = DATA.blog.posts;

  const categories = useMemo(
    () => ['All', ...new Set(allPosts.map((post) => post.category))],
    [allPosts]
  );

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = useMemo(
    () =>
      selectedCategory === 'All'
        ? allPosts
        : allPosts.filter((post) => post.category === selectedCategory),
    [selectedCategory, allPosts]
  );

  return (
    <div className='max-w-6xl px-4 py-12 mx-auto'>
      <PageHeader texts={['Blog', 'Insights', 'Stories']} />

      <BlogTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <BlogGrid posts={[...filteredPosts]} />
    </div>
  );
};

export default BlogPage;
