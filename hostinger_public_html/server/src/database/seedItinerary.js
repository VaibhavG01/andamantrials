import { Itinerary, ItineraryDay, ItineraryActivity, ItineraryMeal } from '../models/index.js';
import { connectDatabase } from '../config/database.js';

const ITINERARIES_DATA = [
  {
    title: 'Andaman Explorer',
    slug: 'andaman-explorer',
    description: 'Explore the best of Port Blair, Havelock Island, and Neil Island with private catamaran cruises and luxury resort stays.',
    durationDays: 5,
    durationNights: 4,
    coverImage: 'https://images.unsplash.com/photo-1589979482837-e74f2e145060?auto=format&fit=crop&w=800&q=80',
    days: [
      {
        dayNumber: 1,
        location: 'Port Blair',
        title: 'Arrival in Port Blair & Historic Cellular Jail',
        description: 'Arrive at Veer Savarkar International Airport. Private transfer to resort. Afternoon visit to Cellular Jail followed by the stirring Light & Sound Show.',
        accommodation: 'Port Blair Luxury Hotel',
        transport: 'Private Cab',
        image: 'https://images.unsplash.com/photo-1584285406798-842245b0a394?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Airport Pickup', description: 'Meet representative at airport exit', time: '10:00 AM', duration: '30 Mins' },
          { activity: 'Hotel Check-in', description: 'Check-in to oceanfront resort', time: '11:30 AM', duration: '1 Hour' },
          { activity: 'Cellular Jail Visit', description: 'Guided tour of Cellular Jail', time: '03:00 PM', duration: '2 Hours' },
          { activity: 'Light & Sound Show', description: 'Freedom struggle saga show', time: '06:00 PM', duration: '1.5 Hours' }
        ],
        meals: ['Dinner']
      },
      {
        dayNumber: 2,
        location: 'Havelock Island',
        title: 'High-speed Catamaran to Havelock Island & Radhanagar Sunset',
        description: 'Morning checkout and catamaran boarding to Havelock Island. Check-in at beach resort. Spend evening at the world-famous Radhanagar Beach (Asia\'s Best Beach).',
        accommodation: 'Havelock Beach Resort',
        transport: 'Catamaran Ferry & AC Cab',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Catamaran Cruise', description: 'Makruzz high-speed catamaran trip', time: '08:30 AM', duration: '2 Hours' },
          { activity: 'Resort Transfer', description: 'Private transfer to Havelock resort', time: '11:00 AM', duration: '20 Mins' },
          { activity: 'Radhanagar Sunset', description: 'Relax at Asia\'s cleanest sandy beach', time: '03:30 PM', duration: '3 Hours' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 3,
        location: 'Havelock Island',
        title: 'Elephant Beach Snorkeling & Underwater Sea Walk',
        description: 'Speedboat ride to Elephant Beach. Indulge in complimentary snorkeling, coral reefs exploration, and optional watersports.',
        accommodation: 'Havelock Beach Resort',
        transport: 'Speedboat & Shared Cab',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Speedboat ride', description: 'Speedboat transfer to Elephant Beach jetty', time: '08:00 AM', duration: '25 Mins' },
          { activity: 'Coral Snorkeling', description: 'Guided snorkeling session over live reef', time: '09:30 AM', duration: '45 Mins' },
          { activity: 'Sea Walk / Jetski', description: 'Optional adventure water sports', time: '11:00 AM', duration: '2 Hours' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 4,
        location: 'Neil Island',
        title: 'Ferry to Neil Island & Natural Rock Bridge',
        description: 'Board morning catamaran to Neil Island. Check-in to hotel. Afternoon tour of Bharatpur Beach, Laxmanpur Beach, and the Natural Coral Bridge formation.',
        accommodation: 'Neil Island Resort',
        transport: 'Catamaran Ferry & Private Cab',
        image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Jetty Transfer', description: 'Catamaran voyage to Neil Island', time: '09:00 AM', duration: '1.5 Hours' },
          { activity: 'Bharatpur Beach Visit', description: 'Swim and glass-bottom boat rides', time: '11:30 AM', duration: '2 Hours' },
          { activity: 'Natural Coral Bridge', description: 'Walk on rocky shoreline to view formation', time: '03:30 PM', duration: '1 Hour' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 5,
        location: 'Port Blair',
        title: 'Departure & Airport Transfer',
        description: 'Transfer back to Veer Savarkar Airport. Board flight with cherishable travel memories of Andaman.',
        accommodation: 'None',
        transport: 'Private Cab',
        image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Airport Drop', description: 'Private transfer to Veer Savarkar airport', time: '09:00 AM', duration: '30 Mins' }
        ],
        meals: ['Breakfast']
      }
    ]
  },
  {
    title: 'Andaman Escape',
    slug: 'andaman-escape',
    description: 'The quintessential Andaman experience. Discover Radhanagar Beach, romantic sunset cruises, glass bottom boats, and historic Cellular Jail.',
    durationDays: 6,
    durationNights: 5,
    coverImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    days: [
      {
        dayNumber: 1,
        location: 'Port Blair',
        title: 'Arrival Port Blair & Cellular Jail Light Show',
        description: 'Arrive at Veer Savarkar International Airport and transfer to your hotel. Visit the historical Cellular Jail and experience the patriotic Light & Sound Show.',
        accommodation: 'Port Blair Premium Stay',
        transport: 'AC Private Cab',
        image: 'https://images.unsplash.com/photo-1584285406798-842245b0a394?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Airport Meet & Greet', description: 'Pickup by private vehicle', time: '09:30 AM', duration: '30 Mins' },
          { activity: 'Jail Light Show', description: 'Patriotic light show inside Cellular Jail', time: '06:00 PM', duration: '1.5 Hours' }
        ],
        meals: ['Dinner']
      },
      {
        dayNumber: 2,
        location: 'Havelock Island',
        title: 'High-speed Catamaran to Havelock Island',
        description: 'Board a luxury high-speed catamaran to Havelock Island (Swaraj Dweep). Transfer to resort and spend a relaxed afternoon.',
        accommodation: 'Havelock Beach Resort',
        transport: 'Catamaran Ferry',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Catamaran Cruise', description: 'Cruise on high-speed Makruzz', time: '08:00 AM', duration: '2 Hours' },
          { activity: 'Beachside Leisure', description: 'Spend free time relaxing at hotel beach', time: '02:00 PM', duration: '4 Hours' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 3,
        location: 'Havelock Island',
        title: 'Elephant Beach Snorkeling & Radhanagar Sunset',
        description: 'Enjoy a speedboat ride to Elephant Beach for snorkeling, followed by a beautiful sunset view at Radhanagar Beach.',
        accommodation: 'Havelock Beach Resort',
        transport: 'Private Cab & Boat',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Elephant Beach Snorkeling', description: 'Snorkeling inside shallow crystal waters', time: '08:30 AM', duration: '3 Hours' },
          { activity: 'Radhanagar Beach Walk', description: 'Walk along soft white sand at sunset', time: '04:00 PM', duration: '2 Hours' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 4,
        location: 'Neil Island',
        title: 'Cruise to Neil Island & Natural Rock Bridge',
        description: 'Cruise to Neil Island (Shaheed Dweep). Visit Bharatpur Beach and explore the famous Natural Rock Bridge.',
        accommodation: 'Neil Island Deluxe Resort',
        transport: 'Catamaran Ferry & Cab',
        image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Neil Island Cruise', description: 'Ferry ride from Havelock to Neil', time: '09:30 AM', duration: '1.5 Hours' },
          { activity: 'Natural Bridge Hike', description: 'Explore rock formations on beach reef', time: '03:30 PM', duration: '1 Hour' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 5,
        location: 'Port Blair',
        title: 'Laxmanpur Beach & Return to Port Blair',
        description: 'Enjoy a serene morning walk at Laxmanpur Beach, checkout and cruise back to Port Blair. Evening free for shopping.',
        accommodation: 'Port Blair Premium Stay',
        transport: 'Ferry & Private Cab',
        image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Laxmanpur Beach Visit', description: 'Leisure walk along shell beaches', time: '08:00 AM', duration: '2 Hours' },
          { activity: 'Return Cruise', description: 'Cruise back to capital island', time: '02:00 PM', duration: '2 Hours' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 6,
        location: 'Port Blair',
        title: 'Souvenir Shopping & Airport Departure',
        description: 'Enjoy a warm breakfast, complete hotel checkout, and transfer to Veer Savarkar Airport for your flight back home.',
        accommodation: 'None',
        transport: 'Private Cab',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Airport Drop', description: 'Private transfer to airport terminal', time: '09:00 AM', duration: '30 Mins' }
        ],
        meals: ['Breakfast']
      }
    ]
  },
  {
    title: 'Island Romance / Honeymoon Special',
    slug: 'island-romance',
    description: 'Romantic candlelight dinner, beachfront luxury resorts, private scuba diving, and beautiful sunsets at Neil Island.',
    durationDays: 5,
    durationNights: 4,
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    days: [
      {
        dayNumber: 1,
        location: 'Port Blair',
        title: 'Port Blair Welcome & Chidiyatapu Sunset',
        description: 'Warm airport welcome. Check-in to hotel. Evening visit to Chidiyatapu to witness a magnificent sunset.',
        accommodation: 'Port Blair Ocean View Resort',
        transport: 'Private SUV Cab',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'VIP Airport Pickup', description: 'Private air-conditioned SUV transfer', time: '10:00 AM', duration: '40 Mins' },
          { activity: 'Chidiyatapu Sunset', description: 'Magnificent beach sunset view', time: '03:30 PM', duration: '3 Hours' }
        ],
        meals: ['Dinner']
      },
      {
        dayNumber: 2,
        location: 'Havelock Island',
        title: 'Private Ferry to Havelock & Beach Resort',
        description: 'Premium cruise to Havelock Island. Afternoon check-in to a beachside resort with private beach access.',
        accommodation: 'Havelock Beach Resort',
        transport: 'Makruzz Premium Cruise',
        image: 'https://images.unsplash.com/photo-1589979482837-e74f2e145060?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Premium Cruise Voyage', description: 'Makruzz Gold class seats', time: '08:30 AM', duration: '2 Hours' },
          { activity: 'Private Beach Relax', description: 'Relax at resort beachfront lounge', time: '02:00 PM', duration: '3 Hours' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 3,
        location: 'Havelock Island',
        title: 'Couples Diving & Candlelight Dinner',
        description: 'Experience private scuba diving session with certified divemasters. Evening romantic candlelight dinner setup on the beach.',
        accommodation: 'Havelock Beach Resort',
        transport: 'Private Cab',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Honeymoon Scuba Diving', description: 'Underwater coral dive with GoPro photoshoot', time: '08:00 AM', duration: '3 Hours' },
          { activity: 'Beach Candlelight Dinner', description: '4-course romantic seafood beachside dinner', time: '07:00 PM', duration: '3 Hours' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 4,
        location: 'Neil Island',
        title: 'Neil Island Sunset Walk',
        description: 'Cruise to Neil Island. Visit Lakshmanpur Beach for a serene walking tour along the pristine white sand dunes.',
        accommodation: 'Neil Island Resort',
        transport: 'Premium Cruise & Cab',
        image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Neil Island Cruise', description: 'Ferry to Neil', time: '10:00 AM', duration: '1.5 Hours' },
          { activity: 'Sunset Beach Walk', description: 'Walk at Laxmanpur Beach', time: '04:00 PM', duration: '2 Hours' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 5,
        location: 'Port Blair',
        title: 'Flight Departure',
        description: 'Return cruise to Port Blair and private transfer to airport with happy honeymoon memories.',
        accommodation: 'None',
        transport: 'Ferry & Private Cab',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Airport Transfer', description: 'Drop off at flight terminal', time: '09:00 AM', duration: '30 Mins' }
        ],
        meals: ['Breakfast']
      }
    ]
  },
  {
    title: 'Andaman Family Escape',
    slug: 'andaman-family-escape',
    description: 'Perfect family vacation covering museum visits, Ross & North Bay islands, and fun activities at Havelock.',
    durationDays: 6,
    durationNights: 5,
    coverImage: 'https://images.unsplash.com/photo-1589979482837-e74f2e145060?auto=format&fit=crop&w=800&q=80',
    days: [
      {
        dayNumber: 1,
        location: 'Port Blair',
        title: 'Port Blair Arrival & Fisheries Museum',
        description: 'Arrive in Port Blair, check-in to family suite. Visit the Fisheries Museum displaying exotic local marine life.',
        accommodation: 'Port Blair Family Suite',
        transport: 'Private AC Cab',
        image: 'https://images.unsplash.com/photo-1584285406798-842245b0a394?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Fisheries Museum Visit', description: 'Educational tour of marine life displays', time: '03:00 PM', duration: '2 Hours' }
        ],
        meals: ['Dinner']
      },
      {
        dayNumber: 2,
        location: 'Ross & North Bay Islands',
        title: 'Ross & North Bay Island Excursion',
        description: 'Take a boat to Ross Island (historical British headquarters) and North Bay Island for glass-bottom boat rides and coral viewing.',
        accommodation: 'Port Blair Family Suite',
        transport: 'Shared Tourist Boat',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Ross Island Ruins Tour', description: 'Historic ruins walk with friendly deers', time: '09:00 AM', duration: '3 Hours' },
          { activity: 'North Bay Boat Rides', description: 'Glass bottom boat reef tour for children', time: '01:00 PM', duration: '3 Hours' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 3,
        location: 'Havelock Island',
        title: 'Catamaran Ferry to Havelock',
        description: 'Morning checkout and high-speed ferry cruise to Havelock. Check-in to hotel and relax by the pool.',
        accommodation: 'Havelock Family Beach Villa',
        transport: 'High-speed Catamaran',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Cruise Ride', description: 'Comfort class Makruzz journey', time: '08:30 AM', duration: '2 Hours' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 4,
        location: 'Havelock Island',
        title: 'Radhanagar Beach Family Fun',
        description: 'Spend a joyful day playing on the soft white sands of Radhanagar Beach. Perfect for family photography.',
        accommodation: 'Havelock Family Beach Villa',
        transport: 'Private Cab',
        image: 'https://images.unsplash.com/photo-1589979482837-e74f2e145060?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Radhanagar Family Outing', description: 'Beach soccer and family photoshoot', time: '02:00 PM', duration: '4 Hours' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 5,
        location: 'Port Blair',
        title: 'Port Blair Return & Shopping',
        description: 'Checkout from Havelock, return by ferry to Port Blair. Afternoon souvenir shopping tour at Sagarika Emporium.',
        accommodation: 'Port Blair Family Suite',
        transport: 'Ferry & Private Cab',
        image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Sagarika Shopping Tour', description: 'Buy handicraft items and pearl jewelry', time: '04:00 PM', duration: '2.5 Hours' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 6,
        location: 'Port Blair',
        title: 'Departure',
        description: 'Complete family package checkout and transfer to Veer Savarkar Airport.',
        accommodation: 'None',
        transport: 'Private Cab',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Airport Drop', description: 'Private transfer to flight terminal', time: '10:00 AM', duration: '30 Mins' }
        ],
        meals: ['Breakfast']
      }
    ]
  },
  {
    title: 'Andaman Adventure Package',
    slug: 'andaman-adventure',
    description: 'High-adrenaline water sports, scuba diving, limestone caves safari, and bioluminescent night kayaking.',
    durationDays: 7,
    durationNights: 6,
    coverImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    days: [
      {
        dayNumber: 1,
        location: 'Port Blair',
        title: 'Port Blair Arrival',
        description: 'Airport welcome, transfer to hotel. Quick briefing on safety instructions for adventure activities.',
        accommodation: 'Port Blair Adventure Inn',
        transport: 'AC Private Cab',
        image: 'https://images.unsplash.com/photo-1584285406798-842245b0a394?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Hotel Briefing', description: 'Briefing by adventure representative', time: '02:00 PM', duration: '1 Hour' }
        ],
        meals: ['Dinner']
      },
      {
        dayNumber: 2,
        location: 'Baratang Island',
        title: 'Baratang Limestone Caves Safari',
        description: 'Early morning drive through Jarawa Tribal Reserve. Boat safari through mangrove creeks to reach limestone caves.',
        accommodation: 'Port Blair Adventure Inn',
        transport: 'Forest Convoy Bus & Speedboat',
        image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Jarawa Reserve Drive', description: 'Cross tropical jungle reserve', time: '04:00 AM', duration: '3 Hours' },
          { activity: 'Mangrove Safari', description: 'Speedboat ride inside mangrove canopy', time: '08:30 AM', duration: '1.5 Hours' },
          { activity: 'Limestone Caves Trek', description: 'Short trek to cave formations', time: '10:30 AM', duration: '1.5 Hours' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 3,
        location: 'Havelock Island',
        title: 'Ferry to Havelock & Scuba Dive',
        description: 'Catamaran to Havelock. Proceed straight to dive center for customized coral reef deep scuba diving.',
        accommodation: 'Havelock Adventure Camp',
        transport: 'Makruzz Ferry & Jeep',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Catamaran Voyage', description: 'Catamaran transfer', time: '08:00 AM', duration: '2 Hours' },
          { activity: 'Deep Sea Dive', description: 'Guided boat scuba diving session', time: '11:00 AM', duration: '3 Hours' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 4,
        location: 'Havelock Island',
        title: 'Night Bioluminescent Kayaking',
        description: 'Spend afternoon relaxing. Evening night kayak tour inside Havelock mangroves to view glowing bioluminescent planktons.',
        accommodation: 'Havelock Adventure Camp',
        transport: 'Private Jeep',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Bioluminescent Kayaking', description: 'Night kayak tour inside dark mangroves', time: '06:30 PM', duration: '3 Hours' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 5,
        location: 'Neil Island',
        title: 'Neil Island Sea Walk',
        description: 'Ferry to Neil Island. Walk directly on the ocean floor with a full oxygen helmet at Bharatpur Beach.',
        accommodation: 'Neil Island Lodge',
        transport: 'Ferry & Private Cab',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Ocean Sea Walk', description: 'Walking on seabed with custom air helmets', time: '11:00 AM', duration: '2 Hours' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 6,
        location: 'Port Blair',
        title: 'Port Blair Jet Skiing',
        description: 'Return ferry to Port Blair. Afternoon water sports package including Jet Skiing and Speedboat rides at Rajiv Gandhi Water Sports Complex.',
        accommodation: 'Port Blair Adventure Inn',
        transport: 'Ferry & Cab',
        image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Jet Ski Ride', description: 'High-speed jet ski run', time: '03:30 PM', duration: '1 Hour' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 7,
        location: 'Port Blair',
        title: 'Departure',
        description: 'Check out and private airport transfer with memories of a thrilling trip.',
        accommodation: 'None',
        transport: 'Private Cab',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Airport Drop', description: 'Drop off at departure terminal', time: '09:00 AM', duration: '30 Mins' }
        ],
        meals: ['Breakfast']
      }
    ]
  },
  {
    title: 'Luxury Island Retreat',
    slug: 'luxury-island-retreat',
    description: 'Ultra-luxury resort stays, private yacht transfers, beachside spa treatments, and helicopter island sightseeing tour.',
    durationDays: 6,
    durationNights: 5,
    coverImage: 'https://images.unsplash.com/photo-1589979482837-e74f2e145060?auto=format&fit=crop&w=800&q=80',
    days: [
      {
        dayNumber: 1,
        location: 'Port Blair',
        title: 'VIP Airport Welcome & Luxury SUV Transfer',
        description: 'Airport welcome by VIP concierge. Private luxury SUV transfer to Welcomhotel Bay Island.',
        accommodation: 'Welcomhotel Luxury Suite',
        transport: 'Luxury SUV Private Car',
        image: 'https://images.unsplash.com/photo-1584285406798-842245b0a394?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'VIP Concierge Meet', description: 'Meet with welcome garlands and fresh juices', time: '10:00 AM', duration: '30 Mins' }
        ],
        meals: ['Dinner']
      },
      {
        dayNumber: 2,
        location: 'Havelock Island',
        title: 'Private Yacht to Taj Exotica Havelock',
        description: 'Board a luxury private yacht charter to Havelock Island. Check-in to Taj Exotica Resort & Spa.',
        accommodation: 'Taj Exotica Luxury Villa',
        transport: 'Private Yacht Charter',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Luxury Yacht Cruise', description: 'Private charter cruise with onboard butler service', time: '09:00 AM', duration: '2.5 Hours' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 3,
        location: 'Havelock Island',
        title: 'Private Beach Spa & Chef Dinner',
        description: 'Indulge in a signature beachside couples massage at the resort spa. Evening private dining setup curated by the master chef.',
        accommodation: 'Taj Exotica Luxury Villa',
        transport: 'Resort Golf Cart',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Couples Spa Massage', description: '60 Mins aromatherapy spa treatment', time: '11:00 AM', duration: '1.5 Hours' },
          { activity: 'Exclusive Dining Experience', description: 'Fine dining on secluded beach with violin performance', time: '08:00 PM', duration: '3 Hours' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 4,
        location: 'Havelock Island',
        title: 'Helicopter Island Sightseeing',
        description: 'Enjoy a premium helicopter joyride to view the breathtaking coral archipelago landscapes from high above.',
        accommodation: 'Taj Exotica Luxury Villa',
        transport: 'Private SUV & Heli',
        image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Helicopter Joyride', description: 'Private aerial sightseeing tour of islands', time: '09:30 AM', duration: '30 Mins' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 5,
        location: 'Port Blair',
        title: 'Royal Suite Return Port Blair',
        description: 'Cruise back to Port Blair on a luxury catamaran. Rest in premium suites and attend VIP sunset bay view dinner.',
        accommodation: 'Welcomhotel Luxury Suite',
        transport: 'Luxury Cruise & SUV',
        image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Catamaran Return', description: 'Royal class cruise seat reservation', time: '02:00 PM', duration: '2 Hours' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 6,
        location: 'Port Blair',
        title: 'VIP Airport Escort',
        description: 'Enjoy gourmet breakfast, checkout and transfer with VIP terminal assistance to security gates.',
        accommodation: 'None',
        transport: 'Luxury SUV Private Car',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Airport Drop Assistance', description: 'concierge help at baggage counters', time: '10:00 AM', duration: '40 Mins' }
        ],
        meals: ['Breakfast']
      }
    ]
  },
  {
    title: 'Andaman Quick Escape',
    slug: 'andaman-quick-escape',
    description: 'Perfect brief getaway covering Port Blair, day trip to Havelock, and historical city highlights.',
    durationDays: 4,
    durationNights: 3,
    coverImage: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
    days: [
      {
        dayNumber: 1,
        location: 'Port Blair',
        title: 'Port Blair Arrival & City Tour',
        description: 'Arrive at Port Blair, transfer to hotel. Visit Chatham Saw Mill, Samudrika Museum and Carbyns Cove Beach.',
        accommodation: 'Port Blair Deluxe Stay',
        transport: 'Private AC Cab',
        image: 'https://images.unsplash.com/photo-1584285406798-842245b0a394?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'City Museum Tour', description: 'Visit historic sawmill and naval museum', time: '02:00 PM', duration: '3 Hours' }
        ],
        meals: ['Dinner']
      },
      {
        dayNumber: 2,
        location: 'Havelock Island',
        title: 'Day Trip to Havelock Radhanagar',
        description: 'Early morning cruise to Havelock. Tour Radhanagar beach and return back to Port Blair by evening catamaran.',
        accommodation: 'Port Blair Deluxe Stay',
        transport: 'Same-day Cruise & Cab',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Havelock Day Trip Cruise', description: 'Early morning ferry and return ferry in afternoon', time: '06:00 AM', duration: '12 Hours' },
          { activity: 'Radhanagar Swimming', description: 'Enjoy warm waters at Havelock beach', time: '11:00 AM', duration: '3 Hours' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 3,
        location: 'Port Blair',
        title: 'Cellular Jail & Chidiyatapu',
        description: 'Explore the Celluar Jail during daylight. Afternoon trip to Chidiyatapu biosphere for wildlife and sunset views.',
        accommodation: 'Port Blair Deluxe Stay',
        transport: 'Private AC Cab',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Cellular Jail Tour', description: 'Excursion inside national memorial halls', time: '09:30 AM', duration: '2 Hours' },
          { activity: 'Sunset View', description: 'Watch the sun sink from Chidiyatapu sunset point', time: '03:30 PM', duration: '3 Hours' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 4,
        location: 'Port Blair',
        title: 'Departure',
        description: 'Complete checkout and get private transfer to flight departures.',
        accommodation: 'None',
        transport: 'Private AC Cab',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Airport Drop', description: 'Drop off at airport gate', time: '09:00 AM', duration: '30 Mins' }
        ],
        meals: ['Breakfast']
      }
    ]
  },
  {
    title: 'Complete Andaman Journey',
    slug: 'complete-andaman',
    description: 'Grand comprehensive itinerary covering Baratang caves, Rangat turtle sanctuary, Diglipur Ross & Smith sandbar.',
    durationDays: 8,
    durationNights: 7,
    coverImage: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80',
    days: [
      {
        dayNumber: 1,
        location: 'Port Blair',
        title: 'Port Blair Arrival',
        description: 'Arrive at Veer Savarkar Airport, check-in to hotel and spend evening at leisure.',
        accommodation: 'Port Blair Comfort Resort',
        transport: 'Private Cab',
        image: 'https://images.unsplash.com/photo-1584285406798-842245b0a394?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Jetty Walk', description: 'Brief evening walk near Corbyn\'s Cove', time: '05:00 PM', duration: '1 Hour' }
        ],
        meals: ['Dinner']
      },
      {
        dayNumber: 2,
        location: 'Havelock Island',
        title: 'Havelock Island Exploration',
        description: 'Board ferry to Havelock, check-in. Spend evening walking along the famous beaches.',
        accommodation: 'Havelock Beach Villa',
        transport: 'Catamaran Cruise',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Jetty Cruise', description: 'Makruzz high-speed catamaran ride', time: '08:30 AM', duration: '2 Hours' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 3,
        location: 'Neil Island',
        title: 'Neil Island Natural Bridge',
        description: 'Board ferry to Neil. Explore Lakshmanpur and Bharatpur beaches and see the Natural Coral Bridge formation.',
        accommodation: 'Neil Island Comfort Lodge',
        transport: 'Ferry & Cab',
        image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Bridge Walking Tour', description: 'Walking on shore reefs', time: '03:00 PM', duration: '1.5 Hours' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 4,
        location: 'Baratang Island',
        title: 'Baratang Caves Drive',
        description: 'Ferry back to Port Blair. Drive to Baratang Island to explore the limestone cave formations.',
        accommodation: 'Port Blair Comfort Resort',
        transport: 'Ferry & Private Convoy Vehicle',
        image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Limestone Cave Boat tour', description: 'Mangrove channel speedboat trip', time: '10:00 AM', duration: '2 Hours' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 5,
        location: 'Rangat',
        title: 'Rangat Turtle Nesting Sanctuary',
        description: 'Drive north to Rangat. Visit Amkunj Beach and the scenic Dhaninallah Mangrove Walkway.',
        accommodation: 'Rangat Eco Lodge',
        transport: 'Private SUV Cab',
        image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Mangrove Walkway', description: 'Walk on India\'s longest mangrove boardwalk', time: '03:00 PM', duration: '2 Hours' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 6,
        location: 'Diglipur',
        title: 'Diglipur Ross & Smith Sandbar',
        description: 'Drive to Diglipur. Take a boat to view the stunning Ross & Smith twin islands joined by a natural sandbar.',
        accommodation: 'Diglipur Resort',
        transport: 'Cab & Traditional Boat',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Sandbar Crossing', description: 'Walk across the sandbar during low tide', time: '11:00 AM', duration: '3 Hours' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 7,
        location: 'Port Blair',
        title: 'Return Port Blair via Convoy',
        description: 'Embark on the return journey back to Port Blair crossing ATR road forest stretches.',
        accommodation: 'Port Blair Comfort Resort',
        transport: 'Private SUV Cab',
        image: 'https://images.unsplash.com/photo-1584285406798-842245b0a394?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Jungle Convoy Ride', description: 'Pass through national reserve tracts', time: '09:00 AM', duration: '8 Hours' }
        ],
        meals: ['Breakfast', 'Dinner']
      },
      {
        dayNumber: 8,
        location: 'Port Blair',
        title: 'Departure',
        description: 'Check out and get private transfer to Veer Savarkar Airport.',
        accommodation: 'None',
        transport: 'Private Cab',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
        activities: [
          { activity: 'Airport Transfer', description: 'Private transfer to flight terminal', time: '09:00 AM', duration: '30 Mins' }
        ],
        meals: ['Breakfast']
      }
    ]
  }
];

