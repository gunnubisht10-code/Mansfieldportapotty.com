
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_URL, BUSINESS_INFO } from '../../constants';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  imageUrl?: string;
}

const Seo: React.FC<SeoProps> = ({ title, description, path, imageUrl }) => {
  const canonicalUrl = `${SITE_URL}/#${path}`;
  const fullTitle = `${title} | ${BUSINESS_INFO.name}`;
  const defaultImage = `${SITE_URL}/og-image.jpg`; // Assume a default OG image exists

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={BUSINESS_INFO.name} />
      <meta property="og:image" content={imageUrl || defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl || defaultImage} />
    </Helmet>
  );
};

export default Seo;
