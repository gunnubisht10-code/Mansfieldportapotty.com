
import type { City } from '../types';

export const serviceAreas: City[] = [
  {
    slug: 'arlington',
    name: 'Arlington',
    state: 'TX',
    zipCodes: ['76001', '76002', '76006', '76010', '76011', '76012', '76013', '76014', '76015', '76016', '76017', '76018'],
    neighborhoods: ['North Arlington', 'South Arlington', 'West Arlington', 'Dalworthington Gardens'],
    landmarks: ['AT&T Stadium', 'Globe Life Field', 'Six Flags Over Texas', 'University of Texas at Arlington'],
    description: 'Serving the bustling entertainment hub of Arlington, TX. We provide top-tier porta potty rentals for major sporting events, concerts, and theme parks, as well as construction projects throughout the city. Our rapid response team ensures your needs are met promptly in Arlington.'
  },
  {
    slug: 'grand-prairie',
    name: 'Grand Prairie',
    state: 'TX',
    zipCodes: ['75050', '75051', '75052', '75054'],
    neighborhoods: ['Westchester', 'Mira Lagos', 'Nottingham', 'Grand Peninsula'],
    landmarks: ['Lone Star Park', 'Traders Village', 'Epic Waters Indoor Waterpark', 'Texas Trust CU Theatre'],
    description: 'From the races at Lone Star Park to the family fun at Epic Waters, we provide clean and reliable portable toilet solutions across Grand Prairie. We cater to large public venues, private events, and growing residential construction sites with unmatched service.'
  },
  {
    slug: 'fort-worth',
    name: 'Fort Worth',
    state: 'TX',
    zipCodes: ['76102', '76103', '76104', '76105', '76106', '76107', '76108', '76109', '76110', '76111', '76112', '76114', '76115', '76116', '76118', '76119', '76120', '76123', '76126', '76127', '76129', '76131', '76132', '76133', '76134', '76135', '76137', '76140', '76148', '76164', '76177', '76179'],
    neighborhoods: ['Sundance Square', 'Cultural District', 'Stockyards', 'TCU Area', 'Alliance'],
    landmarks: ['Fort Worth Stockyards', 'Kimbell Art Museum', 'Texas Christian University', 'Fort Worth Botanic Garden'],
    description: 'As a key provider in Fort Worth, we understand the diverse needs of "Cowtown." We supply porta potties for everything from Stockyards events and cultural festivals to the sprawling industrial and residential developments that define this great city.'
  },
  // Add 27 more cities here to reach the total of 30
  { slug: 'dallas', name: 'Dallas', state: 'TX', zipCodes: ['75201', '75202'], neighborhoods: ['Downtown', 'Uptown'], landmarks: ['Reunion Tower', 'Klyde Warren Park'], description: 'Delivering premier portable sanitation to the heart of Dallas for corporate events, construction, and festivals.' },
  { slug: 'irving', name: 'Irving', state: 'TX', zipCodes: ['75038', '75039'], neighborhoods: ['Las Colinas', 'Valley Ranch'], landmarks: ['Toyota Music Factory', 'Mandalay Canal Walk'], description: 'Your trusted partner for porta potty rentals in Irving, servicing business centers and community events in Las Colinas and beyond.' },
  { slug: 'plano', name: 'Plano', state: 'TX', zipCodes: ['75023', '75024'], neighborhoods: ['Legacy West', 'Downtown Plano'], landmarks: ['Arbor Hills Nature Preserve', 'The Shops at Legacy'], description: 'Providing clean, modern portable restrooms for Plano\'s corporate campuses, parks, and upscale events.' },
  { slug: 'mckinney', name: 'McKinney', state: 'TX', zipCodes: ['75069', '75070'], neighborhoods: ['Historic Downtown McKinney', 'Stonebridge Ranch'], landmarks: ['McKinney Performing Arts Center', 'Heard Natural Science Museum'], description: 'Servicing the historic and rapidly growing communities of McKinney with reliable porta potty solutions.' },
  { slug: 'frisco', name: 'Frisco', state: 'TX', zipCodes: ['75034', '75035'], neighborhoods: ['The Star', 'Frisco Square'], landmarks: ['Ford Center at The Star', 'Dr Pepper Ballpark'], description: 'The top choice for porta potty rentals for Frisco\'s major sporting venues, events, and residential construction.' },
  { slug: 'euless', name: 'Euless', state: 'TX', zipCodes: ['76039', '76040'], neighborhoods: ['Glade Parks', 'Bear Creek'], landmarks: ['Texas Star Golf Course', 'Euless Family Life Center'], description: 'Euless trusts us for timely and clean portable toilet rentals for its parks, golf tournaments, and community gatherings.' },
  { slug: 'bedford', name: 'Bedford', state: 'TX', zipCodes: ['76021', '76022'], neighborhoods: ['Bedford Boys Ranch', 'Central Bedford'], landmarks: ['Old Bedford School', 'Boys Ranch Park'], description: 'Your local provider for affordable porta potties in Bedford, perfect for festivals at the Boys Ranch Park and local construction.' },
  { slug: 'hurst', name: 'Hurst', state: 'TX', zipCodes: ['76053', '76054'], neighborhoods: ['North East Mall Area', 'Bell Station'], landmarks: ['North East Mall', 'Chisholm Park'], description: 'We provide comprehensive portable sanitation services throughout Hurst for retail centers, city parks, and residential needs.' },
  { slug: 'southlake', name: 'Southlake', state: 'TX', zipCodes: ['76092'], neighborhoods: ['Southlake Town Square', 'Timarron'], landmarks: ['Bob Jones Nature Center', 'Southlake Town Square'], description: 'Delivering upscale restroom trailers and luxury portable toilets to Southlake for its exclusive events and high-end construction projects.' },
  { slug: 'keller', name: 'Keller', state: 'TX', zipCodes: ['76244', '76248'], neighborhoods: ['Keller Town Center', 'Hidden Lakes'], landmarks: ['Keller Pointe', 'Bear Creek Park'], description: 'Keller\'s preferred provider for clean, family-friendly porta potty rentals for parks, schools, and community events.' },
  { slug: 'cedar-hill', name: 'Cedar Hill', state: 'TX', zipCodes: ['75104'], neighborhoods: ['Lake Ridge', 'Historic Downtown'], landmarks: ['Cedar Hill State Park', 'Dogwood Canyon Audubon Center'], description: 'Servicing Cedar Hill with durable porta potties for outdoor enthusiasts at the state park and for local construction projects.' },
  { slug: 'duncanville', name: 'Duncanville', state: 'TX', zipCodes: ['75116', '75137'], neighborhoods: ['Best Southwest', 'Central Duncanville'], landmarks: ['International Museum of Cultures', 'Armstrong Park'], description: 'Reliable and affordable porta potty rentals for the community of Duncanville, serving schools, parks, and events.' },
  { slug: 'desoto', name: 'DeSoto', state: 'TX', zipCodes: ['75115'], neighborhoods: ['DeSoto Town Center', 'Thorntree'], landmarks: ['Grimes Park', 'Roy Orr Best Southwest Trail'], description: 'DeSoto\'s go-to source for all portable toilet needs, from long-term construction rentals to weekend event units.' },
  { slug: 'lancaster', name: 'Lancaster', state: 'TX', zipCodes: ['75134', '75146'], neighborhoods: ['Lancaster Town Square', 'Bear Creek'], landmarks: ['Country View Golf Course', 'Lancaster Community Park'], description: 'Providing the community of Lancaster with dependable portable sanitation services for public works, parks, and private events.' },
  { slug: 'midlothian', name: 'Midlothian', state: 'TX', zipCodes: ['76065'], neighborhoods: ['Founders Row', 'Mockingbird Estates'], landmarks: ['Midlothian Community Park', 'Hawkins Spring Park'], description: 'Supporting Midlothian\'s industrial and residential growth with robust construction porta potties and event rentals.' },
  { slug: 'waxahachie', name: 'Waxahachie', state: 'TX', zipCodes: ['75165', '75167'], neighborhoods: ['Historic Downtown', 'Mustang Creek'], landmarks: ['Ellis County Courthouse', 'Scarborough Renaissance Festival'], description: 'Your partner for large-scale event sanitation in Waxahachie, specializing in festivals like the Scarborough Renaissance Festival.' },
  { slug: 'burleson', name: 'Burleson', state: 'TX', zipCodes: ['76028'], neighborhoods: ['Old Town Burleson', 'Hidden Creek'], landmarks: ['Burleson Visitors Center', 'Bailey Lake Park'], description: 'Serving the fast-growing city of Burleson with a full range of portable toilets for construction, events, and more.' },
  { slug: 'crowley', name: 'Crowley', state: 'TX', zipCodes: ['76036'], neighborhoods: ['Downtown Crowley', 'Creekside'], landmarks: ['Bicentennial Park', 'Crowley Public Library'], description: 'Crowley\'s local choice for clean, affordable, and timely porta potty rentals for any occasion.' },
  { slug: 'kennedale', name: 'Kennedale', state: 'TX', zipCodes: ['76060'], neighborhoods: ['TownCenter', 'Sonora Park'], landmarks: ['Kennedale Speedway Park', 'TownCenter Park'], description: 'Providing specialty porta potty services for events at the Kennedale Speedway Park and construction projects in the area.' },
  { slug: 'forest-hill', name: 'Forest Hill', state: 'TX', zipCodes: ['76119', '76140'], neighborhoods: ['South Forest Hill', 'East Forest Hill'], landmarks: ['Forest Hill Civic & Convention Center', 'Rendon Park'], description: 'Dependable portable toilet solutions for events at the Forest Hill Civic Center and for public works projects.' },
  { slug: 'richland-hills', name: 'Richland Hills', state: 'TX', zipCodes: ['76118'], neighborhoods: ['Richland Hills Estates', 'The Link'], landmarks: ['The Link Recreation Center', 'Rosebud Park'], description: 'Servicing Richland Hills with clean and convenient porta potties for park events, renovations, and more.' },
  { slug: 'north-richland-hills', name: 'North Richland Hills', state: 'TX', zipCodes: ['76180', '76182'], neighborhoods: ['Home Town', 'Iron Horse'], landmarks: ['NRH2O Family Water Park', 'NYTEX Sports Centre'], description: 'The premier provider of event and construction porta potties in North Richland Hills, serving NRH2O and local developments.' },
  { slug: 'haltom-city', name: 'Haltom City', state: 'TX', zipCodes: ['76111', '76117', '76137', '76148'], neighborhoods: ['East Haltom', 'West Haltom'], landmarks: ['Buffalo Ridge Park', 'Haltom City Theatre'], description: 'Affordable and reliable portable toilet rentals for industrial, commercial, and residential needs in Haltom City.' },
  { slug: 'watauga', name: 'Watauga', state: 'TX', zipCodes: ['76148'], neighborhoods: ['Watauga Pavilion', 'Capp Smith Park'], landmarks: ['Watauga Community Center', 'Capp Smith Park Amphitheater'], description: 'Your community partner in Watauga for clean porta potties for city events, parks, and home projects.' },
  { slug: 'colleyville', name: 'Colleyville', state: 'TX', zipCodes: ['76034'], neighborhoods: ['The Village at Colleyville', 'Woodland Hills'], landmarks: ['Colleyville Nature Center', 'McPherson Park'], description: 'Providing high-end portable restroom trailers and deluxe units for upscale events and construction in Colleyville.' },
  { slug: 'grapevine', name: 'Grapevine', state: 'TX', zipCodes: ['76051'], neighborhoods: ['Historic Downtown Grapevine', 'Lake Grapevine'], landmarks: ['Grapevine Mills', 'Gaylord Texan Resort'], description: 'Grapevine\'s expert in festival and event sanitation, providing services for major events like GrapeFest and Main Street Fest.' },
  { slug: 'trophy-club', name: 'Trophy Club', state: 'TX', zipCodes: ['76262'], neighborhoods: ['Hogan\'s Glen', 'Turnberry'], landmarks: ['Trophy Club Park', 'Trophy Club Country Club'], description: 'Delivering pristine portable restrooms and trailers for golf tournaments, parks, and elite events in Trophy Club.' },
];
