
import React, { useState } from 'react';
import type { FAQItem } from '../../types';
import JsonLd from '../seo/JsonLd';

interface FaqAccordionProps {
  faqs: FAQItem[];
}

interface AccordionItemProps {
  faq: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b">
      <h2>
        <button
          type="button"
          className="flex justify-between items-center w-full py-5 px-5 font-medium text-left text-gray-700 hover:bg-gray-100"
          onClick={onClick}
          aria-expanded={isOpen}
          aria-controls={`faq-content-${faq.question.replace(/\s/g, '-')}`}
        >
          <span>{faq.question}</span>
          <svg className={`w-6 h-6 shrink-0 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
      </h2>
      <div
        id={`faq-content-${faq.question.replace(/\s/g, '-')}`}
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="py-5 px-5 text-gray-600">
          <p>{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};


const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <JsonLd schema={faqPageSchema} />
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          faq={faq}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default FaqAccordion;
