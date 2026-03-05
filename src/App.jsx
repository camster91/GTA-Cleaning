import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import GlobalHeader from './components/GlobalHeader';
import GlobalFooter from './components/GlobalFooter';
import BackToTop from './components/BackToTop';
import ScrollToTop from './components/ScrollToTop';
import SmoothAnchor from './components/SmoothAnchor';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Service Landing Pages
import OfficeCleaning from './pages/services/OfficeCleaning';
import PostConstructionCleaning from './pages/services/PostConstructionCleaning';
import FloorMaintenance from './pages/services/FloorMaintenance';
import MedicalCleaning from './pages/services/MedicalCleaning';
import RetailCleaning from './pages/services/RetailCleaning';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SmoothAnchor />
      <div className="app-container">
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <GlobalHeader />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/office-cleaning" element={<OfficeCleaning />} />
            <Route path="/services/post-construction-cleaning" element={<PostConstructionCleaning />} />
            <Route path="/services/floor-maintenance" element={<FloorMaintenance />} />
            <Route path="/services/medical-facility-cleaning" element={<MedicalCleaning />} />
            <Route path="/services/retail-cleaning" element={<RetailCleaning />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <GlobalFooter />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
