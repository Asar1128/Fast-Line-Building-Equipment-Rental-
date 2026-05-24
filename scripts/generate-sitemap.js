import fs from 'node:fs/promises';
import path from 'node:path';
import { generateSitemap } from '../src/lib/seo/sitemap';
async function main() {
    const siteUrl = process.env.VITE_SITE_URL || 'https://fastlinerental.com';
    const outDir = 'dist';
    const today = new Date().toISOString().split('T')[0];
    // Import categories data
    const categoriesRaw = await fs.readFile(path.resolve('src/content/machinery/categories.json'), 'utf-8');
    const categories = JSON.parse(categoriesRaw);
    const routes = [
        // Core pages
        { url: '/', lastmod: today, changefreq: 'daily', priority: 1.0 },
        { url: '/equipment', lastmod: today, changefreq: 'daily', priority: 0.9 },
        { url: '/contact', lastmod: today, changefreq: 'monthly', priority: 0.8 },
        { url: '/about', lastmod: today, changefreq: 'monthly', priority: 0.6 },
        { url: '/blog', lastmod: today, changefreq: 'weekly', priority: 0.7 },
        // Location pages
        { url: '/equipment-rental-dubai', lastmod: today, changefreq: 'weekly', priority: 0.9 },
        { url: '/equipment-rental-sharjah', lastmod: today, changefreq: 'weekly', priority: 0.9 },
        { url: '/equipment-rental-al-quoz', lastmod: today, changefreq: 'weekly', priority: 0.8 },
        { url: '/equipment-rental-sajjah', lastmod: today, changefreq: 'weekly', priority: 0.8 },
        { url: '/generator-rental-dubai', lastmod: today, changefreq: 'weekly', priority: 0.9 },
        { url: '/generator-rental-sharjah', lastmod: today, changefreq: 'weekly', priority: 0.9 },
        { url: '/scaffolding-rental-dubai', lastmod: today, changefreq: 'weekly', priority: 0.9 },
        { url: '/scaffolding-rental-sharjah', lastmod: today, changefreq: 'weekly', priority: 0.9 },
        // Service pages
        { url: '/services/delivery', lastmod: today, changefreq: 'monthly', priority: 0.7 },
        { url: '/services/pickup', lastmod: today, changefreq: 'monthly', priority: 0.6 },
        { url: '/services/repair', lastmod: today, changefreq: 'monthly', priority: 0.7 },
        // Category pages
        ...categories.map((cat) => ({
            url: cat.canonicalPath,
            lastmod: today,
            changefreq: 'weekly',
            priority: 0.8,
        })),
        // Individual product pages
        ...categories.flatMap((cat) => cat.machines.map((machine) => ({
            url: `${cat.canonicalPath}/${machine.slug}`,
            lastmod: today,
            changefreq: 'weekly',
            priority: 0.7,
        }))),
    ];
    const sitemap = generateSitemap(routes, siteUrl);
    await fs.mkdir(outDir, { recursive: true });
    await fs.writeFile(path.join(outDir, 'sitemap.xml'), sitemap, 'utf-8');
    console.log(`Sitemap generated successfully with ${routes.length} URLs`);
}
main().catch(console.error);
//# sourceMappingURL=generate-sitemap.js.map