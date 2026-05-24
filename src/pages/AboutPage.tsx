import { RootLayout } from '@/components/layout/RootLayout';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';

export default function AboutPage() {
  return (
    <RootLayout
      meta={{
        title: 'About Us - Construction Equipment Rental in Dubai | Fast Line',
        description:
          'Learn about Fast Line Building Equipment Rental - based in Al Quoz, Dubai. Trusted provider of generators, scaffolding, and construction equipment rental across Dubai and the UAE with free delivery and the best rates in the market.',
        canonicalPath: '/about',
        ogImage: '/images/og-about.jpg',
      }}
    >
      {/* Corporate Banner */}
      <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden bg-navy-900">
        <img
          src="/images/about-hero-bg.png"
          alt="About Fast Line Building Equipment Rental"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent" />
        <Container className="relative h-full flex flex-col justify-end pb-12 md:pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            About Fast Line Building Equipment Rental
          </h1>
          <p className="mt-4 text-lg md:text-xl text-navy-200 max-w-3xl font-light">
            Your trusted partner for premium industrial machinery.
          </p>
        </Container>
      </div>

      <Section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left Column: Main Text */}
            <div className="lg:col-span-7 prose prose-lg max-w-none">
              <p className="text-xl text-navy-600 leading-relaxed font-medium">
                Founded in 2005, Fast Line Building Equipment Rental is a trusted provider of construction
                and building equipment across Dubai and the UAE. With over 18 years of experience,
                we specialize in the rental, delivery, and repair of generators, scaffolding towers,
                light towers, welders, compaction equipment, air compressors, pressure washers,
                floor cleaners, floor grinders, and pipe threaders.
              </p>

              <div className="mt-12">
                <Heading level={2} className="text-3xl font-bold text-navy-900 mb-6">Our Mission</Heading>
                <p className="text-navy-600 leading-relaxed text-lg">
                  To provide construction and industrial businesses across the UAE with the
                  highest quality rental equipment at competitive prices, backed by reliable
                  delivery, expert maintenance, and exceptional customer support. We believe that
                  the right equipment is the foundation of every successful project.
                </p>
              </div>

              <div className="mt-16">
                <Heading level={2} className="text-3xl font-bold text-navy-900 mb-8">Why Choose Us</Heading>
                <ul className="space-y-4 text-navy-600 mt-6 bg-navy-50/70 p-8 md:p-10 rounded-2xl border border-navy-100/50">
                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg"><strong className="text-navy-900 font-semibold">Quality Assured:</strong> Every machine undergoes rigorous inspection and testing.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg"><strong className="text-navy-900 font-semibold">Country Wide Shipping:</strong> Free delivery and pickup across Dubai and all major UAE locations — at the best and most competitive rates in the market.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg"><strong className="text-navy-900 font-semibold">Competitive Pricing:</strong> Direct relationships with top manufacturers.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg"><strong className="text-navy-900 font-semibold">After-Sales Service:</strong> Spare parts and repair support to keep your rented equipment running smoothly.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg"><strong className="text-navy-900 font-semibold">Trusted by Industry Leaders:</strong> We have worked with ALEC Engineering, Sobha, Al Naboodah Construction, Al Sahel Construction, DBB Contracting, AMANA Group, and Al Shafar Engineering LLC.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: What We Offer */}
            <div className="lg:col-span-5 relative">
              <div className="bg-navy-900 rounded-2xl p-8 md:p-10 shadow-xl lg:sticky lg:top-8">
                <Heading level={2} className="text-2xl font-bold text-white border-b border-navy-700 pb-5 mb-8">
                  What We Offer
                </Heading>
                <div className="space-y-8">
                  {[
                    { title: 'Generators', desc: 'Diesel and portable generators from 5.5 kVA to 1000 kVA for construction, commercial, and emergency power.' },
                    { title: 'Compaction Equipment', desc: 'Vibratory rollers, plate compactors, and tamping rammers for soil and asphalt compaction.' },
                    { title: 'Air Compressors', desc: 'Portable diesel towable air compressors from top brands for jackhammers, sandblasting, and drilling.' },
                    { title: 'Welders', desc: 'Engine-driven welders and welding generators for pipeline construction, fabrication, and maintenance.' },
                    { title: 'Light Towers', desc: 'Mobile diesel light towers for night construction, events, and emergency site lighting.' },
                    { title: 'Scaffolding Towers', desc: 'Aluminum and steel scaffolding towers for maintenance, painting, and construction access at height.' },
                    { title: 'Cleaning & Finishing', desc: 'Pressure washers, floor scrubbers, concrete grinders, and pipe threaders for site cleanup and preparation.' },
                    { title: 'Delivery & Pickup', desc: 'Free delivery and pickup across Dubai and all major UAE locations — at the best rates in the market.' },
                    { title: 'Repair Services', desc: 'On-site and workshop repair with flexible daily, weekly, and monthly rental periods available.' },
                  ].map((item) => (
                    <div key={item.title} className="group">
                      <h3 className="font-semibold text-brand-400 group-hover:text-brand-300 transition-colors text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-navy-200 text-base leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </Container>
      </Section>
    </RootLayout>
  );
}
