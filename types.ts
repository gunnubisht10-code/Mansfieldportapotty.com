
export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  useCases: string[];
  image: string;
  faqs: FAQItem[];
}

export interface City {
  slug: string;
  name: string;
  state: string;
  zipCodes: string[];
  neighborhoods: string[];
  landmarks: string[];
  description: string;
}

export interface Attraction {
  slug: string;
  name: string;
  location: string;
  description: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
