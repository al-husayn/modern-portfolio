import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ScrollShadow,
} from "@heroui/react";
import { Icon } from "@iconify/react";

import ImageGallery from "@/components/image-gallery";
import { ProjectModalProps } from "@/types/projects";
import {
  hasMeaningfulExternalLink,
  hasRealProjectMedia,
  isPlaceholderMediaUrl,
} from "@/lib/utils";

export const ProjectModal = ({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) => {
  if (!project) {
    return null;
  }

  const hasGithub = hasMeaningfulExternalLink(project.github);
  const hasLive = hasMeaningfulExternalLink(project.live);
  const projectGallery = project.gallery ?? [];
  const gallery = projectGallery.filter(
    (image) => !isPlaceholderMediaUrl(image),
  );
  const showGallery = hasRealProjectMedia(projectGallery);

  return (
    <Modal
      backdrop="blur"
      className="overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-white/10 dark:bg-zinc-950"
      isOpen={isOpen}
      scrollBehavior="inside"
      size="2xl"
      onClose={onClose}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-4 border-b border-stone-200 px-6 py-6 dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">
            {project.category}
          </p>
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
            {project.title}
          </h3>
          <p className="max-w-2xl text-sm leading-7 text-stone-600 dark:text-stone-300">
            {project.description}
          </p>
        </ModalHeader>

        <ScrollShadow hideScrollBar size={60}>
          <ModalBody className="gap-8 px-6 py-6">
            {showGallery && <ImageGallery images={gallery} />}

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">
                    Overview
                  </p>
                  <p className="mt-3 text-sm leading-8 text-stone-600 dark:text-stone-300">
                    {project.details}
                  </p>
                </div>

                {project.highlights && project.highlights.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">
                      Highlights
                    </p>
                    <div className="mt-4 grid gap-3">
                      {project.highlights.map((item) => (
                        <div
                          key={item}
                          className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-4 text-sm leading-7 text-stone-600 dark:border-white/10 dark:bg-zinc-900 dark:text-stone-300"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {(project.role || project.note) && (
                  <div className="grid gap-4">
                    {project.role && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">
                          Role
                        </p>
                        <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-300">
                          {project.role}
                        </p>
                      </div>
                    )}

                    {project.note && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">
                          Note
                        </p>
                        <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-300">
                          {project.note}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">
                    Tools and focus
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
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
                </div>

                {(hasLive || hasGithub) && (
                  <div className="flex flex-wrap gap-3">
                    {hasLive && (
                      <a
                        className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-950 underline decoration-stone-300 underline-offset-4 dark:text-white dark:decoration-white/20"
                        href={project.live}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Live site
                        <Icon
                          className="h-4 w-4"
                          icon="lucide:arrow-up-right"
                        />
                      </a>
                    )}
                    {hasGithub && (
                      <a
                        className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-950 underline decoration-stone-300 underline-offset-4 dark:text-white dark:decoration-white/20"
                        href={project.github}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Repository
                        <Icon className="h-4 w-4" icon="mdi:github" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </ModalBody>
        </ScrollShadow>

        <ModalFooter className="border-t border-stone-200 px-6 py-4 dark:border-white/10">
          <Button
            className="rounded-full px-5 text-sm font-semibold"
            variant="light"
            onClick={onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
