import { useLayoutEffect, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import type { PageMeta, JsonLdSchema } from '@/types/seo';
import { MetaTags } from '@/components/seo/MetaTags';
import { OpenGraph } from '@/components/seo/OpenGraph';
import { TwitterCard } from '@/components/seo/TwitterCard';
import { JsonLd } from '@/components/seo/JsonLd';
import { SkipLink } from '@/components/layout/SkipLink';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import { WhatsAppProvider, defaultBodyText } from '@/context/WhatsAppContext';
import { useWhatsAppMessage } from '@/context/WhatsAppContext';
import { trackPageView } from '@/lib/analytics/tracking';
import navigation from '@/content/navigation.json';

interface RootLayoutProps {
  children: React.ReactNode;
  meta: PageMeta;
  jsonLd?: JsonLdSchema | JsonLdSchema[];
}

function LayoutInner({ children, meta, jsonLd }: { children: React.ReactNode; meta: PageMeta; jsonLd: JsonLdSchema | JsonLdSchema[] | undefined }) {
  const { pathname } = useLocation();
  const { setMessage } = useWhatsAppMessage();

  const isFirstRender = useRef(true);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, [pathname]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    trackPageView(pathname, document.title);
  }, [pathname]);

  useEffect(() => {
    const isProductPage = pathname.includes('/equipment/') && pathname.split('/').length === 4;
    if (!isProductPage) {
      setMessage(defaultBodyText);
    }
  }, [pathname, setMessage]);

  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://fastlinerental.com';
  const companyName = import.meta.env.VITE_COMPANY_NAME || 'Fast Line';

  const canonicalUrl = meta.canonicalPath.startsWith('http')
    ? meta.canonicalPath
    : `${siteUrl}${meta.canonicalPath}`;

  const title = meta.title.includes(companyName) || meta.title.includes('Fast Line')
    ? meta.title
    : `${meta.title} | ${companyName}`;

  return (
    <div className="flex flex-col min-h-screen">
      <MetaTags
        title={title}
        description={meta.description.slice(0, 160)}
        canonical={canonicalUrl}
        robots={meta.noIndex ? 'noindex, nofollow' : 'index, follow'}
      />
      <OpenGraph
        title={title}
        description={meta.description}
        image={meta.ogImage}
        url={canonicalUrl}
        type="website"
        siteName={companyName}
      />
      <TwitterCard
        title={title}
        description={meta.description}
        image={meta.ogImage}
      />
      {jsonLd && <JsonLd schema={jsonLd} />}

      <SkipLink />
      <Header navigation={navigation} />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export function RootLayout({ children, meta, jsonLd }: RootLayoutProps) {
  return (
    <WhatsAppProvider>
      <LayoutInner meta={meta} jsonLd={jsonLd}>{children}</LayoutInner>
    </WhatsAppProvider>
  );
}