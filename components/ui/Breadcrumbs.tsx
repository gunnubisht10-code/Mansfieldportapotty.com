import React from 'react';
import { Link } from 'react-router-dom';
import JsonLd from '../seo/JsonLd';
import { SITE_URL } from '../../constants';

interface Crumb {
  name: string;
  path?: string;
}

interface BreadcrumbsProps {
  crumbs: Crumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs }) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.path ? `${SITE_URL}/#${crumb.path}` : undefined
    }))
  };

  return (
    <nav className="bg-light" aria-label="Breadcrumb">
        <JsonLd schema={breadcrumbSchema} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm py-3">
            {crumbs.map((crumb, index) => (
                <li key={index} className="flex items-center">
                {index > 0 && (
                    <svg className="w-3 h-3 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                )}
                {crumb.path ? (
                    <Link to={crumb.path} className="text-gray-500 hover:text-primary">{crumb.name}</Link>
                ) : (
                    <span className="text-gray-700 font-medium">{crumb.name}</span>
                )}
                </li>
            ))}
            </ol>
        </div>
    </nav>
  );
};

export default Breadcrumbs;