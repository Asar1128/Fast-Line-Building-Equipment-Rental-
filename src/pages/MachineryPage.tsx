import { RootLayout } from '@/components/layout/RootLayout';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Link } from 'react-router-dom';
import { allCategories } from '@/lib/machinery';

export default function MachineryPage() {
  return (
    <RootLayout
      meta={{
        title: 'Equipment for Rent in Dubai & UAE',
        description:
          'Browse our full range of construction equipment available for rent in Dubai with free delivery. Generators, compactors, welders, light towers, scaffolding & more. Best rates in the market.',
        canonicalPath: '/equipment',
        ogImage: '/images/og-default.jpg',
      }}
    >
      {/* Banner */}
      <div className="relative w-full min-h-[40vh] md:min-h-[50vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-navy-900">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/60 to-transparent z-10" />
          <img
            src="/images/hero-bg.webp"
            alt="Construction equipment rental in Dubai and across the UAE"
            className="h-full w-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-20 w-full px-6 sm:px-8 lg:px-12">
          <div className="max-w-[1400px] mx-auto text-center lg:text-left">
            <span className="inline-block rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-400 backdrop-blur-sm mb-4">
              OUR COMPLETE FLEET
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight">
              Equipment for Rent
            </h1>
            <p className="mt-6 text-lg text-navy-200 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Browse our complete range of construction and industrial equipment available for rental in Dubai and across the UAE.
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-border-light">
        <Container className="py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-navy-500">
              <li><Link to="/" className="hover:text-navy-900 hover:underline">Home</Link></li>
              <li><span aria-hidden="true">/</span></li>
              <li className="font-medium text-navy-900">Equipment</li>
            </ol>
          </nav>
        </Container>
      </div>

      <Section className="bg-background-light py-24">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allCategories.map((category) => (
              <Link
                key={category.slug}
                to={category.canonicalPath}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border-light bg-white hover:border-brand-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-white overflow-hidden relative flex items-center justify-center p-6">
                  <div className="absolute inset-0 bg-navy-50/50 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={category.image}
                    alt={`${category.name} for rent in Dubai & UAE`}
                    className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110 relative z-20 mix-blend-multiply"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 right-4 z-30 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-navy-900 shadow-sm transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    Explore Category →
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 border-t border-border-light bg-gradient-to-b from-white to-navy-50/30">
                  <Heading level={3} className="text-xl font-bold text-navy-900 group-hover:text-brand-600 transition-colors">
                    {category.name}
                  </Heading>
                  <p className="mt-3 flex-1 text-sm text-navy-600 leading-relaxed line-clamp-2">{category.description}</p>

                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="py-24 bg-navy-900 relative overflow-hidden text-white">
        {/* Abstract Background Design */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern-cta" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern-cta)" />
          </svg>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-600/20 to-transparent blur-[100px]" />
        <div className="absolute left-0 bottom-0 w-1/3 h-full bg-gradient-to-r from-brand-500/10 to-transparent blur-[100px]" />

        <Container className="text-center relative z-10">
          <Heading level={2} className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Can't Find the Equipment You Need?
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-200 font-light leading-relaxed">
            We have a much larger inventory than what is listed here. If you cannot find the specific building equipment you require, send us an inquiry and we will likely have it available for you. Free delivery across Dubai at the best rates in the market.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-brand-500 px-8 py-3.5 text-base font-bold text-navy-900 hover:bg-brand-400 transition-all shadow-[0_0_20px_rgba(255,193,7,0.3)] hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] hover:-translate-y-1"
            >
              Send an Inquiry
            </Link>
            <a
              href={`https://wa.me/9710565714999?text=${encodeURIComponent('Hi, I want to send an inquiry about-')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-transparent px-8 py-3.5 text-base font-bold text-white hover:bg-white/10 transition-all hover:-translate-y-1"
            >
              WhatsApp Us
            </a>
          </div>
        </Container>
      </Section>
    </RootLayout>
  );
}
