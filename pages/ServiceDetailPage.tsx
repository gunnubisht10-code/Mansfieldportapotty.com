import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Seo from '../components/seo/Seo';
import JsonLd from '../components/seo/JsonLd';
import { allServices } from '../data/services';
import { BUSINESS_INFO, SITE_URL } from '../constants';
import FaqAccordion from '../components/ui/FaqAccordion';
import Button from '../components/ui/Button';
import Breadcrumbs from '../components/ui/Breadcrumbs';

const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = allServices.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold">Service Not Found</h1>
        <p className="mt-4">The service you are looking for does not exist.</p>
        <Link to="/services" className="mt-8 inline-block text-accent">
          &larr; Back to All Services
        </Link>
      </div>
    );
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.longDescription,
    "serviceType": service.name,
    "provider": {
      "@type": "LocalBusiness",
      "name": BUSINESS_INFO.name,
      "url": SITE_URL,
      "address": BUSINESS_INFO.fullAddress,
      "telephone": BUSINESS_INFO.phone
    },
    "areaServed": {
      "@type": "City",
      "name": BUSINESS_INFO.city
    },
    "url": `${SITE_URL}/services/${service.slug}`,
    "image": service.image,
  };
  
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.name }
  ];

  return (
    <>
      <Seo
        title={service.name}
        description={service.shortDescription}
        path={`/services/${service.slug}`}
        imageUrl={service.image}
      />
      <JsonLd schema={serviceSchema} />
      <Breadcrumbs crumbs={breadcrumbs} />

      <div className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={service.image} alt={service.name} className="rounded-lg shadow-xl w-full" loading="lazy" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary">{service.name}</h1>
              <p className="mt-4 text-lg text-gray-600">{service.longDescription}</p>
              <div className="mt-8">
                <Button to="/contact" variant="primary">Get a Quote</Button>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Features</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Common Use Cases</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {service.useCases.map((useCase, index) => (
                  <li key={index}>{useCase}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {service.faqs && service.faqs.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">Frequently Asked Questions</h2>
              <FaqAccordion faqs={service.faqs} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ServiceDetailPage;