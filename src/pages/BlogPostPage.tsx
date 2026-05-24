import { RootLayout } from '@/components/layout/RootLayout';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/ui/Section';
import { Link, useParams } from 'react-router-dom';
import { blogPosts } from './BlogPage';

interface BlogContent {
  title: string;
  description: string;
  date: string;
  content: string[];
}

const blogContent: Record<string, BlogContent> = {
  'generator-rental-guide-dubai': {
    title: 'Complete Guide to Generator Rental in Dubai',
    description: 'Everything you need to know about renting generators in Dubai - from choosing the right kVA rating to delivery options across Al Quoz, Jebel Ali, and across the UAE.',
    date: '2026-05-15',
    content: [
      'Renting a generator in Dubai is essential for construction projects, events, and emergency backup power. With the UAE\'s extreme summer temperatures and year-round construction activity, having reliable power on-site is critical.',
      'At Fast Line Building Equipment Rental, we offer generators ranging from 5.5 kVA portable units perfect for small tools and home backup, all the way up to 1000 kVA industrial generators for large construction sites, hospitals, and data centers.',
      'When choosing a generator for your project, consider the total power requirement of your equipment. A typical construction site with basic tools may need 20-50 kVA, while sites running welders, compressors, and heavy machinery may require 200-500 kVA.',
      'We stock trusted brands including Caterpillar (CAT), Honda, Perkins, Cummins, and Powerlink. All our generators are maintained regularly and come with free delivery and pickup across Dubai and the UAE, including Al Quoz, Jebel Ali, Dubai Industrial City, and DIP.',
      'Silent (enclosed) generators are available for noise-sensitive areas such as residential neighborhoods, hospitals, and office buildings. These operate at 65-75 dB(A) at 7 meters - comparable to normal conversation.',
      'Contact Fast Line Building Equipment Rental at 056-5714999 for competitive rental rates and same-day delivery in Dubai and across the UAE.',
    ],
  },
  'construction-equipment-rental-tips': {
    title: '5 Tips for Renting Construction Equipment in the UAE',
    description: 'Save time and money on your next construction project. Learn how to choose the right rental equipment and find reliable suppliers in Dubai and across the UAE.',
    date: '2026-05-10',
    content: [
      'Construction equipment rental in the UAE offers significant advantages over purchasing, especially for short-term projects or contractors who need flexibility. Here are five tips to get the most from your rental experience.',
      'Tip 1: Assess Your Actual Needs - Before renting, calculate exactly what equipment you need and for how long. Renting a larger generator than necessary wastes money, while an undersized one causes project delays.',
      'Tip 2: Check Delivery and Pickup Terms - The best rental companies in Dubai offer free delivery and pickup. At Fast Line Building Equipment Rental, we deliver to all areas across Dubai at no extra cost — with the best and most competitive rates in the market.',
      'Tip 3: Inspect Equipment Before Signing - Always inspect rental equipment upon delivery. Reputable companies like Fast Line Building Equipment Rental maintain their fleet regularly, but a quick visual check ensures you receive equipment in proper working condition.',
      'Tip 4: Ask About Repair Services - Equipment breakdowns happen. Choose a rental company that offers repair services. Fast Line Building Equipment Rental provides on-site repairs across Dubai and the UAE, minimizing your project downtime.',
      'Tip 5: Plan for UAE Weather - Dubai\'s heat can affect equipment performance. Ensure generators have adequate cooling, and schedule maintenance during summer months. Our team can advise on the best equipment for hot-weather operation.',
    ],
  },
  'compaction-equipment-guide': {
    title: 'Choosing the Right Compaction Equipment for Your Project',
    description: 'Walk-behind vs ride-on rollers: which compactor is right for your asphalt or soil compaction project? A guide for contractors in the UAE.',
    date: '2026-05-05',
    content: [
      'Proper compaction is critical for road construction, parking lots, driveways, and any project requiring a stable base. The right equipment depends on your project scale, material type, and site constraints.',
      'Walk-behind vibratory rollers like the BOMAG BW 65 H (650 kg, 650 mm drum) are ideal for small to medium projects. They excel at compacting sidewalks, driveways, trenches, and repair patches where a larger machine cannot fit.',
      'Ride-on tandem rollers like the BOMAG BW 90 AD (1680 kg, 900 mm drum) are suitable for road construction, parking lots, and larger compaction areas. The articulated steering provides excellent maneuverability for their size.',
      'For asphalt compaction in the UAE, timing is crucial due to the heat. In summer, asphalt can remain workable longer, but in winter months, you need to compact quickly before the material cools. Having the right equipment ready on-site prevents delays.',
      'Both walk-behind and ride-on compaction equipment is available for rent at Fast Line Building Equipment Rental. We provide free delivery across Dubai and the UAE — at the best rates in the market. Our BOMAG rollers are maintained to manufacturer specifications for optimal performance.',
      'Contact us at 056-5714999 or WhatsApp for compactor rental rates and availability.',
    ],
  },
  'light-tower-rental-night-construction': {
    title: 'Light Tower Rental for Night Construction in Dubai',
    description: 'Working after dark? Learn about LED and metal halide light tower options for your construction site, event, or emergency lighting needs.',
    date: '2026-04-28',
    content: [
      'Night construction in Dubai is common due to the extreme daytime heat during summer months. Many contractors schedule major works between 6 PM and 6 AM when temperatures are manageable. Proper site lighting is essential for safety and productivity.',
      'Light towers provide powerful illumination covering 4,000-5,000 square meters per unit. Our fleet includes both metal halide (4x 1000W) and modern LED options that offer the same coverage with lower fuel consumption.',
      'The Powko Portable Light Tower features a 9-meter extendable mast with 360-degree rotation, providing flexible coverage. With 60-80 hours of runtime on a single fuel fill, it can operate for multiple shifts without refueling.',
      'The MAK Diesel Light Tower delivers an impressive 440,000 lumens with a hydraulic mast that extends to 9 meters. Its Deep Sea 4520 controller provides reliable automatic operation with low-oil shutdown protection.',
      'For events, emergency response, and temporary construction sites, trailer-mounted light towers can be deployed within hours. We deliver across Dubai and the UAE with same-day availability.',
      'Rent light towers from Fast Line Building Equipment Rental at 056-5714999. Free delivery and pickup included.',
    ],
  },
};

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogContent[slug] : undefined;
  const postMeta = blogPosts.find((p) => p.slug === slug);

  if (!post || !postMeta) {
    return (
      <RootLayout
        meta={{
          title: 'Post Not Found',
          description: 'The requested blog post could not be found.',
          canonicalPath: `/blog/${slug}`,
          ogImage: '/images/og-default.jpg',
        }}
      >
        <div className="bg-white border-b border-border-light">
          <Container className="py-16 text-center">
            <h1 className="text-3xl font-bold text-navy-900">Post Not Found</h1>
            <p className="mt-4 text-navy-600">The blog post you are looking for does not exist.</p>
            <Link to="/blog" className="mt-6 inline-block text-brand-600 hover:underline font-medium">
              ← Back to Blog
            </Link>
          </Container>
        </div>
      </RootLayout>
    );
  }

  return (
    <RootLayout
      meta={{
        title: `${post.title} | Fast Line Building Equipment Rental Blog`,
        description: post.description,
        canonicalPath: `/blog/${slug}`,
        ogImage: '/images/og-default.jpg',
      }}
    >
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-border-light">
        <Container className="py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-navy-500">
              <li><Link to="/" className="hover:text-navy-900 hover:underline">Home</Link></li>
              <li><span aria-hidden="true">/</span></li>
              <li><Link to="/blog" className="hover:text-navy-900 hover:underline">Blog</Link></li>
              <li><span aria-hidden="true">/</span></li>
              <li className="font-medium text-navy-900">{post.title}</li>
            </ol>
          </nav>
        </Container>
      </div>

      <Section>
        <Container>
          <article className="mx-auto max-w-3xl">
            <header className="mb-8">
              <time dateTime={post.date} className="text-sm text-navy-500">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <h1 className="mt-2 text-3xl md:text-4xl font-bold text-navy-900">
                {post.title}
              </h1>
              <p className="mt-4 text-lg text-navy-600">{post.description}</p>
            </header>

            <div className="space-y-6">
              {post.content.map((paragraph, index) => (
                <p key={index} className="text-navy-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 rounded-lg bg-background-light p-6 border border-border-light">
              <h2 className="text-lg font-semibold text-navy-900">Need Equipment?</h2>
              <p className="mt-2 text-navy-600">
                Contact Fast Line Building Equipment Rental for competitive rental rates with free delivery across Dubai and the UAE.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-brand-500 px-6 py-2 text-sm font-medium text-navy-900 hover:bg-brand-400 transition-colors"
                >
                  Send Inquiry
                </Link>
                <a
                  href={`https://wa.me/9710565714999?text=${encodeURIComponent('Hi, I want to send an inquiry about-')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-border-light bg-white px-6 py-2 text-sm font-medium text-navy-900 hover:bg-navy-50 transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </article>
        </Container>
      </Section>

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: {
              '@type': 'Organization',
              name: 'Fast Line Building Equipment Rental L.L.C',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Fast Line Building Equipment Rental L.L.C',
              url: 'https://fastlinerental.com',
            },
          }),
        }}
      />
    </RootLayout>
  );
}
