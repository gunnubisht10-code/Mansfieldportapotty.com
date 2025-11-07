
import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../../constants';
import { allServices } from '../../data/services';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: 'Contact', path: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-and-conditions' },
    { name: 'Disclaimer', path: '/disclaimer' },
  ];

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Business Info */}
          <div>
            <h3 className="text-xl font-bold text-secondary mb-4">Lawrence Rental Works</h3>
            <p className="mb-2">{BUSINESS_INFO.fullAddress}</p>
            <p className="mb-2"><strong>Phone:</strong> <a href={BUSINESS_INFO.phoneHref} className="hover:text-secondary">{BUSINESS_INFO.phone}</a></p>
            <p className="mb-2"><strong>Email:</strong> <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-secondary">{BUSINESS_INFO.email}</a></p>
            <p className="mb-2"><strong>Hours:</strong> {BUSINESS_INFO.hours}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-secondary mb-4">Quick Links</h3>
            <ul>
              {quickLinks.map(link => (
                <li key={link.name} className="mb-2">
                  <Link to={link.path} className="hover:text-secondary transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-secondary mb-4">Our Services</h3>
            <ul>
              {allServices.slice(0, 6).map(service => (
                <li key={service.slug} className="mb-2">
                  <Link to={`/services/${service.slug}`} className="hover:text-secondary transition-colors">{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold text-secondary mb-4">Legal</h3>
            <ul>
              {legalLinks.map(link => (
                <li key={link.name} className="mb-2">
                  <Link to={link.path} className="hover:text-secondary transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved.</p>
          <p>Website by a World-Class React Engineer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
