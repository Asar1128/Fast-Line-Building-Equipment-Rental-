function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export function generateSitemap(
  entries: SitemapEntry[],
  siteUrl: string
): string {
  const urls = entries
    .map(
      (entry) => `
    <url>
      <loc>${escapeXml(siteUrl)}${escapeXml(entry.url)}</loc>
      <lastmod>${escapeXml(entry.lastmod)}</lastmod>
      <changefreq>${escapeXml(entry.changefreq)}</changefreq>
      <priority>${entry.priority.toFixed(1)}</priority>
    </url>
  `
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;
}

export async function writeSitemap(
  entries: SitemapEntry[],
  siteUrl: string,
  outDir: string
): Promise<void> {
  const fs = await import('node:fs/promises');
  const content = generateSitemap(entries, siteUrl);
  await fs.writeFile(`${outDir}/sitemap.xml`, content, 'utf-8');
}
