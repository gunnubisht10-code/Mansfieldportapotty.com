import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/seo/Seo';
import JsonLd from '../components/seo/JsonLd';
import { serviceAreas } from '../data/cities';
import { BUSINESS_INFO, SITE_URL } from '../constants';
import Breadcrumbs from '../components/ui/Breadcrumbs';

const ServiceAreaHubPage: React.FC = () => {

  const serviceAreaPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": `${SITE_URL}/service-areas`,
    "name": "Our Service Areas",
    "description": `Porta potty rental service areas for ${BUSINESS_INFO.name}`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": serviceAreas.map((city, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "City",
          "name": city.name,
          "url": `${SITE_URL}/service-areas/${city.slug}`
        }
      }))
    }
  };

  return (
    <>
      <Seo
        title="Service Areas"
        description={`We provide porta potty rentals to Mansfield, TX and surrounding cities including Arlington, Grand Prairie, Fort Worth, and more. See our full service area.`}
        path="/service-areas"
      />
      <JsonLd schema={serviceAreaPageSchema} />
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'Service Areas' }]} />

      <div className="bg-light py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Our Service Areas</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              {BUSINESS_INFO.name} proudly serves Mansfield and numerous surrounding communities throughout the Dallas-Fort Worth Metroplex.
            </p>
          </div>
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {serviceAreas.map(city => (
              <Link
                key={city.slug}
                to={`/service-areas/${city.slug}`}
                className="bg-white p-6 rounded-lg shadow-md text-center font-semibold text-primary hover:bg-primary hover:text-white transition-colors transform hover:scale-105"
              >
                {city.name}, {city.state}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceAreaHubPage;