import React from 'react';
import Seo from '../components/seo/Seo';
import JsonLd from '../components/seo/JsonLd';
import { BUSINESS_INFO, SITE_URL } from '../constants';
import Button from '../components/ui/Button';
import Breadcrumbs from '../components/ui/Breadcrumbs';

const AboutPage: React.FC = () => {
    
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "url": `${SITE_URL}/#/about`,
    "name": `About ${BUSINESS_INFO.name}`,
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": BUSINESS_INFO.name,
      "url": SITE_URL,
      "telephone": BUSINESS_INFO.phone,
      "address": BUSINESS_INFO.fullAddress
    }
  };

  return (
    <>
      <Seo
        title="About Us"
        description={`Learn about ${BUSINESS_INFO.name}, Mansfield's trusted local provider for portable toilet rentals. Our commitment to quality, reliability, and customer service.`}
        path="/about"
        imageUrl="https://picsum.photos/seed/porta-potty-company-truck-and-team/1200/630"
      />
      <JsonLd schema={aboutPageSchema} />
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'About Us' }]} />
      
      <div className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">About Lawrence Rental Works</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Your Local Partner in Portable Sanitation in Mansfield, TX</p>
          </div>

          <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://picsum.photos/seed/porta-potty-company-team-photo/800/600" alt="Lawrence Rental Works team" className="rounded-lg shadow-xl" loading="lazy" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in Mansfield, Texas, Lawrence Rental Works was built on a simple principle: to provide clean, reliable, and affordable portable sanitation solutions to our community. We saw a need for a local company that prioritized customer service and dependability above all else.
              </p>
              <p className="text-gray-700 mb-4">
                From our humble beginnings, we've grown to become a leading supplier for construction sites, special events, and municipal needs throughout the Dallas-Fort Worth metroplex. Our commitment to maintaining the highest standards of cleanliness and punctuality has earned us the trust of hundreds of clients.
              </p>
              <p className="text-gray-700">
                We're not just a rental company; we're your neighbors. We are proud to be a part of the Mansfield community and are dedicated to supporting its growth and success.
              </p>
            </div>
          </div>

          <div className="mt-12 md:mt-20 text-center">
             <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
             <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                To deliver exceptional portable sanitation services with unwavering reliability and a commitment to customer satisfaction, ensuring every client's needs are met with professionalism and care. We aim to be the most trusted and respected rental provider in the region.
             </p>
          </div>
          
          <div className="mt-12 md:mt-20 text-center bg-primary text-white rounded-lg p-10">
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">Experience the difference a dedicated, local team can make for your next project or event.</p>
            <Button to="/contact" variant="secondary">Request Your Free Quote</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;