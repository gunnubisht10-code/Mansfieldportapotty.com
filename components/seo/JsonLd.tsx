import React, { useEffect } from 'react';

interface JsonLdProps {
  schema: object | object[];
}

const JsonLd: React.FC<JsonLdProps> = ({ schema }) => {
  useEffect(() => {
    const schemas = Array.isArray(schema) ? schema : [schema];
    const createdScripts: HTMLScriptElement[] = [];

    schemas.forEach(s => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(s, null, 2);
      document.head.appendChild(script);
      createdScripts.push(script);
    });

    return () => {
      // On component unmount, remove all the specific scripts that were added by this instance
      createdScripts.forEach(script => {
        document.head.removeChild(script);
      });
    };
  }, [schema]);

  return null; // This component injects the script(s) into the head and renders nothing
};

export default JsonLd;