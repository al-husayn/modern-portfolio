import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Avatar,
  AvatarGroup,
  Tooltip,
  ScrollShadow,
} from "@heroui/react";
import { Icon } from "@iconify/react";

import ImageGallery from "@/components/image-gallery";
import { ProjectModalProps } from "@/types/projects";

export const ProjectModal = ({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Modal
      backdrop="blur"
      className="app-card overflow-hidden"
      isOpen={isOpen}
      scrollBehavior="inside"
      size="xl"
      onClose={onClose}
    >
      <ModalContent>
        <ModalHeader className="border-b border-divider text-xl font-bold text-foreground">
          {project.title}
        </ModalHeader>
        <ScrollShadow hideScrollBar size={60}>
          <ModalBody className="py-6">
            {project.gallery && project.gallery.length > 0 && (
              <ImageGallery images={project.gallery} />
            )}

            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-primary-500">
              {project.category}
            </p>

            <div className="mb-6 whitespace-pre-line leading-relaxed text-foreground-600">
              {project.details}
            </div>
            {project.tech && (
              <div className="mb-6">
                <h4 className="mb-4 font-semibold text-foreground">
                  Technologies used
                </h4>
                <AvatarGroup>
                  {project.tech.map(({ name, icon }) => (
                    <Tooltip key={name} content={name} showArrow={true}>
                      <Avatar
                        key={name}
                        showFallback
                        classNames={{
                          base: "bg-transparent",
                          icon: "text-foreground dark:text-foreground-dark",
                        }}
                        icon={<Icon icon={icon} width={25} />}
                      />
                    </Tooltip>
                  ))}
                </AvatarGroup>
              </div>
            )}
          </ModalBody>
        </ScrollShadow>
        {(project.github || project.live) && (
          <div className="mb-4 flex justify-end gap-2 px-6">
            {project.github && (
              <Button
                isIconOnly
                aria-label="View on GitHub"
                as="a"
                href={project.github}
                radius="md"
                rel="noopener noreferrer"
                target="_blank"
                variant="flat"
              >
                <Icon height={22} icon="mdi:github" width={22} />
              </Button>
            )}
            {project.live && (
              <Button
                isIconOnly
                aria-label="View Live Project"
                as="a"
                href={project.live}
                radius="md"
                rel="noopener noreferrer"
                target="_blank"
                variant="flat"
              >
                <Icon height={22} icon="mdi:web" width={22} />
              </Button>
            )}
          </div>
        )}

        <ModalFooter className="flex flex-wrap justify-end gap-3 border-t border-divider">
          <Button
            className="text-foreground-500"
            color="danger"
            variant="light"
            onPress={onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
