import React from 'react';
import Seo from '../components/seo/Seo';
import JsonLd from '../components/seo/JsonLd';
import { allServices } from '../data/services';
import ServiceCard from '../components/ui/ServiceCard';
import { BUSINESS_INFO, SITE_URL } from '../constants';
import Breadcrumbs from '../components/ui/Breadcrumbs';

const ServicesHubPage: React.FC = () => {
    
  const servicesPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": `${SITE_URL}/#/services`,
    "name": "Our Porta Potty Rental Services",
    "description": `All portable sanitation services offered by ${BUSINESS_INFO.name}`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": allServices.map((service, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Service",
          "name": service.name,
          "url": `${SITE_URL}/#/services/${service.slug}`
        }
      }))
    }
  };

  return (
    <>
      <Seo
        title="Our Porta Potty Rental Services"
        description={`Explore all portable sanitation services offered by ${BUSINESS_INFO.name} in Mansfield, TX. From standard porta potties to luxury restroom trailers, we have a solution for you.`}
        path="/services"
      />
      <JsonLd schema={servicesPageSchema} />
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'Services' }]} />

      <div className="bg-light py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Our Services</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of portable restroom solutions to fit any need, from construction sites to elegant weddings.
            </p>
          </div>
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesHubPage;