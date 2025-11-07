import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesHubPage from './pages/ServicesHubPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ServiceAreaHubPage from './pages/ServiceAreaHubPage';
import CityPage from './pages/CityPage';
import LocalHubPage from './pages/LocalHubPage';
import AttractionPage from './pages/AttractionPage';
import LegalPage from './pages/LegalPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesHubPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/service-areas" element={<ServiceAreaHubPage />} />
          <Route path="/service-areas/:citySlug" element={<CityPage />} />
          <Route path="/local-attractions" element={<LocalHubPage />} />
          <Route path="/local-attractions/:attractionSlug" element={<AttractionPage />} />
          <Route path="/privacy-policy" element={<LegalPage pageType="privacy" />} />
          <Route path="/terms-and-conditions" element={<LegalPage pageType="terms" />} />
          <Route path="/disclaimer" element={<LegalPage pageType="disclaimer" />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
