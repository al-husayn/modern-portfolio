import React from 'react';

import LatestPosts from '@/components/home/latest-posts';

const page = () => {
  return (
    <section className="max-w-5xl px-6 py-20 mx-auto border-border md:px-12 text-foreground">
      <LatestPosts />
    </section>
  );
};

export default page;
