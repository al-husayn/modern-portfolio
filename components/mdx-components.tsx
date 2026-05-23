import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    a: ({ className, children, ...props }) => (
      <a
        className={[
          "font-medium text-primary-500 underline underline-offset-4 transition-colors hover:text-primary-400",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        {children}
      </a>
    ),
    code: ({ className, ...props }) => (
      <code
        className={[
          "rounded-md border border-default-200 bg-content2 px-1.5 py-0.5 font-mono text-[0.9em] text-foreground",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    ),
    pre: ({ className, ...props }) => (
      <pre
        className={[
          "overflow-x-auto rounded-lg border border-default-200 bg-content1 p-4 text-sm shadow-sm",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    ),
    ...components,
  };
}

export const useMDXComponents = getMDXComponents;
