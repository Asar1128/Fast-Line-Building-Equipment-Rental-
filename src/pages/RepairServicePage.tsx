import { useState, useEffect } from 'react';
import { RootLayout } from '@/components/layout/RootLayout';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Link, useParams } from 'react-router-dom';
import { loadCategory } from '@/lib/machinery';
import type { MachineryCategory } from '@/lib/machinery';

export default function RepairServicePage() {
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
          title: 'Service Not Found',
          description: 'The requested repair service could not be found.',
          canonicalPath: `/repair-services/${categorySlug}`,
          ogImage: '/images/og-default.jpg',
        }}
      >
        <div className="bg-white border-b border-border-light">
          <Container className="py-16 text-center">
            <Heading level={1} className="text-navy-900">Service Not Found</Heading>
            <p className="mt-4 text-navy-600">
              The repair service you are looking for does not exist.
            </p>
            <Link to="/" className="mt-6 inline-block text-brand-600 hover:underline font-medium">
              ← Back to Home
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

  const heroImage = 
    category.slug === 'generators' ? '/images/generator-hero-bg.png' :
    category.slug === 'air-compressors' ? '/images/air-compressor-hero-bg.png' :
    category.slug === 'welders' ? '/images/welder-hero-bg.png' :
    category.slug === 'light-towers' ? '/images/light-towers-hero-bg.png' :
    category.slug === 'scaffolding-towers' ? '/images/scaffolding-towers-hero-bg.png' :
    category.slug === 'pressure-washers' ? '/images/pressure-washers-hero-bg.png' :
    category.slug === 'cleaners' ? '/images/cleaners-hero-bg.png' :
    '/images/hero-bg.webp';

  return (
    <RootLayout
      meta={{
        title: `${category.name} Repair Services in Dubai & UAE | Fast Line`,
        description: `Expert repair, diagnostics, and maintenance services for ${category.name.toLowerCase()} in Dubai and across the UAE. Best rates and quick turnaround.`,
        canonicalPath: `/repair-services/${categorySlug}`,
        ogImage: heroImage,
      }}
    >
      {/* Banner Image */}
      <div className="relative w-full min-h-[40vh] md:min-h-[50vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-navy-900">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-transparent z-10" />
          <img
            src={heroImage}
            alt={`${category.name} Repair Services in Dubai & UAE`}
            className="h-full w-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-20 w-full px-6 sm:px-8 lg:px-12 mt-8 md:mt-0">
          <div className="max-w-[1400px] mx-auto text-center lg:text-left">
            <span className="inline-block rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-400 backdrop-blur-sm mb-4">
              EXPERT REPAIR SERVICES
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight">
              {category.name} Repair
            </h1>
            <p className="mt-6 text-lg text-navy-200 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Professional maintenance, diagnostic, and repair solutions for all types of {category.name.toLowerCase()}. Ensure your equipment runs at peak performance with minimal downtime.
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
              <li className="font-medium text-navy-900">{category.name} Repair Services</li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* Main Content Section */}
      <Section className="py-16 md:py-24 bg-background-light">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Content Column */}
            <div className="lg:col-span-8">
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border border-border-light">
                <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6 tracking-tight">Comprehensive {category.name} Maintenance & Repair</h2>
                
                <p className="text-lg text-navy-700 leading-relaxed mb-6">
                  <span className="text-brand-600 font-bold">[Left for SEO Optimized]</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <p className="text-navy-600 leading-relaxed mb-8">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                </p>

                <div className="bg-navy-50 rounded-xl p-6 md:p-8 mb-8 border border-border-light">
                  <h3 className="text-2xl font-bold text-navy-900 mb-6">Why Choose Our Repair Services?</h3>
                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center shrink-0 mr-4 mt-0.5">
                        <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <strong className="block text-navy-900 text-lg mb-1">Certified Technicians</strong>
                        <span className="text-navy-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id facilisis mauris.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center shrink-0 mr-4 mt-0.5">
                        <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <strong className="block text-navy-900 text-lg mb-1">Genuine Spare Parts</strong>
                        <span className="text-navy-600 leading-relaxed">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center shrink-0 mr-4 mt-0.5">
                        <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <strong className="block text-navy-900 text-lg mb-1">Quick Turnaround</strong>
                        <span className="text-navy-600 leading-relaxed">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <p className="text-navy-600 leading-relaxed">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                </p>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4">
              <div className="bg-navy-900 rounded-2xl p-8 text-center sticky top-28 shadow-xl border border-navy-800">
                <div className="w-20 h-20 bg-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <div className="absolute inset-0 bg-brand-500 rounded-full animate-ping opacity-20"></div>
                  <svg className="w-10 h-10 text-brand-500 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Need Your {category.name.replace(/s$/, '')} Repaired?</h3>
                <p className="text-navy-200 mb-8 leading-relaxed text-sm md:text-base">
                  Our service team is ready to inspect and fix your equipment. Send us an inquiry and we'll get back to you immediately.
                </p>
                <Link
                  to="/contact"
                  className="block w-full rounded-xl bg-brand-500 px-6 py-4 text-base font-bold text-navy-900 hover:bg-brand-400 transition-colors shadow-lg shadow-brand-500/20"
                >
                  If You want to repair contact us
                </Link>
                <div className="mt-8 pt-6 border-t border-navy-800">
                  <p className="text-sm text-navy-400 uppercase tracking-wider font-semibold mb-3">Or Call Us Directly</p>
                  <a href="tel:+971565714999" className="inline-block text-xl md:text-2xl font-bold text-white hover:text-brand-400 transition-colors">
                    (+971) 056-5714999
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </RootLayout>
  );
}
