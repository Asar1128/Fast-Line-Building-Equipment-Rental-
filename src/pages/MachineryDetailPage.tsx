import { useState, useEffect } from 'react';
import { RootLayout } from '@/components/layout/RootLayout';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Link, useParams } from 'react-router-dom';
import { HeroEnquiryForm } from '@/components/home/HeroEnquiryForm';
import { useWhatsAppMessage } from '@/context/WhatsAppContext';
import { loadCategory } from '@/lib/machinery';
import type { MachineryCategory, Machine } from '@/lib/machinery';

export default function MachineryDetailPage() {
  const { categorySlug, machineSlug } = useParams<{ categorySlug: string; machineSlug: string }>();
  const [category, setCategory] = useState<MachineryCategory | null>(null);
  const [machine, setMachine] = useState<Machine | null>(null);
  const [loading, setLoading] = useState(true);
  const [showInquiry, setShowInquiry] = useState(false);
  const { setMessage } = useWhatsAppMessage();

  useEffect(() => {
    if (!categorySlug || !machineSlug) return;
    setLoading(true);
    loadCategory(categorySlug).then((data) => {
      if (data) {
        setCategory(data);
        const found = data.machines.find((m) => m.slug === machineSlug) ?? null;
        setMachine(found);
      }
      setLoading(false);
    });
  }, [categorySlug, machineSlug]);

  useEffect(() => {
    if (machine) {
      setMessage(`Hi, I want to inquire about ${machine.name}`);
    }
  }, [machine, setMessage]);

  useEffect(() => {
    if (!showInquiry) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowInquiry(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showInquiry]);

  if (loading) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-slate-50">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#ffb600] border-t-transparent"></div>
      </div>
    );
  }

  if (!category || !machine) {
    return (
      <RootLayout
        meta={{
          title: 'Equipment Not Found',
          description: 'The requested equipment could not be found.',
          canonicalPath: `/equipment/${categorySlug}/${machineSlug}`,
          ogImage: '/images/og-default.jpg',
        }}
      >
        <div className="bg-white border-b border-border-light">
          <Container className="py-16 text-center">
            <Heading level={1} className="text-navy-900">Equipment Not Found</Heading>
            <p className="mt-4 text-navy-600">
              The equipment you are looking for does not exist.
            </p>
            <Link to="/equipment" className="mt-6 inline-block text-brand-600 hover:underline font-medium">
              ← Back to All Equipment
            </Link>
          </Container>
        </div>
      </RootLayout>
    );
  }

  return (
    <RootLayout
      meta={{
        title: `${machine.name} for Rent in Dubai & UAE | Fast Line`,
        description: `Rent the ${machine.name} in Dubai & across the UAE. ${machine.shortDescription} Free delivery available. Best rates in the market. Call 056-5714999.`,
        canonicalPath: `${category.canonicalPath}/${machine.slug}`,
        ogImage: machine.image,
      }}
    >
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-border-light">
        <Container className="py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-navy-500">
              <li><Link to="/" className="hover:text-navy-900 hover:underline">Home</Link></li>
              <li><span aria-hidden="true">/</span></li>
              <li><Link to="/equipment" className="hover:text-navy-900 hover:underline">Equipment</Link></li>
              <li><span aria-hidden="true">/</span></li>
              <li><Link to={category.canonicalPath} className="hover:text-navy-900 hover:underline">{category.name}</Link></li>
              <li><span aria-hidden="true">/</span></li>
              <li className="font-medium text-navy-900">{machine.name}</li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* Product Header */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-start">
            {/* Image Side */}
            <div className="sticky top-24">
              <div className="aspect-square lg:aspect-[4/3] w-full overflow-hidden rounded-3xl bg-white border border-border-light shadow-[0_30px_60px_-20px_rgba(0,0,0,0.05)] p-8 flex items-center justify-center group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={machine.image}
                  alt={`${machine.name} available for rent in Dubai & UAE`}
                  className="h-full w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out relative z-10"
                />
              </div>
            </div>

            {/* Details Side */}
            <div className="flex flex-col py-4">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center rounded-full bg-success-50 px-3 py-1 text-sm font-semibold text-success-700 ring-1 ring-inset ring-success-600/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-success-500 mr-2 animate-pulse" />
                  {machine.availability}
                </span>
                <span className="text-sm font-medium text-navy-400 uppercase tracking-wider">{category.name}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
                {machine.name}
              </h1>

              <div className="mt-8 prose prose-lg text-navy-600 leading-relaxed max-w-none">
                <p>{machine.description}</p>
              </div>

              <div className="mt-10 rounded-2xl bg-white border border-border-light p-6 shadow-sm flex items-center justify-between relative overflow-hidden group hover:border-brand-300 transition-colors">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-500" />
                <div>
                  <p className="text-sm font-semibold text-navy-500 uppercase tracking-wider">Pricing</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-3xl md:text-4xl font-black text-navy-900 tracking-tight">{machine.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-navy-500 flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Send an inquiry for a custom quote
                  </p>
                </div>
              </div>

              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                <button
                  onClick={() => setShowInquiry(true)}
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-brand-500 px-8 py-4 text-lg font-bold text-navy-900 shadow-[0_8px_20px_-6px_rgba(255,193,7,0.4)] hover:bg-brand-400 hover:shadow-[0_12px_25px_-6px_rgba(255,193,7,0.5)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  Send Inquiry
                </button>
                <a
                  href={`https://wa.me/9710565714999?text=${encodeURIComponent(`Hi, I want to inquire about ${machine?.name ?? 'equipment'}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-border-light bg-white px-8 py-4 text-lg font-bold text-navy-900 hover:border-success-500 hover:text-success-700 hover:bg-success-50 transition-all duration-300"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  WhatsApp Us
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-border-light grid grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-50 text-brand-600 shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">Free Delivery</h4>
                    <p className="text-xs text-navy-500 mt-1">Free delivery across Dubai</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-50 text-brand-600 shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">24/7 Support</h4>
                    <p className="text-xs text-navy-500 mt-1">
                      <a href="tel:+971565714999" className="hover:text-brand-600 transition-colors">056-5714999</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Specifications & Features */}
      <Section className="bg-white py-16 md:py-20">
        <Container>
          <Heading level={2} className="text-2xl md:text-3xl font-bold text-navy-900 mb-8">Technical Specifications</Heading>
          <div className="overflow-x-auto">
            <table className="w-full border border-border-light text-sm">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="text-left px-5 py-3 font-semibold border-r border-navy-700 w-2/5">Specification</th>
                  <th className="text-left px-5 py-3 font-semibold">Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(machine.specifications).map(([key, value], index) => (
                  <tr key={key} className={index % 2 === 0 ? 'bg-white' : 'bg-navy-50/50'}>
                    <td className="px-5 py-3.5 font-medium text-navy-800 border-r border-border-light border-b border-b-border-light">
                      {key}
                    </td>
                    <td className="px-5 py-3.5 text-navy-600 border-b border-border-light">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Heading level={2} className="text-2xl md:text-3xl font-bold text-navy-900 mt-14 mb-6">Key Features</Heading>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {machine.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-navy-700 text-[15px] leading-relaxed">
                <span className="text-brand-600 mt-1.5 shrink-0">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-navy-900">
        <Container className="text-center">
          <Heading level={2} className="text-white">
            Interested in the {machine.name}?
          </Heading>
          <p className="mx-auto mt-4 max-w-2xl text-navy-300">
            Contact us for rental pricing and availability. Free delivery across Dubai — we offer the best rates in the market.
            If this is not the exact equipment you need, send us an inquiry anyway — we have a much larger inventory available.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowInquiry(true)}
              className="inline-flex items-center justify-center rounded-md bg-brand-500 px-8 py-3 text-base font-medium text-navy-900 hover:bg-brand-400 transition-colors"
            >
              Send Inquiry
            </button>
            <a
              href="tel:+971565714999"
              className="inline-flex items-center justify-center rounded-md border border-navy-600 px-8 py-3 text-base font-medium text-white hover:bg-navy-800 transition-colors"
            >
              Call 056-5714999
            </a>
          </div>
        </Container>
      </Section>

      {/* Product JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: machine.name,
            description: machine.shortDescription,
            image: `https://fastlinerental.com${machine.image}`,
            brand: {
              '@type': 'Brand',
              name: machine.name.split(' ')[0],
            },
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
              priceSpecification: {
                '@type': 'PriceSpecification',
                priceCurrency: 'AED',
              },
              areaServed: [
                { '@type': 'City', name: 'Dubai' },
              ],
              seller: {
                '@type': 'LocalBusiness',
                name: 'Fast Line Building Equipment Rental L.L.C',
                telephone: '+971-56-571-4999',
                sameAs: [
                  'https://www.google.com/maps/place/Fast+Line+Building+Equipments+Rental/@25.1512406,55.2433414,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f69d50c1ad303:0x722e46f76138d18c!8m2!3d25.1512406!4d55.2433414!16s%2Fg%2F11vf9g4f48',
                ],
              },
            },
            category: category.name,
          }),
        }}
      />

      {/* Inquiry Modal */}
      {showInquiry && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Send an Inquiry"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm animate-fadeIn"
            onClick={() => setShowInquiry(false)}
          />

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-border-light animate-scaleIn">
            {/* Close Button */}
            <button
              onClick={() => setShowInquiry(false)}
              className="absolute top-5 right-5 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-navy-100 text-navy-600 hover:bg-navy-200 hover:text-navy-900 transition-colors"
              aria-label="Close inquiry form"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header strip */}
            <div className="h-1.5 w-full bg-brand-500 rounded-t-3xl" />

            <div className="p-8 sm:p-10">
              <div className="mb-2 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-navy-900">Request a Quote</h3>
              </div>
              <p className="text-sm text-navy-500 mb-6">
                Interested in the <span className="font-semibold text-navy-700">{machine.name}</span>? Fill in your details and we will contact you.
              </p>
              <HeroEnquiryForm source={`PRODUCT - ${machine.name}`} showCategory={false} />
            </div>
          </div>
        </div>
      )}
    </RootLayout>
  );
}
