import type { JsonLdSchema } from '@/types/seo';

interface JsonLdProps {
  schema: JsonLdSchema | JsonLdSchema[];
}

export function JsonLd({ schema }: JsonLdProps) {
  const schemas = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s).replace(/<\//g, '<\\/') }}
        />
      ))}
    </>
  );
}
