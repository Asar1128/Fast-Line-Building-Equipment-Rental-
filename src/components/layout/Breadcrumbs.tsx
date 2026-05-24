import type { BreadcrumbItem } from '@/types/seo';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils/cn';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-navy-500">
        <li>
          <Link to="/" className="hover:text-navy-900 hover:underline">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link
                to={item.href}
                className="hover:text-navy-900 hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span
                aria-current="page"
                className={cn(index === items.length - 1 && 'font-medium text-navy-900')}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
