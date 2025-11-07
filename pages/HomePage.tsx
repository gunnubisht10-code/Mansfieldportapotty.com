
import React from 'react';
import Seo from '../components/seo/Seo';
import JsonLd from '../components/seo/JsonLd';
import { BUSINESS_INFO, SITE_URL } from '../constants';
import { allServices } from '../data/services';
import { serviceAreas } from '../data/cities';
import ServiceCard from '../components/ui/ServiceCard';
import FaqAccordion from '../components/ui/FaqAccordion';
import Button from '../components/ui/Button';

const HomePage: React.FC = () => {
    
  const homeFaqs = [
    { question: 'How much does it cost to rent a porta potty in Mansfield, TX?', answer: 'The cost varies based on the type of unit, rental duration, and service frequency. Contact us for a free, no-obligation quote tailored to your specific needs.' },
    { question: 'Do you offer same-day porta potty delivery in Mansfield?', answer: 'Yes, we specialize in rapid response and can often provide same-day delivery in Mansfield and surrounding areas, subject to availability. Call us now to check!' },
    { question: 'What types of portable toilets can I rent?', answer: 'We offer a wide range, including standard units, deluxe models with sinks, ADA-compliant accessible toilets, and luxury restroom trailers for special events.' },
    { question: 'How do I know how many porta potties I need for my event?', answer: 'Our expert team can help you calculate the right number based on your guest count, event duration, and whether alcohol is served. We use industry-standard charts to ensure adequate facilities.' }
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": BUSINESS_INFO.name,
    "image": `${SITE_URL}/logo.png`,
    "@id": SITE_URL,
    "url": SITE_URL,
    "telephone": BUSINESS_INFO.phone,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.address,
      "addressLocality": BUSINESS_INFO.city,
      "addressRegion": BUSINESS_INFO.state,
      "postalCode": BUSINESS_INFO.zip,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.5632, // Replace with actual coordinates
      "longitude": -97.1158
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "makesOffer": allServices.map(s => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": s.name,
        "url": `${SITE_URL}/#/services/${s.slug}`,
        "description": s.shortDescription
      }
    })),
    "areaServed": serviceAreas.map(c => ({
      "@type": "City",
      "name": c.name,
      "url": `${SITE_URL}/#/service-areas/${c.slug}`
    }))
  };

  return (
    <>
      <Seo
        title={`Porta Potty Rental in ${BUSINESS_INFO.city}, ${BUSINESS_INFO.state}`}
        description={`Your #1 source for reliable and affordable porta potty rentals in Mansfield, TX. We offer same-day delivery for construction sites, events, and more. Call ${BUSINESS_INFO.phone} today!`}
        path="/"
        imageUrl="https://picsum.photos/seed/homehero/1200/630"
      />
      <JsonLd schema={localBusinessSchema} />

      {/* Hero Section */}
      <section className="bg-primary text-white bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0, 82, 155, 0.8), rgba(0, 82, 155, 0.8)), url('https://picsum.photos/seed/mansfieldskyline/1920/1080')" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Porta Potty Rental, Mansfield, TX</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">Fast, Clean, and Affordable Portable Restroom Solutions for Your Job Site or Special Event.</p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4">
            <Button to="/contact" variant="secondary">Get a Free Quote</Button>
            <Button href={BUSINESS_INFO.phoneHref} variant="primary">Call Us Now: {BUSINESS_INFO.phone}</Button>
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="bg-secondary text-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Need a porta potty in Mansfield, TX today?</h2>
          <p className="mt-2 text-lg">We offer same-day delivery! Call us for immediate service.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Porta Potty Rental Services in Mansfield, Texas</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">We provide a complete range of portable sanitation solutions to meet any requirement.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.slice(0, 6).map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
           <div className="text-center mt-12">
            <Button to="/services">View All Services</Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Mansfield's #1 Porta Potty Rental Company</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-accent mb-2">Locally Owned</h3>
                    <p>We are a local Mansfield business dedicated to serving our community with pride and exceptional service.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-accent mb-2">Unmatched Reliability</h3>
                    <p>On-time delivery, scheduled servicing, and clean units are our promise to you. We never miss an appointment.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-accent mb-2">Affordable Pricing</h3>
                    <p>We offer competitive, transparent pricing with no hidden fees. Get the best value for your rental in Mansfield.</p>
                </div>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Frequently Asked Questions</h2>
          </div>
          <FaqAccordion faqs={homeFaqs} />
        </div>
      </section>
      
    </>
  );
};

export default HomePage;
