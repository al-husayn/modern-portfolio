import { memo } from "react";
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

import { ProjectCardProps } from "@/types/projects";
import { hasMeaningfulExternalLink } from "@/lib/utils";

export const ProjectCard = memo(function ProjectCard({
  project,
  onViewDetails,
}: ProjectCardProps) {
  const hasGithub = hasMeaningfulExternalLink(project.github);
  const hasLive = hasMeaningfulExternalLink(project.live);

  return (
    <Card className="surface-card h-full overflow-hidden border-none">
      <CardBody className="flex h-full flex-col gap-6 p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">
              {project.category}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-3 text-sm">
            {hasLive && (
              <a
                className="font-medium text-zinc-950 underline decoration-stone-300 underline-offset-4 dark:text-white dark:decoration-white/20"
                href={project.live}
                rel="noopener noreferrer"
                target="_blank"
              >
                Live
              </a>
            )}
            {hasGithub && (
              <a
                className="font-medium text-zinc-950 underline decoration-stone-300 underline-offset-4 dark:text-white dark:decoration-white/20"
                href={project.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                Code
              </a>
            )}
          </div>
        </div>

        <p className="text-sm leading-7 text-stone-600 dark:text-stone-300">
          {project.description}
        </p>

        {(project.role || project.note) && (
          <div className="grid gap-3 border-t border-stone-200 pt-4 text-sm dark:border-white/10 sm:grid-cols-2">
            {project.role && (
              <div>
                <p className="font-semibold text-zinc-950 dark:text-white">
                  Role
                </p>
                <p className="mt-1 leading-7 text-stone-600 dark:text-stone-300">
                  {project.role}
                </p>
              </div>
            )}
            {project.note && (
              <div>
                <p className="font-semibold text-zinc-950 dark:text-white">
                  Note
                </p>
                <p className="mt-1 leading-7 text-stone-600 dark:text-stone-300">
                  {project.note}
                </p>
              </div>
            )}
          </div>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <div className="grid gap-3 sm:grid-cols-3">
            {project.highlights.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-4 text-sm leading-7 text-stone-600 dark:border-white/10 dark:bg-zinc-900 dark:text-stone-300"
              >
                {item}
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech.name}
              className="inline-flex items-center gap-2 rounded-full border border-stone-200 px-3 py-2 text-xs font-medium text-stone-600 dark:border-white/10 dark:text-stone-300"
            >
              <Icon className="h-3.5 w-3.5" icon={tech.icon} />
              {tech.name}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-2">
          <Button
            aria-label={`View details for ${project.title}`}
            className="rounded-full border border-zinc-950 bg-transparent px-5 text-sm font-semibold text-zinc-950 dark:border-white dark:text-white"
            endContent={<Icon icon="lucide:arrow-right" />}
            variant="light"
            onClick={onViewDetails}
          >
            View details
          </Button>
        </div>
      </CardBody>
    </Card>
  );
});
