
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface JsonLdProps {
  schema: object;
}

const JsonLd: React.FC<JsonLdProps> = ({ schema }) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default JsonLd;
