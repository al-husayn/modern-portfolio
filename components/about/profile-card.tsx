"use client";

import { memo } from "react";
import { Card, Image } from "@heroui/react";

import { HighlightText } from "@/components/textAnimations/highlight-text";
import { SplittingText } from "@/components/textAnimations/splitting-text";
import { ProfileCardProps } from "@/types/about";

export const ProfileCard = memo(function ProfileCard({
  image,
  name,
  title,
  description,
}: ProfileCardProps) {
  return (
    <Card className="w-full max-w-6xl p-0 mb-12 overflow-hidden rounded-lg app-card md:p-0">
      <div className="flex flex-col items-center gap-8 md:items-start mdplus:flex-row">
        <div className="relative h-[300px] w-full md:w-[300px]">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              isZoomed
              removeWrapper
              alt="Profile background"
              className="block object-cover object-top w-full h-full"
              src={image}
            />
            <div className="absolute inset-x-0 bottom-0 z-10 p-4 border-t border-white/20 bg-black/50 backdrop-blur">
              <div className="flex flex-col text-white">
                <HighlightText className="text-lg font-semibold " text={name} />
                <p className="text-sm text-white/80">{title}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-2xl px-6 py-4 text-sm leading-relaxed text-foreground-600 md:py-8">
          {description.map((paragraph, index) => (
            <p key={index} className="mb-4">
              <SplittingText
                delay={index * 500}
                inView={true}
                inViewOnce={true}
                motionVariants={{ stagger: 0.08 }}
                text={paragraph}
                type="words"
              />
            </p>
          ))}
        </div>
      </div>
    </Card>
  );
});
