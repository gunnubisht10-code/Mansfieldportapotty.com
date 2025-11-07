import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Seo from '../components/seo/Seo';
import JsonLd from '../components/seo/JsonLd';
import { localAttractions } from '../data/attractions';
import { SITE_URL } from '../constants';

const AttractionPage: React.FC = () => {
  const { attractionSlug } = useParams<{ attractionSlug: string }>();
  const attraction = localAttractions.find(a => a.slug === attractionSlug);

  if (!attraction) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold">Attraction Not Found</h1>
        <p className="mt-4">The attraction you are looking for does not exist.</p>
        <Link to="/local-attractions" className="mt-8 inline-block text-accent">
          &larr; Back to All Attractions
        </Link>
      </div>
    );
  }

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${attraction.name} - A Mansfield, TX Attraction`,
    "description": attraction.description,
    "url": `${SITE_URL}/#/local-attractions/${attraction.slug}`,
    "about": {
      "@type": "TouristAttraction",
      "name": attraction.name,
      "description": attraction.description,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mansfield",
        "addressRegion": "TX"
      }
    }
  };

  return (
    <>
      <Seo
        title={`${attraction.name} | Mansfield, TX`}
        description={attraction.description}
        path={`/local-attractions/${attraction.slug}`}
        imageUrl={attraction.image}
      />
      <JsonLd schema={webpageSchema} />

      <div className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary text-center">{attraction.name}</h1>
          <p className="text-center text-lg text-gray-500 mt-2">{attraction.location}</p>
          <img src={attraction.image} alt={attraction.name} className="my-8 rounded-lg shadow-xl w-full" loading="lazy" />
          <div className="text-gray-700 text-lg space-y-4">
            <p>{attraction.description}</p>
          </div>
          <div className="text-center mt-12">
            <Link to="/local-attractions" className="text-accent font-semibold hover:underline">
              &larr; Back to Mansfield Attractions
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttractionPage;
