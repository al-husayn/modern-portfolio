import { ProjectsTabsProps } from "@/types/projects";
import { cn } from "@/lib/utils";

export const ProjectsTabs = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: ProjectsTabsProps) => (
  <div className="mb-8 overflow-x-auto">
    <div className="flex min-w-max gap-3 pb-2">
      {categories.map((category) => (
        <button
          key={category}
          className={cn(
            "border-b px-1 pb-2 text-sm font-semibold transition-colors",
            category === selectedCategory
              ? "border-zinc-950 text-zinc-950 dark:border-white dark:text-white"
              : "border-transparent text-stone-500 hover:text-zinc-950 dark:text-stone-400 dark:hover:text-white",
          )}
          type="button"
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  </div>
);
