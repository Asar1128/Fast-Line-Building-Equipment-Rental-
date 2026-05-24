export interface PageMeta {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage: string;
  noIndex?: boolean;
}

export interface MetaTagsProps {
  title: string;
  description: string;
  canonical: string;
  robots?: string;
}

export interface OpenGraphProps {
  title: string;
  description: string;
  image: string;
  url: string;
  type?: 'website' | 'article';
  siteName: string;
  locale?: string;
}

export interface TwitterCardProps {
  card?: 'summary' | 'summary_large_image';
  title: string;
  description: string;
  image: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export type JsonLdSchema = Record<string, unknown>;
