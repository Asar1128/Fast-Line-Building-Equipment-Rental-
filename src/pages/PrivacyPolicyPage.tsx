import { RootLayout } from '@/components/layout/RootLayout';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Link } from 'react-router-dom';

const sections = [
  { id: 'information-we-collect', title: 'Information We Collect' },
  { id: 'how-we-use-information', title: 'How We Use Your Information' },
  { id: 'information-sharing', title: 'Information Sharing & Disclosure' },
  { id: 'data-security', title: 'Data Security' },
  { id: 'cookies', title: 'Cookies & Tracking Technologies' },
  { id: 'third-party-links', title: 'Third-Party Links' },
  { id: 'your-rights', title: 'Your Rights' },
  { id: 'data-retention', title: 'Data Retention' },
  { id: 'children-privacy', title: "Children's Privacy" },
  { id: 'policy-changes', title: 'Changes to This Policy' },
  { id: 'contact-us', title: 'Contact Us' },
];

export default function PrivacyPolicyPage() {
  return (
    <RootLayout
      meta={{
        title: 'Privacy Policy | Fast Line Building Equipment Rental',
        description:
          'Read the Privacy Policy of Fast Line Building Equipment Rental L.L.C. Learn how we collect, use, and protect your personal information when you use our equipment rental services in Dubai & the UAE.',
        canonicalPath: '/privacy-policy',
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
              <li className="text-brand-400 font-medium">Privacy Policy</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg md:text-xl text-navy-300 max-w-3xl font-light">
            How we collect, use, and protect your personal information.
          </p>
          <p className="mt-3 text-sm text-navy-400">
            Last updated: May 23, 2026
          </p>
        </Container>
      </div>

      <Section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Main Content */}
            <div className="lg:col-span-8 order-2 lg:order-1">
              <div className="prose prose-lg max-w-none">

                {/* Introduction */}
                <div className="bg-navy-50/70 rounded-2xl p-8 md:p-10 border border-navy-100/50 mb-12">
                  <p className="text-lg text-navy-700 leading-relaxed m-0">
                    Fast Line Building Equipment Rental L.L.C ("we," "our," or "us") is committed to protecting
                    the privacy of our customers, website visitors, and business partners. This Privacy Policy
                    explains how we collect, use, disclose, and safeguard your information when you visit our
                    website <a href="https://fastlinerental.com" className="text-brand-600 hover:text-brand-700 font-medium">fastlinerental.com</a> or
                    engage with our construction equipment rental services across Dubai and the UAE.
                  </p>
                </div>

                {/* Section 1 */}
                <div id="information-we-collect" className="scroll-mt-8 mb-14">
                  <Heading level={2} className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 flex items-center justify-center text-base font-bold">1</span>
                    Information We Collect
                  </Heading>
                  <p className="text-navy-600 leading-relaxed text-lg mb-6">
                    We may collect the following types of information when you use our website or services:
                  </p>
                  <div className="space-y-6">
                    <div className="border-l-4 border-brand-500 pl-6">
                      <h3 className="text-lg font-bold text-navy-900 mb-2">Personal Information</h3>
                      <p className="text-navy-600 leading-relaxed">
                        When you contact us for a quote, place a rental order, or fill out our contact form, we may
                        collect your full name, email address, phone number, company name, project location,
                        and delivery address.
                      </p>
                    </div>
                    <div className="border-l-4 border-brand-500 pl-6">
                      <h3 className="text-lg font-bold text-navy-900 mb-2">Usage Data</h3>
                      <p className="text-navy-600 leading-relaxed">
                        We automatically collect certain information when you visit our website, including your
                        IP address, browser type and version, the pages you visit, the time and date of your visit,
                        the time spent on each page, and other diagnostic data.
                      </p>
                    </div>
                    <div className="border-l-4 border-brand-500 pl-6">
                      <h3 className="text-lg font-bold text-navy-900 mb-2">Communication Data</h3>
                      <p className="text-navy-600 leading-relaxed">
                        When you contact us via phone, email, or WhatsApp, we may retain the content of
                        those communications for service improvement and record-keeping purposes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div id="how-we-use-information" className="scroll-mt-8 mb-14">
                  <Heading level={2} className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 flex items-center justify-center text-base font-bold">2</span>
                    How We Use Your Information
                  </Heading>
                  <p className="text-navy-600 leading-relaxed text-lg mb-6">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="space-y-4 text-navy-600">
                    {[
                      'To process and manage your equipment rental orders and deliveries',
                      'To communicate with you about your rental inquiries, quotes, and bookings',
                      'To arrange free delivery and pickup of equipment to your project site',
                      'To provide customer support and respond to your requests',
                      'To send you relevant updates about our equipment fleet, pricing, and promotions (with your consent)',
                      'To improve our website, services, and user experience',
                      'To comply with legal obligations under UAE law and applicable regulations',
                      'To prevent fraud and ensure the security of our services',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <svg className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section 3 */}
                <div id="information-sharing" className="scroll-mt-8 mb-14">
                  <Heading level={2} className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 flex items-center justify-center text-base font-bold">3</span>
                    Information Sharing & Disclosure
                  </Heading>
                  <p className="text-navy-600 leading-relaxed text-lg mb-6">
                    We value your privacy and do not sell, trade, or rent your personal information to third parties.
                    We may share your information only in the following circumstances:
                  </p>
                  <ul className="space-y-4 text-navy-600">
                    {[
                      { title: 'Service Providers:', desc: 'We may share your data with trusted third-party service providers who assist us in operating our website, delivering equipment, or processing payments — only to the extent necessary to perform those services.' },
                      { title: 'Legal Requirements:', desc: 'We may disclose your information if required to do so by law, court order, or government request under UAE legislation, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.' },
                      { title: 'Business Transfers:', desc: 'In the event of a merger, acquisition, or sale of assets, your personal information may be transferred as part of that transaction. We will provide notice before your personal information is transferred to a new entity.' },
                    ].map((item) => (
                      <li key={item.title} className="flex items-start gap-4">
                        <svg className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                        <span className="text-lg"><strong className="text-navy-900">{item.title}</strong> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section 4 */}
                <div id="data-security" className="scroll-mt-8 mb-14">
                  <Heading level={2} className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 flex items-center justify-center text-base font-bold">4</span>
                    Data Security
                  </Heading>
                  <p className="text-navy-600 leading-relaxed text-lg">
                    We implement appropriate technical and organisational security measures to protect your
                    personal information against unauthorised access, alteration, disclosure, or destruction.
                    These measures include SSL/TLS encryption for data in transit, secure server infrastructure,
                    and restricted access controls. However, no method of transmission over the internet or
                    electronic storage is 100% secure, and we cannot guarantee absolute security of your data.
                  </p>
                </div>

                {/* Section 5 */}
                <div id="cookies" className="scroll-mt-8 mb-14">
                  <Heading level={2} className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 flex items-center justify-center text-base font-bold">5</span>
                    Cookies & Tracking Technologies
                  </Heading>
                  <p className="text-navy-600 leading-relaxed text-lg mb-6">
                    Our website may use cookies and similar tracking technologies to enhance your browsing
                    experience. These technologies help us understand how visitors interact with our website,
                    remember your preferences, and improve our services.
                  </p>
                  <div className="bg-navy-50/70 rounded-2xl p-6 md:p-8 border border-navy-100/50">
                    <p className="text-navy-600 leading-relaxed m-0">
                      <strong className="text-navy-900">Managing Cookies:</strong> You can control and manage cookies
                      through your browser settings. Please note that disabling cookies may affect the functionality
                      of certain parts of our website. Most browsers allow you to refuse cookies, delete cookies,
                      or receive alerts before cookies are set.
                    </p>
                  </div>
                </div>

                {/* Section 6 */}
                <div id="third-party-links" className="scroll-mt-8 mb-14">
                  <Heading level={2} className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 flex items-center justify-center text-base font-bold">6</span>
                    Third-Party Links
                  </Heading>
                  <p className="text-navy-600 leading-relaxed text-lg">
                    Our website may contain links to third-party websites, including Google Maps, WhatsApp,
                    and social media platforms. We are not responsible for the privacy practices or content of
                    these external websites. We encourage you to review the privacy policies of any third-party
                    sites you visit through links on our website.
                  </p>
                </div>

                {/* Section 7 */}
                <div id="your-rights" className="scroll-mt-8 mb-14">
                  <Heading level={2} className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 flex items-center justify-center text-base font-bold">7</span>
                    Your Rights
                  </Heading>
                  <p className="text-navy-600 leading-relaxed text-lg mb-6">
                    Depending on your jurisdiction and in accordance with UAE Federal Decree-Law No. 45 of 2021
                    on the Protection of Personal Data, you may have the following rights:
                  </p>
                  <ul className="space-y-4 text-navy-600">
                    {[
                      'The right to access the personal information we hold about you',
                      'The right to request correction of inaccurate or incomplete personal data',
                      'The right to request deletion of your personal data, subject to legal obligations',
                      'The right to withdraw your consent for marketing communications at any time',
                      'The right to lodge a complaint with the relevant data protection authority in the UAE',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <svg className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-navy-600 leading-relaxed text-lg mt-6">
                    To exercise any of these rights, please contact us using the details provided at the bottom of this page.
                  </p>
                </div>

                {/* Section 8 */}
                <div id="data-retention" className="scroll-mt-8 mb-14">
                  <Heading level={2} className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 flex items-center justify-center text-base font-bold">8</span>
                    Data Retention
                  </Heading>
                  <p className="text-navy-600 leading-relaxed text-lg">
                    We retain your personal information only for as long as necessary to fulfil the purposes for
                    which it was collected, including satisfying any legal, accounting, or regulatory requirements.
                    When your data is no longer needed, we will securely delete or anonymise it in accordance
                    with our data retention policies and applicable UAE regulations.
                  </p>
                </div>

                {/* Section 9 */}
                <div id="children-privacy" className="scroll-mt-8 mb-14">
                  <Heading level={2} className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 flex items-center justify-center text-base font-bold">9</span>
                    Children's Privacy
                  </Heading>
                  <p className="text-navy-600 leading-relaxed text-lg">
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect
                    personal information from children. If we become aware that we have inadvertently gathered
                    personal data from a child under 18, we will take steps to delete that information promptly.
                  </p>
                </div>

                {/* Section 10 */}
                <div id="policy-changes" className="scroll-mt-8 mb-14">
                  <Heading level={2} className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 flex items-center justify-center text-base font-bold">10</span>
                    Changes to This Policy
                  </Heading>
                  <p className="text-navy-600 leading-relaxed text-lg">
                    We may update this Privacy Policy from time to time to reflect changes in our practices,
                    technology, or legal requirements. Any updates will be posted on this page with a revised
                    "Last Updated" date. We encourage you to review this policy periodically to stay informed
                    about how we protect your information.
                  </p>
                </div>

                {/* Section 11 */}
                <div id="contact-us" className="scroll-mt-8">
                  <Heading level={2} className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 flex items-center justify-center text-base font-bold">11</span>
                    Contact Us
                  </Heading>
                  <p className="text-navy-600 leading-relaxed text-lg mb-6">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data
                    practices, please contact us:
                  </p>
                  <div className="bg-navy-900 rounded-2xl p-8 md:p-10">
                    <h3 className="text-xl font-bold text-white mb-6">Fast Line Building Equipment Rental L.L.C</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <span className="text-navy-200">Adeem Building - Dubai 44 Street - Al Qouz Third - Al Quoz - Dubai - United Arab Emirates</span>
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

            {/* Sidebar: Table of Contents */}
            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="lg:sticky lg:top-8">
                <div className="bg-navy-50/70 rounded-2xl p-6 md:p-8 border border-navy-100/50">
                  <h3 className="text-sm font-bold text-navy-900 tracking-widest uppercase mb-6">Table of Contents</h3>
                  <nav aria-label="Table of Contents">
                    <ol className="space-y-3">
                      {sections.map((section, index) => (
                        <li key={section.id}>
                          <a
                            href={`#${section.id}`}
                            className="group flex items-center text-sm font-medium text-navy-500 hover:text-navy-900 transition-colors"
                          >
                            <span className="w-6 text-xs text-brand-600 font-bold">{String(index + 1).padStart(2, '0')}</span>
                            <span className="group-hover:translate-x-1 transition-transform">{section.title}</span>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </div>

                <div className="mt-6 bg-brand-500/10 rounded-2xl p-6 md:p-8 border border-brand-500/20">
                  <h3 className="text-lg font-bold text-navy-900 mb-3">Have Questions?</h3>
                  <p className="text-sm text-navy-600 leading-relaxed mb-5">
                    If you have any questions about our Privacy Policy, feel free to reach out.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center w-full rounded-xl bg-brand-500 px-6 py-3 text-sm font-bold text-navy-900 hover:bg-brand-400 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                  >
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
