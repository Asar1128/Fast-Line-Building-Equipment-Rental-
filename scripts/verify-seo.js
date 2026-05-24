import fs from 'node:fs/promises';
import path from 'node:path';
async function verifySeo() {
    const distDir = 'dist';
    const files = await fs.readdir(distDir);
    const htmlFiles = files.filter((f) => f.endsWith('.html'));
    let hasErrors = false;
    for (const file of htmlFiles) {
        const content = await fs.readFile(path.join(distDir, file), 'utf-8');
        const checks = [
            { name: '<title>', test: /<title>.*<\/title>/ },
            { name: 'meta description', test: /<meta name="description"/ },
            { name: 'canonical link', test: /<link rel="canonical"/ },
            { name: 'og:title', test: /<meta property="og:title"/ },
            { name: 'og:description', test: /<meta property="og:description"/ },
        ];
        for (const check of checks) {
            if (!check.test.test(content)) {
                console.error(`❌ ${file}: Missing ${check.name}`);
                hasErrors = true;
            }
        }
    }
    if (hasErrors) {
        process.exit(1);
    }
    else {
        console.log('✅ All pages pass SEO verification');
    }
}
verifySeo().catch(console.error);
//# sourceMappingURL=verify-seo.js.map