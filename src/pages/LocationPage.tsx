import { useState, useEffect } from 'react';
import { RootLayout } from '@/components/layout/RootLayout';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { HeroEnquiryForm } from '@/components/home/HeroEnquiryForm';
import { Link, useLocation } from 'react-router-dom';
import { loadAllCategories } from '@/lib/machinery';
import type { MachineryCategory } from '@/lib/machinery';

interface LocationConfig {
  title: string;
  h1: string;
  description: string;
  metaDescription: string;
  area: string;
  nearby: string[];
}

const locationConfigs: Record<string, LocationConfig> = {
  '/equipment-rental-dubai': {
    title: 'Equipment Rental in Dubai | Fast Line',
    h1: 'Equipment Rental in Dubai',
    description:
      'Fast Line provides construction equipment rental across Dubai including Al Quoz, Jebel Ali, Dubai Industrial City, DIP, and all areas. We offer generators, compactors, welders, light towers, scaffolding, and more with free delivery and pickup.',
    metaDescription:
      'Rent construction equipment in Dubai with free delivery. Generators, compactors, welders, light towers & more. Serving Al Quoz, Jebel Ali & all Dubai areas. Call 056-5714999.',
    area: 'Dubai',
    nearby: ['Jebel Ali', 'Business Bay', 'Al Quoz'],
  },
  '/equipment-rental-al-quoz': {
    title: 'Equipment Rental in Al Quoz, Dubai | Fast Line',
    h1: 'Equipment Rental in Al Quoz',
    description:
      'Fast Line is based in Al Quoz, Dubai and provides construction equipment rental with same-day delivery. We are located at Adeem Building, Dubai 44 Street, Al Quoz Third. Generators, compactors, welders, light towers, scaffolding, and more.',
    metaDescription:
      'Rent construction equipment in Al Quoz, Dubai. Same-day delivery from our Al Quoz base. Generators, compactors, welders & more. Call 056-5714999.',
    area: 'Al Quoz',
    nearby: ['Dubai', 'Jebel Ali', 'Business Bay'],
  },
  '/generator-rental-dubai': {
    title: 'Generator Rental in Dubai | Fast Line',
    h1: 'Generator Rental in Dubai',
    description:
      'Fast Line offers diesel and portable generator rental in Dubai from 5.5 kVA to 1000 kVA. Brands include CAT, Honda, Perkins, and Cummins. Free delivery across all Dubai areas including Al Quoz, Jebel Ali, and DIP.',
    metaDescription:
      'Rent generators in Dubai from 5.5 kVA to 1000 kVA. CAT, Honda, Perkins & Cummins brands. Free delivery across Dubai. Silent & portable options. Call 056-5714999.',
    area: 'Dubai',
    nearby: ['Jebel Ali', 'Business Bay', 'Al Quoz'],
  },
  '/scaffolding-rental-dubai': {
    title: 'Scaffolding Rental in Dubai | Aluminum & Steel Towers | Fast Line',
    h1: 'Scaffolding Rental in Dubai',
    description:
      'Fast Line provides aluminum and steel scaffolding tower rental in Dubai for construction, maintenance, painting, and facade work. Mobile scaffold towers with stair access, outriggers, and EN 1004 certification. Free delivery across Al Quoz, Jebel Ali, DIP, and all Dubai areas.',
    metaDescription:
      'Rent scaffolding towers in Dubai. Aluminum & steel mobile scaffolds for construction and maintenance. EN 1004 certified. Free delivery across Dubai. Call 056-5714999.',
    area: 'Dubai',
    nearby: ['Jebel Ali', 'Business Bay', 'Al Quoz'],
  },
};