export const seedItineraries = async () => {
  try {
    await Itinerary.sync();
    await ItineraryDay.sync();
    await ItineraryActivity.sync();
    await ItineraryMeal.sync();

    console.log('Seeding master itineraries...');
    for (const item of ITINERARIES_DATA) {
      // Find or create itinerary record
      const [itinerary, created] = await Itinerary.findOrCreate({
        where: { slug: item.slug },
        defaults: {
          title: item.title,
          slug: item.slug,
          description: item.description,
          durationDays: item.durationDays,
          durationNights: item.durationNights,
          coverImage: item.coverImage,
          status: 'PUBLISHED'
        }
      });

      if (!created) {
        console.log(`Itinerary with slug '${item.slug}' already exists. Skipping.`);
        continue;
      }

      console.log(`Created itinerary: ${item.title} (${item.slug})`);

      for (const day of item.days) {
        const itinDay = await ItineraryDay.create({
          itineraryId: itinerary.id,
          dayNumber: day.dayNumber,
          date: new Date(Date.now() + day.dayNumber * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // dynamic date
          location: day.location,
          title: day.title,
          description: day.description,
          accommodation: day.accommodation,
          transport: day.transport,
          image: day.image
        });

        if (day.activities && day.activities.length > 0) {
          const activityPayloads = day.activities.map(act => ({
            itineraryDayId: itinDay.id,
            activity: act.activity,
            description: act.description,
            time: act.time,
            duration: act.duration
          }));
          await ItineraryActivity.bulkCreate(activityPayloads);
        }

        if (day.meals && day.meals.length > 0) {
          const mealPayloads = day.meals.map(mealType => ({
            itineraryDayId: itinDay.id,
            mealType: mealType
          }));
          await ItineraryMeal.bulkCreate(mealPayloads);
        }
      }
    }

    console.log('Master itineraries seeded successfully!');
  } catch (err) {
    console.error('Failed to seed itineraries:', err.message);
  }
};

// Execute if run directly
if (process.argv[1] && process.argv[1].endsWith('seedItinerary.js')) {
  seedItineraries().then(() => process.exit(0));
}
