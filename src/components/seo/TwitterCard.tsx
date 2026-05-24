import type { TwitterCardProps } from '@/types/seo';

export function TwitterCard({
  card = 'summary_large_image',
  title,
  description,
  image,
}: TwitterCardProps) {
  const imageUrl = image.startsWith('http')
    ? image
    : `${import.meta.env.VITE_SITE_URL}${image}`;

  return (
    <>
      <meta name="twitter:card" content={card} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={title} />
    </>
  );
}
