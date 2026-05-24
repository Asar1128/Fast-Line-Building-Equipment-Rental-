import { RootLayout } from '@/components/layout/RootLayout';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Link } from 'react-router-dom';
import { allCategories } from '@/lib/machinery';

const metaTitle = 'Equipment Repair Services in Dubai & UAE | Generator, Scaffolding, Welder Repair | Fast Line';
const metaDescription = 'Professional equipment repair services in Dubai & UAE. Generator repair, scaffolding repair, compactor servicing, welder maintenance & more. On-site & workshop repairs at Al Quoz. Best rates. Call +971-56-571-4999.';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Equipment Repair Services in Dubai & UAE',
  description: metaDescription,
  provider: {
    '@type': 'LocalBusiness',
    name: 'Fast Line Building Equipment Rental L.L.C',
    telephone: '+971-56-571-4999',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Adeem Building, Dubai 44 Street, Al Quoz Third',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Dubai' },
    { '@type': 'Country', name: 'AE' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Repair Services',
    itemListElement: allCategories.map((cat, i) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: `${cat.name} Repair`,
        url: `https://fastlinerental.com/repair-services/${cat.slug}`,
      },
      position: i + 1,
    })),
  },
};

const serviceFeatures = [
  {
    title: 'On-Site Repairs',
    text: 'Our certified technicians come to your construction site across Dubai and Al Quoz to diagnose and repair equipment on the spot, minimising downtime and transport costs.',
  },
  {
    title: 'Workshop Service',
    text: 'Our fully equipped workshop at Al Quoz handles major repairs, complete engine overhauls, hydraulic system rebuilds, and comprehensive equipment servicing under controlled conditions.',
  },
  {
    title: 'All Equipment Types',
    text: 'We repair generators, air compressors, welders, compactors, light towers, scaffolding, pressure washers, grinders, power tools, and virtually all construction and industrial equipment.',
  },
  {
    title: 'Quick Response',
    text: 'Same-day diagnostic appointments and fast repair turnaround across Dubai and the UAE. Mobile service vans dispatched for emergency on-site repairs within hours.',
  },
];

export default function RepairServicesIndexPage() {
  return (
    <RootLayout
      meta={{
        title: metaTitle,
        description: metaDescription,
        canonicalPath: '/repair-services',
        ogImage: '/images/repair-hero-bg.png',
      }}
      jsonLd={jsonLd}
    >
      {/* Hero Banner */}
      <div className="relative w-full min-h-[40vh] md:min-h-[50vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-navy-900">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/40 z-10" />
          <img
            src="/images/repair-hero-bg.png"
            alt="Equipment Repair Services in Dubai & UAE"
            className="h-full w-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-20 w-full px-6 sm:px-8 lg:px-12 py-16">
          <div className="max-w-[1400px] mx-auto text-center lg:text-left">
            <span className="inline-block rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-400 backdrop-blur-sm mb-4">
              PROFESSIONAL REPAIR SERVICES
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight">
              Equipment Repair Services
            </h1>
            <p className="mt-6 text-lg text-navy-200 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Fast Line provides professional repair and maintenance services for all construction and industrial equipment. Our technicians service generators, compactors, welders, scaffolding, air compressors, and more — on-site across Dubai and Al Quoz, or at our fully equipped workshop.
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
              <li className="font-medium text-navy-900">Repair Services</li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* Features Grid */}
      <Section className="bg-background-light py-16 md:py-24">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="text-3xl font-bold text-navy-900 tracking-tight">
              Why Choose Our Repair Services
            </Heading>
            <p className="mt-4 text-navy-600 max-w-2xl mx-auto leading-relaxed">
              We pride ourselves on delivering exceptional repair quality, fast turnaround, and competitive pricing across all equipment types. Every repair is backed by our commitment to using genuine parts and certified technicians.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {serviceFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="group rounded-2xl bg-white border border-border-light p-8 hover:border-brand-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-navy-50 text-brand-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform font-bold text-xl">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{feature.title}</h3>
                <p className="text-navy-600 leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Repair Category Cards Grid */}
      <Section className="bg-background-light py-16 md:py-24">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="text-3xl font-bold text-navy-900 tracking-tight">
              Select Equipment for Repair
            </Heading>
            <p className="mt-4 text-navy-600 max-w-2xl mx-auto leading-relaxed">
              Choose your equipment type below to see detailed repair services, including what we fix, our process, and how to book. All 21 equipment categories are covered by our certified repair team in Dubai.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allCategories.map((category) => (
              <Link
                key={category.slug}
                to={`/repair-services/${category.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border-light bg-white hover:border-brand-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-white overflow-hidden relative flex items-center justify-center p-6">
                  <div className="absolute inset-0 bg-navy-50/50 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={category.image}
                    alt={`${category.name} Repair Services in Dubai & UAE`}
                    className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110 relative z-20 mix-blend-multiply"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 right-4 z-30 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-navy-900 shadow-sm transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    View Repair Services →
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 border-t border-border-light bg-gradient-to-b from-white to-navy-50/30">
                  <Heading level={3} className="text-xl font-bold text-navy-900 group-hover:text-brand-600 transition-colors">
                    {category.name} Repair
                  </Heading>
                  <p className="mt-3 flex-1 text-sm text-navy-600 leading-relaxed line-clamp-2">
                    Expert {category.name.toLowerCase()} repair and maintenance in Dubai & UAE. Certified technicians, genuine parts, fast turnaround.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-navy-900 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern-repair" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern-repair)" />
          </svg>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-600/20 to-transparent blur-[100px]" />
        <div className="absolute left-0 bottom-0 w-1/3 h-full bg-gradient-to-r from-brand-500/10 to-transparent blur-[100px]" />

        <Container className="text-center relative z-10">
          <Heading level={2} className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Need Equipment Repaired Today?
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-200 font-light leading-relaxed">
            Our repair team is available seven days a week. We offer on-site repair visits across Dubai and the UAE, plus full workshop services at our Al Quoz facility. Send us an inquiry or call directly — we'll get your equipment back to work fast.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-brand-500 px-8 py-3.5 text-base font-bold text-navy-900 hover:bg-brand-400 transition-all shadow-[0_0_20px_rgba(255,193,7,0.3)] hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] hover:-translate-y-1"
            >
              Send Repair Inquiry
            </Link>
            <a
              href="https://wa.me/9710565714999?text=I%20want%20to%20inquire%20about%20equipment%20repair"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-white/30 bg-transparent px-8 py-3.5 text-base font-bold text-white hover:bg-white/10 transition-all hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </Container>
      </Section>
    </RootLayout>
  );
}
