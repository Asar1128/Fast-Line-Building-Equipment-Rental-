import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-navy-900 border-t-4 border-brand-500 text-navy-200">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-3 flex flex-col">
            <Link to="/" aria-label="Fast Line Home">
              <img
                src="/images/Logo.webp"
                alt="Fast Line Logo"
                className="h-20 md:h-24 w-auto object-contain"
                width={520}
                height={112}
                loading="lazy"
              />
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-navy-300 max-w-sm">
              The premier construction equipment rental service in Dubai and across the UAE. Supplying top-tier generators, compactors, welders, and heavy machinery with rapid free delivery.
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 col-span-1">
            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-6">Equipment</h3>
            <ul className="space-y-3.5">
              {[
                { name: 'Generators', path: '/equipment/generators' },
                { name: 'Compaction', path: '/equipment/compaction' },
                { name: 'Air Compressors', path: '/equipment/air-compressors' },
                { name: 'Welders', path: '/equipment/welders' },
                { name: 'Light Towers', path: '/equipment/light-towers' },
                { name: 'Scaffolding', path: '/equipment/scaffolding-towers' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="group flex items-center text-sm font-medium text-navy-300 hover:text-white transition-colors">
                    <span className="w-2.5 h-0.5 bg-brand-500 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link to="/equipment" className="text-sm font-bold text-brand-500 hover:text-brand-400 transition-colors inline-flex items-center gap-1">
                  View Fleet <span aria-hidden="true">→</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 col-span-1">
            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-6">Locations</h3>
            <ul className="space-y-3.5">
{[
                 { name: 'Rental in Dubai', path: '/equipment-rental-dubai' },
                 { name: 'Rental in Al Quoz', path: '/equipment-rental-al-quoz' },
               ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="group flex items-center text-sm font-medium text-navy-300 hover:text-white transition-colors">
                    <span className="w-2.5 h-0.5 bg-brand-500 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 col-span-1">
            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-6">Services</h3>
            <ul className="space-y-3.5">
              {[
                { name: 'Equipment Rental', path: '/equipment' },
                /* { name: 'Delivery Service', path: '/services/delivery' },
                { name: 'Pickup Service', path: '/services/pickup' },
                { name: 'Repair & Maintenance', path: '/services/repair' }, */
                { name: 'Equipment Repair', path: '/repair-services' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="group flex items-center text-sm font-medium text-navy-300 hover:text-white transition-colors">
                    <span className="w-2.5 h-0.5 bg-brand-500 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Map Column */}
          <div className="lg:col-span-3 lg:pl-6 border-l-0 lg:border-l border-navy-800">
            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-6">Contact & Location</h3>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <div className="flex flex-col text-sm font-medium">
                  <a href="tel:+971565714999" className="text-white hover:text-brand-500 transition-colors">(+971) 056-5714999</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:info@fastlinerental.com" className="text-sm font-medium text-white hover:text-brand-500 transition-colors">info@fastlinerental.com</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-sm text-navy-300">Open 7 days: 6:00 AM - 8:00 PM</span>
              </li>
            </ul>

            <div className="relative h-40 w-full rounded-2xl overflow-hidden shadow-xl border border-navy-700/50 group">
              <a
                href="https://www.google.com/maps/place/Fast+Line+Building+Equipments+Rental/@25.1512406,55.2433414,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f69d50c1ad303:0x722e46f76138d18c!8m2!3d25.1512406!4d55.2433414!16s%2Fg%2F11vf9g4f48"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-20 flex items-center justify-center bg-navy-900/40 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]"
                aria-label="Get Directions to Fast Line Equipment Rental"
              >
                <span className="bg-brand-500 text-navy-900 px-6 py-2.5 rounded-full font-bold text-sm shadow-[0_0_20px_rgba(255,193,7,0.4)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Get Directions
                </span>
              </a>
              <div className="absolute inset-0 z-10 pointer-events-none">
                <iframe
                  src="https://maps.google.com/maps?q=Fast+Line+Building+Equipments+Rental&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Fast Line Office Location"
                  tabIndex={-1}
                />
              </div>
            </div>
            <p className="mt-4 text-xs text-navy-400 font-medium leading-relaxed">
              Adeem Building - Dubai 44 street - Al Qouz Third - Al Quoz - Dubai - United Arab Emirates
            </p>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-navy-400">
          <p>© {new Date().getFullYear()} Fast Line Building Equipment Rental L.L.C. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-brand-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
