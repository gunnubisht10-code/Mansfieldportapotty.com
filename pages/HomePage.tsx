import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/seo/Seo';
import JsonLd from '../components/seo/JsonLd';
import { BUSINESS_INFO, SITE_URL } from '../constants';
import { allServices } from '../data/services';
import { serviceAreas } from '../data/cities';
import { reviews } from '../data/reviews';
import ServiceCard from '../components/ui/ServiceCard';
import FaqAccordion from '../components/ui/FaqAccordion';
import Button from '../components/ui/Button';
import ReviewsSlider from '../components/ui/ReviewsSlider';

const HomePage: React.FC = () => {
    
  const homeFaqs = [
    { question: 'How much does it cost to rent a porta potty in Mansfield, TX?', answer: 'The cost varies based on the type of unit, rental duration, and service frequency. Contact us for a free, no-obligation quote tailored to your specific needs.' },
    { question: 'Do you offer same-day porta potty delivery in Mansfield?', answer: 'Yes, we specialize in rapid response and can often provide same-day delivery in Mansfield and surrounding areas, subject to availability. Call us now to check!' },
    { question: 'What types of portable toilets can I rent?', answer: 'We offer a wide range, including standard units, deluxe models with sinks, ADA-compliant accessible toilets, and luxury restroom trailers for special events.' },
    { question: 'How do I know how many porta potties I need for my event?', answer: 'Our expert team can help you calculate the right number based on your guest count, event duration, and whether alcohol is served. We use industry-standard charts to ensure adequate facilities.' }
  ];
  
  const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
  const averageRating = totalRating / reviews.length;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": BUSINESS_INFO.name,
    "image": "https://images.unsplash.com/photo-1582993847303-34676a1469e5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3",
    "logo": `${SITE_URL}/#/logo.png`,
    "@id": SITE_URL,
    "url": SITE_URL,
    "telephone": BUSINESS_INFO.phone,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.address,
      "addressLocality": BUSINESS_INFO.city,
      "addressRegion": BUSINESS_INFO.state,
      "postalCode": BUSINESS_INFO.zip,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.5632,
      "longitude": -97.1158
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": averageRating.toFixed(1),
        "reviewCount": reviews.length
    },
    "review": reviews.map(review => ({
        "@type": "Review",
        "author": {"@type": "Person", "name": review.name},
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": review.rating,
            "bestRating": "5"
        },
        "reviewBody": review.text
    })),
    "makesOffer": allServices.map(s => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": s.name,
        "url": `${SITE_URL}/#/services/${s.slug}`,
        "description": s.shortDescription
      }
    })),
    "areaServed": serviceAreas.map(c => ({
      "@type": "City",
      "name": c.name,
      "url": `${SITE_URL}/#/service-areas/${c.slug}`
    })),
    "sameAs": [
      "https://www.facebook.com/Lawrencerentalworks",
      "https://www.instagram.com/lawre_ncerentalworks/",
      "https://www.linkedin.com/company/lawrence-rental-works",
      "https://www.showmelocal.com/39245554-lawrence-rental-works-mansfield",
      "https://www.yelp.com/biz/lawrence-rental-works-mansfield",
      "https://www.hotfrog.com/company/fc9cc1de67428daca6e1428c789d6ff6/lawrence-rental-works/mansfield/rental-stores",
      "https://www.find-us-here.com/businesses/Lawrence-Rental-Works-Mansfield-Texas-USA/34389507/"
    ]
  };

  return (
    <>
      <Seo
        title={`Porta Potty Rental in ${BUSINESS_INFO.city}, ${BUSINESS_INFO.state}`}
        description={`Your #1 source for reliable and affordable porta potty rentals in Mansfield, TX. We offer same-day delivery for construction sites, events, and more. Call ${BUSINESS_INFO.phone} today!`}
        path="/"
        imageUrl="https://images.unsplash.com/photo-1522201948163-54c81c6e9a74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
      />
      <JsonLd schema={localBusinessSchema} />

      {/* Hero Section */}
      <section className="bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Porta Potty Rental, Mansfield, TX</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">Fast, Clean, and Affordable Portable Restroom Solutions for Your Job Site or Special Event.</p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4">
            <Button to="/contact" variant="secondary">Get a Free Quote</Button>
            <Button href={BUSINESS_INFO.phoneHref} variant="primary">Call Us Now: {BUSINESS_INFO.phone}</Button>
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="bg-secondary text-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Need a porta potty in Mansfield, TX today?</h2>
          <p className="mt-2 text-lg">We offer same-day delivery! Call us for immediate service.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Porta Potty Rental Services in Mansfield, Texas</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">We provide a complete range of portable sanitation solutions to meet any requirement, from a single unit for a backyard party to hundreds of units for a major festival.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
           <div className="text-center mt-12">
            <Button to="/services">Explore All Services in Detail</Button>
          </div>
        </div>
      </section>

       {/* Types of Porta Potties Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Different Types of Porta Potties Available in Mansfield, TX</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">We offer a variety of units to perfectly match the needs of your project or event.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-4">
                <h3 className="text-2xl font-bold text-primary mb-2">Standard Porta Potty</h3>
                <p className="text-gray-600">The essential, cost-effective choice for construction sites and casual events.</p>
                <Link to="/services/standard-porta-potty" className="text-accent font-semibold mt-4 inline-block hover:underline">Learn More &rarr;</Link>
            </div>
             <div className="text-center p-4">
                <h3 className="text-2xl font-bold text-primary mb-2">Deluxe Porta Potty</h3>
                <p className="text-gray-600">An upgrade with a built-in sink for convenient handwashing.</p>
                <Link to="/services/deluxe-porta-potty" className="text-accent font-semibold mt-4 inline-block hover:underline">Learn More &rarr;</Link>
            </div>
             <div className="text-center p-4">
                <h3 className="text-2xl font-bold text-primary mb-2">ADA Accessible Porta Potty</h3>
                <p className="text-gray-600">Spacious, wheelchair-accessible units to ensure inclusivity for all guests.</p>
                <Link to="/services/ada-accessible-porta-potty" className="text-accent font-semibold mt-4 inline-block hover:underline">Learn More &rarr;</Link>
            </div>
             <div className="text-center p-4">
                <h3 className="text-2xl font-bold text-primary mb-2">Restroom Trailer</h3>
                <p className="text-gray-600">The ultimate luxury experience with flushing toilets, running water, and A/C.</p>
                <Link to="/services/restroom-trailer-rental" className="text-accent font-semibold mt-4 inline-block hover:underline">Learn More &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* How it works */}
       <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">How Our Simple Rental Process Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-accent mb-2">1. Call for a Quote</h3>
                    <p>Contact our friendly team with your event or project details. We'll recommend the right units and provide a clear, upfront quote.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-accent mb-2">2. Schedule Delivery</h3>
                    <p>We schedule a convenient delivery time that works for you. Our professional drivers will place the units exactly where you need them.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-accent mb-2">3. We Service & Pick Up</h3>
                    <p>We provide regular, reliable servicing for long-term rentals. Once your rental period is over, we handle the pickup promptly.</p>
                </div>
            </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Mansfield's #1 Porta Potty Rental Company</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-accent mb-2">Locally Owned</h3>
                    <p>We are a local Mansfield business dedicated to serving our community with pride and exceptional service.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-accent mb-2">Unmatched Reliability</h3>
                    <p>On-time delivery, scheduled servicing, and clean units are our promise to you. We never miss an appointment.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-accent mb-2">Affordable Pricing</h3>
                    <p>We offer competitive, transparent pricing with no hidden fees. Get the best value for your rental in Mansfield.</p>
                </div>
            </div>
        </div>
      </section>
      
      {/* Reviews Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">What Our Customers Say</h2>
             <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">We pride ourselves on excellent service. Here's what our clients think.</p>
          </div>
          <ReviewsSlider reviews={reviews} />
        </div>
      </section>

      {/* What is a porta potty */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
           <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6">What is a Porta Potty?</h2>
           <p className="text-lg text-gray-700 mb-4">A porta potty, also known as a portable toilet or chemical toilet, is a self-contained, movable restroom facility that does not require connection to traditional plumbing or sewer systems. It uses a holding tank with special chemicals to break down waste and reduce odors. These units are essential for providing sanitation at construction sites, outdoor events, parks, and any location where permanent bathrooms are not available.</p>
           <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Common Use Cases in the Mansfield Area:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Construction:</strong> Providing OSHA-compliant restrooms for workers on residential and commercial job sites.</li>
                <li><strong>Special Events:</strong> Catering to guests at weddings, festivals (like the Pickle Parade!), and concerts.</li>
                <li><strong>Sports:</strong> Servicing tournaments and games at parks and sports complexes across Mansfield.</li>
                <li><strong>Private Parties:</strong> Offering convenient solutions for backyard BBQs, graduation parties, and family reunions.</li>
            </ul>
        </div>
      </section>

      {/* Service Area Details */}
        <section className="py-20 bg-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                 <h2 className="text-3xl md:text-4xl font-bold text-primary">Mansfield Porta Potty Service Area Details</h2>
                 <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">We proudly serve all neighborhoods and ZIP codes within Mansfield, Texas, ensuring fast and reliable delivery across the city.</p>
                 <div className="mt-8">
                    <p className="font-bold text-lg">ZIP Codes Served: 76063, 76084, 76001, 76002</p>
                    <p className="mt-4 text-gray-600">Neighborhoods include: Walnut Creek, Historic Downtown, The Arbors, and many more.</p>
                 </div>
                 <div className="mt-8">
                    <Button to="/service-areas">View All DFW Service Areas</Button>
                 </div>
            </div>
        </section>


      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Frequently Asked Questions</h2>
          </div>
          <FaqAccordion faqs={homeFaqs} />
        </div>
      </section>
      
    </>
  );
};

export default HomePage;