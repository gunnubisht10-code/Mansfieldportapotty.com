import type { Service } from '../types';
import {
  IMG_CONSTRUCTION_BLUE,
  IMG_PUMP_TRUCK,
  IMG_EVENT_ROW,
  IMG_PARK_GREEN,
  IMG_SINGLE_GREY,
  IMG_INTERIOR,
  IMG_ROW_GREEN_GRAVEL,
  IMG_ROW_BLUE_SINK,
  IMG_ADA_ACCESSIBLE,
  IMG_THREE_BLUE_CONSTRUCTION
} from './images';


export const allServices: Service[] = [
  {
    slug: 'portable-toilet-rental',
    name: 'Portable Toilet Rental',
    shortDescription: 'Standard, clean, and reliable portable toilets for any occasion or job site.',
    longDescription: 'Our standard portable toilet rentals are the industry workhorse and the perfect solution for construction sites, festivals, and outdoor events. Each unit is delivered in pristine condition—thoroughly cleaned, sanitized, and fully stocked with high-quality toilet paper and hand sanitizer. We pride ourselves on timely delivery and implement a rigorous servicing schedule to maintain hygiene and user comfort throughout your rental period, no matter how long.',
    features: ['Non-flushing toilet & urinal', 'High-capacity holding tank', 'Anti-slip flooring', 'Lockable door for privacy', 'Excellent ventilation system', 'Translucent roof for natural light'],
    useCases: ['Construction Sites', 'Public Parks', 'Outdoor Festivals & Concerts', 'Sporting Events', 'Emergency & Disaster Relief Situations'],
    image: IMG_CONSTRUCTION_BLUE,
    faqs: [
      { question: 'How often are your portable toilets serviced?', answer: 'Our standard service is once per week. However, we can customize a service schedule (more or less frequent) based on the usage patterns and specific needs of your site or event.' },
      { question: 'How many units do I need for my event?', answer: 'A general guideline is one toilet per 100 people for a 4-hour event where no alcohol is served. For longer events or those with alcohol, you may need more. Our expert team can provide a precise recommendation based on your details.' }
    ]
  },
  {
    slug: 'porta-john-rental',
    name: 'Porta John Rental',
    shortDescription: 'Affordable and convenient porta johns for events and construction projects.',
    longDescription: 'A classic and economical choice, our porta john rentals provide essential sanitation facilities wherever you need them. These durable units are built from high-grade materials to withstand the heavy use typical of construction sites and large public gatherings. Our professional team maintains them to the highest standards of cleanliness, ensuring a positive experience for all users.',
    features: ['Durable, heavy-duty construction', 'Secure, lockable door', 'Spacious interior for comfort', 'Anti-slip flooring for safety', 'Well-ventilated to reduce odors'],
    useCases: ['New Home Building Projects', 'Roadwork & Infrastructure Crews', 'Community Gatherings & Fairs', 'Farms and Agricultural Operations'],
    image: IMG_PARK_GREEN,
    faqs: [
      { question: 'What is the difference between a porta potty and a porta john?', answer: 'The terms are used interchangeably in the industry and by customers. Both refer to a standard, single-unit portable toilet. We offer various models that fall under this category to suit different needs.' },
      { question: 'Can you place a porta john anywhere on my property?', answer: 'We require a flat, level surface that is accessible for our service trucks. Our drivers need to be able to get within 25 feet of the unit to properly service the tank.'}
    ]
  },
  {
    slug: 'restroom-trailer-rental',
    name: 'Restroom Trailer Rental',
    shortDescription: 'Luxury restroom trailers with flushing toilets, sinks, and climate control.',
    longDescription: 'Elevate the experience at your upscale event with our luxurious restroom trailers. These are not just portable toilets; they offer a complete, home-like bathroom experience. Featuring flushing toilets, running water sinks with vanities, bright interior lighting, full-size mirrors, and climate control (heating and A/C), they are the gold standard for high-end sanitation. Perfect for weddings, corporate events, and VIP areas where comfort and style are paramount.',
    features: ['Multiple private stalls', 'Real flushing toilets', 'Sinks with running hot & cold water', 'Vanity countertops with mirrors', 'Bright interior and exterior lighting', 'Air conditioning and heating', 'Premium soap and paper products'],
    useCases: ['Weddings & Receptions', 'Corporate Functions & Galas', 'Film & TV Production Sets', 'VIP Areas at Festivals', 'Private Estate Parties', 'Remodeling Projects'],
    image: IMG_EVENT_ROW, // Represents a high-end event
    faqs: [
      { question: 'Do restroom trailers require power and water hookups?', answer: 'For full functionality, our trailers require access to standard 110v electrical outlets and a water source via a standard garden hose. If hookups are unavailable, we can provide solutions with our own onboard water tanks and quiet generators for an additional fee.' },
      { question: 'How many people can a restroom trailer accommodate?', answer: 'This depends on the size of the trailer. We have various models, from 2-stall units ideal for 150 guests to larger 10-stall units for major events. We will help you select the perfect size.'}
    ]
  },
    {
    slug: 'construction-site-portable-toilets',
    name: 'Construction Site Portable Toilets',
    shortDescription: 'Durable and OSHA-compliant portable toilets specifically for construction sites.',
    longDescription: 'Keep your job site productive, safe, and compliant with our construction-grade portable toilets. These rugged units are built to endure the demands of a busy construction environment. They meet all OSHA requirements for sanitation, ensuring your workers have access to clean and safe facilities. We offer flexible long-term rental plans and create reliable servicing schedules tailored to your project timeline, including options for high-rise crane-lift units.',
    features: ['Heavy-duty, robust construction', 'Optional crane-lift hooks and slings', 'High-capacity tanks for less frequent service', 'Fully OSHA-compliant', 'Included hand sanitizer pumps', 'Weekly servicing included'],
    useCases: ['High-rise construction', 'Residential building sites', 'Government & infrastructure projects', 'Demolition sites', 'Road and bridge work'],
    image: IMG_THREE_BLUE_CONSTRUCTION,
    faqs: [
        { question: 'Are your construction toilets OSHA compliant?', answer: 'Absolutely. All our construction units are designed and serviced to meet or exceed all OSHA standards for sanitation facilities on job sites, helping you avoid fines and keep your team safe.' },
        { question: 'Can you service toilets on a secured construction site?', answer: 'Yes. We will coordinate with your site manager to arrange access for our service technicians, ensuring our work is done efficiently without disrupting your operations.'}
    ]
  },
  {
    slug: 'event-porta-potty-rental',
    name: 'Event Porta Potty Rental',
    shortDescription: 'Clean and well-maintained porta potties for events of all sizes.',
    longDescription: 'For any public gathering, from small community fairs to massive music festivals, the quality of the restroom facilities reflects on your event. We provide exceptionally clean and reliable porta potties specifically for your attendees. Our event fleet consists of newer, well-maintained units that are delivered in pristine condition. We work closely with event planners to ensure proper placement for traffic flow and accessibility, along with adequate servicing for a seamless guest experience.',
    features: ['Newer, aesthetically pleasing units', 'Delivered fully stocked with supplies', 'Hand sanitizer included in every unit', 'Strategic placement consulting', 'On-site attendant services available'],
    useCases: ['Music festivals', 'Street fairs and block parties', 'Outdoor weddings', 'Sporting tournaments', 'Charity walks and runs'],
    image: IMG_EVENT_ROW,
    faqs: [
        { question: 'What makes your event units different from construction units?', answer: 'Our event units are a separate, newer part of our inventory reserved exclusively for special events. They have never been on a construction site and are maintained to a higher aesthetic standard to impress your guests.' },
        { question: 'Can you handle a very large, multi-day festival?', answer: 'Yes, we have extensive experience with large-scale events. We can provide hundreds of units, multiple service visits per day, and on-site staff to ensure cleanliness throughout the entire festival.'}
    ]
  },
   {
    slug: 'luxury-portable-restrooms',
    name: 'Luxury Portable Restrooms',
    shortDescription: 'High-end portable restrooms offering superior comfort and style for special events.',
    longDescription: 'Our luxury portable restrooms are the perfect middle ground between standard units and full restroom trailers. They offer a significant upgrade in comfort and hygiene. Each unit features a hands-free flushing toilet operated by a foot pump, a fresh-water sink also foot-pump operated, a soap dispenser, a mirror, and interior solar-powered lighting. This self-contained, upscale unit provides a much more comfortable and pleasant experience for your guests.',
    features: ['Hands-free flushing toilet system', 'Internal handwashing station with fresh water', 'Solar-powered interior lighting', 'Vanity shelf and mirror', 'Sleek, modern gray design', 'Coat hook'],
    useCases: ['Outdoor weddings', 'Corporate retreats & picnics', 'Vineyard & brewery events', 'High-end private parties', 'Backyard graduation parties'],
    image: IMG_SINGLE_GREY,
    faqs: [
        { question: 'Is the water in the sink fresh water?', answer: 'Yes, the sink is connected to a separate, self-contained fresh water tank. It is not connected to the toilet\'s waste tank, ensuring a sanitary handwashing experience.'},
        { question: 'Does this unit require any external connections?', answer: 'No, it is completely self-contained. The flushing and sink systems operate via foot pumps, and the light is solar-powered, making it versatile for any location.'}
    ]
  },
  {
    slug: 'temporary-restroom-rental',
    name: 'Temporary Restroom Rental',
    shortDescription: 'Flexible temporary restroom solutions for any short-term or long-term need.',
    longDescription: 'Life and business are full of temporary situations. Whether you are undergoing a major bathroom renovation at home, operating a seasonal business like a pumpkin patch, or need facilities for a temporary workforce, our temporary restroom rentals offer a flexible, simple, and cost-effective solution. We provide a full range of options to suit any duration and requirement, from a single unit for a week to multiple units for several months.',
    features: ['Flexible rental periods (daily, weekly, monthly)', 'Wide range of unit types to choose from', 'Prompt delivery and pickup scheduling', 'Scalable solutions to add or remove units as needed'],
    useCases: ['Home or office renovations', 'Seasonal businesses (e.g., Christmas tree lots)', 'Disaster relief & emergency response', 'Temporary work sites or laydown yards'],
    image: IMG_CONSTRUCTION_BLUE,
    faqs: [
      { question: 'How quickly can you deliver a temporary restroom?', answer: 'In many cases, we can offer same-day or next-day delivery, depending on your location and our schedule. We recommend calling as soon as you know you have a need.'}
    ]
  },
  {
    slug: 'portable-sanitation-services',
    name: 'Portable Sanitation Services',
    shortDescription: 'Comprehensive portable sanitation services including toilets, sinks, and waste management.',
    longDescription: 'We are your complete, one-stop shop for all portable sanitation needs. Our services extend far beyond just portable toilets. We offer multi-user portable handwashing stations, hand sanitizer stations, and high-capacity holding tanks for gray and black water from trailers or temporary kitchens. Our expert team can design a comprehensive plan to ensure your site meets all health and hygiene standards, no matter the complexity.',
    features: ['All types of portable toilets', 'Multi-user handwashing stations', 'Hand sanitizer dispenser stands', 'Fresh water & waste holding tank rentals', 'RV and trailer pumping services'],
    useCases: ['Large events requiring separate hygiene stations', 'Food service areas at festivals', 'Job sites without sewer access', 'Emergency base camps'],
    image: IMG_PUMP_TRUCK,
    faqs: [
      { question: 'Are handwashing stations required for events?', answer: 'In many jurisdictions, they are required, especially if food and beverages are being served. They are always a highly recommended best practice for guest hygiene and safety.'}
    ]
  },
  {
    slug: 'outdoor-event-toilet-rental',
    name: 'Outdoor Event Toilet Rental',
    shortDescription: 'Specialized toilet rentals for any outdoor event, from concerts to family reunions.',
    longDescription: 'Planning an event in the great outdoors? Don\'t let restroom logistics become a headache. We provide tailored sanitation solutions specifically for outdoor settings. We ensure your guests have access to clean, comfortable, and conveniently located facilities, no matter the terrain or venue type. Our team considers factors like ground stability, service truck access, and guest flow to recommend the best placement and unit types for your outdoor event.',
    features: ['Durable, weather-resistant units', 'Expert placement advice for challenging terrain', 'Sufficient supplies for your event\'s duration', 'A wide variety of options for all guest counts and budgets'],
    useCases: ['Concerts in the park', 'Beach parties & lakeside events', 'Camping trips & scout jamborees', 'Large family reunions & picnics'],
    image: IMG_ROW_BLUE_SINK,
    faqs: []
  },
  {
    slug: 'long-term-porta-potty-rental',
    name: 'Long-Term Porta Potty Rental',
    shortDescription: 'Cost-effective long-term and monthly porta potty rentals with regular servicing.',
    longDescription: 'For ongoing projects or permanent needs where traditional plumbing isn\'t feasible, our long-term rental plans are the most economical and hassle-free choice. We provide durable units and establish a fixed, reliable weekly or bi-weekly service schedule. This ensures your facilities are always clean, stocked, and fully operational. Ideal for construction, agriculture, and industrial sites, our long-term rentals come with discounted rates and a dedicated account manager.',
    features: ['Significant discounts on monthly rates', 'Locked-in, scheduled cleaning and restocking', 'Dedicated account manager for support', 'Free unit replacement for maintenance issues'],
    useCases: ['Multi-month construction sites', 'Farms, ranches, and equestrian facilities', 'Industrial facilities and warehouses', 'City parks and recreation areas'],
    image: IMG_ROW_GREEN_GRAVEL,
    faqs: []
  },
  {
    slug: 'short-term-porta-potty-rental',
    name: 'Short-Term Porta Potty Rental',
    shortDescription: 'Convenient daily or weekend porta potty rentals for parties and small events.',
    longDescription: 'Hosting a weekend party, a one-day charity event, or need facilities for a few days during a home project? Our short-term rentals are the perfect, flexible fit. We offer a simple, hassle-free process with delivery before your event and prompt pickup afterward. We provide clean, fully-stocked, event-quality units to comfortably serve your guests or crew for the duration of your short-term need.',
    features: ['Flexible rates (daily, weekend, weekly)', 'Fast and reliable delivery and pickup', 'Pristine, event-ready units guaranteed', 'Easy and quick booking process over the phone'],
    useCases: ['Backyard birthday parties', 'Graduation celebrations', 'Community block parties', 'Weekend home improvement projects'],
    image: IMG_PARK_GREEN,
    faqs: []
  },
  {
    slug: 'ada-accessible-porta-potty',
    name: 'ADA Accessible Porta Potty',
    shortDescription: 'Spacious, wheelchair-accessible porta potties that meet ADA guidelines.',
    longDescription: 'Ensure your event, business, or job site is inclusive and accessible to everyone with our ADA-compliant portable toilets. These units are specifically designed to meet the guidelines of the Americans with Disabilities Act. They feature a spacious, flat-floor design for easy wheelchair access and 360-degree turning, along with interior grab bars for safety and support. They are essential for public events and often required by law.',
    features: ['Extra-large interior (over 15 sq. ft.)', 'Ground-level, flat-floor for easy wheelchair access', 'Reinforced interior handrails for safety', 'Spacious enough for a parent with a child', 'Meets all federal ADA standards'],
    useCases: ['All public events', 'Commercial & municipal construction sites', 'Public parks and facilities', 'Any location requiring wheelchair accessibility'],
    image: IMG_ADA_ACCESSIBLE,
    faqs: []
  },
  {
    slug: 'deluxe-porta-potty',
    name: 'Deluxe Porta Potty',
    shortDescription: 'Upgraded porta potties with a sink, soap, and other amenities.',
    longDescription: 'Our Deluxe Porta Potty is a significant upgrade from the standard model, offering enhanced convenience and hygiene with a self-contained, in-unit freshwater sink. Operated by a foot pump, the sink provides a convenient way for users to wash their hands. The unit also includes a soap dispenser and paper towels. It\'s a fully self-contained restroom solution perfect for events where guests will appreciate the added amenity of a private handwashing station.',
    features: ['Standard non-flushing toilet and urinal', 'Internal freshwater sink with foot pump operation', 'Soap and paper towel dispensers', 'Small mirror and convenience shelf', 'Slightly larger interior than standard models'],
    useCases: ['Company picnics', 'Slightly more formal outdoor events', 'Food festivals', 'Longer events where hand washing is critical'],
    image: IMG_INTERIOR,
    faqs: []
  },
   {
    slug: 'standard-porta-potty',
    name: 'Standard Porta Potty',
    shortDescription: 'The essential, reliable choice for basic sanitation needs at any site or event.',
    longDescription: 'Our Standard Porta Potty is the versatile workhorse of our fleet, providing fundamental sanitation facilities efficiently and affordably. Each unit is constructed from durable polyethylene, features a secure interior latch for privacy, and is designed with floor-to-ceiling ventilation to minimize odors. The translucent roof allows for ample natural light. Every rental comes fully stocked with toilet paper and hand sanitizer, ready for immediate use.',
    features: ['Durable one-piece polyethylene construction', 'Translucent roof for bright interior', 'Well-ventilated design to reduce odors', 'Anti-slip flooring for safety', 'Occupancy signal latch'],
    useCases: ['Residential & commercial construction sites', 'Casual outdoor gatherings', 'Marathons and sporting events', 'Emergency response situations'],
    image: IMG_SINGLE_GREY,
    faqs: []
  },
  {
    slug: 'complete-portable-sanitation-services',
    name: 'Complete Portable Sanitation Services',
    shortDescription: 'A full suite of sanitation solutions including toilets, hand wash stations, and more.',
    longDescription: 'We offer much more than just portable toilets. Our complete portable sanitation services cover every aspect of site hygiene and logistics. This includes standalone multi-basin handwashing stations, fresh water holding tanks for trailers, and gray/black water tanks for waste containment. We will work with you to create a custom, comprehensive sanitation plan for any large-scale event or complex job site, ensuring full compliance, comfort, and peace of mind.',
    features: ['Full site sanitation assessment', 'Customized sanitation plan creation', 'All types of portable toilets', 'Multi-user handwashing and sanitizer stations', 'Holding tank rentals and regular pumping service'],
    useCases: ['Large multi-day music festivals', 'Complex, long-term construction projects', 'Disaster relief base camps', 'Remote film and television productions'],
    image: IMG_ROW_BLUE_SINK,
    faqs: []
  }
];
