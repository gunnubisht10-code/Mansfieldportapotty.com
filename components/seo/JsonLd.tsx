import React, { useEffect } from 'react';

interface JsonLdProps {
  schema: object;
}

const JsonLd: React.FC<JsonLdProps> = ({ schema }) => {
  useEffect(() => {
    const scriptId = 'json-ld-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.innerHTML = JSON.stringify(schema, null, 2);

    return () => {
      // On component unmount, remove the script
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, [schema]);

  return null; // This component injects the script into the head and renders nothing
};

export default JsonLd;
