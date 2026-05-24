export interface Machine {
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

export interface MachineryCategory {
  slug: string;
  name: string;
  description: string;
  image: string;
  ogImage: string;
  canonicalPath: string;
  machines: Machine[];
}
