import { memo } from "react";
import { Card, CardBody, Avatar } from "@heroui/react";
import { Icon } from "@iconify/react";

import { TestimonialCardProps } from "@/types/testimonials";

export const TestimonialCard = memo(function TestimonialCard({
  name,
  role,
  content,
  avatar,
}: TestimonialCardProps) {
  return (
    <Card
      className="h-80 border border-default-200 bg-content1/85 shadow-sm backdrop-blur md:h-64"
      radius="md"
    >
      <CardBody className="flex flex-col p-6">
        <div>
          <Icon className="mb-4 h-8 w-8 text-primary-500" icon="lucide:quote" />
          <p className="mb-6 italic text-foreground-600">
            &ldquo;{content}&rdquo;
          </p>
        </div>
        <div className="mt-auto flex items-center gap-4">
          <Avatar className="ring-2 ring-primary-200" size="lg" src={avatar} />
          <div>
            <h4 className="font-semibold text-foreground">{name}</h4>
            <p className="text-sm text-foreground-500">{role}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
});
