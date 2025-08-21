
---

## 📂 Example: `content/blog/post-2.md`

```md
---
title: "Mastering TailwindCSS for Developers"
slug: "tailwindcss-best-practices"
excerpt: "Learn practical tips to write clean, scalable, and reusable styles with TailwindCSS."
category: "CSS"
author:
  name: "Al-Hussein"
  avatar: "/avatars/al.png"
date: "2025-08-12"
featureImage: "/images/tailwindcss.jpg"
---

# Mastering TailwindCSS for Developers

TailwindCSS has quickly become the go-to utility-first framework. Let’s explore how to keep your code clean and scalable.

## Example: Using `@apply`

```css
.btn {
  @apply px-4 py-2 bg-blue-600 text-white rounded-lg;
}
