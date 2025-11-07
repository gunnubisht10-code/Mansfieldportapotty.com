
import React from 'react';
import { Link } from 'react-router-dom';
import type { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 flex flex-col">
      <img 
        src={service.image} 
        alt={`Image for ${service.name}`} 
        className="w-full h-48 object-cover" 
        loading="lazy" 
      />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-primary mb-2">{service.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{service.shortDescription}</p>
        <Link 
          to={`/services/${service.slug}`} 
          className="mt-auto inline-block text-accent font-semibold hover:underline"
        >
          Learn More &rarr;
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
