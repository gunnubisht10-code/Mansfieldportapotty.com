import React, { useEffect } from 'react';
import { SITE_URL, BUSINESS_INFO } from '../../constants';
import { IMG_LOGO_OG } from '../../data/images'; // Using a local base64 image

interface SeoProps {
  title: string;
  description: string;
  path: string;
  imageUrl?: string;
}

const Seo: React.FC<SeoProps> = ({ title, description, path, imageUrl }) => {
  const canonicalUrl = `${SITE_URL}${path}`;
  const fullTitle = `${title} | ${BUSINESS_INFO.name}`;
  const defaultImage = IMG_LOGO_OG; // A default image for social sharing

  useEffect(() => {
    // Set document title
    document.title = fullTitle;

    // Helper to create or update meta tags
    const setMeta = (attr: 'name' | 'property', value: string, content: string) => {
      const selector = `meta[${attr}="${value}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to create or update link tags
    const setLink = (rel: string, href: string) => {
      const selector = `link[rel="${rel}"]`;
      let element = document.querySelector(selector) as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Standard SEO Tags
    setMeta('name', 'description', description);
    setLink('canonical', canonicalUrl);
      
    // Open Graph Tags (for Facebook, LinkedIn, etc.)
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:site_name', BUSINESS_INFO.name);
    setMeta('property', 'og:image', imageUrl || defaultImage);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');

    // Twitter Card Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', imageUrl || defaultImage);

  }, [fullTitle, description, canonicalUrl, imageUrl, defaultImage]);

  return null; // This component works in the background and renders nothing
};

export default Seo;