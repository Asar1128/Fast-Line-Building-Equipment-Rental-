import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Heading({ level, children, className, id }: HeadingProps) {
  const Tag = `h${level}` as const;

  const sizes = {
    1: 'text-3xl md:text-4xl lg:text-5xl font-bold',
    2: 'text-2xl md:text-3xl lg:text-4xl font-bold',
    3: 'text-xl md:text-2xl lg:text-3xl font-semibold',
    4: 'text-lg md:text-xl lg:text-2xl font-semibold',
    5: 'text-base md:text-lg lg:text-xl font-semibold',
    6: 'text-sm md:text-base lg:text-lg font-semibold',
  };

  return (
    <Tag id={id} className={cn(sizes[level], 'tracking-tight', className)}>
      {children}
    </Tag>
  );
}
