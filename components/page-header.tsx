import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  className?: string;
}

export const PageHeader = ({ title, className }: PageHeaderProps) => (
  <header className={cn("mx-auto mb-12 max-w-4xl text-center", className)}>
    <h1 className="text-4xl font-bold leading-tight text-balance text-foreground sm:text-5xl">
      {title}
    </h1>
  </header>
);
