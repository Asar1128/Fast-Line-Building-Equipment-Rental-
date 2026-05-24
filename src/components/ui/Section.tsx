import { cn } from '@/lib/utils/cn';

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabelledBy?: string;
}

export function Section({
  children,
  className,
  id,
  ariaLabelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn('py-16 md:py-24', className)}
    >
      {children}
    </section>
  );
}
