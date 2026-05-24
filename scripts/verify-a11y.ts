import fs from 'node:fs/promises';
import path from 'node:path';

async function verifyA11y() {
  const distDir = 'dist';
  const files = await fs.readdir(distDir);
  const htmlFiles = files.filter((f) => f.endsWith('.html'));

  let hasErrors = false;

  for (const file of htmlFiles) {
    const content = await fs.readFile(path.join(distDir, file), 'utf-8');

    const checks = [
      { name: 'lang attribute', test: /<html[^>]*lang=/ },
      { name: 'main landmark', test: /<main/ },
      { name: 'h1 heading', test: /<h1/ },
      { name: 'skip link', test: /skip.*main.*content/i },
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
  } else {
    console.log('✅ All pages pass basic accessibility verification');
  }
}

verifyA11y().catch(console.error);
