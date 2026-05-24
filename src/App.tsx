import { lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet
} from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));
const MachineryPage = lazy(() => import('./pages/MachineryPage'));
const MachineryCategoryPage = lazy(() => import('./pages/MachineryCategoryPage'));
const MachineryDetailPage = lazy(() => import('./pages/MachineryDetailPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const LocationPage = lazy(() => import('./pages/LocationPage'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const RepairServicePage = lazy(() => import('./pages/RepairServicePage'));
const OurClientsPage = lazy(() => import('./pages/OurClientsPage'));

const AppLayout = () => (
  <Suspense fallback={
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-50">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#ffb600] border-t-transparent"></div>
    </div>
  }>
    <Outlet />
  </Suspense>
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/">
        <Route index element={<HomePage />} />
      <Route path="equipment" element={<MachineryPage />} />
      <Route path="equipment/:categorySlug" element={<MachineryCategoryPage />} />
      <Route path="equipment/:categorySlug/:machineSlug" element={<MachineryDetailPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="blog" element={<BlogPage />} />
      <Route path="blog/:slug" element={<BlogPostPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="equipment-rental-dubai" element={<LocationPage />} />
      <Route path="equipment-rental-al-quoz" element={<LocationPage />} />
      <Route path="generator-rental-dubai" element={<LocationPage />} />
      <Route path="scaffolding-rental-dubai" element={<LocationPage />} />
      <Route path="services/delivery" element={<ServicePage />} />
      <Route path="services/pickup" element={<ServicePage />} />
      <Route path="services/repair" element={<ServicePage />} />
      <Route path="repair-services/:categorySlug" element={<RepairServicePage />} />
      <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="terms" element={<TermsPage />} />
      <Route path="our-clients" element={<OurClientsPage />} />
      {/* Redirects for old /machinery paths */}
      <Route path="machinery" element={<MachineryPage />} />
      <Route path="machinery/:categorySlug" element={<MachineryCategoryPage />} />
      <Route path="machinery/:categorySlug/:machineSlug" element={<MachineryDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Route>
  )
);

export default function App() {
  return null;
}
