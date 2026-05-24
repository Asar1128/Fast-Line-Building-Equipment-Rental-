import type { MachineryCategory, Machine } from '@/types/machinery';
import categoriesIndex from '@/content/machinery/categories-index.json';

export type { MachineryCategory, Machine };

const categoryNames = categoriesIndex.map((c) => c.name);

export const categoryOptions = categoryNames;

export function getCategorySlug(name: string): string | undefined {
  return categoriesIndex.find((c) => c.name === name)?.slug;
}

export function getCategoryBySlug(slug: string) {
  return categoriesIndex.find((c) => c.slug === slug);
}

export const allCategories = categoriesIndex;

export async function loadCategory(slug: string): Promise<MachineryCategory | null> {
  try {
    const module = await import(`@/content/machinery/categories/${slug}.json`);
    return module.default as MachineryCategory;
  } catch {
    return null;
  }
}

export async function loadAllCategories(): Promise<MachineryCategory[]> {
  const results = await Promise.all(
    categoriesIndex.map((c) =>
      import(`@/content/machinery/categories/${c.slug}.json`).then(
        (m) => m.default as MachineryCategory
      )
    )
  );
  return results;
}
