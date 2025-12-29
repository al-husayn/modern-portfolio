# AI Copilot Instructions for Modern Portfolio

## Project Overview
This is a **Next.js 15 + TypeScript + TailwindCSS + Framer Motion** animated portfolio template. The architecture is centered around a **single data source** (`data/index.ts`) that drives the entire site, making it highly maintainable and customizable.

### Key Tech Stack
- **Framework**: Next.js 15.3.1 with Turbopack
- **UI Library**: HeroUI v2.7.8 (React Aria-based)
- **Animation**: Framer Motion 11.13.1
- **Styling**: TailwindCSS + Dark mode support (next-themes)
- **Icons**: Iconify React (all icon families supported)
- **Email**: EmailJS for contact form submissions
- **Analytics**: Vercel Analytics & Speed Insights

## Architecture Patterns

### 1. Centralized Data Management
**File**: `data/index.ts` (557 lines) - Single source of truth for all portfolio content
- Contains `DATA` object with nested structure: `home`, `projects`, `about`, `contact`, `footer`, etc.
- All pages/components import from this single file
- **Pattern**: Keep all dynamic content in `DATA` object; components consume via destructuring

**Example**:
```typescript
// Always import data this way
import { DATA } from '@/data';
const { projects } = DATA.projects.work;
```

### 2. Server vs Client Components (Next.js 15 App Router)
- **Server Components** (default): Use for data fetching, accessing `process.env`, file system operations
- **Client Components** (`"use client"`): Use for interactivity, hooks (useState, useEffect), event handlers
- **Critical Rule**: Never import `fs` or `path` modules in client-side code or files imported by client components
  - File operations must happen in `lib/` utilities that are only called from server components
  - Blog utilities using `fs.readdirSync()` must be in server-side code only

**Example**:
```typescript
// ✅ Server utility (lib/blog-utils.ts)
import fs from 'fs';
export function getBlogPosts() { /* file operations */ }

// ✅ Server component (app/blog/page.tsx)
import { getBlogPosts } from '@/lib/blog-utils';
export default function BlogPage() { const posts = getBlogPosts(); }

// ❌ Never use fs in client components
"use client";
import fs from 'fs'; // ERROR!
```

### 3. Component Organization
- **`components/`**: Feature-based directory structure
  - `home/`: Hero, portfolio showcase, skills, testimonials, code editor
  - `about/`: Profile, timeline (education/experience), skills accordion
  - `projects/`: Tabs (categories), grid with filtering
  - `contact/`: Form, map, contact card with EmailJS integration
  - `backgrounds/`: Visual effects (Hole, Stars, gradient animations)
  - `textAnimations/`: Gradient text, morphing, splitting animations
  - `ui/`: Reusable primitives (cards, page headers, wrappers)

### 4. Page Structure (App Router)
- `app/page.tsx`: Home page - composes sections (Portfolio, Skills, Work, Testimonials)
- `app/projects/page.tsx`: Projects with category filtering (client component with useState + useMemo)
- `app/about/page.tsx`: About page with timeline and skills
- `app/contact/page.tsx`: Contact with EmailJS integration
- `app/blog/page.tsx`: Blog listing with MDX support (newly added)
- **All pages are colocated with their layout**

## Key Patterns & Conventions

### Animation Patterns (Framer Motion)
- **Scroll Animations**: Use `motion.div` with `whileInView` and `viewport={{ once: true }}`
- **Staggered Children**: Leverage `variants` + `transition={{ staggerChildren: 0.1 }}`
- **Ref-based InView**: Use `useInView()` hook for scroll-triggered animations

```typescript
// Standard scroll animation pattern
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
/>
```

### Filtering Pattern (Projects & Blog)
- Use `useMemo()` for both category extraction and filtered list
- Maintain `selectedCategory` in component state
- Never mutate original data arrays

```typescript
const categories = useMemo(
  () => ["All", ...new Set(items.map(item => item.category))],
  [items]
);
const filtered = useMemo(
  () => selectedCategory === "All" ? items : items.filter(...),
  [selectedCategory, items]
);
```

### Link & Navigation Pattern
- **Always wrap text/inline content in `<Link>`**, not block elements
- Use `Link` from `next/link` for internal navigation
- Add `cursor-pointer` and hover classes to `<Link>` elements for visual feedback

```typescript
// ✅ Correct: Link wraps text
<h3><Link href="/" className="hover:text-primary-500 cursor-pointer">{title}</Link></h3>

// ❌ Incorrect: Block element in Link
<Link href="/"><h3>{title}</h3></Link>
```

### Theme Support (Dark Mode)
- Site uses **dark mode by default** via `next-themes`
- Apply dark variants: `bg-background dark:from-[#000000] dark:to-[#0a0d37]`
- Color scheme follows: Light (grays/whites), Dark (deep blues/blacks)
- Use semantic color tokens from HeroUI: `bg-content1`, `bg-content2`, `text-foreground`

### Icon Usage (Iconify)
- Import `Icon` from `@iconify/react`
- All Iconify icon families available: `lucide:`, `logos:`, `skill-icons:`, `mdi:`, `simple-icons:`
- Render: `<Icon icon="family:icon-name" />`

### Contact Form Integration
- Uses **EmailJS** for submissions (no backend required)
- Requires env vars: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- Form includes error handling, loading states, and toast notifications

## Development Workflows

### Running the Project
```bash
npm run dev          # Start Next.js dev server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint with --fix
```

### Adding Content
1. **Portfolio projects**: Edit `DATA.projects.work` in `data/index.ts`
2. **Skills/expertise**: Update `DATA.home.skills` and `DATA.about.tech`
3. **Testimonials**: Add to `DATA.home.testimonials.items`
4. **Contact info**: Modify `DATA.footer.contact` and `DATA.contact.location`

### Adding Blog Posts (MDX)
1. Create `.mdx` files in `content/post/` directory with frontmatter:
   ```mdx
   ---
   title: "Post Title"
   publishedAt: "2025-01-01"
   summary: "Brief summary"
   category: "Tech"
   ---
   
   Post content here...
   ```
2. Reading time is automatically calculated (200 words/minute)
3. Blog list filters by category just like projects

### Styling Conventions
- **Responsive breakpoints**: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px)
- **Container width**: `max-w-6xl` for content sections
- **Spacing scale**: Use Tailwind spacing (py-12, px-4, gap-8, etc.)
- **Color scale**: Use HeroUI semantic colors + Tailwind color extensions

### Environment Variables
```env
# EmailJS (required for contact form)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...

# Image optimization (already configured)
# - img.heroui.chat (demo avatars)
# - res.cloudinary.com (project images)
```

## Common Debugging Tips

1. **Build errors with `fs` module**: Check that file system operations are only in `lib/` and called from server components (no `"use client"` in import chain)
2. **Animations not playing**: Ensure components have `"use client"` if using hooks, and Framer Motion refs/variants are correctly structured
3. **Links not clickable**: Verify `<Link>` wraps inline content, not block elements; add `cursor-pointer` class
4. **Dark mode not applying**: Check that `next-themes` provider is in `app/providers.tsx` and dark/light classes are present on elements
5. **Images not loading**: Verify image URLs match remote patterns in `next.config.js` (heroui.chat, cloudinary.com)

## When to Ask for Clarification

- If modifying component props without seeing the parent usage
- Before adding new dependencies beyond the current stack
- When asked to break the single-data-source pattern
- For complex animation sequences beyond standard Framer Motion patterns
- When styling conflicts with existing HeroUI theme system
