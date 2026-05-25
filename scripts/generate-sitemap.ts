import fs from 'node:fs/promises';
import path from 'node:path';
import { generateSitemap } from '../src/lib/seo/sitemap';

interface CategorySitemapEntry {
  slug: string;
  canonicalPath: string;
}

interface MachineSitemapEntry {
  slug: string;
}

async function main() {
  const siteUrl = process.env.VITE_SITE_URL || 'https://fastlinerental.com';
  const outDir = 'dist';

  const today = new Date().toISOString().split('T')[0]!;

  const indexPath = path.resolve('src/content/machinery/categories-index.json');
  const indexRaw = await fs.readFile(indexPath, 'utf-8');
  const categoriesIndex: CategorySitemapEntry[] = JSON.parse(indexRaw);

  const categoryRoutes = categoriesIndex.map((cat) => ({
    url: cat.canonicalPath,
    lastmod: today,
    changefreq: 'weekly' as const,
    priority: 0.8,
  }));

  const repairServiceRoutes = categoriesIndex.map((cat) => ({
    url: `/repair-services/${cat.slug}`,
    lastmod: today,
    changefreq: 'weekly' as const,
    priority: 0.7,
  }));

  const categoriesDir = path.resolve('src/content/machinery/categories');
  const categoryFiles = await fs.readdir(categoriesDir);
  const allMachineRoutes: { url: string; lastmod: string; changefreq: 'weekly'; priority: number }[] = [];

  for (const file of categoryFiles) {
    if (!file.endsWith('.json')) continue;
    const catPath = path.join(categoriesDir, file);
    const raw = await fs.readFile(catPath, 'utf-8');
    const category = JSON.parse(raw);
    const slug = file.replace('.json', '');
    for (const machine of category.machines as MachineSitemapEntry[]) {
      allMachineRoutes.push({
        url: `/equipment/${slug}/${machine.slug}`,
        lastmod: today,
        changefreq: 'weekly' as const,
        priority: 0.7,
      });
    }
  }

  const blogPostsPath = path.resolve('src/pages/BlogPage.tsx');
  const blogRaw = await fs.readFile(blogPostsPath, 'utf-8');
  const slugRegex = /slug:\s*'([^']+)'/g;
  const dateRegex = /date:\s*'([^']+)'/g;
  const blogSlugs: string[] = [];
  const blogDates: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = slugRegex.exec(blogRaw)) !== null) {
    blogSlugs.push(m[1]!);
  }
  while ((m = dateRegex.exec(blogRaw)) !== null) {
    blogDates.push(m[1]!);
  }

  const blogPostRoutes = blogSlugs.map((slug, i) => ({
    url: `/blog/${slug}`,
    lastmod: blogDates[i] ?? today,
    changefreq: 'monthly' as const,
    priority: 0.6,
  }));

  const routes = [
    { url: '/', lastmod: today, changefreq: 'daily' as const, priority: 1.0 },
    { url: '/equipment', lastmod: today, changefreq: 'daily' as const, priority: 0.9 },
    { url: '/repair-services', lastmod: today, changefreq: 'weekly' as const, priority: 0.9 },
    { url: '/contact', lastmod: today, changefreq: 'monthly' as const, priority: 0.8 },
    { url: '/about', lastmod: today, changefreq: 'monthly' as const, priority: 0.6 },
    { url: '/blog', lastmod: today, changefreq: 'weekly' as const, priority: 0.7 },
    { url: '/our-clients', lastmod: today, changefreq: 'monthly' as const, priority: 0.7 },
    { url: '/privacy-policy', lastmod: today, changefreq: 'yearly' as const, priority: 0.4 },
    { url: '/terms', lastmod: today, changefreq: 'yearly' as const, priority: 0.4 },
    { url: '/equipment-rental-dubai', lastmod: today, changefreq: 'weekly' as const, priority: 0.9 },
    { url: '/equipment-rental-al-quoz', lastmod: today, changefreq: 'weekly' as const, priority: 0.8 },
    { url: '/generator-rental-dubai', lastmod: today, changefreq: 'weekly' as const, priority: 0.9 },
    { url: '/scaffolding-rental-dubai', lastmod: today, changefreq: 'weekly' as const, priority: 0.9 },
    { url: '/services/delivery', lastmod: today, changefreq: 'monthly' as const, priority: 0.7 },
    { url: '/services/pickup', lastmod: today, changefreq: 'monthly' as const, priority: 0.6 },
    ...categoryRoutes,
    ...repairServiceRoutes,
    ...allMachineRoutes,
    ...blogPostRoutes,
  ];

  const sitemap = generateSitemap(routes, siteUrl);
  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(path.join(outDir, 'sitemap.xml'), sitemap, 'utf-8');
  console.log(`Sitemap generated successfully with ${routes.length} URLs`);
}

main().catch(console.error);
