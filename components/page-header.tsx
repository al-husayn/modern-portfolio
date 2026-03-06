import { cn } from "@/lib/utils";

interface PageHeaderProps {
  texts: readonly string[];
  className?: string;
}

export const PageHeader = ({ texts, className = "" }: PageHeaderProps) => (
  <div className={cn("mb-14 text-left", className)}>
    <p className="section-kicker">Portfolio</p>
    <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl dark:text-white">
      {texts[0]}
    </h1>
  </div>
);