export default function LocationPage() {
  const location = useLocation();
  const config = locationConfigs[location.pathname];
  const [fullCategories, setFullCategories] = useState<MachineryCategory[] | null>(null);

  useEffect(() => {
    loadAllCategories().then(setFullCategories);
  }, []);

  if (!config) {
    return (
      <RootLayout
        meta={{
          title: 'Page Not Found',
          description: 'The requested page could not be found.',
          canonicalPath: location.pathname,
          ogImage: '/images/og-default.jpg',
        }}
      >
        <Container className="py-16 text-center">
          <Heading level={1} className="text-navy-900">Page Not Found</Heading>
          <Link to="/" className="mt-6 inline-block text-brand-600 hover:underline font-medium">
            ← Back to Home
          </Link>
        </Container>
      </RootLayout>
    );
  }

  const isGeneratorPage = location.pathname.includes('generator');
  const isScaffoldingPage = location.pathname.includes('scaffolding');
  const displayCategories = fullCategories
    ? (isGeneratorPage
        ? fullCategories.filter((c) => c.slug === 'generators')
        : isScaffoldingPage
          ? fullCategories.filter((c) => c.slug === 'scaffolding-towers')
          : fullCategories)
    : [];

  return (
    <RootLayout
      meta={{
        title: config.title,
        description: config.metaDescription,
        canonicalPath: location.pathname,
        ogImage: '/images/og-default.jpg',
      }}
    >
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center">
        <img
          src="/images/hero-bg.webp"
          srcSet="/images/hero-bg-small.webp 640w, /images/hero-bg-mobile.webp 960w, /images/hero-bg.webp 1920w"
          sizes="(max-width: 640px) 640px, (max-width: 960px) 960px, 1920px"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-navy-900/80" />
        <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-stretch max-w-[1400px] mx-auto">
            <div className="text-center lg:text-left flex flex-col justify-center">
              <Heading level={1} className="text-white text-4xl md:text-5xl leading-tight">
                {config.h1}
              </Heading>
              <p className="mt-6 text-lg text-navy-200 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {config.description}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/equipment"
                  className="inline-flex items-center justify-center rounded-md bg-brand-500 px-8 py-3 text-base font-medium text-navy-900 hover:bg-brand-400 transition-colors"
                >
                  Browse Equipment
                </Link>
                <a
                  href="tel:+971565714999"
                  className="inline-flex items-center justify-center rounded-md border border-navy-400 px-8 py-3 text-base font-medium text-white hover:bg-navy-800 transition-colors"
                >
                  Call 056-5714999
                </a>
              </div>
            </div>
            <div className="w-full max-w-lg mx-auto lg:max-w-none flex items-center">
              <HeroEnquiryForm source={`${config.area.toUpperCase()} PAGE`} />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <Section>
        <Container>
          <Heading level={2} className="text-center text-navy-900">
            {isGeneratorPage ? 'Generators Available for Rent' : 'Equipment Available for Rent'} in {config.area}
          </Heading>
          <p className="mx-auto mt-4 max-w-2xl text-center text-navy-600">
            All equipment includes free delivery and pickup in {config.area}.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {displayCategories.map((category) =>
              category.machines.map((machine) => (
                <Link
                  key={machine.slug}
                  to={`${category.canonicalPath}/${machine.slug}`}
                  className="group overflow-hidden rounded-lg border border-border-light bg-white transition-shadow hover:shadow-xl"
                >
                  <div className="aspect-[16/10] bg-navy-100 overflow-hidden">
                    <img
                      src={machine.image}
                      alt={`${machine.name} for rent in ${config.area}`}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-navy-900 group-hover:text-brand-600 transition-colors">
                      {machine.name}
                    </h3>
                    <p className="mt-1 text-xs text-navy-500">{category.name}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
        </Container>
      </Section>

      {/* Also Serving */}
      <Section className="bg-background-light">
        <Container className="text-center">
          <Heading level={2} className="text-navy-900">
            Also Serving Nearby Areas
          </Heading>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {config.nearby.map((area) => (
              <a
                key={area}
                href={`#areas`}
                className="rounded-lg border border-border-light bg-white px-6 py-3 font-medium text-navy-900 hover:shadow-lg hover:border-brand-500 transition-all"
              >
                {area}
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Fast Line Building Equipment Rental L.L.C',
            description: config.metaDescription,
            url: `https://fastlinerental.com${location.pathname}`,
            telephone: '+971-56-571-4999',
            email: 'info@fastlinerental.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Adeem Building, Dubai 44 Street, Al Quoz Third',
              addressLocality: 'Dubai',
              addressRegion: 'Dubai',
              addressCountry: 'AE',
            },
            areaServed: {
              '@type': 'Place',
              name: config.area,
            },
            sameAs: [
              'https://www.google.com/maps/place/Fast+Line+Building+Equipments+Rental/@25.1512406,55.2433414,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f69d50c1ad303:0x722e46f76138d18c!8m2!3d25.1512406!4d55.2433414!16s%2Fg%2F11vf9g4f48',
            ],
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '06:00',
              closes: '20:00',
            },
          }),
        }}
      />
    </RootLayout>
  );
}
