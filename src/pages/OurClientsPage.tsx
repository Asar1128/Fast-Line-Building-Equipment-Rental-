import { RootLayout } from '@/components/layout/RootLayout';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Link } from 'react-router-dom';

const masterDevelopers = [
  { name: 'Sobha Realty', desc: 'Luxury real estate developer known for creating ultra-premium communities like Sobha Hartland.' },
  { name: 'Danube Properties', desc: 'One of the fastest-growing developers in the UAE, famous for premium affordable housing.' },
  { name: 'Emaar Properties', desc: 'The visionary master developer behind Downtown Dubai, Dubai Marina, and Emirates Living.' },
  { name: 'Nakheel', desc: 'World-renowned master developer of the iconic Palm Jumeirah and Jumeirah Islands.' },
  { name: 'DAMAC Properties', desc: 'Global luxury real estate developer with a massive footprint in Dubai Marina and DAMAC Hills.' },
  { name: 'Select Group', desc: 'One of the largest and most successful private developers operating in Dubai Marina.' },
  { name: 'Omniyat', desc: 'An ultra-luxury developer renowned for architectural masterpieces in Palm Jumeirah and Business Bay.' },
  { name: 'Meraas', desc: 'The creative force behind vibrant destinations like Bluewaters Island, City Walk, and Jumeira Bay.' },
  { name: 'Ellington Properties', desc: 'A boutique luxury developer highly sought after by Western expats for design-led residences.' },
  { name: 'Azizi Developments', desc: 'A major residential developer managing large-scale, premium projects across Meydan and Palm Jumeirah.' }
];

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

const realtors = [
  { name: 'Allsopp & Allsopp', desc: 'Massive British-owned brokerage dominating property management in Marina and Downtown.' },
  { name: 'haus & haus', desc: 'Highly popular with UK expats; specialists in Emirates Living and luxury villa communities.' },
  { name: 'Driven Properties', desc: 'Ultra-luxury specialists managing exclusive properties on Palm Jumeirah and Bulgari Island.' },
  { name: 'fäm Properties', desc: 'One of Dubai\'s largest tech-driven realtors managing vast portfolios in Downtown and Marina.' },
  { name: 'Betterhomes', desc: 'The oldest UAE brokerage operating a massive, highly active property maintenance and management wing.' },
  { name: 'Engel & Völkers Dubai', desc: 'Premium European brokerage handling bespoke requirements for ultra-luxury clients.' },
  { name: 'Espace Real Estate', desc: 'Renowned specialists in high-end communities like Emirates Hills, Marina, and Jumeirah Islands.' },
  { name: 'LuxuryProperty.com', desc: 'Boutique UHNW brokerage focusing entirely on prime areas like Palm Jumeirah and Emirates Hills.' },
  { name: 'D&B Properties', desc: 'A major firm with a heavy focus on managing properties in Dubai Marina, Palm Jumeirah, and Downtown.' },
  { name: 'AX CAPITAL', desc: 'A fast-growing, high-end luxury real estate agency based in the heart of Dubai Marina.' }
];

export default function OurClientsPage() {
  return (
    <RootLayout
      meta={{
        title: 'Our Trusted Clients | Fast Line Building Equipment Rental',
        description: 'Discover the industry-leading construction, master developers, and engineering firms across the UAE who trust Fast Line Building Equipment Rental.',
        canonicalPath: '/our-clients',
        ogImage: '/images/og-home.jpg',
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-infinite {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee-infinite 45s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .animate-marquee-reverse {
          animation: marquee-infinite 45s linear infinite reverse;
          display: flex;
          width: max-content;
        }
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Banner Image */}
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
              TRUSTED PARTNERS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight">
              Our Clients
            </h1>
            <p className="mt-6 text-lg text-navy-200 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              We are proud to supply equipment to the visionaries building Dubai. From ultra-luxury master developers to the largest heavy-construction contractors in the UAE.
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
              <li className="font-medium text-navy-900">Our Clients</li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* Category 1: Master Developers */}
      <Section className="bg-background-light py-20">
        <Container>
          <div className="mb-12">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">[Left for SEO Optimized]</span>
            <Heading level={2} className="text-navy-900 mt-2 text-3xl md:text-4xl">
              Master Developers
            </Heading>
            <p className="mt-4 text-navy-600 max-w-3xl text-lg leading-relaxed">
              These are the giants building the communities in Dubai's most affluent areas. We provide the essential groundwork equipment and power solutions to support their luxury and high-end residential developments.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {masterDevelopers.map((dev, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-8 border border-border-light hover:border-brand-300 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-400 mb-6 flex items-center justify-center group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{dev.name}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{dev.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Category 2: Construction & Contracting Firms (Slider) */}
      <Section className="bg-white py-24 border-y border-border-light overflow-hidden">
        <Container className="mb-12">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">[Left for SEO Optimized]</span>
          <Heading level={2} className="text-navy-900 mt-2 text-3xl md:text-4xl">
            Top Construction & Contracting Firms
          </Heading>
          <p className="mt-4 text-navy-600 max-w-3xl text-lg leading-relaxed">
            The heavy hitters actually renting equipment and doing the building. These industry leaders have headquarters or major ongoing projects in DMCC, Marina, and JBR, relying on our equipment for their massive undertakings.
          </p>
        </Container>

        {/* Marquee Sliders */}
        <div className="relative flex flex-col gap-6 w-full py-4">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Row 1 - Scrolls Right (Reverse) */}
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

          {/* Row 2 - Scrolls Left (Normal) */}
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

          {/* Row 3 - Scrolls Right (Reverse) */}
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

      {/* Category 3: High-End Realtors */}
      <Section className="bg-background-light py-20">
        <Container>
          <div className="mb-12">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">[Left for SEO Optimized]</span>
            <Heading level={2} className="text-navy-900 mt-2 text-3xl md:text-4xl">
              High-End Realtors & Property Management
            </Heading>
            <p className="mt-4 text-navy-600 max-w-3xl text-lg leading-relaxed">
              Top real estate agencies in Dubai don't just sell homes; they have massive property management and interior fit-out divisions that frequently require reliable construction equipment for renovations in high-end expat areas.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {realtors.map((realtor, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-8 border border-border-light hover:border-brand-300 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-400 flex items-center justify-center group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-navy-400 uppercase tracking-wider bg-navy-50 px-3 py-1 rounded-full group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">Partner</span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{realtor.name}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{realtor.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </RootLayout>
  );
}
