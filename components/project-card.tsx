import { memo } from "react";
import { Card, CardBody, CardFooter, Button, Image } from "@heroui/react";
import { Icon } from "@iconify/react";

import { ProjectCardProps } from "@/types/projects";

export const ProjectCard = memo(function ProjectCard({
  project,
  onViewDetails,
}: ProjectCardProps) {
  return (
    <Card
      isFooterBlurred
      isHoverable
      className="app-card app-card-hover h-full w-full overflow-hidden"
      radius="md"
    >
      <CardBody className="flex h-full flex-col p-0">
        <div className="relative w-full aspect-[16/10] overflow-hidden">
          <Image
            isZoomed
            removeWrapper
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover"
            classNames={{
              img: "h-full w-full object-cover",
              zoomedWrapper: "h-full w-full",
            }}
            loading="lazy"
            src={project.image}
          />
          <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-center overflow-hidden rounded-md border-1 border-white/20 bg-black/50 py-2.5 shadow-small backdrop-blur-sm before:rounded-md">
            <p className="z-10 text-xs font-medium uppercase tracking-wider text-white">
              {project.category}
            </p>
          </CardFooter>
        </div>

        <div className="flex flex-grow flex-col p-6">
          <h3 className="mb-2 text-xl font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="mb-4 flex-grow text-sm leading-relaxed text-foreground-600">
            {project.description}
          </p>
          <Button
            aria-label={`View details for ${project.title}`}
            className="w-full transition-colors md:w-auto"
            color="primary"
            endContent={<Icon icon="lucide:arrow-right" />}
            variant="bordered"
            onClick={onViewDetails}
          >
            View Project
          </Button>
        </div>
      </CardBody>
    </Card>
  );
});
