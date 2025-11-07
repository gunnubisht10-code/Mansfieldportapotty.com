import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/seo/Seo';
import { serviceAreas } from '../data/cities';
import { BUSINESS_INFO } from '../constants';

const ServiceAreaHubPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Service Areas"
        description={`We provide porta potty rentals to Mansfield, TX and surrounding cities including Arlington, Grand Prairie, Fort Worth, and more. See our full service area.`}
        path="/service-areas"
      />
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
