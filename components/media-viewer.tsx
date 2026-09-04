'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { MediaViewerProps } from '@/types/media-viewer';

export function MediaViewer({
  src,
  alt = '',
  type = 'image',
  className,
  width,
  height,
  captionsSrc,
  captionsLang = 'en',
  captionsLabel = 'English',
}: MediaViewerProps) {
  const commonClasses = cn(
    'w-full h-full object-cover rounded-lg border overflow-hidden aspect-video',
    className,
  );

  const renderMedia = () => {
    if (type === 'video') {
      return (
        <video
          src={src}
          className={commonClasses}
          controls
          loop
          {...(width && height ? { width, height } : {})}
        >
          <track
            default
            kind="captions"
            label={captionsLabel}
            src={captionsSrc ?? ''}
            srcLang={captionsLang}
          />
          Your browser does not support the video tag.
        </video>
      );
    }

    const imageProps = {
      src,
      alt,
      className: commonClasses,
      sizes: '100vw',
    };

    return width && height && typeof width === 'number' && typeof height === 'number' ? (
      <Image {...imageProps} width={width} height={height} />
    ) : (
      <Image {...imageProps} fill />
    );
  };

  return (
    <div className="w-full my-6">
      <div className="relative w-full aspect-video">{renderMedia()}</div>
    </div>
  );
}

export function ImageViewer(props: Omit<MediaViewerProps, 'type'>) {
  return <MediaViewer {...props} type="image" />;
}

export function VideoViewer(props: Omit<MediaViewerProps, 'type'>) {
  return <MediaViewer {...props} type="video" />;
}
