import { RootLayout } from '@/components/layout/RootLayout';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Link } from 'react-router-dom';

const row1Clients = [
  { name: 'ALEC Engineering', logo: '/images/ALEC.png' },
  { name: 'Orascom Construction', fontClass: 'font-serif text-2xl md:text-3xl font-bold tracking-tight text-slate-800' },
  { name: 'McLaren Construction', fontClass: 'font-sans text-2xl md:text-3xl font-black italic text-emerald-800 tracking-tighter' },
  { name: 'Multiplex Middle East', fontClass: 'font-mono text-xl md:text-2xl font-bold text-red-800 uppercase tracking-widest' },
  { name: 'ASGC Construction', logo: '/images/Al sahel.svg' },
  { name: 'Heilbronn Contracting', fontClass: 'font-serif text-2xl md:text-3xl italic text-amber-900 tracking-wide' },
  { name: 'RBIC Contracting', fontClass: 'font-sans text-xl md:text-2xl font-extrabold text-blue-900 uppercase' },
];

const row2Clients = [
  { name: 'Lindner Middle East', fontClass: 'font-sans text-2xl md:text-3xl font-light text-slate-900 tracking-widest uppercase' },
  { name: 'Al Naboodah', logo: '/images/AL Naboodah.png' },
  { name: 'Khansaheb Civil Eng.', fontClass: 'font-serif text-2xl md:text-3xl font-bold text-sky-900' },
  { name: 'Milserve International', fontClass: 'font-sans text-2xl md:text-3xl font-black text-rose-800 tracking-tighter' },
  { name: 'BSL Engineering', fontClass: 'font-mono text-xl md:text-2xl font-bold text-indigo-900 uppercase' },
  { name: 'AMANA Group', logo: '/images/AMANA.png' },
  { name: 'ICD Management', fontClass: 'font-serif text-xl md:text-2xl italic font-bold text-teal-900' },
];

const row3Clients = [
  { name: 'PV Projects DMCC', fontClass: 'font-sans text-2xl md:text-3xl font-extrabold text-fuchsia-900 uppercase tracking-tighter' },
  { name: 'Whitewater Intl.', fontClass: 'font-serif text-2xl md:text-3xl text-cyan-900 tracking-wide' },
  { name: 'Belhasa Six Construct', fontClass: 'font-sans text-2xl md:text-3xl font-black text-orange-800 italic' },
  { name: 'Al Shafar Engineering', logo: '/images/alshafarlogo.png' },
  { name: 'Dutco Balfour Beatty', fontClass: 'font-mono text-xl md:text-2xl font-bold text-slate-700 tracking-widest uppercase' },
  { name: 'Alec Support Services', fontClass: 'font-sans text-2xl md:text-3xl font-bold text-blue-800' },
];

const stats = [
  { value: '20+', label: 'Years in the Industry' },
  { value: '1,000+', label: 'Clients Served Across the UAE' },
  { value: '7 Days', label: 'Service & Support' },
];

const metaTitle = 'Our Clients | Trusted by 1,000+ Companies Across Dubai & UAE | Fast Line';
const metaDescription = 'For over 20 years, Fast Line has been the trusted equipment rental partner for more than 1,000 construction, contracting, and industrial companies across Dubai and the UAE.';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Our Clients - Fast Line Building Equipment Rental',
  description: metaDescription,
  about: {
    '@type': 'LocalBusiness',
    name: 'Fast Line Building Equipment Rental L.L.C',
    foundingDate: '2004',
    numberOfEmployees: '50',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Adeem Building, Dubai 44 Street, Al Quoz Third',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
  },
};

