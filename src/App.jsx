import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import GlobalHeader from './components/GlobalHeader';
import GlobalFooter from './components/GlobalFooter';
import BackToTop from './components/BackToTop';
import ScrollToTop from './components/ScrollToTop';
import SmoothAnchor from './components/SmoothAnchor';

// Import Home eagerly to avoid the loading blip
import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

const OfficeCleaning = lazy(() => import('./pages/services/OfficeCleaning'));
const PostConstructionCleaning = lazy(() => import('./pages/services/PostConstructionCleaning'));
const FloorMaintenance = lazy(() => import('./pages/services/FloorMaintenance'));
const ResidentialCleaning = lazy(() => import('./pages/services/ResidentialCleaning'));
const RetailCleaning = lazy(() => import('./pages/services/RetailCleaning'));
const Blog = lazy(() => import('./pages/Blog'));

// Legal Pages
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/legal/TermsOfService'));
const Accessibility = lazy(() => import('./pages/legal/Accessibility'));

// Locations
const LocationPage = lazy(() => import('./pages/locations/LocationPage'));

import StickyCTA from './components/StickyCTA';
import Chatbot from './components/Chatbot';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SmoothAnchor />
      <div className="app-container">
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <GlobalHeader />
        <main id="main-content">
          <ErrorBoundary>
            <Suspense fallback={<div className="loading-fallback">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/office-cleaning" element={<OfficeCleaning />} />
                <Route path="/services/post-construction-cleaning" element={<PostConstructionCleaning />} />
                <Route path="/services/floor-maintenance" element={<FloorMaintenance />} />
                <Route path="/services/residential-cleaning" element={<ResidentialCleaning />} />
                <Route path="/services/retail-cleaning" element={<RetailCleaning />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/legal/privacy" element={<PrivacyPolicy />} />
                <Route path="/legal/terms" element={<TermsOfService />} />
                <Route path="/legal/accessibility" element={<Accessibility />} />
                <Route path="/locations/toronto" element={<LocationPage city="Toronto" />} />
                <Route path="/locations/mississauga" element={<LocationPage city="Mississauga" />} />
                <Route path="/locations/bradford" element={<LocationPage city="Bradford" />} />
                <Route path="/locations/north-york" element={<LocationPage city="North York" />} />
                <Route path="/locations/scarborough" element={<LocationPage city="Scarborough" />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <GlobalFooter />
        <BackToTop />
        <StickyCTA />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;