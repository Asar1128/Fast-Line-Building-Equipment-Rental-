import { RootLayout } from '@/components/layout/RootLayout';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { HeroEnquiryForm } from '@/components/home/HeroEnquiryForm';
import { Link, useLocation } from 'react-router-dom';

interface ServiceConfig {
  title: string;
  h1: string;
  description: string;
  metaDescription: string;
  image: string;
  features: { title: string; text: string }[];
}

const serviceConfigs: Record<string, ServiceConfig> = {
  '/services/delivery': {
    title: 'Equipment Delivery Service in Dubai & UAE | Fast Line',
    h1: 'Equipment Delivery Service',
    description:
      'Fast Line provides free delivery of rental equipment across Dubai and the UAE. Our fleet ensures your generators, compactors, welders, and other equipment arrive on time at your construction site.',
    metaDescription:
      'Free equipment delivery service across Dubai & the UAE. Same-day delivery available. Generators, compactors, welders & more delivered to your site. Best rates in the market. Call 056-5714999.',
    image: '/images/hero-bg.webp',
    features: [
      { title: 'Free Delivery', text: 'No additional charges for delivery across Dubai and the UAE.' },
      { title: 'Same-Day Available', text: 'Need equipment urgently? We offer same-day delivery when stock is available.' },
      { title: 'All Areas Covered', text: 'We deliver to Al Quoz, Jebel Ali, DIP, and all industrial areas across Dubai.' },
      { title: 'Professional Handling', text: 'Our trained team ensures safe transport and placement of all equipment.' },
    ],
  },
  '/services/pickup': {
    title: 'Equipment Pickup Service in Dubai & UAE | Fast Line',
    h1: 'Equipment Pickup Service',
    description:
      'When your rental period is over, Fast Line handles equipment pickup at no extra cost. We collect from any location across Dubai and the UAE on your schedule.',
    metaDescription:
      'Free equipment pickup service when your rental period ends. We collect from any location in Dubai & the UAE. Hassle-free returns. Call 056-5714999.',
    image: '/images/hero-bg.webp',
    features: [
      { title: 'Free Pickup', text: 'No additional cost for equipment collection from your site.' },
      { title: 'Flexible Scheduling', text: 'Schedule pickup at a time that works for your project timeline.' },
      { title: 'All Locations', text: 'We pick up from any site in Dubai and surrounding areas.' },
      { title: 'Inspection on Site', text: 'Quick inspection at pickup to ensure smooth return process.' },
    ],
  },

};

export default function ServicePage() {
  const location = useLocation();
  const config = serviceConfigs[location.pathname];

  if (!config) {
    return (
      <RootLayout
        meta={{
          title: 'Service Not Found',
          description: 'The requested service page could not be found.',
          canonicalPath: location.pathname,
          ogImage: '/images/og-default.jpg',
        }}
      >
        <Container className="py-16 text-center">
          <Heading level={1} className="text-navy-900">Service Not Found</Heading>
          <Link to="/" className="mt-6 inline-block text-brand-600 hover:underline font-medium">
            ← Back to Home
          </Link>
        </Container>
      </RootLayout>
    );
  }

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
      <div className="relative w-full min-h-[40vh] md:min-h-[50vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-navy-900">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/40 z-10" />
          <img
            src={config.image}
            alt={config.h1}
            className="h-full w-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-20 w-full px-6 sm:px-8 lg:px-12 py-16">
          <div className="max-w-[1400px] mx-auto text-center lg:text-left">
            <span className="inline-block rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-400 backdrop-blur-sm mb-4">
              PROFESSIONAL SERVICES
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight">
              {config.h1}
            </h1>
            <p className="mt-6 text-lg text-navy-200 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              {config.description}
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
              <li className="font-medium text-navy-900">{config.h1}</li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* Features */}
      <Section className="bg-background-light py-24">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="text-3xl font-bold text-navy-900 tracking-tight">
              Why Choose Our Service
            </Heading>
            <p className="mt-4 text-navy-600 max-w-2xl mx-auto">
              We pride ourselves on delivering exceptional value and reliability across all our service offerings.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {config.features.map((feature, index) => (
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

      {/* Inquiry Form */}
      <Section className="py-16 md:py-24 bg-white border-t border-border-light">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left — Info */}
            <div className="flex flex-col justify-center">
              <span className="inline-block w-fit rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700 mb-6">
                GET STARTED
              </span>
              <Heading level={2} className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight leading-tight">
                Request This Service
              </Heading>
              <p className="mt-5 text-navy-600 leading-relaxed max-w-md">
                Fill in the form and our dedicated team will get back to you shortly to confirm your request and arrange everything.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">Call us directly</p>
                    <a href="tel:+971565714999" className="text-sm text-navy-500 hover:text-brand-600 transition-colors">(+971) 056-5714999</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">Email us</p>
                    <a href="mailto:info@fastlinerental.com" className="text-sm text-navy-500 hover:text-brand-600 transition-colors">info@fastlinerental.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">Working hours</p>
                    <p className="text-sm text-navy-500">Open 7 days, 6:00 AM – 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-white rounded-2xl border border-border-light p-8 md:p-10 shadow-sm">
              <HeroEnquiryForm source={location.pathname === '/services/delivery' ? 'DELIVERY PAGE' : 'PICKUP PAGE'} />
            </div>

          </div>
        </Container>
      </Section>

      {/* Other Services */}
      <Section className="py-24 bg-background-light border-t border-border-light">
        <Container className="text-center">
          <Heading level={2} className="text-3xl font-bold text-navy-900 tracking-tight">
            Explore More
          </Heading>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {Object.entries(serviceConfigs)
              .filter(([path]) => path !== location.pathname)
              .map(([path, svc]) => (
                <Link
                  key={path}
                  to={path}
                  className="rounded-xl border border-border-light bg-white px-8 py-4 font-bold text-navy-900 shadow-sm hover:shadow-lg hover:border-brand-500 hover:text-brand-600 hover:-translate-y-1 transition-all"
                >
                  {svc.h1}
                </Link>
              ))}
            <Link
              to="/equipment"
              className="rounded-xl bg-navy-900 px-8 py-4 font-bold text-white shadow-sm hover:bg-navy-800 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              Browse Equipment Fleet →
            </Link>
          </div>
        </Container>
      </Section>

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: config.h1,
            description: config.metaDescription,
            provider: {
              '@type': 'LocalBusiness',
              name: 'Fast Line Building Equipment Rental L.L.C',
              telephone: '+971-56-571-4999',
              sameAs: [
                'https://www.google.com/maps/place/Fast+Line+Building+Equipments+Rental/@25.1512406,55.2433414,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f69d50c1ad303:0x722e46f76138d18c!8m2!3d25.1512406!4d55.2433414!16s%2Fg%2F11vf9g4f48',
              ],
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Adeem Building, Dubai 44 Street, Al Quoz Third',
                addressLocality: 'Dubai',
                addressCountry: 'AE',
              },
            },
            areaServed: [
              { '@type': 'City', name: 'Dubai' },
            ],
          }),
        }}
      />
    </RootLayout>
  );
}