export default function OurClientsPage() {
  return (
    <RootLayout
      meta={{
        title: metaTitle,
        description: metaDescription,
        canonicalPath: '/our-clients',
        ogImage: '/images/og-home.jpg',
      }}
      jsonLd={jsonLd}
    >
      <style dangerouslySetInnerHTML={{ __html: `@keyframes marquee-infinite{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}.animate-marquee{animation:marquee-infinite 45s linear infinite;display:flex;width:max-content}.animate-marquee:hover{animation-play-state:paused}.animate-marquee-reverse{animation:marquee-infinite 45s linear infinite reverse;display:flex;width:max-content}.animate-marquee-reverse:hover{animation-play-state:paused}` }} />

      {/* Hero Banner */}
      <div className="relative w-full min-h-[40vh] md:min-h-[50vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-navy-900">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-transparent z-10" />
          <img
            src="/images/hero-bg.webp"
            alt="Our Trusted Clients in Dubai & UAE"
            className="h-full w-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-20 w-full px-6 sm:px-8 lg:px-12 mt-8 md:mt-0">
          <div className="max-w-[1400px] mx-auto text-center lg:text-left">
            <span className="inline-block rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-400 backdrop-blur-sm mb-4">
              TRUSTED BY 1,000+ COMPANIES
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight">
              Our Clients
            </h1>
            <p className="mt-6 text-lg text-navy-200 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              For over two decades, Fast Line has been the go-to equipment rental partner for construction firms, master developers, engineering companies, and industrial operators across Dubai and the UAE. More than a thousand clients trust us for reliable machinery, on-time delivery, and expert service.
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
              <li className="font-medium text-navy-900">Our Clients</li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* Stats Strip */}
      <Section className="bg-white border-b border-border-light py-12">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-brand-500 tracking-tight">
                  {stat.value}
                </div>
                <p className="mt-2 text-sm text-navy-500 font-medium leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Content Section — Our Story */}
      <Section className="bg-background-light py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Heading level={2} className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
              Over Two Decades of Trusted Equipment Rental
            </Heading>
            <p className="mt-6 text-lg text-navy-600 leading-relaxed">
              Since our founding, Fast Line has grown from a small local supplier into one of Dubai's most relied-upon equipment rental companies. We've built our reputation on three principles: quality machinery, honest pricing, and a genuine commitment to our clients' success. Whether it's a multinational contractor delivering a landmark project or a local fit-out team renovating a villa, we treat every client with the same urgency and care.
            </p>
            <p className="mt-4 text-lg text-navy-600 leading-relaxed">
              Today, we serve over a thousand active clients across the UAE — from master developers shaping Dubai's skyline to specialist subcontractors, facility management teams, and event organisers. Our fleet spans 21 equipment categories with hundreds of machines in rotation, supported by a dedicated team of technicians, drivers, and service coordinators who ensure your equipment arrives on time and works as promised.
            </p>
            <p className="mt-4 text-lg text-navy-600 leading-relaxed">
              The names scrolling below represent a small sample of the organisations that have placed their trust in us. We're proud of every relationship we've built and look forward to serving many more clients in the years ahead — continuing to set the standard for equipment rental across Dubai and the UAE.
            </p>
          </div>
        </Container>
      </Section>

      {/* Marquee Sliders — Industry Leaders We've Worked With */}
      <Section className="bg-white py-16 border-y border-border-light overflow-hidden">
        <Container className="mb-12 text-center">
          <Heading level={2} className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
            Industry Leaders We've Worked With
          </Heading>
          <p className="mt-4 text-navy-600 max-w-2xl mx-auto text-lg leading-relaxed">
            A snapshot of the construction, contracting, and engineering firms who rely on Fast Line for their equipment needs across Dubai and the UAE. From landmark high-rise projects to major infrastructure works — our equipment has been there.
          </p>
        </Container>

        <div className="relative flex flex-col gap-6 w-full py-4">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Row 1 */}
          <div className="animate-marquee-reverse">
            {[...row1Clients, ...row1Clients, ...row1Clients].map((client, idx) => (
              <div key={idx} className="flex items-center justify-center bg-white px-8 py-5 rounded-2xl border border-border-light mx-4 shadow-sm hover:shadow-md hover:border-brand-300 transition-all cursor-default min-w-max min-h-[90px]">
                {client.logo ? (
                  <div className="h-12 w-auto flex items-center justify-center">
                    <img src={client.logo} alt={client.name} className="max-w-[160px] max-h-full object-contain mix-blend-multiply" />
                  </div>
                ) : (
                  <span className={`${client.fontClass}`}>{client.name}</span>
                )}
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="animate-marquee">
            {[...row2Clients, ...row2Clients, ...row2Clients].map((client, idx) => (
              <div key={idx} className="flex items-center justify-center bg-white px-8 py-5 rounded-2xl border border-border-light mx-4 shadow-sm hover:shadow-md hover:border-brand-300 transition-all cursor-default min-w-max min-h-[90px]">
                {client.logo ? (
                  <div className="h-12 w-auto flex items-center justify-center">
                    <img src={client.logo} alt={client.name} className="max-w-[160px] max-h-full object-contain mix-blend-multiply" />
                  </div>
                ) : (
                  <span className={`${client.fontClass}`}>{client.name}</span>
                )}
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="animate-marquee-reverse">
            {[...row3Clients, ...row3Clients, ...row3Clients].map((client, idx) => (
              <div key={idx} className="flex items-center justify-center bg-white px-8 py-5 rounded-2xl border border-border-light mx-4 shadow-sm hover:shadow-md hover:border-brand-300 transition-all cursor-default min-w-max min-h-[90px]">
                {client.logo ? (
                  <div className="h-12 w-auto flex items-center justify-center">
                    <img src={client.logo} alt={client.name} className="max-w-[160px] max-h-full object-contain mix-blend-multiply" />
                  </div>
                ) : (
                  <span className={`${client.fontClass}`}>{client.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-navy-900 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern-clients" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern-clients)" />
          </svg>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-600/20 to-transparent blur-[100px]" />
        <div className="absolute left-0 bottom-0 w-1/3 h-full bg-gradient-to-r from-brand-500/10 to-transparent blur-[100px]" />

        <Container className="text-center relative z-10">
          <Heading level={2} className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Join Our Growing List of Trusted Clients
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-200 font-light leading-relaxed">
            Whether you need a single generator for a weekend job or a full fleet of equipment for a multi-year project, we're ready to deliver. Experience the Fast Line difference — quality machinery, free delivery, and a team that genuinely cares about your project.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-brand-500 px-8 py-3.5 text-base font-bold text-navy-900 hover:bg-brand-400 transition-all shadow-[0_0_20px_rgba(255,193,7,0.3)] hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] hover:-translate-y-1"
            >
              Become a Client
            </Link>
            <Link
              to="/equipment"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-transparent px-8 py-3.5 text-base font-bold text-white hover:bg-white/10 transition-all hover:-translate-y-1"
            >
              Browse Equipment Fleet
            </Link>
          </div>
        </Container>
      </Section>
    </RootLayout>
  );
}
