import { RootLayout } from '@/components/layout/RootLayout';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { HeroEnquiryForm } from '@/components/home/HeroEnquiryForm';
import { Link } from 'react-router-dom';
import { allCategories } from '@/lib/machinery';

const faqs = [
  {
    question: 'Do you deliver equipment across Dubai?',
    answer:
      'Yes, we provide free delivery and pickup for all rental equipment across Dubai including Al Quoz, Jebel Ali, Business Bay, Downtown Dubai, DIP, and all areas. Same-day delivery is available from our Al Quoz base.',
  },
  {
    question: 'What types of generators do you have for rent?',
    answer:
      'We offer a wide range of generators from 5.5 kVA portable units to 1000 kVA industrial generators. Brands include CAT, Honda, Perkins, Cummins, and more. All generators are available for immediate delivery across Dubai with the best rates in the market.',
  },
  {
    question: 'Do you offer repair services for rented equipment?',
    answer:
      'Yes, we provide repair and maintenance services for all rented equipment including generator repair, scaffolding repair, compactor servicing, and welder maintenance. Our technicians are available for on-site repairs across Dubai, or you can bring equipment to our Al Quoz workshop.',
  },
  {
    question: 'What are your operating hours?',
    answer:
      'We are open 7 days a week from 6 AM to 8 PM. Contact us at 056-5714999 for urgent requirements. We serve customers across Dubai and the UAE.',
  },
  {
    question: 'What areas in Dubai do you serve for equipment rental?',
    answer:
      'We serve all areas of Dubai including Al Quoz, Jebel Ali, Dubai Industrial City, DIP, Business Bay, Downtown Dubai, JLT, Al Barsha, DSO, and more. Free delivery and pickup included on every rental.',
  },
  {
    question: 'Can I rent a compactor or roller for a short-term project?',
    answer:
      'Absolutely. We offer flexible rental periods for all our compaction equipment including walk-behind and ride-on vibratory rollers. Daily, weekly, and monthly rates available. Send us an inquiry for a competitive quote tailored to your project.',
  },
  {
    question: 'How do I get a quote for generator rental in Dubai?',
    answer:
      'Simply send us an inquiry through our website or call us at 056-5714999. Let us know the kVA rating you need, rental duration, and delivery location. We offer the best and most competitive rates in the market with free delivery across Dubai.',
  },
  {
    question: 'Do you provide scaffolding rental in Dubai?',
    answer:
      'Yes, we offer a full range of aluminum and steel scaffolding towers for rent in Dubai and across the UAE. Our scaffolding is suitable for construction, maintenance, painting, and facade work. We deliver free of charge to all Dubai areas.',
  },
  {
    question: 'What if I cannot find the equipment I need on your website?',
    answer:
      'If you do not see the specific equipment you need listed on our site, please send us an inquiry anyway. We have a much larger inventory than what is displayed online and can source most building and construction equipment. Contact us at 056-5714999 or submit an inquiry form.',
  },
  {
    question: 'Do you offer generator repair and scaffolding repair services?',
    answer:
      'Yes, we offer professional repair services for generators, scaffolding, compactors, welders, and all construction equipment. Our repair team operates across Dubai with on-site service available. We can repair both rented and customer-owned equipment.',
  },
  {
    question: 'Is there a minimum rental period for equipment?',
    answer:
      'We offer flexible rental periods starting from daily rentals. Whether you need equipment for a single day, a week, or several months, we can accommodate your project needs. Send us an inquiry for a customized quote based on your timeline.',
  },
  {
    question: 'Do you provide on-site delivery to Al Quoz and other Dubai areas?',
    answer:
      'Yes, Al Quoz is where our base is located, so we offer same-day delivery to Al Quoz and all other Dubai areas. All deliveries and pickups are completely free of charge.',
  },
  {
    question: 'Can I rent construction equipment for residential projects?',
    answer:
      'Absolutely. Our equipment is available for both commercial and residential projects. Whether you are building a villa, renovating an apartment, or doing landscaping work in Dubai, we have the right equipment available for rent with free delivery.',
  },
  {
    question: 'What brands of scaffolding towers do you rent in Dubai?',
    answer:
      'We rent scaffolding from top brands including Boss, Zarges, Lyte, Werner, Instant UpRight, Euro Towers, and Altrex. We also provide Cuplock and Kwikstage galvanized steel scaffolding systems. All available for delivery across Dubai and the UAE.',
  },
];

