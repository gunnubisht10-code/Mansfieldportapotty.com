
import type { Service } from '../types';

export const allServices: Service[] = [
  {
    slug: 'portable-toilet-rental',
    name: 'Portable Toilet Rental',
    shortDescription: 'Standard, clean, and reliable portable toilets for any occasion or job site.',
    longDescription: 'Our standard portable toilet rentals are the perfect solution for construction sites, festivals, and outdoor events. Each unit is delivered clean, sanitized, and fully stocked. We ensure timely delivery and regular servicing to maintain hygiene and user comfort throughout the rental period.',
    features: ['Non-flushing toilet', 'Urinal', 'Toilet paper dispenser', 'Hand sanitizer', 'Ventilation'],
    useCases: ['Construction Sites', 'Public Parks', 'Outdoor Festivals', 'Sporting Events', 'Emergency Situations'],
    image: 'https://picsum.photos/seed/portabletoilet/800/600',
    faqs: [
      { question: 'How often are portable toilets serviced?', answer: 'We typically service units once per week, but service frequency can be adjusted based on usage and your specific needs.' },
      { question: 'How many units do I need for my event?', answer: 'A general rule of thumb is one toilet per 100 people for a 4-hour event. Our team can help you calculate the exact number you need.' }
    ]
  },
  {
    slug: 'porta-john-rental',
    name: 'Porta John Rental',
    shortDescription: 'Affordable and convenient porta johns for events and construction projects.',
    longDescription: 'A classic choice for any site, our porta john rentals provide essential sanitation facilities where they are needed most. These durable units are designed to withstand heavy use and are maintained to the highest standards of cleanliness by our professional team.',
    features: ['Durable construction', 'Lockable door', 'Spacious interior', 'Anti-slip flooring'],
    useCases: ['Building Projects', 'Roadwork Crews', 'Community Gatherings', 'Farms and Agricultural Sites'],
    image: 'https://picsum.photos/seed/portajohn/800/600',
    faqs: [
      { question: 'What is the difference between a porta potty and a porta john?', answer: 'The terms are often used interchangeably. Both refer to a standalone portable toilet unit. We offer various models under this category.' },
    ]
  },
  {
    slug: 'restroom-trailer-rental',
    name: 'Restroom Trailer Rental',
    shortDescription: 'Luxury restroom trailers with flushing toilets, sinks, and climate control.',
    longDescription: 'Elevate the experience at your upscale event with our luxury restroom trailers. These trailers offer a home-like bathroom experience with features like flushing toilets, running water sinks, interior lighting, mirrors, and climate control (heating and A/C). They are perfect for weddings, corporate events, and VIP areas.',
    features: ['Flushing toilets', 'Running water sinks', 'Vanity with mirrors', 'Interior and exterior lighting', 'Air conditioning and heating', 'Multiple stalls'],
    useCases: ['Weddings', 'Corporate Events', 'Film Sets', 'VIP Areas at Festivals', 'Private Parties'],
    image: 'https://picsum.photos/seed/restroomtrailer/800/600',
    faqs: [
      { question: 'Do restroom trailers require power and water hookups?', answer: 'Yes, our luxury trailers require access to a standard electrical outlet and a water source via a garden hose. If hookups are unavailable, we can provide solutions with onboard water tanks and generators.' }
    ]
  },
    {
    slug: 'construction-site-portable-toilets',
    name: 'Construction Site Portable Toilets',
    shortDescription: 'Durable and OSHA-compliant portable toilets specifically for construction sites.',
    longDescription: 'Keep your job site productive and compliant with our construction-grade portable toilets. These units are built to be tough, easy to service, and meet all OSHA requirements for sanitation. We offer flexible long-term rental plans and reliable servicing schedules to fit your project timeline.',
    features: ['Heavy-duty construction', 'Optional crane-lift hooks', 'High-capacity tanks', 'OSHA-compliant', 'Hand sanitizer pumps'],
    useCases: ['High-rise construction', 'Residential building sites', 'Infrastructure projects', 'Demolition sites'],
    image: 'https://picsum.photos/seed/constructiontoilets/800/600',
    faqs: [
        { question: 'Are your construction toilets OSHA compliant?', answer: 'Absolutely. All our construction units meet or exceed OSHA standards for sanitation facilities on job sites.' },
    ]
  },
  {
    slug: 'event-porta-potty-rental',
    name: 'Event Porta Potty Rental',
    shortDescription: 'Clean and well-maintained porta potties for events of all sizes.',
    longDescription: 'From small community fairs to large music festivals, we provide clean and reliable porta potties for your attendees. Our event units are newer, well-maintained, and delivered in pristine condition. We work with event planners to ensure proper placement and servicing for a smooth experience.',
    features: ['Newer and cleaner units', 'Fully stocked with supplies', 'Hand sanitizer included', 'Strategic placement consulting'],
    useCases: ['Music festivals', 'Street fairs', 'Weddings', 'Sporting tournaments', 'Charity runs'],
    image: 'https://picsum.photos/seed/eventpotty/800/600',
    faqs: [
        { question: 'Can you deliver toilets to a large, spread-out event?', answer: 'Yes, we have extensive experience with large-scale events and can strategically place units across your venue for optimal guest convenience.' },
    ]
  },
   {
    slug: 'luxury-portable-restrooms',
    name: 'Luxury Portable Restrooms',
    shortDescription: 'High-end portable restrooms offering superior comfort and style for special events.',
    longDescription: 'Our luxury portable restrooms bridge the gap between standard units and full restroom trailers. They feature flushing toilets, a fresh-water sink operated by a foot pump, a mirror, and interior lighting, providing a more comfortable and upscale experience for your guests.',
    features: ['Flushing toilet system', 'Internal handwashing station', 'Solar-powered lighting', 'Vanity shelf and mirror', 'Sleek, modern design'],
    useCases: ['Outdoor weddings', 'Corporate retreats', 'Vineyard events', 'High-end private parties'],
    image: 'https://picsum.photos/seed/luxuryrestrooms/800/600',
    faqs: []
  },
  {
    slug: 'temporary-restroom-rental',
    name: 'Temporary Restroom Rental',
    shortDescription: 'Flexible temporary restroom solutions for any short-term or long-term need.',
    longDescription: 'Whether you are undergoing a bathroom renovation, hosting a multi-day event, or need facilities for a temporary workforce, our temporary restroom rentals offer a flexible and cost-effective solution. We provide a range of options to suit any duration and requirement.',
    features: ['Flexible rental periods', 'Wide range of unit types', 'Prompt delivery and pickup', 'Scalable solutions'],
    useCases: ['Home renovations', 'Seasonal businesses', 'Disaster relief efforts', 'Temporary work sites'],
    image: 'https://picsum.photos/seed/temporaryrestroom/800/600',
    faqs: []
  },
  {
    slug: 'portable-sanitation-services',
    name: 'Portable Sanitation Services',
    shortDescription: 'Comprehensive portable sanitation services including toilets, sinks, and waste management.',
    longDescription: 'We are your one-stop shop for all portable sanitation needs. Beyond just toilets, we offer portable handwashing stations, hand sanitizer stations, and holding tanks for gray and black water. Our team ensures your site meets all health and hygiene standards.',
    features: ['Portable toilets', 'Handwashing stations', 'Hand sanitizer stations', 'Holding tank rentals', 'Waste pumping services'],
    useCases: ['Large events requiring hygiene stations', 'Food service areas', 'Sites without sewer access'],
    image: 'https://picsum.photos/seed/sanitationservices/800/600',
    faqs: []
  },
  {
    slug: 'outdoor-event-toilet-rental',
    name: 'Outdoor Event Toilet Rental',
    shortDescription: 'Specialized toilet rentals for any outdoor event, from concerts to family reunions.',
    longDescription: 'Planning an outdoor event? Don\'t forget the restrooms! We provide tailored solutions for outdoor settings, ensuring your guests have access to clean, comfortable, and conveniently located facilities, no matter the terrain or venue type.',
    features: ['Weather-resistant units', 'Expert placement advice', 'Sufficient supplies for event duration', 'Options for all guest counts'],
    useCases: ['Concerts in the park', 'Beach parties', 'Camping trips', 'Family reunions'],
    image: 'https://picsum.photos/seed/outdoorevent/800/600',
    faqs: []
  },
  {
    slug: 'long-term-porta-potty-rental',
    name: 'Long-Term Porta Potty Rental',
    shortDescription: 'Cost-effective long-term and monthly porta potty rentals with regular servicing.',
    longDescription: 'For ongoing projects or permanent needs, our long-term rental plans are the most economical choice. We provide durable units and a fixed, reliable weekly or bi-weekly service schedule to ensure your facilities are always clean and operational. Ideal for construction, agriculture, and industrial sites.',
    features: ['Discounted monthly rates', 'Scheduled cleaning and restocking', 'Dedicated account manager', 'Unit replacement as needed'],
    useCases: ['Construction sites', 'Farms and ranches', 'Industrial facilities', 'Parks and recreation areas'],
    image: 'https://picsum.photos/seed/longtermrental/800/600',
    faqs: []
  },
  {
    slug: 'short-term-porta-potty-rental',
    name: 'Short-Term Porta Potty Rental',
    shortDescription: 'Convenient daily or weekend porta potty rentals for parties and small events.',
    longDescription: 'Hosting a weekend party, a one-day event, or need facilities for a few days? Our short-term rentals are the perfect fit. We offer hassle-free delivery before your event and prompt pickup afterward, with clean, fully-stocked units to serve your guests.',
    features: ['Daily, weekend, and weekly rates', 'Fast and reliable delivery', 'Pristine, event-ready units', 'Easy booking process'],
    useCases: ['Backyard parties', 'Graduation celebrations', 'Community block parties', 'Weekend construction projects'],
    image: 'https://picsum.photos/seed/shorttermrental/800/600',
    faqs: []
  },
  {
    slug: 'ada-accessible-porta-potty',
    name: 'ADA Accessible Porta Potty',
    shortDescription: 'Spacious, wheelchair-accessible porta potties that meet ADA guidelines.',
    longDescription: 'Ensure your event or site is inclusive for everyone with our ADA-compliant portable toilets. These units feature a spacious, flat-floor design for easy wheelchair access, interior grab bars for safety, and a lower toilet seat. They are essential for public events and to meet legal requirements.',
    features: ['Extra-large interior', 'Wheelchair-accessible entryway', 'Interior handrails', 'Occupancy indicator', 'Meets all ADA standards'],
    useCases: ['Public events', 'Construction sites', 'Parks', 'Any location requiring accessibility'],
    image: 'https://picsum.photos/seed/adatoilet/800/600',
    faqs: []
  },
  {
    slug: 'deluxe-porta-potty',
    name: 'Deluxe Porta Potty',
    shortDescription: 'Upgraded porta potties with a sink, soap, and other amenities.',
    longDescription: 'The Deluxe Porta Potty is a step up from the standard model, offering enhanced convenience with an in-unit freshwater sink, soap dispenser, and paper towels. It\'s a self-contained unit perfect for events where guests will appreciate the ability to wash their hands.',
    features: ['Non-flushing toilet and urinal', 'Internal freshwater sink with foot pump', 'Soap and paper towel dispensers', 'Small mirror and shelf'],
    useCases: ['Company picnics', 'Slightly more formal outdoor events', 'Longer events where hand washing is desired'],
    image: 'https://picsum.photos/seed/deluxepotty/800/600',
    faqs: []
  },
   {
    slug: 'standard-porta-potty',
    name: 'Standard Porta Potty',
    shortDescription: 'The essential, reliable choice for basic sanitation needs at any site or event.',
    longDescription: 'Our Standard Porta Potty is the workhorse of our fleet. It provides fundamental sanitation facilities efficiently and affordably. Each unit is constructed from durable materials, features a secure latch, proper ventilation, and comes fully stocked with toilet paper and hand sanitizer.',
    features: ['Durable one-piece construction', 'Translucent roof for natural light', 'Well-ventilated design', 'Anti-slip flooring'],
    useCases: ['Construction sites', 'Casual outdoor gatherings', 'Sporting events', 'Emergency response'],
    image: 'https://picsum.photos/seed/standardpotty/800/600',
    faqs: []
  },
  {
    slug: 'complete-portable-sanitation-services',
    name: 'Complete Portable Sanitation Services',
    shortDescription: 'A full suite of sanitation solutions including toilets, hand wash stations, and more.',
    longDescription: 'We offer more than just toilets. Our complete portable sanitation services cover every aspect of site hygiene. This includes standalone handwashing stations, fresh water holding tanks, and gray water tanks for trailers. We can create a custom sanitation plan for any large-scale event or complex job site to ensure compliance and comfort.',
    features: ['Full site assessment', 'Custom sanitation plan', 'Portable toilets of all types', 'Handwashing and sanitizer stations', 'Holding tank rentals and service'],
    useCases: ['Large music festivals', 'Multi-day construction projects', 'Disaster relief camps', 'Remote film productions'],
    image: 'https://picsum.photos/seed/completesanitation/800/600',
    faqs: []
  }
];
