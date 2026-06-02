import type { MDXComponents } from "mdx/types";

import { readdirSync } from "node:fs";
import path from "node:path";

import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";

import {
  ImageViewer,
  MediaViewer,
  VideoViewer,
} from "@/components/media-viewer";
import { cn } from "@/lib/utils";

const BLOG_ROUTE_PREFIX = "/blog";
const BLOG_CONTENT_DIRECTORY = path.join(process.cwd(), "content", "blog");
const BLOG_FILE_EXTENSIONS = new Set([".mdx", ".md"]);
const INTERNAL_CARD_ALLOWLIST = new Set(["/", "/about", "/rss.xml"]);
const SAFE_EXTERNAL_SCHEMES = new Set(["http", "https", "mailto", "tel"]);
const CARD_ICON_MAP: Record<string, string> = {
  atom: "lucide:atom",
  book: "lucide:book-open",
  clock: "lucide:clock-3",
  clone: "lucide:copy",
  cube: "lucide:box",
  equals: "lucide:equal",
  gear: "lucide:cog",
  "graduation-cap": "lucide:graduation-cap",
  "layer-group": "lucide:layers",
  lock: "lucide:lock",
  microchip: "lucide:cpu",
  newspaper: "lucide:newspaper",
  repeat: "lucide:repeat",
  rotate: "lucide:rotate-ccw",
  shuffle: "lucide:shuffle",
  table: "lucide:table-2",
  video: "lucide:clapperboard",
};

type CardProps = React.PropsWithChildren<{
  className?: string;
  description?: string;
  href?: string;
  icon?: React.ReactNode;
  title?: string;
}>;

type CardGroupProps = React.PropsWithChildren<{
  className?: string;
  cols?: number;
}>;

type AccordionProps = React.PropsWithChildren<{
  title: string;
}>;

type CalloutProps = React.PropsWithChildren<{
  title?: string;
}>;

type StepProps = React.PropsWithChildren<{
  title?: string;
}>;

type TabProps = React.PropsWithChildren<{
  title?: string;
  value?: string;
}>;

type TabsProps = React.PropsWithChildren<{
  items?: string[];
}>;

const toNormalizedPathname = (pathname: string): string => {
  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;

  if (withLeadingSlash === "/") {
    return withLeadingSlash;
  }

  return withLeadingSlash.replace(/\/+$/, "");
};

