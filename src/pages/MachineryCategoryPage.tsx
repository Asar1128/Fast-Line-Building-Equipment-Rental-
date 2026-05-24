import { useState, useEffect } from 'react';
import { RootLayout } from '@/components/layout/RootLayout';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Badge } from '@/components/ui/Badge';
import { Link, useParams } from 'react-router-dom';
import { loadCategory } from '@/lib/machinery';
import type { MachineryCategory } from '@/lib/machinery';

export default function MachineryCategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [category, setCategory] = useState<MachineryCategory | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!categorySlug) return;
    setLoading(true);
    loadCategory(categorySlug).then((data) => {
      setCategory(data);
      setLoading(false);
    });
  }, [categorySlug]);

  if (!categorySlug || (!loading && !category)) {
    return (
      <RootLayout
        meta={{
          title: 'Category Not Found',
          description: 'The requested equipment category could not be found.',
          canonicalPath: `/equipment/${categorySlug}`,
          ogImage: '/images/og-default.jpg',
        }}
      >
        <div className="bg-white border-b border-border-light">
          <Container className="py-16 text-center">
            <Heading level={1} className="text-navy-900">Category Not Found</Heading>
            <p className="mt-4 text-navy-600">
              The equipment category you are looking for does not exist.
            </p>
            <Link to="/equipment" className="mt-6 inline-block text-brand-600 hover:underline font-medium">
              ← Back to All Equipment
            </Link>
          </Container>
        </div>
      </RootLayout>
    );
  }

  if (loading || !category) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-slate-50">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#ffb600] border-t-transparent"></div>
      </div>
    );
  }

  return (
    <RootLayout
      meta={{
        title: `${category.name} Rental in Dubai & UAE | Fast Line`,
        description: `${category.description} Available for rent with free delivery across Dubai & the UAE. Best rates in the market. Call 056-5714999.`,
        canonicalPath: category.canonicalPath,
        ogImage: category.ogImage,
      }}
    >
      {/* Banner Image */}
      <div className="relative w-full min-h-[40vh] md:min-h-[50vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-navy-900">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/60 to-transparent z-10" />
          <img
            src={
              category.slug === 'generators' ? '/images/generator-hero-bg.png' :
              category.slug === 'air-compressors' ? '/images/air-compressor-hero-bg.png' :
              category.slug === 'welders' ? '/images/welder-hero-bg.png' :
              category.slug === 'light-towers' ? '/images/light-towers-hero-bg.png' :
              category.slug === 'scaffolding-towers' ? '/images/scaffolding-towers-hero-bg.png' :
              category.slug === 'pressure-washers' ? '/images/pressure-washers-hero-bg.png' :
              category.slug === 'cleaners' ? '/images/cleaners-hero-bg.png' :
              '/images/hero-bg.webp'
            }
            alt={`${category.name} for rent in Dubai & UAE`}
            className="h-full w-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-20 w-full px-6 sm:px-8 lg:px-12">
          <div className="max-w-[1400px] mx-auto text-center lg:text-left">
            <span className="inline-block rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-400 backdrop-blur-sm mb-4">
              PREMIUM EQUIPMENT RENTAL
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight">
              {category.name} Rental
            </h1>
            <p className="mt-6 text-lg text-navy-200 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-border-light">
        <Container className="py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-navy-500">
              <li>
                <Link to="/" className="hover:text-navy-900 hover:underline">Home</Link>
              </li>
              <li><span aria-hidden="true">/</span></li>
              <li>
                <Link to="/equipment" className="hover:text-navy-900 hover:underline">Equipment</Link>
              </li>
              <li><span aria-hidden="true">/</span></li>
              <li className="font-medium text-navy-900">{category.name}</li>
            </ol>
          </nav>
        </Container>
      </div>

      <Section className="bg-background-light py-20">
        <Container>
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border-light pb-6">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 tracking-tight">Available Models</h2>
              <p className="mt-2 text-navy-600">Select a unit to view detailed specifications and rates.</p>
            </div>
            <div className="text-brand-600 font-semibold bg-brand-50 px-4 py-2 rounded-lg">
              {category.machines.length} Units in Fleet
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {category.machines.map((machine) => (
              <Link
                key={machine.slug}
                to={`${category.canonicalPath}/${machine.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border-light bg-white hover:border-brand-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-white overflow-hidden relative flex items-center justify-center p-6">
                  <div className="absolute inset-0 bg-navy-50/50 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={machine.image}
                    alt={`${machine.name} available for rent`}
                    className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110 relative z-20 mix-blend-multiply"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 z-30">
                    <Badge variant="success" className="shadow-sm backdrop-blur-md bg-success-50/90">{machine.availability}</Badge>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 border-t border-border-light bg-gradient-to-b from-white to-navy-50/30">
                  <Heading level={3} className="text-xl font-bold text-navy-900 group-hover:text-brand-600 transition-colors line-clamp-2">
                    {machine.name}
                  </Heading>
                  <p className="mt-3 flex-1 text-sm text-navy-600 leading-relaxed line-clamp-3">{machine.shortDescription}</p>
                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-border-light/50">
                    <span className="text-sm font-semibold text-brand-600 flex items-center group-hover:translate-x-1 transition-transform">
                      View Specifications
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Can't Find Equipment Banner */}
      <Section className="bg-white border-t border-border-light py-12">
        <Container>
          <div className="mx-auto max-w-3xl text-center rounded-2xl bg-navy-50 border border-border-light p-8 md:p-10">
            <h2 className="text-2xl font-bold text-navy-900">Can't find the {category.name.toLowerCase().replace(/s$/, '')} you need?</h2>
            <p className="mt-4 text-navy-600 leading-relaxed">
              We have a larger inventory than what is displayed here. If you need a specific model or brand that is not listed, send us an inquiry — we most likely have it available for your project.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-brand-500 px-8 py-3 text-base font-bold text-navy-900 hover:bg-brand-400 transition-colors"
            >
              Send an Inquiry
            </Link>
          </div>
        </Container>
      </Section>

      {/* Delivery Info */}
      <Section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-50/50" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px] pointer-events-none" />
        <Container className="text-center relative z-10">
          <div className="w-20 h-20 mx-auto bg-brand-100 rounded-full flex items-center justify-center mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-600">
              <rect x="1" y="3" width="15" height="13" rx="2" />
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
          </div>
          <Heading level={2} className="text-4xl font-bold text-navy-900 tracking-tight">
Free Delivery Across Dubai & UAE
            </Heading>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-600 leading-relaxed">
              All {category.name.toLowerCase()} are available for rent with complimentary delivery and pickup.
              We serve Dubai and all major industrial areas across the UAE — at the best and most competitive rates in the market.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-brand-500 px-8 py-3.5 text-base font-bold text-navy-900 hover:bg-brand-400 transition-all shadow-[0_0_20px_rgba(255,193,7,0.3)] hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] hover:-translate-y-1"
            >
              Request a Quote
            </Link>
            <a
              href={`https://wa.me/9710565714999?text=${encodeURIComponent('Hi, I want to send an inquiry about-')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border-2 border-navy-900 bg-transparent px-8 py-3.5 text-base font-bold text-navy-900 hover:bg-navy-900 hover:text-white transition-all hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
              WhatsApp Us
            </a>
          </div>
        </Container>
      </Section>
    </RootLayout>
  );
}
