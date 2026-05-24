export function generateRobotsTxt(siteUrl: string): string {
  return `User-agent: Googlebot
Disallow: /

User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
}

export async function writeRobotsTxt(
  siteUrl: string,
  outDir: string
): Promise<void> {
  const fs = await import('node:fs/promises');
  const content = generateRobotsTxt(siteUrl);
  await fs.writeFile(`${outDir}/robots.txt`, content, 'utf-8');
}