const splitHref = (href: string): { pathname: string; suffix: string } => {
  const [pathname, ...suffixParts] = href.split(/(?=[?#])/);

  return {
    pathname,
    suffix: suffixParts.join(""),
  };
};

const resolveRelativePathname = (pathname: string): string => {
  if (!URL.canParse(pathname, `https://internal${BLOG_ROUTE_PREFIX}/`)) {
    return "";
  }

  return new URL(pathname, `https://internal${BLOG_ROUTE_PREFIX}/`).pathname;
};

const getHrefScheme = (href: string): string | null => {
  const match = href.match(/^([a-z][a-z\d+.-]*):/i);

  return match?.[1].toLowerCase() ?? null;
};

const isSafeExternalHref = (href: string): boolean => {
  if (href.startsWith("//")) {
    return true;
  }

  const scheme = getHrefScheme(href);

  return scheme ? SAFE_EXTERNAL_SCHEMES.has(scheme) : false;
};

const collectBlogCardTargets = (
  directory: string,
  parentSegments: string[] = [],
): string[] => {
  try {
    return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
      if (entry.name.startsWith(".")) {
        return [];
      }

      if (entry.isDirectory()) {
        return collectBlogCardTargets(path.join(directory, entry.name), [
          ...parentSegments,
          entry.name,
        ]);
      }

      const extension = path.extname(entry.name).toLowerCase();

      if (!BLOG_FILE_EXTENSIONS.has(extension)) {
        return [];
      }

      const fileName = entry.name.slice(0, -extension.length);
      const rawSegments = [...parentSegments, fileName];
      const normalizedSegments =
        rawSegments[rawSegments.length - 1] === "index"
          ? rawSegments.slice(0, -1)
          : rawSegments;

      if (normalizedSegments.length === 0) {
        return [];
      }

      return [`${BLOG_ROUTE_PREFIX}/${normalizedSegments.join("/")}`];
    });
  } catch {
    return [];
  }
};

const BLOG_CARD_TARGETS = new Set(
  collectBlogCardTargets(BLOG_CONTENT_DIRECTORY).map((href) =>
    toNormalizedPathname(href),
  ),
);

const resolveCardHref = (
  href: string | undefined,
): { resolvedHref: string | undefined; unavailable: boolean } => {
  if (!href) {
    return { resolvedHref: href, unavailable: false };
  }

  const normalizedHref = href.trim();

  if (!normalizedHref || normalizedHref.startsWith("#")) {
    return { resolvedHref: normalizedHref || undefined, unavailable: false };
  }

  if (isSafeExternalHref(normalizedHref)) {
    return { resolvedHref: normalizedHref, unavailable: false };
  }

  if (getHrefScheme(normalizedHref)) {
    return { resolvedHref: undefined, unavailable: true };
  }

  const { pathname, suffix } = splitHref(normalizedHref);
  const candidatePathname = pathname.startsWith("/")
    ? pathname
    : resolveRelativePathname(pathname);

  if (!candidatePathname) {
    return { resolvedHref: undefined, unavailable: true };
  }

  const normalizedPathname = toNormalizedPathname(candidatePathname);

  if (INTERNAL_CARD_ALLOWLIST.has(normalizedPathname)) {
    return {
      resolvedHref: `${normalizedPathname}${suffix}`,
      unavailable: false,
    };
  }

  if (normalizedPathname.startsWith(`${BLOG_ROUTE_PREFIX}/`)) {
    const isAvailable = BLOG_CARD_TARGETS.has(normalizedPathname);

    return {
      resolvedHref: isAvailable ? `${normalizedPathname}${suffix}` : undefined,
      unavailable: !isAvailable,
    };
  }

  const normalizedBlogPathname = toNormalizedPathname(
    `${BLOG_ROUTE_PREFIX}${normalizedPathname}`,
  );
  const isAvailable = BLOG_CARD_TARGETS.has(normalizedBlogPathname);

  return {
    resolvedHref: isAvailable
      ? `${normalizedBlogPathname}${suffix}`
      : undefined,
    unavailable: !isAvailable,
  };
};

const renderIcon = (icon: React.ReactNode) => {
  if (!icon) {
    return null;
  }

  const renderedIcon =
    typeof icon === "string" ? (
      <Icon
        aria-hidden="true"
        className="h-4 w-4"
        icon={CARD_ICON_MAP[icon] ?? icon}
      />
    ) : (
      icon
    );

  return (
    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-default-200 bg-content2 text-sm font-semibold text-primary-500">
      {renderedIcon}
    </span>
  );
};

const createHeading = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
  const Heading = ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const Tag = `h${level}` as React.ElementType<
      React.HTMLAttributes<HTMLHeadingElement>
    >;

    return (
      <Tag className={cn("scroll-mt-24", className)} {...props}>
        {children}
      </Tag>
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
};

function Accordion({ title, children }: AccordionProps) {
  return (
    <details className="group rounded-lg border border-default-200 bg-content1/80 p-4 shadow-sm">
      <summary className="cursor-pointer list-none font-semibold text-foreground marker:hidden">
        <span className="inline-flex w-full items-center justify-between gap-4">
          {title}
          <span className="text-primary-500 transition-transform group-open:rotate-45">
            +
          </span>
        </span>
      </summary>
      <div className="mt-4 border-t border-default-200 pt-4 text-foreground-600">
        {children}
      </div>
    </details>
  );
}

function AccordionGroup({ children }: React.PropsWithChildren) {
  return <div className="space-y-3">{children}</div>;
}

function Card({
  children,
  className,
  description,
  href,
  icon,
  title,
}: CardProps) {
  const { resolvedHref, unavailable } = resolveCardHref(href);
  const content = (
    <div
      aria-disabled={unavailable || undefined}
      className={cn(
        "flex h-full gap-4 rounded-lg border border-default-200 bg-content1/85 p-4 shadow-sm transition",
        resolvedHref
          ? "hover:border-primary-400/60 hover:shadow-lg"
          : undefined,
        unavailable ? "opacity-70" : undefined,
        className,
      )}
    >
      {renderIcon(icon)}
      <div className="min-w-0">
        {title ? (
          <h3 className="mt-0 text-base font-semibold leading-snug text-foreground">
            {title}
          </h3>
        ) : null}
        {description ? (
          <p className="mt-2 text-sm leading-relaxed text-foreground-600">
            {description}
          </p>
        ) : null}
        {children ? (
          <div className="mt-2 text-sm leading-relaxed text-foreground-600">
            {children}
          </div>
        ) : null}
        {unavailable ? (
          <span className="mt-2 block text-xs text-foreground-500">
            Content coming soon.
          </span>
        ) : null}
      </div>
    </div>
  );

  if (!resolvedHref) {
    return content;
  }

  if (isSafeExternalHref(resolvedHref)) {
    return (
      <a href={resolvedHref} rel="noreferrer" target="_blank">
        {content}
      </a>
    );
  }

  return <Link href={resolvedHref}>{content}</Link>;
}

function CardGroup({ children, className, cols = 2 }: CardGroupProps) {
  return (
    <div
      className={cn(
        "grid gap-4",
        cols <= 1 ? "md:grid-cols-1" : undefined,
        cols === 2 ? "md:grid-cols-2" : undefined,
        cols >= 3 ? "md:grid-cols-3" : undefined,
        className,
      )}
    >
      {children}
    </div>
  );
}

function Callout({
  children,
  className,
  title,
  tone = "info",
}: CalloutProps & { className?: string; tone?: "info" | "warning" }) {
  return (
    <div
      className={cn(
        "rounded-lg border p-4",
        tone === "warning"
          ? "border-warning-300 bg-warning-50 text-warning-900 dark:bg-warning-500/10 dark:text-warning-100"
          : "border-primary-200 bg-primary-50 text-primary-900 dark:bg-primary-500/10 dark:text-primary-100",
        className,
      )}
    >
      {title ? <p className="font-semibold">{title}</p> : null}
      <div className={cn(title ? "mt-2" : undefined)}>{children}</div>
    </div>
  );
}

function Info(props: CalloutProps) {
  return <Callout tone="info" {...props} />;
}

function Warning(props: CalloutProps) {
  return <Callout tone="warning" {...props} />;
}

function Note(props: CalloutProps) {
  return <Callout tone="info" {...props} />;
}

function Tip(props: CalloutProps) {
  return <Callout tone="info" {...props} />;
}

function Steps({ children }: React.PropsWithChildren) {
  return (
    <ol className="space-y-5 border-l border-default-200 pl-6 [counter-reset:step]">
      {children}
    </ol>
  );
}

function Step({ children, title }: StepProps) {
  return (
    <li className="relative list-none [counter-increment:step] before:absolute before:-left-10 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-primary-300 before:bg-content1 before:text-xs before:font-semibold before:text-primary-500 before:content-[counter(step)]">
      {title ? <p className="font-semibold text-foreground">{title}</p> : null}
      <div className={cn(title ? "mt-2" : undefined)}>{children}</div>
    </li>
  );
}

function Tabs({ children, items }: TabsProps) {
  const childArray = React.Children.toArray(children);

  return (
    <div className="rounded-lg border border-default-200 bg-content1/80 p-4">
      {items?.length ? (
        <div className="mb-4 flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-md border border-default-200 bg-content2 px-2.5 py-1 text-xs font-medium text-foreground-600"
            >
              {item}
            </span>
          ))}
        </div>
      ) : null}
      <div className="space-y-4">{childArray}</div>
    </div>
  );
}

function Tab({ children, title, value }: TabProps) {
  return (
    <section>
      {(title ?? value) ? (
        <h3 className="mt-0 text-base font-semibold text-foreground">
          {title ?? value}
        </h3>
      ) : null}
      <div className="mt-2">{children}</div>
    </section>
  );
}

function MdxPre({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre className={cn("bg-content2 text-foreground", className)} {...props}>
      {children}
    </pre>
  );
}

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    MediaViewer,
    ImageViewer,
    VideoViewer,
    Accordion,
    AccordionGroup,
    Card,
    CardGroup,
    Info,
    Note,
    Step,
    Steps,
    Tab,
    Tabs,
    Tip,
    Warning,
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    pre: MdxPre,
    ...components,
  };
}

export const useMDXComponents = getMDXComponents;
