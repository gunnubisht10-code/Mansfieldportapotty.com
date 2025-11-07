import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Seo from '../components/seo/Seo';
import JsonLd from '../components/seo/JsonLd';
import { serviceAreas } from '../data/cities';
import { allServices } from '../data/services';
import { BUSINESS_INFO, SITE_URL } from '../constants';
import Button from '../components/ui/Button';
import FaqAccordion from '../components/ui/FaqAccordion';
import Breadcrumbs from '../components/ui/Breadcrumbs';

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
  
  const cityFaqs = [
    { question: `Do you offer long-term porta potty rentals in ${city.name}?`, answer: `Yes, we offer discounted monthly rates for long-term rentals in ${city.name}, perfect for construction sites and businesses.` },
    { question: `How quickly can you deliver a portable toilet to ${city.name}?`, answer: `We can often provide same-day or next-day delivery to ${city.name}, depending on current availability. Call us to confirm.` },
  ];

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${BUSINESS_INFO.name}`,
    "description": `Your local provider for porta potty rentals in ${city.name}, ${city.state}.`,
    "url": `${SITE_URL}/#/service-areas/${city.slug}`,
    "telephone": BUSINESS_INFO.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.address,
      "addressLocality": BUSINESS_INFO.city,
      "addressRegion": BUSINESS_INFO.state,
      "postalCode": BUSINESS_INFO.zip
    },
    "areaServed": {
      "@type": "City",
      "name": city.name
    },
    "image": `https://picsum.photos/seed/${city.slug}-skyline/800/600`
  };
  
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: city.name }
  ];

  return (
    <>
      <Seo
        title={`Porta Potty Rental in ${city.name}, ${city.state}`}
        description={`Reliable and affordable porta potty rentals in ${city.name}, ${city.state}. We serve all neighborhoods and zip codes. Call for fast delivery.`}
        path={`/service-areas/${city.slug}`}
        imageUrl={`https://picsum.photos/seed/${city.slug}-skyline-og/1200/630`}
      />
      <JsonLd schema={citySchema} />
      <Breadcrumbs crumbs={breadcrumbs} />

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
            <h2 className="text-3xl font-bold text-primary text-center mb-8">Porta Potty Services in {city.name}</h2>
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
          
           {/* Why Choose Us Section */}
          <section className="py-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Choose Us for {city.name} Porta Potty Rentals?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                    <h3 className="text-xl font-bold text-accent mb-2">Local Expertise</h3>
                    <p>We know {city.name}. Our local drivers understand the traffic patterns and regulations to ensure timely, hassle-free delivery.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-accent mb-2">Fast, Reliable Service</h3>
                    <p>We pride ourselves on our punctuality. When you need a portable toilet in {city.name}, you can count on us to be there on time.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-accent mb-2">Unbeatable Cleanliness</h3>
                    <p>Every unit delivered in {city.name} is meticulously cleaned, sanitized, and fully stocked to the highest standards.</p>
                </div>
            </div>
          </section>

           {/* Types of Porta Potties Section */}
          <section className="py-10 bg-light rounded-lg">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Different Types of Porta Potties Available in {city.name}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
                <div className="text-center">
                    <h3 className="text-xl font-bold text-primary mb-2">Standard Units</h3>
                    <p className="text-gray-600">Perfect for construction sites and casual events.</p>
                </div>
                <div className="text-center">
                    <h3 className="text-xl font-bold text-primary mb-2">Deluxe Sink Units</h3>
                    <p className="text-gray-600">Includes a sink for convenient hand washing.</p>
                </div>
                 <div className="text-center">
                    <h3 className="text-xl font-bold text-primary mb-2">ADA-Compliant</h3>
                    <p className="text-gray-600">Wheelchair accessible to accommodate all guests.</p>
                </div>
                 <div className="text-center">
                    <h3 className="text-xl font-bold text-primary mb-2">Luxury Trailers</h3>
                    <p className="text-gray-600">For upscale events, with flushing toilets and A/C.</p>
                </div>
            </div>
          </section>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Neighborhoods We Serve in {city.name}</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 columns-2">
                {city.neighborhoods.map(n => <li key={n}>{n}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">ZIP Codes in {city.name}</h3>
              <p className="text-gray-700">{city.zipCodes.join(', ')}</p>
               <h3 className="text-2xl font-bold text-primary mb-4 mt-6">Landmarks</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {city.landmarks.map(l => <li key={l}>{l}</li>)}
              </ul>
            </div>
          </div>
          
           {/* FAQ Section */}
            <section className="py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">FAQs for {city.name} Rentals</h2>
                </div>
                <FaqAccordion faqs={cityFaqs} />
            </section>
            
            {/* Other Service Areas */}
            <div className="mt-10 border-t pt-10">
                <h3 className="text-2xl font-bold text-primary text-center mb-6">Explore Other Service Areas</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {serviceAreas.filter(c => c.slug !== city.slug).slice(0,5).map(area => (
                        <Link key={area.slug} to={`/service-areas/${area.slug}`} className="text-accent hover:underline">{area.name}</Link>
                    ))}
                    <Link to="/service-areas" className="font-bold text-accent hover:underline">View All &rarr;</Link>
                </div>
            </div>

        </div>
      </div>
    </>
  );
};

export default CityPage;