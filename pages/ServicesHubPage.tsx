import React from 'react';
import Seo from '../components/seo/Seo';
import { allServices } from '../data/services';
import ServiceCard from '../components/ui/ServiceCard';
import { BUSINESS_INFO } from '../constants';

const ServicesHubPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Our Porta Potty Rental Services"
        description={`Explore all portable sanitation services offered by ${BUSINESS_INFO.name} in Mansfield, TX. From standard porta potties to luxury restroom trailers, we have a solution for you.`}
        path="/services"
      />
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
