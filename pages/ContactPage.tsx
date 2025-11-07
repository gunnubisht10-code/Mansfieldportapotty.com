import React, { useState } from 'react';
import Seo from '../components/seo/Seo';
import JsonLd from '../components/seo/JsonLd';
import { BUSINESS_INFO, SITE_URL } from '../constants';
import Button from '../components/ui/Button';
import Breadcrumbs from '../components/ui/Breadcrumbs';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "url": `${SITE_URL}/contact`,
    "name": `Contact ${BUSINESS_INFO.name}`,
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": BUSINESS_INFO.name,
      "url": SITE_URL,
      "telephone": BUSINESS_INFO.phone,
      "address": BUSINESS_INFO.fullAddress
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., send to an API endpoint)
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
  };

  return (
    <>
      <Seo
        title="Contact Us"
        description={`Get in touch with ${BUSINESS_INFO.name} for a free quote on porta potty rentals in Mansfield, TX. Call us at ${BUSINESS_INFO.phone} or fill out our contact form.`}
        path="/contact"
      />
      <JsonLd schema={contactPageSchema} />
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'Contact' }]} />
      
      <div className="bg-light py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Contact Us</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">We're here to help! Reach out for a free quote or any questions you may have.</p>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
              {isSubmitted ? (
                <div className="text-center p-8 bg-green-100 text-green-800 rounded-lg">
                  <h3 className="text-xl font-bold">Thank You!</h3>
                  <p>Your message has been sent. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" value={formState.name} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" value={formState.email} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="tel" name="phone" id="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" value={formState.phone} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" value={formState.message} onChange={handleChange}></textarea>
                  </div>
                  <div>
                    <Button type="submit" className="w-full">Submit Inquiry</Button>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-primary mb-4">Our Information</h2>
                <p className="text-lg text-gray-700 mb-2"><strong>Phone:</strong> <a href={BUSINESS_INFO.phoneHref} className="text-accent hover:underline">{BUSINESS_INFO.phone}</a></p>
                <p className="text-lg text-gray-700 mb-2"><strong>Email:</strong> <a href={`mailto:${BUSINESS_INFO.email}`} className="text-accent hover:underline">{BUSINESS_INFO.email}</a></p>
                <p className="text-lg text-gray-700 mb-2"><strong>Address:</strong> {BUSINESS_INFO.fullAddress}</p>
                <p className="text-lg text-gray-700"><strong>Hours:</strong> {BUSINESS_INFO.hours}</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-64 md:h-auto">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3363.099197022802!2d-97.1180280848231!3d32.56319898104193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e6f0b7c4f4b9b%3A0x4a493b82531d7f6b!2s1310%20S%20Hwy%20287%2C%20Mansfield%2C%20TX%2076063!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map of Lawrence Rental Works location">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;