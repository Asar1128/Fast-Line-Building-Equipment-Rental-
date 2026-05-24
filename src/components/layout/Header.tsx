import { useState, useEffect, useCallback, useMemo } from 'react';
import type { NavigationItem } from '@/types/content';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  navigation: NavigationItem[];
}

const DesktopNavItem = ({
  item,
  openDropdown,
  onEnter,
  onLeave,
}: {
  item: NavigationItem;
  openDropdown: string | null;
  onEnter: () => void;
  onLeave: () => void;
}) => (
  <li className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
    {item.children ? (
      <>
        <Link
          to={item.href}
          className="flex items-center gap-1 text-sm font-medium text-navy-600 hover:text-navy-900 py-2 transition-colors"
          aria-haspopup="true"
          aria-expanded={openDropdown === item.href}
        >
          {item.label}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform ${openDropdown === item.href ? 'rotate-180' : ''}`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </Link>
        {openDropdown === item.href && (
          <div className="absolute left-0 top-full pt-2">
            <div className="w-56 max-h-[80vh] overflow-y-auto nav-dropdown-scroll rounded-md border border-border-light bg-white shadow-lg ring-1 ring-navy-900/5">
              <ul className="py-2" role="menu">
                {item.children.map((child) => (
                  <li key={child.href} role="none">
                    <Link
                      to={child.href}
                      role="menuitem"
                      className="block px-4 py-2.5 text-sm text-navy-700 hover:bg-background-light hover:text-navy-900 transition-colors"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
    ) : (
      <Link
        to={item.href}
        className="text-sm font-medium text-navy-600 hover:text-navy-900 py-2 transition-colors"
      >
        {item.label}
      </Link>
    )}
  </li>
);

const MobileNavItem = ({
  item,
  index,
  mobileExpanded,
  onToggle,
  onClose,
}: {
  item: NavigationItem;
  index: number;
  mobileExpanded: string | null;
  onToggle: (href: string) => void;
  onClose: () => void;
}) => (
  <li
    className="animate-fadeIn"
    style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
  >
    {item.children ? (
      <>
        <button
          onClick={() => onToggle(item.href)}
          className="w-full flex items-center justify-between py-3.5 text-lg font-medium text-white hover:text-brand-500 transition-colors"
        >
          {item.label}
          <svg
            className={`w-5 h-5 text-navy-400 transition-transform duration-300 ${mobileExpanded === item.href ? 'rotate-180 text-brand-500' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {mobileExpanded === item.href && (
          <ul className="pl-4 pb-2 space-y-1 border-l-2 border-brand-500/30 ml-2 animate-fadeIn">
            {item.children.map((child) => (
              <li key={child.href}>
                <Link
                  to={child.href}
                  className="block py-2.5 text-[15px] text-navy-300 hover:text-white hover:pl-2 transition-all"
                  onClick={onClose}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    ) : (
      <Link
        to={item.href}
        className="block py-3.5 text-lg font-medium text-white hover:text-brand-500 transition-colors"
        onClick={onClose}
      >
        {item.label}
      </Link>
    )}
  </li>
);

export function Header({ navigation }: HeaderProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const { pathname } = useLocation();

  const closeMobile = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileOpen(false);
      setIsClosing(false);
      setMobileExpanded(null);
    }, 250);
  }, []);

  useEffect(() => {
    if (mobileOpen) closeMobile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleEnter = useCallback((href: string) => {
    setOpenDropdown(href);
  }, []);

  const handleLeave = useCallback(() => {
    setOpenDropdown(null);
  }, []);

  const handleMobileToggle = useCallback((href: string) => {
    setMobileExpanded((prev) => (prev === href ? null : href));
  }, []);

  const desktopNav = useMemo(() => (
    <nav role="navigation" aria-label="Main navigation" className="hidden md:block">
      <ul className="flex items-center gap-8">
        {navigation.map((item) => (
          <DesktopNavItem
            key={item.href}
            item={item}
            openDropdown={openDropdown}
            onEnter={() => item.children && handleEnter(item.href)}
            onLeave={handleLeave}
          />
        ))}
      </ul>
    </nav>
  ), [navigation, openDropdown, handleEnter, handleLeave]);

  const mobileMenu = useMemo(() => (
    mobileOpen && (
      <div className={`fixed inset-0 top-[65px] z-40 md:hidden ${isClosing ? 'animate-slideUp' : 'animate-slideDown'}`}>
        <nav className="h-full bg-navy-900 flex flex-col overflow-y-auto">
          <ul className="flex-1 px-6 py-8 space-y-1">
            {navigation.map((item, index) => (
              <MobileNavItem
                key={item.href}
                item={item}
                index={index}
                mobileExpanded={mobileExpanded}
                onToggle={handleMobileToggle}
                onClose={closeMobile}
              />
            ))}
          </ul>
          <div className="px-6 py-6 border-t border-navy-800">
            <Link
              to="/contact"
              onClick={closeMobile}
              className="block w-full text-center rounded-xl bg-brand-500 px-6 py-3.5 text-base font-bold text-navy-900 hover:bg-brand-400 transition-colors"
            >
              Send an Inquiry
            </Link>
            <a
              href="tel:+971565714999"
              className="block w-full text-center mt-3 text-sm font-medium text-navy-400 hover:text-white transition-colors"
            >
              Or call (+971) 056-5714999
            </a>
          </div>
        </nav>
      </div>
    )
  ), [mobileOpen, isClosing, navigation, mobileExpanded, handleMobileToggle, closeMobile]);

  return (
    <header role="banner" className="border-b border-border-light bg-white sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" aria-label="Fast Line Home">
          <img
            src="/images/Logo.webp"
            alt="Fast Line Logo"
            className="h-16 md:h-20 w-auto object-contain"
            width={520}
            height={112}
          />

        </Link>

        {/* Desktop Nav */}
        {desktopNav}

        {/* Hamburger Button — Mobile Only */}
        <button
          onClick={() => (mobileOpen ? closeMobile() : setMobileOpen(true))}
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-navy-50 transition-colors"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-navy-900 rounded-full transition-all duration-300 origin-center ${mobileOpen && !isClosing ? 'rotate-45 translate-y-[7px]' : ''
                }`}
            />
            <span
              className={`block h-0.5 w-full bg-navy-900 rounded-full transition-all duration-200 ${mobileOpen && !isClosing ? 'opacity-0 scale-x-0' : 'opacity-100'
                }`}
            />
            <span
              className={`block h-0.5 w-full bg-navy-900 rounded-full transition-all duration-300 origin-center ${mobileOpen && !isClosing ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenu}
    </header>
  );
}
