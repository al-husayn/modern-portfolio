import { loader } from "fumadocs-core/source";

import { docs } from "@/.source";

export const blog = loader({
  baseUrl: "/blog",
  source: docs.toFumadocsSource(),
});

export type BlogPost = ReturnType<typeof blog.getPages>[number];

export function getBlogPosts() {
  return blog
    .getPages()
    .sort(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
    );
}
