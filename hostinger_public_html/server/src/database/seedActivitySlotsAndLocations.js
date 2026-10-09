import dotenv from 'dotenv';
dotenv.config();
import { sequelize, connectDatabase } from '../config/database.js';
import { Activity, ActivityLocation, ActivitySlot, Setting } from '../models/index.js';

async function seedActivityData() {
  await connectDatabase();
  console.log('Seeding rich activity locations, slots, and settings...');

  // 1. Ensure default Admin Email Settings in Settings table
  await Setting.findOrCreate({
    where: { key: 'email_settings' },
    defaults: {
      key: 'email_settings',
      description: 'System and Admin Email Notification Settings',
      value: {
        adminNotificationEmail: 'softbyvaibhav01@gmail.com',
        bookingConfirmationEnabled: true,
        paymentFailureNotification: true,
        cancellationNotification: true,
        bookingReminderEnabled: true,
        bookingReminderHoursBefore: 24,
        lowAvailabilityAlertEnabled: true,
        lowAvailabilityThreshold: 3,
        autoExpirePendingMinutes: 10,
      }
    }
  });
  console.log('✅ Email & availability settings verified.');

  // 2. Fetch all current activities
  const activities = await Activity.findAll();
  console.log(`Found ${activities.length} activities to configure with locations and slots.`);

  const locationsData = {
    'scuba-diving': [
      { locationName: 'Havelock (Elephant Beach)', adultPrice: 3500, childPrice: 2800, meetingPoint: 'Elephant Beach Boat Jetty, Havelock', description: 'Crystal-clear waters with vibrant coral reef and PADI instructors.' },
      { locationName: 'Port Blair (North Bay)', adultPrice: 3200, childPrice: 2500, meetingPoint: 'Water Sports Complex, Port Blair', description: 'Convenient mainland diving with exotic marine life.' },
      { locationName: 'Neil Island (Bharatpur Beach)', adultPrice: 3800, childPrice: 3000, meetingPoint: 'Bharatpur Beach Diving Counter, Neil Island', description: 'Serene coral formations and sea turtle sightings.' }
    ],
    'sea-walk': [
      { locationName: 'Havelock (Elephant Beach)', adultPrice: 4200, childPrice: 3500, meetingPoint: 'Elephant Beach Pontoon, Havelock', description: 'Walk on the ocean floor at 6-7 meters depth with air helmet.' },
      { locationName: 'North Bay Island', adultPrice: 3800, childPrice: 3200, meetingPoint: 'North Bay Sea Walk Pontoon', description: 'Walk among schools of colorful fish and feed them underwater.' }
    ],
    'snorkeling': [
      { locationName: 'Elephant Beach, Havelock', adultPrice: 1200, childPrice: 800, meetingPoint: 'Elephant Beach Snorkel Hub', description: 'Shallow lagoon snorkeling ideal for beginners and families.' },
      { locationName: 'Jolly Buoy Island', adultPrice: 1500, childPrice: 1000, meetingPoint: 'Jolly Buoy Marine Sanctuary Jetty', description: 'Pristine corals inside Mahatma Gandhi Marine National Park.' },
      { locationName: 'Bharatpur Beach, Neil Island', adultPrice: 1300, childPrice: 900, meetingPoint: 'Bharatpur Beach Watersports Center', description: 'Lively coral reef with starfish and clownfish.' }
    ],
    'glass-bottom': [
      { locationName: 'Port Blair (North Bay)', adultPrice: 1000, childPrice: 600, meetingPoint: 'Aberdeen Jetty, Port Blair', description: 'High-visibility glass hull viewing coral gardens without getting wet.' },
      { locationName: 'Jolly Buoy Island', adultPrice: 1800, childPrice: 1200, meetingPoint: 'Jolly Buoy Island Point', description: 'Deep reef viewing in Andaman premier marine reserve.' }
    ],
    'kayaking': [
      { locationName: 'Havelock Mangroves', adultPrice: 2500, childPrice: 1800, meetingPoint: 'Havelock Mangrove Creek Jetty', description: 'Night bioluminescent kayaking under the starlit sky.' },
      { locationName: 'Port Blair Harbor', adultPrice: 1800, childPrice: 1400, meetingPoint: 'Marina Park, Port Blair', description: 'Daytime sunset kayak through scenic coastal inlets.' }
    ],
    'parasailing': [
      { locationName: 'Corbyn Cove Beach, Port Blair', adultPrice: 3000, childPrice: 2200, meetingPoint: 'Corbyn Cove Water Sports Pier', description: 'High altitude coastal glide with speedboat takeoff.' },
      { locationName: 'Elephant Beach, Havelock', adultPrice: 3500, childPrice: 2600, meetingPoint: 'Elephant Beach Speedboat Point', description: 'Spectacular aerial view of the turquoise lagoon.' }
    ],
    'semi-submarine': [
      { locationName: 'Port Blair (Coral Safari)', adultPrice: 2500, childPrice: 1800, meetingPoint: 'Phoenix Bay Jetty, Port Blair', description: 'Air-conditioned 100-seater submarine with huge 45-degree viewports.' },
      { locationName: 'North Bay Island', adultPrice: 2800, childPrice: 2000, meetingPoint: 'North Bay Island Submarine Base', description: 'Deep water coral viewing with underwater diver show.' }
    ],
    'jet-ski': [
      { locationName: 'Water Sports Complex, Port Blair', adultPrice: 800, childPrice: 600, meetingPoint: 'Rajiv Gandhi Water Sports Complex', description: 'High-speed jet ski wave runner with certified safety pilot.' },
      { locationName: 'Elephant Beach, Havelock', adultPrice: 1000, childPrice: 800, meetingPoint: 'Elephant Beach Jet Ski Zone', description: 'Thrilling wave ride across crystal blue waters.' }
    ],
    'banana-ride': [
      { locationName: 'Water Sports Complex, Port Blair', adultPrice: 600, childPrice: 500, meetingPoint: 'Water Sports Pier, Port Blair', description: 'Fun 6-person inflatable banana ride towed by speedboat.' },
      { locationName: 'Elephant Beach, Havelock', adultPrice: 750, childPrice: 600, meetingPoint: 'Elephant Beach Watersports Center', description: 'Exciting group splash ride across Havelock surf.' }
    ]
  };

  const defaultLocations = [
    { locationName: 'Port Blair', adultPrice: 2000, childPrice: 1500, meetingPoint: 'Main Water Sports Jetty, Port Blair', description: 'Prime coastal water sports location.' },
    { locationName: 'Havelock Island', adultPrice: 2500, childPrice: 1900, meetingPoint: 'Elephant Beach Activity Pier', description: 'World famous island water sports haven.' }
  ];

  const timeSlotTemplates = [
    { startTime: '08:00 AM', endTime: '10:00 AM', capacity: 20 },
    { startTime: '10:00 AM', endTime: '12:00 PM', capacity: 20 },
    { startTime: '12:00 PM', endTime: '02:00 PM', capacity: 15 },
    { startTime: '02:00 PM', endTime: '04:00 PM', capacity: 20 },
    { startTime: '04:00 PM', endTime: '05:30 PM', capacity: 15 },
  ];

  // Helper to format YYYY-MM-DD
  const formatDate = (d) => d.toISOString().split('T')[0];

  const now = new Date();
  const dates = [];
  for (let i = 0; i < 30; i++) {
    const d = new Date(now.getTime() + i * 24 * 60 * 60 * 1000);
    dates.push(formatDate(d));
  }

  for (const act of activities) {
    const locs = locationsData[act.slug] || [
      { locationName: act.location || 'Port Blair', adultPrice: Number(act.price) || 2000, childPrice: act.childPrice ? Number(act.childPrice) : Math.round(Number(act.price) * 0.75), meetingPoint: 'Water Sports Desk', description: 'Signature activity experience.' }
    ];

    // Ensure activity has rich fields
    await act.update({
      featured: act.featured || ['scuba-diving', 'sea-walk', 'snorkeling', 'parasailing'].includes(act.slug),
      childPrice: act.childPrice || Math.round(Number(act.price) * 0.75),
      difficulty: act.difficulty || (act.slug.includes('scuba') ? 'Moderate' : act.slug.includes('walk') ? 'Easy' : 'Easy'),
      videoUrl: act.videoUrl || (act.slug === 'scuba-diving' ? 'https://www.youtube.com/watch?v=ScMzIvxBSi4' : null),
      gallery: act.gallery && act.gallery.length > 0 ? act.gallery : [
        act.image || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=1200&q=80'
      ],
      inclusions: act.inclusions && act.inclusions.length > 0 ? act.inclusions : [
        'Certified Instructor / Dive Master',
        'Complete Safety Equipment & Gear',
        'Underwater Photos & Video Clips',
        'Safety Briefing & Training Session',
        'Emergency Medical First Aid Kit'
      ],
      exclusions: act.exclusions && act.exclusions.length > 0 ? act.exclusions : [
        'Personal Souvenirs & Gratuities',
        'Hotel Pickup and Drop-off (available as add-on)',
        'Wet Suit Rental (Optional ₹300)'
      ],
      requirements: act.requirements && act.requirements.length > 0 ? act.requirements : [
        'Minimum Age: 10 Years for Scuba, 7 Years for Sea Walk & Snorkeling',
        'Basic Swimming skill recommended (Not mandatory for Sea Walk / Discover Scuba)',
        'Must sign Medical Fitness & Liability Declaration before activity'
      ],
      safetyGuidelines: act.safetyGuidelines && act.safetyGuidelines.length > 0 ? act.safetyGuidelines : [
        'Follow instructions of the dive master at all times',
        'Do not touch or stand on fragile live coral reefs',
        'Avoid heavy meals 1 hour prior to water activity'
      ],
      ageRestrictions: act.ageRestrictions || '10+ Years for Diving | 7+ Years for Sea Walk',
      importantNotes: act.importantNotes && act.importantNotes.length > 0 ? act.importantNotes : [
        'Please arrive at the meeting counter 15 minutes before slot start time',
        'Carry a valid Govt Photo ID (Aadhaar / Passport / Voter ID)',
        'Wear comfortable swimwear or quick-dry clothing'
      ]
    });

    // Create / Sync Locations
    for (const loc of locs) {
      const [actLoc] = await ActivityLocation.findOrCreate({
        where: { activityId: act.id, locationName: loc.locationName },
        defaults: {
          activityId: act.id,
          locationName: loc.locationName,
          adultPrice: loc.adultPrice,
          childPrice: loc.childPrice,
          meetingPoint: loc.meetingPoint,
          description: loc.description,
          status: 'ACTIVE'
        }
      });

      // Create Slots for the next 30 days
      for (let dIdx = 0; dIdx < dates.length; dIdx++) {
        const dateStr = dates[dIdx];
        for (let sIdx = 0; sIdx < timeSlotTemplates.length; sIdx++) {
          const tmpl = timeSlotTemplates[sIdx];
          
          // Add some realistic booked counts for first few days
          let bookedCount = 0;
          let status = 'ACTIVE';
          if (dIdx === 0 && sIdx === 2) {
            bookedCount = tmpl.capacity; // Mark 12:00 PM sold out for today
            status = 'SOLD_OUT';
          } else if (dIdx === 1 && sIdx === 1) {
            bookedCount = tmpl.capacity - 3; // 3 seats left tomorrow 10:00 AM
          } else if (dIdx < 3 && sIdx === 0) {
            bookedCount = tmpl.capacity - 8; // 8 seats left
          }

          await ActivitySlot.findOrCreate({
            where: {
              activityId: act.id,
              locationId: actLoc.id,
              date: dateStr,
              startTime: tmpl.startTime
            },
            defaults: {
              activityId: act.id,
              locationId: actLoc.id,
              date: dateStr,
              startTime: tmpl.startTime,
              endTime: tmpl.endTime,
              capacity: tmpl.capacity,
              reservedCount: 0,
              bookedCount: bookedCount,
              status: status,
              notes: 'Daily scheduled slot'
            }
          });
        }
      }
    }
  }

  console.log('✅ Activity Locations, Slots (30 days), and rich activity fields successfully seeded!');
  process.exit(0);
}

seedActivityData().catch(err => {
  console.error('Seeding error:', err);
  process.exit(1);
});
