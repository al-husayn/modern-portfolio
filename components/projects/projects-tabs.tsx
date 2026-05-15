import { Tabs, Tab } from "@heroui/react";

import { ProjectsTabsProps } from "@/types/projects";

export const ProjectsTabs = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: ProjectsTabsProps) => (
  <div className="mb-8 w-full overflow-x-auto">
    <Tabs
      aria-label="Project Categories"
      className="mb-4 flex w-max min-w-full justify-start md:justify-center"
      radius="md"
      selectedKey={selectedCategory}
      variant="bordered"
      onSelectionChange={(key) => onSelectCategory(String(key))}
    >
      {categories.map((category) => (
        <Tab key={category} className="sm:text-base" title={category} />
      ))}
    </Tabs>
  </div>
);
