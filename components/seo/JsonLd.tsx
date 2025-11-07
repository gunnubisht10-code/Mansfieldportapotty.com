import React, { useEffect } from 'react';

interface JsonLdProps {
  schema: object;
}

const JsonLd: React.FC<JsonLdProps> = ({ schema }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema, null, 2);
    document.head.appendChild(script);

    return () => {
      // On component unmount, remove the specific script that was added
      document.head.removeChild(script);
    };
  }, [schema]);

  return null; // This component injects the script into the head and renders nothing
};

export default JsonLd;
