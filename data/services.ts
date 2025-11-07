import type { Service } from '../types';
import {
  IMG_CONSTRUCTION_SITE,
  IMG_PUMP_TRUCK,
  IMG_EVENT_ROW,
  IMG_PARK_GREEN,
  IMG_STANDARD_SINGLE,
  IMG_DELUXE_INTERIOR,
  IMG_ROW_GRAVEL,
  IMG_HANDWASH_STATION,
  IMG_ADA_ACCESSIBLE,
  IMG_THREE_BLUE_CONSTRUCTION,
  IMG_LUXURY_TRAILER,
  IMG_CONCERT,
  IMG_PARTY,
  IMG_GRAPHIC_DELIVERY,
} from './images';


export const allServices: Service[] = [
  {
    slug: 'standard-porta-potty-rental',
    name: 'Standard Porta Potty Rental',
    shortDescription: 'The essential, cost-effective choice for construction sites and casual events.',
    longDescription: 'Our standard portable toilet is the workhorse of our fleet. It provides a clean, private, and economical sanitation solution for any location without permanent facilities. Each unit is constructed from durable polyethylene to withstand heavy use and is delivered fully sanitized and stocked with toilet paper and hand sanitizer. It features a non-flushing toilet, a urinal, and a translucent roof for natural lighting, making it the perfect choice for construction sites, public parks, and any event where basic, reliable facilities are required.',
    features: ['Non-flushing toilet & urinal', 'High-capacity holding tank', 'Anti-slip flooring', 'Lockable door for privacy', 'Excellent ventilation system', 'Translucent roof for natural light'],
    useCases: ['Construction Sites', 'Public Parks', 'Outdoor Festivals', 'Sporting Events', 'Community Fairs'],
    image: IMG_STANDARD_SINGLE,
    faqs: [
      { question: 'How often are standard porta potties serviced?', answer: 'We service units once per week by default, which includes pumping the tank, cleaning the interior, and restocking all supplies. We can arrange more frequent servicing based on your needs.' },
      { question: 'What is included in a standard rental?', answer: 'Each rental includes one standard portable toilet unit, delivery, placement, and pickup. Servicing and supplies are included for the duration of the rental.' }
    ]
  },
  {
    slug: 'deluxe-flushing-porta-potty',
    name: 'Deluxe Flushing Porta Potty',
    shortDescription: 'An upgraded experience with a flushing toilet and an enclosed sink.',
    longDescription: 'For events where you want to offer guests a step up in comfort and hygiene, our Deluxe Flushing Porta Potty is the ideal solution. This unit features a hands-free flushing toilet operated by a foot pump, which helps to keep the interior cleaner and reduces odors by sealing waste away in the tank. It also includes a self-contained sink with running water, soap dispenser, and paper towels, providing a more complete and sanitary restroom experience. It’s perfect for parties, corporate events, and smaller weddings.',
    features: ['Hands-free foot pump flushing toilet', 'Interior sink with fresh running water', 'Soap and paper towel dispenser', 'Interior mirror and convenience shelf', 'Spacious, well-lit interior', 'Sealed tank to reduce odors'],
    useCases: ['Outdoor Weddings', 'Corporate Retreats', 'Backyard Parties', 'Home Remodeling Projects', 'Small-scale VIP Events'],
    image: IMG_DELUXE_INTERIOR,
    faqs: [
      { question: 'Does this unit require any water or power connections?', answer: 'No, our deluxe flushing unit is completely self-contained. The flushing mechanism and sink draw from an onboard fresh water tank.' },
      { question: 'How is this different from a standard unit?', answer: 'The key differences are the flushing toilet, which provides a cleaner experience, and the built-in sink for complete handwashing inside the unit.' }
    ]
  },
  {
    slug: 'construction-site-porta-potty',
    name: 'Construction Site Porta Potty',
    shortDescription: 'Durable, OSHA-compliant toilets designed for the demands of a job site.',
    longDescription: 'Our construction-grade portable toilets are built tough to withstand the rigors of any job site. These durable units are fully compliant with all OSHA sanitation standards, ensuring you can keep your workers safe and your site productive without risk of fines. Featuring high-capacity tanks to handle heavy use and optional crane-lift hooks for high-rise projects, these are the essential sanitation solution for any construction project, from residential builds to large-scale commercial developments.',
    features: ['Heavy-duty, robust construction', 'Fully OSHA-compliant design', 'High-capacity tanks for less frequent service', 'Optional crane-lift hooks and slings', 'Included hand sanitizer pumps', 'Reliable weekly servicing'],
    useCases: ['High-rise construction', 'Residential building sites', 'Government & infrastructure projects', 'Demolition sites', 'Road and bridge work'],
    image: IMG_CONSTRUCTION_SITE,
    faqs: [
      { question: 'Are your construction toilets always OSHA compliant?', answer: 'Absolutely. We guarantee that all our construction units meet or exceed current OSHA standards for sanitation facilities on job sites.' },
      { question: 'Can you service toilets on a secured construction site?', answer: 'Yes. We will coordinate directly with your site manager to arrange access for our service technicians, ensuring our work is done efficiently without disrupting your operations.' }
    ]
  },
  {
    slug: 'event-porta-potty-rental',
    name: 'Event Porta Potty Rental',
    shortDescription: 'A fleet of newer, pristine units reserved exclusively for special events.',
    longDescription: 'The quality of your restroom facilities directly reflects on your event. That\'s why we maintain a separate, dedicated fleet of event-only porta potties. These units are newer, have never been on a construction site, and are maintained to the highest standard of cleanliness to ensure a positive experience for your guests. From community festivals to large concerts, we provide reliable, aesthetically pleasing units complete with hand sanitizer, and we work with you to ensure optimal placement for traffic flow and accessibility.',
    features: ['Newer, aesthetically pleasing units', 'Reserved for events only (never on job sites)', 'Delivered fully stocked with supplies', 'Hand sanitizer included in every unit', 'Strategic placement consulting', 'On-site attendant services available'],
    useCases: ['Music festivals', 'Street fairs and block parties', 'Outdoor weddings', 'Sporting tournaments', 'Charity walks and runs'],
    image: IMG_EVENT_ROW,
    faqs: [
      { question: 'What makes your event units different?', answer: 'Our event units are a separate, newer part of our inventory reserved exclusively for special events. They are maintained to a higher aesthetic and cleanliness standard to impress your guests.' },
      { question: 'Can you handle a very large, multi-day festival?', answer: 'Yes, we have extensive experience with large-scale events. We can provide hundreds of units, multiple service visits per day, and on-site staff to ensure cleanliness throughout the entire festival.' }
    ]
  },
  {
    slug: 'ada-compliant-restrooms',
    name: 'ADA-Compliant Restrooms',
    shortDescription: 'Spacious, wheelchair-accessible toilets to ensure inclusivity for all.',
    longDescription: 'Ensure your event or site is accessible to everyone with our ADA-compliant portable restrooms. These units feature a spacious, flat-floor design for easy wheelchair entry and maneuverability, along with sturdy interior grab bars for safety and support. The generous dimensions can also comfortably accommodate parents with children. Our ADA units are a crucial component for any public event or construction site needing to meet federal accessibility requirements.',
    features: ['Extra-large, wheelchair-accessible interior', 'Flat-floor design for easy entry', 'Reinforced interior grab bars', 'Spacious enough for a parent and child', 'Occupancy indicator for privacy', 'Meets all federal ADA guidelines'],
    useCases: ['Public events and festivals', 'Construction sites', 'Schools and universities', 'Parks and recreational facilities', 'Government and municipal sites'],
    image: IMG_ADA_ACCESSIBLE,
    faqs: [
        { question: 'Are these units only for individuals in wheelchairs?', answer: 'While designed for wheelchair accessibility, their spacious interiors are also ideal for parents assisting small children or anyone who needs extra room.' },
        { question: 'Is one ADA unit enough for my event?', answer: 'ADA guidelines typically recommend that at least 5% of your portable toilets, or a minimum of one unit, be wheelchair accessible. We can help you determine the exact number needed.'}
    ]
  },
  {
    slug: 'hand-washing-station-rentals',
    name: 'Hand Washing Station Rentals',
    shortDescription: 'Standalone, multi-user sinks to promote hygiene at any location.',
    longDescription: 'Promote superior hygiene at your event or job site with our portable hand washing stations. These standalone units feature two or four separate sinks, each with its own soap and paper towel dispenser. Operation is hands-free via a foot pump, which provides a clean and sanitary way for users to wash their hands. Each station holds a large fresh water tank and a sealed grey water tank, making them completely self-contained. They are an essential addition to food service areas, festivals, and construction sites.',
    features: ['Dual- or quad-sink configurations', 'Hands-free foot pump operation', 'Includes soap and paper towel dispensers', 'Large self-contained fresh and grey water tanks', 'Durable and easy to service', 'Promotes excellent on-site hygiene'],
    useCases: ['Food festivals and beer gardens', 'Construction sites', 'Farms and agricultural settings', 'School events and carnivals', 'Disaster relief areas'],
    image: IMG_HANDWASH_STATION,
    faqs: [
        { question: 'How many people can one hand washing station serve?', answer: 'A standard two-station sink typically holds enough water and supplies for about 200-300 uses before needing service.' },
        { question: 'Do these stations provide hot water?', answer: 'Our standard units provide ambient-temperature water. Hot water hand washing stations are available as a specialty item upon request.'}
    ]
  },
  {
    slug: 'luxury-restroom-trailer-rental',
    name: 'Luxury Restroom Trailer Rental',
    shortDescription: 'The ultimate upscale restroom experience with all the comforts of home.',
    longDescription: 'Elevate your special event with our luxurious restroom trailers. These are not porta potties; they are mobile bathrooms that offer the same comfort and amenities as a permanent indoor facility. Our trailers feature multiple private stalls, real flushing toilets, vanities with sinks and running water, large mirrors, and full climate control with air conditioning and heat. Finished with high-end materials and stylish lighting, they provide an unparalleled level of comfort and sophistication for weddings, corporate functions, and VIP events.',
    features: ['Multiple private, spacious stalls', 'Real flushing porcelain toilets', 'Sinks with running hot & cold water', 'Vanity countertops with large mirrors', 'Bright interior and exterior lighting', 'Air conditioning and heating', 'Premium soap and paper products'],
    useCases: ['Weddings & Receptions', 'Corporate Functions & Galas', 'Film & TV Production Sets', 'VIP Areas at Festivals', 'Private Estate Parties', 'High-End Remodeling Projects'],
    image: IMG_LUXURY_TRAILER,
    faqs: [
      { question: 'What do restroom trailers need for operation?', answer: 'For full functionality, our trailers require access to standard 110v electrical outlets and a water source via a standard garden hose. If hookups are unavailable, we can provide solutions with our own onboard water tanks and quiet generators.' },
      { question: 'How many people can a restroom trailer accommodate?', answer: 'This depends on the trailer size. We have various models, from 2-stall units ideal for 150 guests to larger 10-stall units for major events. We will help you select the perfect size.'}
    ]
  },
  {
    slug: 'high-rise-portable-toilets',
    name: 'High-Rise Portable Toilets',
    shortDescription: 'Specially designed units with crane hooks for multi-story construction projects.',
    longDescription: 'Increase productivity and convenience on your multi-story construction project with our high-rise portable toilets. These units are engineered with a durable steel frame and a heavy-duty crane sling, allowing them to be safely lifted by a crane and placed on any floor of a building under construction. Their compact design allows them to fit inside freight elevators, providing maximum placement flexibility. By placing restrooms closer to your workforce, you minimize downtime and keep your project on schedule.',
    features: ['Heavy-duty steel lifting frame/sling', 'Engineered for safe crane lifting', 'Compact design fits in service elevators', 'Durable, single-wall construction', 'Reduces worker downtime on tall buildings', 'Maintained to OSHA standards'],
    useCases: ['Skyscraper construction', 'Multi-story building projects', 'Large-scale demolition projects', 'Bridge and overpass construction', 'Any elevated work site'],
    image: IMG_THREE_BLUE_CONSTRUCTION,
    faqs: [
        { question: 'Are these units safe to lift?', answer: 'Yes, they are specifically engineered and certified for crane lifting. Our team ensures all safety protocols are followed during delivery and placement.' },
        { question: 'How are high-rise toilets serviced?', answer: 'The units are typically brought to ground level by your crew on the scheduled service day. Our technicians then perform a complete pump-out, cleaning, and restocking before it is lifted back into place.'}
    ]
  },
  {
    slug: 'holding-tank-rentals',
    name: 'Holding Tank Rentals',
    shortDescription: 'Large-capacity tanks for bulk liquid waste storage at job sites.',
    longDescription: 'Our portable holding tanks are the perfect solution for job site trailers, RVs, and any application requiring temporary bulk waste storage. With capacities typically ranging from 250 to 300 gallons, these low-profile tanks can be placed directly under office trailers to collect waste from their internal restrooms. They are also ideal for temporary kitchens or any situation that generates grey water. We provide reliable, scheduled pumping services to ensure your tanks are always ready for use.',
    features: ['250-300 gallon capacity', 'Low-profile design fits under trailers', 'Multiple inlet ports for easy connection', 'Durable, leak-proof polyethylene construction', 'Ideal for black and grey water storage', 'Scheduled pumping services included'],
    useCases: ['Construction site office trailers', 'Temporary medical facilities', 'Remote work camps', 'Food service tents and trailers', 'Large-scale RV events'],
    image: IMG_PUMP_TRUCK,
    faqs: [
        { question: 'How do I know what size tank I need?', answer: 'The size depends on the number of users and the type of use. Our team can help you calculate your needs and recommend the appropriate tank size and service frequency.' },
        { question: 'Can you connect the tank to my trailer?', answer: 'While we place the tank and provide the necessary ports, the final plumbing connection from your trailer to our tank is typically handled by the customer.'}
    ]
  },
  {
    slug: 'long-term-porta-potty-rentals',
    name: 'Long-Term Porta Potty Rentals',
    shortDescription: 'Affordable monthly rentals with scheduled servicing for ongoing projects.',
    longDescription: 'For projects that last weeks, months, or even years, our long-term rental plans provide the best value and convenience. We offer discounted monthly rates for all our standard and specialized units, including construction toilets, ADA models, and holding tanks. Your long-term rental includes a dedicated weekly service schedule where our technicians pump, clean, and restock your units to maintain a high level of hygiene. This service is perfect for construction companies, municipalities, and agricultural businesses.',
    features: ['Discounted monthly rental rates', 'Guaranteed weekly service included', 'Flexible plans to match your project timeline', 'Priority service from our dedicated team', 'Easy billing and account management', 'Swap-outs for fresh units upon request'],
    useCases: ['Long-term construction projects', 'Municipal parks and athletic fields', 'Farms and agricultural operations', 'Industrial facilities and warehouses', 'Seasonal businesses'],
    image: IMG_ROW_GRAVEL,
    faqs: [
        { question: 'What are the benefits of a long-term rental?', answer: 'You get a significantly lower monthly rate compared to weekly rentals, plus a predictable, reliable service schedule that you can set and forget.' },
        { question: 'Can I change my service frequency during the rental?', answer: 'Absolutely. We can easily adjust your service schedule up or down as the needs of your project change.'}
    ]
  },
  {
    slug: 'emergency-disaster-relief-services',
    name: 'Emergency & Disaster Relief Services',
    shortDescription: 'Rapid deployment of portable sanitation for emergency situations.',
    longDescription: 'In the event of a natural disaster or emergency, sanitation is a critical priority. We are equipped for rapid response, providing large quantities of portable toilets, ADA units, and hand washing stations to support first responders, relief workers, and displaced residents. Our team can deploy and set up facilities quickly to establish crucial hygiene infrastructure in affected areas. We are a trusted partner for municipalities and disaster relief organizations when they need it most.',
    features: ['24/7 emergency contact line', 'Rapid deployment capabilities', 'Large inventory to handle major events', 'Experience working with FEMA and relief agencies', 'Self-contained units requiring no infrastructure', 'Can provide toilets, sinks, and holding tanks'],
    useCases: ['Natural disaster recovery (tornadoes, floods)', 'Emergency response staging areas', 'Municipal water main breaks', 'Support for firefighters and first responders', 'Temporary shelters'],
    image: IMG_GRAPHIC_DELIVERY,
    faqs: [
        { question: 'How quickly can you respond to an emergency?', answer: 'We can typically have units on the road within hours of a confirmed order. Our ability to respond quickly is a core part of our emergency services.' },
        { question: 'Do you require payment upfront for emergency services?', answer: 'We understand the chaotic nature of emergencies and can work with government agencies and established organizations on flexible payment terms and purchase orders.'}
    ]
  },
  {
    slug: 'wedding-porta-potty-rentals',
    name: 'Wedding Porta Potty Rentals',
    shortDescription: 'Pristine and stylish restroom solutions for your special day.',
    longDescription: 'Don\'t let restrooms be an afterthought for your beautiful outdoor wedding. We provide exceptionally clean and elegant sanitation solutions to ensure your guests are comfortable. Choose from our pristine, event-only deluxe flushing units, or elevate the experience with one of our high-end luxury restroom trailers. We guarantee on-time, discreet delivery and can provide on-site attendants to keep the facilities spotless throughout your reception. Let us handle the details so you can focus on your big day.',
    features: ['Pristine, event-only deluxe units', 'Elegant luxury restroom trailers', 'Discreet and professional setup', 'Can be decorated to match your theme', 'On-site attendant service available', 'Ensures guest comfort at any venue'],
    useCases: ['Outdoor wedding ceremonies', 'Barn and farm receptions', 'Backyard weddings', 'Vineyard events', 'Any venue lacking adequate facilities'],
    image: IMG_PARTY,
    faqs: [
        { question: 'Which type of unit is best for a wedding?', answer: 'For smaller, more rustic weddings, our deluxe flushing units are a great choice. For larger or more formal weddings, a luxury restroom trailer is highly recommended for guest comfort.' },
        { question: 'How far in advance should I book for my wedding?', answer: 'We recommend booking 3-6 months in advance, especially during peak wedding season, to ensure availability of our premium units and trailers.'}
    ]
  },
  {
    slug: 'solar-powered-restrooms',
    name: 'Solar-Powered Restrooms',
    shortDescription: 'Eco-friendly porta potties with solar-powered interior lighting.',
    longDescription: 'Our solar-powered restrooms offer a simple yet significant upgrade for any event that extends into the evening. Each unit is equipped with a high-efficiency solar panel on the roof that powers a bright interior LED light. The light automatically turns on when the door is closed, providing safety and convenience for guests after dark. This eco-friendly solution is perfect for multi-day festivals, evening concerts, and campsites where no external power is available.',
    features: ['Solar panel and battery system', 'Bright interior LED lighting', 'Motion-activated or door-activated light', 'Eco-friendly and self-sufficient', 'Enhances guest safety at night', 'Available on standard and deluxe units'],
    useCases: ['Overnight music festivals', 'Evening sporting events', 'Campgrounds and parks', 'Remote job sites', 'Late-night community events'],
    image: IMG_PARK_GREEN,
    faqs: [
        { question: 'How long does the light stay on?', answer: 'The integrated battery stores enough power to keep the light running for many hours, easily lasting through the entire night even after a cloudy day.' },
        { question: 'Is there an extra cost for solar units?', answer: 'Yes, there is a small premium for solar-equipped units compared to our standard models due to the additional hardware.'}
    ]
  },
  {
    slug: 'vip-solar-restroom-trailers',
    name: 'VIP Solar Restroom Trailers',
    shortDescription: 'High-end trailers that can operate entirely off-the-grid using solar power.',
    longDescription: 'Experience the pinnacle of portable luxury with our VIP Solar Restroom Trailers. These units combine the high-end finishes of our luxury trailers—flushing toilets, running water, and elegant interiors—with a powerful, self-contained solar energy system. This allows the trailer to operate its lights, pumps, and ventilation systems entirely off-grid, making it the perfect solution for exclusive VIP areas at remote festivals, high-end outdoor weddings, and any event where sustainable luxury is desired.',
    features: ['Full luxury trailer amenities', 'Powered by a robust solar array and battery bank', 'Operates silently without a generator', 'Sustainable and eco-friendly VIP solution', 'Climate control (A/C and heat)', 'Perfect for remote, high-end events'],
    useCases: ['VIP backstage areas', 'Remote luxury weddings', 'Corporate sustainability events', 'Glamping and upscale camping', 'Film production in remote locations'],
    image: IMG_LUXURY_TRAILER,
    faqs: [
        { question: 'Can the solar panels power the air conditioning?', answer: 'Our largest solar packages are designed to run all systems, including A/C, under normal conditions. We will confirm the trailer\'s capabilities based on your specific needs and expected weather.' },
        { question: 'Is a solar trailer more expensive than a standard one?', answer: 'Yes, due to the advanced solar technology, these trailers command a premium rental rate, but can save on generator fuel costs and operate silently.'}
    ]
  },
  {
    slug: 'portable-shower-trailers',
    name: 'Portable Shower Trailers',
    shortDescription: 'Provide the comfort of a hot shower anywhere with our mobile shower trailers.',
    longDescription: 'For multi-day festivals, remote work camps, or disaster relief sites, a hot shower can make all the difference. Our portable shower trailers offer multiple private shower stalls, each with its own changing area for privacy. The trailers feature on-demand water heaters to provide continuous hot water, ensuring a comfortable experience for all users. They are a crucial amenity for keeping morale and hygiene high during extended outdoor stays.',
    features: ['Multiple private shower stalls', 'Individual changing areas', 'On-demand propane water heaters', 'Sinks and mirrors included', 'Requires power and water hookups', 'Maintains hygiene and morale on long projects'],
    useCases: ['Multi-day music festivals', 'Emergency responder base camps', 'Remote construction or mining camps', 'Athletic events like marathons and mud runs', 'Campgrounds'],
    image: IMG_CONCERT,
    faqs: [
        { question: 'What connections are required for a shower trailer?', answer: 'Shower trailers require a continuous water supply from a hose, a standard electrical connection for lights and pumps, and propane tanks (which we provide) for the water heaters.' },
        { question: 'How is grey water handled?', answer: 'The grey water from the showers is collected either in an onboard holding tank or can be routed to a larger external tank or an approved drainage area, depending on the site.'}
    ]
  }
];
