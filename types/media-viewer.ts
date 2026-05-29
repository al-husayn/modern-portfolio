export type MediaViewerType = "image" | "video";

export interface MediaViewerProps {
  src: string;
  alt?: string;
  type?: MediaViewerType;
  className?: string;
  width?: number;
  height?: number;
  captionsSrc?: string;
  captionsLang?: string;
  captionsLabel?: string;
}
