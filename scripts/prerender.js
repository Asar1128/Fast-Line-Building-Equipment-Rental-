import fs from 'node:fs/promises';
import path from 'node:path';
/**
 * Post-build prerender script.
 *
 * This script generates static HTML files for each route by:
 * 1. Reading the built index.html
 * 2. Creating directory structures for each route
 * 3. Copying index.html to each route path
 *
 * For full pre-rendering with JavaScript execution, install puppeteer
 * and use the renderWithPuppeteer function below.
 *
 * For now, this ensures proper SPA routing with static hosting
 * by creating fallback HTML files at each route path.
 */
const DIST_DIR = 'dist';
// All routes that need static HTML files
const routes = [
    '/',
    '/equipment',
    '/equipment/generators',
    '/equipment/compaction',
    '/equipment/air-compressors',
    '/equipment/welders',
    '/equipment/light-towers',
    '/equipment/scaffolding-towers',
    '/equipment/pressure-washers',
    '/equipment/cleaners',
    '/equipment/grinders',
    '/equipment/threaders',
    '/equipment-rental-dubai',
    '/equipment-rental-sharjah',
    '/equipment-rental-al-quoz',
    '/equipment-rental-sajjah',
    '/generator-rental-dubai',
    '/generator-rental-sharjah',
    '/scaffolding-rental-dubai',
    '/scaffolding-rental-sharjah',
    '/services/delivery',
    '/services/pickup',
    '/services/repair',
    '/contact',
    '/about',
    '/blog',
];
async function main() {
    const indexHtml = await fs.readFile(path.join(DIST_DIR, 'index.html'), 'utf-8');
    for (const route of routes) {
        if (route === '/')
            continue; // index.html already exists at root
        const routePath = path.join(DIST_DIR, route);
        await fs.mkdir(routePath, { recursive: true });
        await fs.writeFile(path.join(routePath, 'index.html'), indexHtml, 'utf-8');
    }
    console.log(`Pre-render: Created ${routes.length - 1} static HTML files for SPA routing`);
}
main().catch(console.error);
//# sourceMappingURL=prerender.js.map