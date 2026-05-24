import { RootLayout } from '@/components/layout/RootLayout';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Link } from 'react-router-dom';

const sections = [
  { id: 'acceptance', title: 'Acceptance of Terms' },
  { id: 'rental-services', title: 'Rental Services' },
  { id: 'booking-payment', title: 'Booking & Payment' },
  { id: 'delivery-pickup', title: 'Delivery & Pickup' },
  { id: 'equipment-use', title: 'Equipment Use & Responsibilities' },
  { id: 'damage-liability', title: 'Damage & Liability' },
  { id: 'cancellation', title: 'Cancellation & Refunds' },
  { id: 'intellectual-property', title: 'Intellectual Property' },
  { id: 'limitation', title: 'Limitation of Liability' },
  { id: 'governing-law', title: 'Governing Law' },
  { id: 'changes', title: 'Changes to Terms' },
  { id: 'contact', title: 'Contact Us' },
];

const SectionNumber = ({ n }: { n: number }) => (
  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 flex items-center justify-center text-base font-bold">{n}</span>
);

const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-4">
    <svg className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
    <span className="text-lg">{children}</span>
  </li>
);

export default function TermsPage() {
  return (
    <RootLayout
      meta={{
        title: 'Terms & Conditions | Fast Line Building Equipment Rental',
        description: 'Read the Terms and Conditions for Fast Line Building Equipment Rental L.L.C. Understand our rental policies, delivery terms, liability, and payment conditions for equipment rental in Dubai & UAE.',
        canonicalPath: '/terms',
        ogImage: '/images/og-default.jpg',
      }}
    >
      {/* Hero Banner */}
      <div className="relative w-full h-[300px] md:h-[380px] overflow-hidden bg-navy-900">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <Container className="relative h-full flex flex-col justify-end pb-12 md:pb-16">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-navy-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span aria-hidden="true">/</span></li>
              <li className="text-brand-400 font-medium">Terms & Conditions</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">Terms & Conditions</h1>
          <p className="mt-4 text-lg md:text-xl text-navy-300 max-w-3xl font-light">Our rental policies, responsibilities, and service agreements.</p>
          <p className="mt-3 text-sm text-navy-400">Last updated: May 23, 2026</p>
        </Container>
      </div>

      <Section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 order-2 lg:order-1">
              <div className="prose prose-lg max-w-none">

                <div className="bg-navy-50/70 rounded-2xl p-8 md:p-10 border border-navy-100/50 mb-12">
                  <p className="text-lg text-navy-700 leading-relaxed m-0">
                    These Terms and Conditions ("Terms") govern your use of the website and services provided by
                    Fast Line Building Equipment Rental L.L.C ("Fast Line," "we," "our," or "us"). By accessing our
                    website or engaging our equipment rental services, you agree to be bound by these Terms in full.
                  </p>
                </div>

                <div id="acceptance" className="scroll-mt-8 mb-14">
                  <Heading level={2} className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                    <SectionNumber n={1} /> Acceptance of Terms
                  </Heading>
                  <p className="text-navy-600 leading-relaxed text-lg">
                    By accessing or using our website at <a href="https://fastlinerental.com" className="text-brand-600 hover:text-brand-700 font-medium">fastlinerental.com</a> and
                    by renting equipment from Fast Line, you acknowledge that you have read, understood, and agree to be
                    bound by these Terms and our <Link to="/privacy-policy" className="text-brand-600 hover:text-brand-700 font-medium">Privacy Policy</Link>.
                    If you do not agree, please do not use our website or services.
                  </p>
                </div>

                <div id="rental-services" className="scroll-mt-8 mb-14">
                  <Heading level={2} className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                    <SectionNumber n={2} /> Rental Services
                  </Heading>
                  <p className="text-navy-600 leading-relaxed text-lg mb-6">
                    Fast Line provides construction and industrial equipment on a rental basis, including but not limited to
                    generators, compaction equipment, air compressors, welders, light towers, scaffolding towers,
                    pressure washers, floor cleaners, floor grinders, and pipe threaders.
                  </p>
                  <ul className="space-y-4 text-navy-600">
                    <CheckItem>All equipment is subject to availability at the time of booking</CheckItem>
                    <CheckItem>Rental periods are available on a daily, weekly, or monthly basis</CheckItem>
                    <CheckItem>Equipment specifications listed on our website are for reference only and may vary</CheckItem>
                    <CheckItem>We reserve the right to substitute equipment of equal or greater capability</CheckItem>
                  </ul>
                </div>

                <div id="booking-payment" className="scroll-mt-8 mb-14">
                  <Heading level={2} className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                    <SectionNumber n={3} /> Booking & Payment
                  </Heading>
                  <ul className="space-y-4 text-navy-600">
                    <CheckItem>Rental bookings are confirmed upon receipt of a signed rental agreement and applicable deposit or advance payment</CheckItem>
                    <CheckItem>Pricing is as quoted at the time of booking and may be subject to change without prior notice for future bookings</CheckItem>
                    <CheckItem>Payment is due as specified in the rental agreement; late payments may incur additional charges</CheckItem>
                    <CheckItem>A refundable security deposit may be required for certain equipment categories</CheckItem>
                    <CheckItem>All prices are quoted in UAE Dirhams (AED) unless otherwise stated</CheckItem>
                  </ul>
                </div>

                <div id="delivery-pickup" className="scroll-mt-8 mb-14">
                  <Heading level={2} className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                    <SectionNumber n={4} /> Delivery & Pickup
                  </Heading>
                  <p className="text-navy-600 leading-relaxed text-lg mb-6">
                    We offer free delivery and pickup services across Dubai and the UAE,
                    and other major UAE locations, subject to the following conditions:
                  </p>
                  <ul className="space-y-4 text-navy-600">
                    <CheckItem>Delivery schedules are estimated and not guaranteed; delays may occur due to traffic, weather, or unforeseen circumstances</CheckItem>
                    <CheckItem>The customer must ensure the delivery location is accessible for our transport vehicles</CheckItem>
                    <CheckItem>A representative must be present at the site to receive the equipment and sign the delivery receipt</CheckItem>
                    <CheckItem>Pickup must be arranged and confirmed at the end of the rental period; additional charges may apply for extended use</CheckItem>
                  </ul>
                </div>

                <div id="equipment-use" className="scroll-mt-8 mb-14">
                  <Heading level={2} className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                    <SectionNumber n={5} /> Equipment Use & Responsibilities
                  </Heading>
                  <p className="text-navy-600 leading-relaxed text-lg mb-6">As the renter, you agree to:</p>
                  <ul className="space-y-4 text-navy-600">
                    <CheckItem>Use the equipment only for its intended purpose and in accordance with the manufacturer's guidelines</CheckItem>
                    <CheckItem>Ensure that only qualified and trained personnel operate the rented equipment</CheckItem>
                    <CheckItem>Maintain the equipment in good working condition during the rental period</CheckItem>
                    <CheckItem>Not sublease, lend, or transfer the equipment to any third party without our written consent</CheckItem>
                    <CheckItem>Report any malfunction, damage, or safety concerns immediately to Fast Line</CheckItem>
                    <CheckItem>Return the equipment in the same condition as received, subject to normal wear and tear</CheckItem>
                  </ul>
                </div>

                <div id="damage-liability" className="scroll-mt-8 mb-14">
                  <Heading level={2} className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                    <SectionNumber n={6} /> Damage & Liability
                  </Heading>
                  <ul className="space-y-4 text-navy-600">
                    <CheckItem>The renter is responsible for any loss, theft, or damage to the equipment beyond normal wear and tear</CheckItem>
                    <CheckItem>Repair or replacement costs for damaged equipment will be charged to the renter at current market rates</CheckItem>
                    <CheckItem>Fast Line is not liable for any indirect, incidental, or consequential damages arising from equipment use</CheckItem>
                    <CheckItem>The renter shall maintain adequate insurance coverage for the rented equipment during the rental period</CheckItem>
                  </ul>
                </div>

                <div id="cancellation" className="scroll-mt-8 mb-14">
                  <Heading level={2} className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                    <SectionNumber n={7} /> Cancellation & Refunds
                  </Heading>
                  <ul className="space-y-4 text-navy-600">
                    <CheckItem>Cancellations must be made at least 24 hours before the scheduled delivery to avoid cancellation fees</CheckItem>
                    <CheckItem>Refunds for prepaid rentals will be processed within 7–14 business days, minus any applicable fees</CheckItem>
                    <CheckItem>No refunds will be issued for rentals cancelled after the equipment has been delivered</CheckItem>
                    <CheckItem>Fast Line reserves the right to cancel a booking due to equipment unavailability, in which case a full refund will be provided</CheckItem>
                  </ul>
                </div>

                <div id="intellectual-property" className="scroll-mt-8 mb-14">
                  <Heading level={2} className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                    <SectionNumber n={8} /> Intellectual Property
                  </Heading>
                  <p className="text-navy-600 leading-relaxed text-lg">
                    All content on this website — including text, graphics, logos, images, and software — is the property of
                    Fast Line Building Equipment Rental L.L.C and is protected by UAE and international copyright and
                    trademark laws. You may not reproduce, distribute, modify, or create derivative works from any content
                    on this website without our prior written consent.
                  </p>
                </div>

                <div id="limitation" className="scroll-mt-8 mb-14">
                  <Heading level={2} className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                    <SectionNumber n={9} /> Limitation of Liability
                  </Heading>
                  <div className="bg-navy-50/70 rounded-2xl p-6 md:p-8 border border-navy-100/50">
                    <p className="text-navy-600 leading-relaxed m-0">
                      To the maximum extent permitted by UAE law, Fast Line shall not be liable for any direct, indirect,
                      incidental, special, or consequential damages resulting from the use or inability to use our services
                      or equipment. Our total liability in any claim shall not exceed the total rental fees paid by you for
                      the specific equipment giving rise to the claim.
                    </p>
                  </div>
                </div>

                <div id="governing-law" className="scroll-mt-8 mb-14">
                  <Heading level={2} className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                    <SectionNumber n={10} /> Governing Law
                  </Heading>
                  <p className="text-navy-600 leading-relaxed text-lg">
                    These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates.
                    Any disputes arising from or relating to these Terms or our services shall be subject to the exclusive
                    jurisdiction of the courts of Dubai, UAE.
                  </p>
                </div>

                <div id="changes" className="scroll-mt-8 mb-14">
                  <Heading level={2} className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                    <SectionNumber n={11} /> Changes to Terms
                  </Heading>
                  <p className="text-navy-600 leading-relaxed text-lg">
                    We reserve the right to modify these Terms at any time. Updated Terms will be posted on this page with
                    a revised "Last Updated" date. Continued use of our website or services after any modifications constitutes
                    your acceptance of the revised Terms.
                  </p>
                </div>

                <div id="contact" className="scroll-mt-8">
                  <Heading level={2} className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                    <SectionNumber n={12} /> Contact Us
                  </Heading>
                  <p className="text-navy-600 leading-relaxed text-lg mb-6">
                    For questions or concerns about these Terms, please contact us:
                  </p>
                  <div className="bg-navy-900 rounded-2xl p-8 md:p-10">
                    <h3 className="text-xl font-bold text-white mb-6">Fast Line Building Equipment Rental L.L.C</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <span className="text-navy-200">Adeem Building - Dubai 44 Street - Al Qouz Third - Al Quoz - Dubai - UAE</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        <a href="mailto:info@fastlinerental.com" className="text-white hover:text-brand-500 transition-colors font-medium">info@fastlinerental.com</a>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        <a href="tel:+971565714999" className="text-white hover:text-brand-500 transition-colors font-medium">(+971) 056-5714999</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="lg:sticky lg:top-8">
                <div className="bg-navy-50/70 rounded-2xl p-6 md:p-8 border border-navy-100/50">
                  <h3 className="text-sm font-bold text-navy-900 tracking-widest uppercase mb-6">Table of Contents</h3>
                  <nav aria-label="Table of Contents">
                    <ol className="space-y-3">
                      {sections.map((section, index) => (
                        <li key={section.id}>
                          <a href={`#${section.id}`} className="group flex items-center text-sm font-medium text-navy-500 hover:text-navy-900 transition-colors">
                            <span className="w-6 text-xs text-brand-600 font-bold">{String(index + 1).padStart(2, '0')}</span>
                            <span className="group-hover:translate-x-1 transition-transform">{section.title}</span>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </div>
                <div className="mt-6 bg-brand-500/10 rounded-2xl p-6 md:p-8 border border-brand-500/20">
                  <h3 className="text-lg font-bold text-navy-900 mb-3">Need Clarification?</h3>
                  <p className="text-sm text-navy-600 leading-relaxed mb-5">Our team is happy to explain any of our rental terms in detail.</p>
                  <Link to="/contact" className="inline-flex items-center justify-center w-full rounded-xl bg-brand-500 px-6 py-3 text-sm font-bold text-navy-900 hover:bg-brand-400 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </RootLayout>
  );
}
