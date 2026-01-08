
export interface BaseTimelineItem {
  readonly title: string;
  readonly date: string;
  readonly icon?: string;
}

export interface ProfileCardProps {
  image: string;
  name: string;
  title: string;
  description: readonly string[];
}

export interface SectionHeaderProps {
  icon: string;
  title: string;
  className?: string;
}

export interface TimelineItemProps {
  title: string;
  company?: string;
  programme?: string;
  date: string;
  description: string | readonly string[];
  variants?: any;
  delay?: number;
}

export interface EducationItem extends BaseTimelineItem {
  readonly programme?: string;
  readonly description: string;
}

export interface ExperienceItem extends BaseTimelineItem {
  readonly company?: string;
  readonly description: readonly string[];
}


export interface TechItem {
  readonly name: string;
  readonly icon: string;
}

export interface TechCategory {
  readonly description: string;
  readonly tools: readonly TechItem[];
}

export type EducationItems = readonly EducationItem[];
export type ExperienceItems = readonly ExperienceItem[];
export type TechCategories = Readonly<Record<string, TechCategory>>;
