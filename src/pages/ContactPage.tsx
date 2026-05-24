import { RootLayout } from '@/components/layout/RootLayout';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/ui/Section';
import { ContactForm } from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <RootLayout
      meta={{
        title: 'Contact Us - Equipment Rental Inquiry | Fast Line Building Equipment Rental',
        description:
          'Contact Fast Line Building Equipment Rental for construction equipment rental in Dubai & across the UAE. Call 056-5714999 or send an inquiry. Free delivery and the best rates in the market.',
        canonicalPath: '/contact',
        ogImage: '/images/og-default.jpg',
      }}
    >
      {/* Banner */}
      <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden bg-navy-900">
        <img
          src="/images/contact-hero-bg.png"
          alt="Contact Fast Line Building Equipment Rental Equipment Rental"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent" />
        <Container className="relative h-full flex flex-col justify-end pb-12 md:pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-lg md:text-xl text-navy-200 max-w-3xl font-light">
            Send us an inquiry for equipment rental. We respond within the hour.
          </p>
        </Container>
      </div>

      <Section className="bg-background-light py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-stretch">

            {/* Contact Info (Left) - Navy Card */}
            <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-navy-800 to-navy-900 p-8 md:p-12 text-white shadow-2xl flex flex-col relative overflow-hidden h-full border border-navy-700">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

              <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">Get in touch</h2>

              <div className="space-y-8 flex-1">
                <div>
                  <h3 className="font-semibold text-white text-lg mb-2">Visit us</h3>
                  <p className="text-white/80 leading-relaxed text-[15px]">
                    Come say hello at our office HQ.<br />
                    Adeem Building - Dubai 44 street - Al Qouz Third - Al Quoz - Dubai - United Arab Emirates
                  </p>
                  <a
                    href="https://www.google.com/maps/place/Fast+Line+Building+Equipments+Rental/@25.1512406,55.2433414,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f69d50c1ad303:0x722e46f76138d18c!8m2!3d25.1512406!4d55.2433414!16s%2Fg%2F11vf9g4f48"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-white text-sm font-medium hover:text-white/80 underline underline-offset-4"
                  >
                    Get Directions
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-white text-lg mb-2">Chat to us</h3>
                  <p className="text-white/80 leading-relaxed mb-1 text-[15px]">
                    Our friendly team is here to help.
                  </p>
                  <a href="mailto:info@fastlinerental.com" className="font-medium text-[15px] hover:text-white/80 transition-colors block">
                    info@fastlinerental.com
                  </a>
                  <a href={`https://wa.me/9710565714999?text=${encodeURIComponent('Hi, I want to send an inquiry about-')}`} target="_blank" rel="noopener noreferrer" className="font-medium text-[15px] hover:text-white/80 transition-colors block mt-1">
                    Message us on WhatsApp
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-white text-lg mb-2">Call us</h3>
                  <p className="text-white/80 leading-relaxed mb-1 text-[15px]">
                    Open 7 days a week, 6:00 AM - 8:00 PM
                  </p>
                  <div className="flex flex-col space-y-1">
                    <a href="tel:+971565714999" className="font-medium text-[15px] hover:text-white/80 transition-colors">
                      (+971) 056-5714999
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form (Right) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="w-full max-w-2xl mx-auto lg:mx-0 lg:pl-10 h-full">
                <div className="bg-white rounded-3xl border border-border-light p-8 md:p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] h-full flex flex-col">
                  <h2 className="text-2xl font-bold text-navy-900 mb-2">Send an Inquiry</h2>
                  <p className="text-navy-600 mb-8 text-sm md:text-base">
                    Fill in the form below and our team will get back to you shortly.
                  </p>
                  <div className="flex-1">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </Section>
    </RootLayout>
  );
}
