import { RootLayout } from '@/components/layout/RootLayout';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/ui/Section';
import { Link } from 'react-router-dom';

export const blogPosts = [
  {
    slug: 'generator-rental-guide-dubai',
    title: 'Complete Guide to Generator Rental in Dubai',
    excerpt: 'Everything you need to know about renting generators in Dubai - from choosing the right kVA rating to delivery options across Al Quoz, Jebel Ali, and across the UAE.',
    date: '2026-05-15',
  },
  {
    slug: 'construction-equipment-rental-tips',
    title: '5 Tips for Renting Construction Equipment in the UAE',
    excerpt: 'Save time and money on your next construction project. Learn how to choose the right rental equipment and find reliable suppliers in Dubai and across the UAE.',
    date: '2026-05-10',
  },
  {
    slug: 'compaction-equipment-guide',
    title: 'Choosing the Right Compaction Equipment for Your Project',
    excerpt: 'Walk-behind vs ride-on rollers: which compactor is right for your asphalt or soil compaction project? A guide for contractors in the UAE.',
    date: '2026-05-05',
  },
  {
    slug: 'light-tower-rental-night-construction',
    title: 'Light Tower Rental for Night Construction in Dubai',
    excerpt: 'Working after dark? Learn about LED and metal halide light tower options for your construction site, event, or emergency lighting needs.',
    date: '2026-04-28',
  },
];

export default function BlogPage() {
  return (
    <RootLayout
      meta={{
        title: 'Blog - Equipment Rental Tips & Guides | Fast Line Building Equipment Rental',
        description:
          'Read our guides on construction equipment rental in Dubai and across the UAE. Tips on generators, compactors, light towers, and more.',
        canonicalPath: '/blog',
        ogImage: '/images/og-default.jpg',
      }}
    >
      {/* Banner */}
      <div className="relative w-full h-[350px] md:h-[400px] overflow-hidden bg-navy-900">
        <img
          src="/images/blog-hero-bg.png"
          alt="Equipment rental blog"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent" />
        <Container className="relative h-full flex flex-col justify-end pb-12 md:pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Blog
          </h1>
          <p className="mt-4 text-lg md:text-xl text-navy-200 max-w-3xl font-light">
            Tips, guides, and insights on construction equipment rental in the UAE.
          </p>
        </Container>
      </div>

      <Section className="bg-background-light py-16 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-2xl border border-border-light bg-white overflow-hidden hover:border-brand-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="p-8 flex flex-col flex-1">
                  <time dateTime={post.date} className="text-sm font-bold text-brand-600 mb-4 block uppercase tracking-wider">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 group-hover:text-brand-600 transition-colors line-clamp-2">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-navy-600 leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>

                  <div className="mt-8 pt-6 border-t border-border-light/50">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-sm font-bold text-navy-900 group-hover:text-brand-600 transition-colors"
                    >
                      Read Full Article
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </RootLayout>
  );
}
