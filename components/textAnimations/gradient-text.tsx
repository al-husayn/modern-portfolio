import * as React from 'react';
import { cn } from '../../lib/utils';

type GradientTextProps = React.ComponentProps<'span'> & {
  text: string;
};

export function GradientText({ text, className, ...props }: GradientTextProps) {
  return (
    <span
      className={cn('inline-block text-primary-500', className)}
      data-slot="accent-text"
      {...props}
    >
      {text}
    </span>
  );
}

export type { GradientTextProps };
