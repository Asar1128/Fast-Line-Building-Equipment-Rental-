import { RootLayout } from '@/components/layout/RootLayout';
import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';

export default function NotFoundPage() {
  return (
    <RootLayout
      meta={{
        title: 'Page Not Found',
        description:
          'The page you are looking for does not exist. Return to our homepage to continue.',
        canonicalPath: '/404',
        ogImage: '/images/og-default.jpg',
        noIndex: true,
      }}
    >
      {/* Banner Image */}
      <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden">
        <div className="absolute inset-0 bg-navy-100">
          <div className="flex h-full items-center justify-center text-navy-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <rect x="2" y="7" width="20" height="10" rx="2" />
              <path d="M2 12h20" />
              <circle cx="6" cy="12" r="2" />
              <circle cx="18" cy="12" r="2" />
            </svg>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="bg-white border-b border-border-light">
        <Container className="py-10 md:py-14 text-center">
          <Heading level={1} className="text-navy-900">404 - Page Not Found</Heading>
          <p className="mt-4 text-lg text-navy-600">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="mt-8">
            <Button href="/" variant="primary" size="lg">
              Return to Homepage
            </Button>
          </div>
        </Container>
      </div>
    </RootLayout>
  );
}
