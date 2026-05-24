import fs from 'node:fs/promises';
import path from 'node:path';
import { generateRobotsTxt } from '../src/lib/seo/robots';

async function main() {
  const siteUrl = process.env.VITE_SITE_URL || 'https://fastlinerental.com';
  const outDir = 'dist';

  const robots = generateRobotsTxt(siteUrl);
  await fs.writeFile(path.join(outDir, 'robots.txt'), robots, 'utf-8');
  console.log('robots.txt generated successfully');
}

main().catch(console.error);