export default function HomePage() {
  return (
    <RootLayout
      meta={{
        title: 'Construction and Building Equipment Rental Dubai | Fast Line Building Equipment Rental Al Quoz Dubai',
        description:
          'Rent generators, compactors, welders, light towers, scaffolding & more in Dubai with free delivery. Best and competitive rates in the market. Call 056-5714999.',
        canonicalPath: '/',
        ogImage: '/images/og-home.jpg',
      }}
    >
      {/* Hero Section */}
      <section
        className="relative min-h-[65vh] flex items-center"
      >
        {/* Hero background image with priority loading */}
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
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-navy-900/80" />

        <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-stretch max-w-[1400px] mx-auto">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left flex flex-col justify-center">
              <Heading level={1} className="text-white text-4xl md:text-5xl lg:text-6xl leading-tight">
                Building Equipment Rental in Dubai &amp; UAE
              </Heading>
              <p className="mt-8 text-lg md:text-xl text-navy-200 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Fast Line Building Equipment Rental is your trusted partner for construction equipment rental in Dubai.
                We deliver generators, compactors, welders, light towers, scaffolding, and more
                across Dubai with free delivery and pickup — at the best and most competitive rates in the market.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button href="/equipment" size="lg">
                  Browse Equipment
                </Button>
                <Button href="tel:+971565714999" variant="ghost" size="lg">
                  Call 056-5714999
                </Button>
              </div>
            </div>

            {/* Right: Form */}
            <div className="w-full max-w-lg mx-auto lg:max-w-none flex items-center">
              <HeroEnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <Section>
        <Container>
          <Heading level={2} className="text-center text-navy-900">
            Equipment Available for Rent
          </Heading>
          <p className="mx-auto mt-4 max-w-2xl text-center text-navy-600">
            Browse our full range of construction and industrial equipment available for rental in Dubai and across the UAE.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allCategories.map((category) => (
              <Link
                key={category.slug}
                to={category.canonicalPath}
                className="group relative overflow-hidden rounded-lg border border-border-light bg-white transition-shadow hover:shadow-xl"
              >
                <div className="aspect-[16/10] bg-navy-100 overflow-hidden">
                  <img
                    src={category.image}
                    alt={`${category.name} for rent in Dubai & UAE - Fast Line Building Equipment Rental`}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-navy-900 group-hover:text-brand-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm text-navy-600">{category.description}</p>

                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* About Our Services - Text Content for SEO */}
      <Section>
        <Container>
          <div className="mx-auto max-w-4xl">
              <Heading level={2} className="text-center text-navy-900">
                Construction Equipment Rental Across Dubai
              </Heading>
              <div className="mt-8 space-y-4 text-navy-600 leading-relaxed">
              <p>
                Fast Line Building Equipment Rental is a trusted provider of construction and industrial equipment
                in Dubai, UAE. Based in Al Quoz, we supply a wide range of machinery to contractors,
                project managers, and maintenance teams working across Dubai and the surrounding areas.
                Whether you need a portable generator for a small job site or a 1000 kVA industrial unit for a large-scale
                construction project, we have the right equipment ready for delivery — at the best and most competitive rates in the market.
              </p>
              <p>
                Our rental fleet includes diesel generators from leading brands such as Caterpillar, Honda, Perkins, and Cummins,
                ranging from 5.5 kVA portable units to heavy-duty 1000 kVA enclosed sets. For road and ground work, we offer
                BOMAG walk-behind and ride-on vibratory rollers for soil and asphalt compaction. Our air compressor range features
                Airman PDS185S towable units ideal for powering jackhammers, drilling, and sandblasting on construction sites.
              </p>
              <p>
                In addition to generators and compactors, we provide welding machines including the Miller Big Blue 400 Pro
                and Denyo DAW-180SS for pipeline and fabrication work, mobile light towers for night construction and events,
                aluminum and steel scaffolding towers for maintenance and facade access, pressure washers for site cleanup,
                floor scrubbers for commercial buildings, concrete floor grinders, and RIDGID pipe threading machines for
                plumbing and HVAC installations.
              </p>
              <p>
                All equipment comes with free delivery and pickup anywhere in Dubai. Our service area covers
                Al Quoz, Jebel Ali, Dubai Industrial City, DIP, and every major construction zone in Dubai.
                We also offer on-site repair services to minimize downtime on your projects, with technicians
                available seven days a week from 6 AM to 8 PM.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-background-light">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            {/* Left: Text */}
            <div>
              <span className="inline-block rounded-full border border-border-light bg-white px-4 py-1.5 text-sm font-medium text-navy-600">
                WHY CHOOSE Fast Line Building Equipment Rental
              </span>
              <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
                Your Trusted Equipment Rental Partner in Dubai
              </h2>
              <p className="mt-6 text-lg text-navy-600 leading-relaxed">
                We do not just rent equipment. We deliver reliability, expert support, and a partnership
                that keeps your construction projects moving forward. Every machine is inspected, every delivery is on time.
              </p>
            </div>

            {/* Right: Feature Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="3" width="15" height="13" />
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                  ),
                  title: 'Free Delivery & Pickup',
                  description: 'We deliver and pick up equipment across Dubai and the UAE at no extra cost.',
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  ),
                  title: 'Repair Services',
                  description: 'On-site and workshop repair services for all rented equipment. Minimizing your project downtime.',
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  ),
                  title: 'Open 7 Days a Week',
                  description: 'Available 6 AM to 8 PM every day. Reach us at 056-5714999 anytime.',
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  title: 'Serving All of Dubai',
                  description: 'Based in Al Quoz, Dubai. Serving all areas across Dubai and the UAE with free delivery and pickup.',
                },
              ].map((feature) => (
                <div key={feature.title} className="rounded-xl bg-white p-6 border border-border-light hover:shadow-lg transition-shadow">
                  <div className="text-navy-800">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-navy-900">{feature.title}</h3>
                  <p className="mt-2 text-sm text-navy-500 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>


      {/* FAQ Section */}
      <Section>
        <Container>
          <Heading level={2} className="text-center text-navy-900">
            Frequently Asked Questions
          </Heading>
          <p className="mx-auto mt-4 max-w-2xl text-center text-navy-600">
            Common questions about our equipment rental services in Dubai and across the UAE.
          </p>
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-border-light">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-navy-900 hover:text-brand-600 transition-colors">
                  {faq.question}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="shrink-0 ml-4 transition-transform group-open:rotate-180"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <p className="mt-4 text-navy-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>

          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map((faq) => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                  },
                })),
              }),
            }}
          />
        </Container>
      </Section>

      {/* Delivery Areas Section */}
      <Section className="bg-background-light border-t border-border-light">
        <Container>
          <div className="text-center mb-12">
            <Heading level={2} className="text-navy-900">
              Areas We Serve
            </Heading>
            <p className="mt-4 text-navy-600 max-w-2xl mx-auto">
              Our services include free delivery to all major locations across Dubai. Here are some of the areas we cover:
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Dubai Table */}
            <div>
              <h3 className="text-xl font-bold text-navy-900 mb-4 px-2">Dubai Deliveries</h3>
              <div className="overflow-hidden rounded-xl shadow-sm">
                <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t border-border-light bg-white">
                  {[
                    'Al Quoz', 'Business Bay', 'Downtown Dubai', 'Jumeirah',
                    'JLT', 'Jebel Ali', 'Dubai South', 'Palm Jumeirah',
                    'Dubai Media City', 'Dubai Internet City', 'Al Barsha', 'Ras Al Khor',
                    'DIP', 'DSO', 'International City', 'Dubai Festival City',
                    'Mirdif', 'Al Warqa', 'Al Nahda', 'Karama',
                    'Satwa', 'Umm Suqeim', 'Motor City', 'Sports City',
                    'Discovery Gardens', 'The Greens', 'The Springs', 'Arabian Ranches',
                    'Al Furjan', 'Muhaisnah', 'Al Qusais', 'Dubai Hills',
                    'Town Square', 'Nad Al Sheba', 'Al Safa', 'Al Twar',
                    'Al Mizhar', 'Al Jaddaf', 'Oud Metha', 'Deira'
                  ].map((area) => (
                    <div key={area} className="p-4 border-r border-b border-border-light text-navy-700 text-[15px] font-medium hover:bg-navy-50 transition-colors flex items-center">
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl shadow-sm border border-border-light bg-navy-50/80 p-4 text-center text-navy-600 text-[15px] font-medium">
              More areas available on request
            </div>
          </div>
          
          <p className="mt-8 text-center text-navy-700 text-lg">
            If your area is not listed, just <Link to="/contact" className="text-brand-600 font-semibold hover:underline">contact us</Link>, and we'll do our best to deliver to your location!
          </p>
        </Container>
      </Section>

      {/* Our Customers */}
      <Section className="bg-white py-16 border-t border-border-light">
        <Container>
          <div className="text-center flex flex-col items-center justify-center mb-12">
            <h2 className="text-sm font-bold text-navy-900 tracking-wider uppercase mb-3">
              Trusted Clients
            </h2>
            <div className="flex items-center justify-center w-full max-w-[200px]">
              <div className="h-px bg-gray-300 flex-1"></div>
              <div className="mx-3 w-2 h-2 border border-brand-500 transform rotate-45"></div>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
          </div>

          {/* Logos Row */}
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 mb-16 opacity-80 hover:opacity-100 transition-opacity duration-300">
            {[
              { src: '/images/AL Naboodah.png', alt: 'Al Naboodah Construction', imgClass: 'scale-90 md:scale-100' },
              { src: '/images/ALEC.png', alt: 'ALEC Engineering' },
              { src: '/images/Al sahel.svg', alt: 'Al Sahel Construction' },
              { src: '/images/DAA.png', alt: 'DAA' },
              { src: '/images/AMANA.png', alt: 'AMANA Group' },
              { src: '/images/alshafarlogo.png', alt: 'Al Shafar Engineering LLC' },
            ].map((logo, idx) => (
              <div key={idx} className="flex items-center justify-center w-28 md:w-36 h-16 md:h-20 grayscale hover:grayscale-0 transition-all duration-300 mix-blend-multiply">
                <img src={logo.src} alt={logo.alt} className={`max-w-full max-h-full object-contain ${logo.imgClass || ''}`} />
              </div>
            ))}
          </div>

          {/* Contact Banner */}
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 py-4">
            <div className="border-l-[3px] border-brand-500 pl-5 text-navy-500 text-sm md:text-base leading-relaxed text-center md:text-left">
              We are proud to have worked with some of the largest and most respected construction and engineering firms across the UAE. Ensuring reliable equipment delivery and support for every project.
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link 
                to="/our-clients" 
                className="inline-flex items-center justify-center rounded-xl bg-transparent border-2 border-navy-900 px-8 py-3 text-sm font-bold uppercase text-navy-900 hover:bg-navy-900 hover:text-white transition-colors"
              >
                VIEW ALL CLIENTS
              </Link>
              <Button href="/contact" className="px-8 shadow-md uppercase">
                CONTACT NOW
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section className="relative">
        {/* Top half with navy background and image overlay */}
        <div className="relative py-20 lg:py-28 px-6 sm:px-8 lg:px-12 overflow-hidden flex flex-col items-center justify-center text-center bg-navy-900">
          {/* Background Image with dark overlay */}
          <div className="absolute inset-0 z-0">
            <img src="/images/hero-bg.webp" alt="Construction Equipment" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-navy-900/80" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-sm font-bold text-brand-500 tracking-widest uppercase mb-4">
              GET A QUOTE FOR RENTAL USE
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Need Equipment for Your Project?
            </h2>
            <p className="mx-auto mt-6 text-lg text-navy-200 font-medium max-w-2xl">
              Contact us today for competitive rental rates with free delivery across Dubai and the UAE.
              Available 7 days a week.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/contact" size="lg" className="w-full sm:w-auto shadow-xl">
                Send an Inquiry
              </Button>
              <Button href={`https://wa.me/9710565714999?text=${encodeURIComponent('Hi, I want to send an inquiry about-')}`} variant="ghost" size="lg" className="w-full sm:w-auto">
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom half with navy background and stats */}
        <div className="relative bg-navy-900 py-12 px-6 sm:px-8 lg:px-12 overflow-hidden">
          {/* Faint background image for the bottom bar too, optional, but solid navy is cleaner and closer to typical implementations */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center justify-center px-4 border-b sm:border-b-0 sm:border-r border-navy-700/50 pb-6 sm:pb-0">
              <span className="text-4xl md:text-5xl font-bold text-brand-500 mb-2">1.2k</span>
              <span className="text-white text-sm md:text-base font-medium">Clients Served</span>
            </div>
            <div className="flex flex-col items-center justify-center px-4 border-b sm:border-b-0 sm:border-r border-navy-700/50 pb-6 sm:pb-0">
              <span className="text-4xl md:text-5xl font-bold text-brand-500 mb-2">150+</span>
              <span className="text-white text-sm md:text-base font-medium">Projects Done</span>
            </div>
            <div className="flex flex-col items-center justify-center px-4">
              <span className="text-4xl md:text-5xl font-bold text-brand-500 mb-2">24/7</span>
              <span className="text-white text-sm md:text-base font-medium">Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Fast Line Building Equipment Rental L.L.C',
            description:
              'Construction equipment rental company serving Dubai and the UAE. Generators, compactors, welders, light towers, scaffolding, and more with free delivery at the best rates in the market.',
            url: 'https://fastlinerental.com',
            telephone: '+971-56-571-4999',
            email: 'info@fastlinerental.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Adeem Building, Dubai 44 Street, Al Quoz Third',
              addressLocality: 'Dubai',
              addressRegion: 'Dubai',
              addressCountry: 'AE',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 25.1512406,
              longitude: 55.2433414,
            },
            sameAs: [
              'https://www.google.com/maps/place/Fast+Line+Building+Equipments+Rental/@25.1512406,55.2433414,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f69d50c1ad303:0x722e46f76138d18c!8m2!3d25.1512406!4d55.2433414!16s%2Fg%2F11vf9g4f48',
            ],
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
              ],
              opens: '06:00',
              closes: '20:00',
            },
            areaServed: [
              { '@type': 'City', name: 'Dubai' },
              { '@type': 'Place', name: 'Al Quoz' },
            ],
            priceRange: '$$',
          }),
        }}
      />
    </RootLayout>
  );
}
