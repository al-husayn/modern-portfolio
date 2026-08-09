"use client";

import Image from "next/image";
import { memo, useState } from "react";
import { Skeleton } from "@heroui/react";
import { AnimatePresence, motion } from "@/lib/motion";

type ImageGalleryProps = {
  images: readonly string[];
};

const ImageGallery = memo(function ImageGallery({ images }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const activeImage = images[activeIndex];

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    setImageLoaded(false);
  };

  return (
    <div className="flex flex-col items-center w-full gap-4 mb-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeImage}
          animate={{ opacity: 1 }}
          className="w-full max-w-xl overflow-hidden h-65 md:h-80 rounded-xl"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Skeleton className="w-full h-full rounded-lg" isLoaded={imageLoaded}>
            <Image
              alt={`Project image ${activeIndex + 1}`}
              className="object-cover w-full h-full"
              fill
              src={activeImage}
              onLoad={() => setImageLoaded(true)}
            />
          </Skeleton>
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-3">
        {images.map((img, index) => (
          <motion.button
            key={`${img}-${index}`}
            animate={{ scale: 1 }}
            aria-label={`View image ${index + 1}`}
            className={`w-15 h-19 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
              index === activeIndex ? "border-blue-500" : "border-transparent"
            }`}
            transition={{ duration: 0.3 }}
            type="button"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleThumbnailClick(index)}
          >
            <Image
              alt={`Thumbnail ${index + 1}`}
              className="object-cover w-full h-full"
              src={img}
              fill
              sizes="80px"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
});

export default ImageGallery;
