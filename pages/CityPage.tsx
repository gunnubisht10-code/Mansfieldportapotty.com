import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Seo from '../components/seo/Seo';
import JsonLd from '../components/seo/JsonLd';
import { serviceAreas } from '../data/cities';
import { allServices } from '../data/services';
import { BUSINESS_INFO, SITE_URL } from '../constants';
import Button from '../components/ui/Button';

const CityPage: React.FC = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = serviceAreas.find(c => c.slug === citySlug);

  if (!city) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold">Service Area Not Found</h1>
        <p className="mt-4">We may not serve this area, or there was a typo.</p>
        <Link to="/service-areas" className="mt-8 inline-block text-accent">
          &larr; Back to All Service Areas
        </Link>
      </div>
    );
  }

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${BUSINESS_INFO.name} - ${city.name}`,
    "description": `Your local provider for porta potty rentals in ${city.name}, ${city.state}.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": city.state
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": BUSINESS_INFO.name,
      "url": SITE_URL
    },
    "areaServed": {
      "@type": "City",
      "name": city.name
    }
  };

  return (
    <>
      <Seo
        title={`Porta Potty Rental in ${city.name}, ${city.state}`}
        description={`Reliable and affordable porta potty rentals in ${city.name}, ${city.state}. We serve all neighborhoods and zip codes. Call for fast delivery.`}
        path={`/service-areas/${city.slug}`}
      />
      <JsonLd schema={citySchema} />

      <div className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Porta Potty Rental {city.name}, {city.state}</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{city.description}</p>
          </div>
          
          <div className="mt-12 text-center bg-secondary text-dark rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Need Service in {city.name}?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">Get a fast, free quote for your event or construction project.</p>
            <Button href={BUSINESS_INFO.phoneHref} variant="primary">Call {BUSINESS_INFO.phone}</Button>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">Our Services in {city.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allServices.slice(0, 6).map(service => (
                <div key={service.slug} className="bg-light p-6 rounded-lg shadow-md">
                   <h3 className="text-xl font-bold text-primary mb-2">{service.name}</h3>
                   <p className="text-gray-600">{service.shortDescription}</p>
                   <Link to={`/services/${service.slug}`} className="text-accent font-semibold mt-4 inline-block hover:underline">Learn More &rarr;</Link>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Neighborhoods We Serve</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 columns-2">
                {city.neighborhoods.map(n => <li key={n}>{n}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">ZIP Codes</h3>
              <p className="text-gray-700">{city.zipCodes.join(', ')}</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default CityPage;
