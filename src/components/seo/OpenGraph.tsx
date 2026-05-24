import type { OpenGraphProps } from '@/types/seo';

export function OpenGraph({
  title,
  description,
  image,
  url,
  type = 'website',
  siteName,
  locale = 'en_US',
}: OpenGraphProps) {
  const imageUrl = image.startsWith('http') ? image : `${url.split('/').slice(0, 3).join('/')}${image}`;

  return (
    <>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
    </>
  );
}
