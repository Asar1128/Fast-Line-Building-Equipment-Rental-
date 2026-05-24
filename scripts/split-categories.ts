import fs from 'node:fs/promises';
import path from 'node:path';

interface Machine {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  price: string;
  specifications: Record<string, string>;
  features: string[];
  availability: string;
}

interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
  ogImage: string;
  canonicalPath: string;
  machines: Machine[];
}

interface CategoryIndexEntry {
  slug: string;
  name: string;
  description: string;
  image: string;
  canonicalPath: string;
}

async function main() {
  const srcDir = path.resolve('src/content/machinery');
  const categoriesPath = path.join(srcDir, 'categories.json');
  const outputDir = path.join(srcDir, 'categories');

  const raw = await fs.readFile(categoriesPath, 'utf-8');
  const categories: Category[] = JSON.parse(raw);

  await fs.mkdir(outputDir, { recursive: true });

  const index: CategoryIndexEntry[] = categories.map((cat) => ({
    slug: cat.slug,
    name: cat.name,
    description: cat.description,
    image: cat.image,
    canonicalPath: cat.canonicalPath,
  }));

  await fs.writeFile(
    path.join(srcDir, 'categories-index.json'),
    JSON.stringify(index, null, 2),
    'utf-8'
  );
  console.log(`Created categories-index.json (${categories.length} entries)`);

  for (const category of categories) {
    const filePath = path.join(outputDir, `${category.slug}.json`);
    await fs.writeFile(filePath, JSON.stringify(category, null, 2), 'utf-8');
    console.log(`Created categories/${category.slug}.json`);
  }

  console.log(`\nDone! Split ${categories.length} categories.\n`);
}

main().catch(console.error);
