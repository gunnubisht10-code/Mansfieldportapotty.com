import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/seo/Seo';
import JsonLd from '../components/seo/JsonLd';
import { localAttractions } from '../data/attractions';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { SITE_URL } from '../constants';

const LocalHubPage: React.FC = () => {

  const localHubSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": `${SITE_URL}/#/local-attractions`,
    "name": "Local Attractions in Mansfield, TX",
    "description": "Discover top attractions in Mansfield, TX."
  };

  return (
    <>
      <Seo
        title="Local Attractions in Mansfield, TX"
        description="Discover the best local attractions and things to do in Mansfield, Texas. Learn more about our vibrant community."
        path="/local-attractions"
      />
      <JsonLd schema={localHubSchema} />
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'Local Attractions' }]} />

      <div className="bg-light py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Explore Mansfield, TX</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              As a proud local business, we love our community. Here are some of the top attractions that make Mansfield a great place to live and visit.
            </p>
          </div>
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localAttractions.map(attraction => (
              <div key={attraction.slug} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                <img src={attraction.image} alt={attraction.name} className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-2xl font-bold text-primary mb-2">{attraction.name}</h2>
                  <p className="text-gray-600 mb-4 flex-grow">{attraction.description.substring(0, 120)}...</p>
                  <Link to={`/local-attractions/${attraction.slug}`} className="mt-auto text-accent font-semibold hover:underline">Read More &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LocalHubPage;