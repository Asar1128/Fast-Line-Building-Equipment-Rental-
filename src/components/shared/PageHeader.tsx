import type { BreadcrumbItem } from '@/types/seo';
import { Heading } from '@/components/ui/Heading';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="border-b border-border-light bg-background-light">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {breadcrumbs && (
          <div className="mb-4">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        <Heading level={1} className="text-navy-900">{title}</Heading>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-navy-600">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
