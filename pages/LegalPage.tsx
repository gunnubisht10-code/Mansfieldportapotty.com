import React from 'react';
import Seo from '../components/seo/Seo';
import JsonLd from '../components/seo/JsonLd';
import { BUSINESS_INFO, SITE_URL } from '../constants';
import Breadcrumbs from '../components/ui/Breadcrumbs';

interface LegalPageProps {
  pageType: 'privacy' | 'terms' | 'disclaimer';
}

const legalContent = {
  privacy: {
    title: 'Privacy Policy',
    path: '/privacy-policy',
    description: `Read the privacy policy for ${BUSINESS_INFO.name}. We are committed to protecting your personal information.`,
    content: (
      <>
        <p>Your privacy is important to us. It is {BUSINESS_INFO.name}'s policy to respect your privacy regarding any information we may collect from you across our website, {BUSINESS_INFO.domain}, and other sites we own and operate.</p>
        <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
        <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
        <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
        <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
        <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
        <p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
        <p>This policy is effective as of 1 January 2024.</p>
      </>
    ),
  },
  terms: {
    title: 'Terms and Conditions',
    path: '/terms-and-conditions',
    description: `Review the terms and conditions for using the ${BUSINESS_INFO.name} website and services.`,
    content: (
       <>
        <h3 className="text-2xl font-bold mb-2">1. Terms</h3>
        <p>By accessing the website at {BUSINESS_INFO.domain}, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>
        <h3 className="text-2xl font-bold mt-4 mb-2">2. Use License</h3>
        <p>Permission is granted to temporarily download one copy of the materials (information or software) on {BUSINESS_INFO.name}'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose, or for any public display (commercial or non-commercial); attempt to decompile or reverse engineer any software contained on {BUSINESS_INFO.name}'s website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or "mirror" the materials on any other server. This license shall automatically terminate if you violate any of these restrictions and may be terminated by {BUSINESS_INFO.name} at any time.</p>
        <h3 className="text-2xl font-bold mt-4 mb-2">3. Disclaimer</h3>
        <p>The materials on {BUSINESS_INFO.name}'s website are provided on an 'as is' basis. {BUSINESS_INFO.name} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
      </>
    ),
  },
  disclaimer: {
    title: 'Disclaimer',
    path: '/disclaimer',
    description: `Disclaimer for ${BUSINESS_INFO.name}. Information on this website is for general purposes only.`,
    content: (
       <>
        <p>The information contained on this website is for general information purposes only. {BUSINESS_INFO.name} assumes no responsibility for errors or omissions in the contents of the Service.</p>
        <p>In no event shall {BUSINESS_INFO.name} be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. {BUSINESS_INFO.name} reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.</p>
       </>
    ),
  },
};

const LegalPage: React.FC<LegalPageProps> = ({ pageType }) => {
  const page = legalContent[pageType];
  
  const legalPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": `${SITE_URL}${page.path}`,
    "name": page.title
  };

  return (
    <>
      <Seo
        title={page.title}
        description={page.description}
        path={page.path}
      />
      <JsonLd schema={legalPageSchema} />
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: page.title }]} />
      
      <div className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary text-center">{page.title}</h1>
          <div className="mt-8 text-gray-700 space-y-4">
            {page.content}
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalPage;