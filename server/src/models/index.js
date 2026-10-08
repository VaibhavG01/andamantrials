import { sequelize } from '../config/database.js';
import { User } from './User.js';
import { Destination } from './Destination.js';
import { Ferry } from './Ferry.js';
import { FerryRoute } from './FerryRoute.js';
import { FerrySchedule } from './FerrySchedule.js';
import { Cruise } from './Cruise.js';
import { CruiseRoute } from './CruiseRoute.js';
import { CruiseSchedule } from './CruiseSchedule.js';
import { Stay } from './Stay.js';
import { Room } from './Room.js';
import { StayAmenity } from './StayAmenity.js';
import { Booking } from './Booking.js';
import { BookingGuest } from './BookingGuest.js';
import { BlogCategory } from './BlogCategory.js';
import { Blog } from './Blog.js';
import { ContactMessage } from './ContactMessage.js';
import { Inquiry } from './Inquiry.js';
import { Review } from './Review.js';
import { Media } from './Media.js';
import { Place } from './Place.js';
import { Activity } from './Activity.js';
import { ActivityLocation } from './ActivityLocation.js';
import { ActivitySlot } from './ActivitySlot.js';
import { SlotReservation } from './SlotReservation.js';
import { Package } from './Package.js';
import { AuditLog } from './AuditLog.js';
import { ShiftLog } from './ShiftLog.js';
import { FilmChapter } from './FilmChapter.js';
import { Testimonial } from './Testimonial.js';
import { Itinerary } from './Itinerary.js';
import { ItineraryDay } from './ItineraryDay.js';
import { ItineraryActivity } from './ItineraryActivity.js';
import { ItineraryMeal } from './ItineraryMeal.js';
import { Setting } from './Setting.js';
import { MasterCategory } from './MasterCategory.js';
import { MasterLocation } from './MasterLocation.js';
import { Gallery } from './Gallery.js';

// ── User Associations
User.hasMany(Booking, { foreignKey: 'userId', as: 'bookings' });
Booking.belongsTo(User, { foreignKey: 'userId', as: 'user' });

User.hasMany(Review, { foreignKey: 'userId', as: 'reviews' });
Review.belongsTo(User, { foreignKey: 'userId', as: 'user' });

User.hasMany(Blog, { foreignKey: 'authorId', as: 'blogs' });
Blog.belongsTo(User, { foreignKey: 'authorId', as: 'author' });

// ── Destination Associations
Destination.hasMany(Stay, { foreignKey: 'destinationId', as: 'staysList' });
Stay.belongsTo(Destination, { foreignKey: 'destinationId', as: 'destination' });

Destination.hasMany(FerryRoute, { foreignKey: 'fromDestinationId', as: 'outgoingRoutes' });
Destination.hasMany(FerryRoute, { foreignKey: 'toDestinationId', as: 'incomingRoutes' });
FerryRoute.belongsTo(Destination, { foreignKey: 'fromDestinationId', as: 'fromDestination' });
FerryRoute.belongsTo(Destination, { foreignKey: 'toDestinationId', as: 'toDestination' });

// ── Ferry Associations
Ferry.hasMany(FerryRoute, { foreignKey: 'ferryId', as: 'routes' });
FerryRoute.belongsTo(Ferry, { foreignKey: 'ferryId', as: 'ferry' });

Ferry.hasMany(FerrySchedule, { foreignKey: 'ferryId', as: 'schedules' });
FerrySchedule.belongsTo(Ferry, { foreignKey: 'ferryId', as: 'ferry' });

FerryRoute.hasMany(FerrySchedule, { foreignKey: 'routeId', as: 'schedules' });
FerrySchedule.belongsTo(FerryRoute, { foreignKey: 'routeId', as: 'route' });

// ── Cruise Associations
Cruise.hasMany(CruiseRoute, { foreignKey: 'cruiseId', as: 'routes' });
CruiseRoute.belongsTo(Cruise, { foreignKey: 'cruiseId', as: 'cruise' });

Cruise.hasMany(CruiseSchedule, { foreignKey: 'cruiseId', as: 'schedules' });
CruiseSchedule.belongsTo(Cruise, { foreignKey: 'cruiseId', as: 'cruise' });

// ── Stay Associations
Stay.hasMany(Room, { foreignKey: 'stayId', as: 'rooms' });
Room.belongsTo(Stay, { foreignKey: 'stayId', as: 'stay' });

Stay.hasMany(StayAmenity, { foreignKey: 'stayId', as: 'amenitiesList' });
StayAmenity.belongsTo(Stay, { foreignKey: 'stayId', as: 'stay' });

// ── Activity Associations
Activity.hasMany(ActivityLocation, { foreignKey: 'activityId', as: 'locations', onDelete: 'CASCADE' });
ActivityLocation.belongsTo(Activity, { foreignKey: 'activityId', as: 'activity' });

Activity.hasMany(ActivitySlot, { foreignKey: 'activityId', as: 'slotsList', onDelete: 'CASCADE' });
ActivitySlot.belongsTo(Activity, { foreignKey: 'activityId', as: 'activity' });

ActivityLocation.hasMany(ActivitySlot, { foreignKey: 'locationId', as: 'slots', onDelete: 'SET NULL' });
ActivitySlot.belongsTo(ActivityLocation, { foreignKey: 'locationId', as: 'location' });

ActivitySlot.hasMany(Booking, { foreignKey: 'slotId', as: 'bookings' });
Booking.belongsTo(ActivitySlot, { foreignKey: 'slotId', as: 'activitySlot' });

Booking.belongsTo(ActivityLocation, { foreignKey: 'activityLocationId', as: 'activityLocation' });

ActivitySlot.hasMany(SlotReservation, { foreignKey: 'slotId', as: 'reservations', onDelete: 'CASCADE' });
SlotReservation.belongsTo(ActivitySlot, { foreignKey: 'slotId', as: 'slot' });

Booking.hasOne(SlotReservation, { foreignKey: 'bookingId', as: 'slotReservation' });
SlotReservation.belongsTo(Booking, { foreignKey: 'bookingId', as: 'booking' });

// ── Booking Associations
Booking.hasMany(BookingGuest, { foreignKey: 'bookingId', as: 'guests' });
BookingGuest.belongsTo(Booking, { foreignKey: 'bookingId', as: 'booking' });

Booking.belongsTo(Ferry, { foreignKey: 'ferryId', as: 'ferry' });
Booking.belongsTo(Cruise, { foreignKey: 'cruiseId', as: 'cruise' });
Booking.belongsTo(Stay, { foreignKey: 'stayId', as: 'stay' });
Booking.belongsTo(Activity, { foreignKey: 'activityId', as: 'activity' });
Booking.belongsTo(Package, { foreignKey: 'packageId', as: 'package' });
Booking.belongsTo(FerrySchedule, { foreignKey: 'scheduleId', as: 'ferrySchedule' });

// ── Blog Associations
BlogCategory.hasMany(Blog, { foreignKey: 'categoryId', as: 'blogs' });
Blog.belongsTo(BlogCategory, { foreignKey: 'categoryId', as: 'category' });

// ── Itinerary Associations
Itinerary.hasMany(ItineraryDay, { as: 'days', foreignKey: 'itineraryId', onDelete: 'CASCADE' });
ItineraryDay.belongsTo(Itinerary, { foreignKey: 'itineraryId' });

ItineraryDay.hasMany(ItineraryActivity, { as: 'activities', foreignKey: 'itineraryDayId', onDelete: 'CASCADE' });
ItineraryActivity.belongsTo(ItineraryDay, { foreignKey: 'itineraryDayId' });

ItineraryDay.hasMany(ItineraryMeal, { as: 'meals', foreignKey: 'itineraryDayId', onDelete: 'CASCADE' });
ItineraryMeal.belongsTo(ItineraryDay, { foreignKey: 'itineraryDayId' });

export {
  sequelize,
  User,
  Destination,
  Ferry,
  FerryRoute,
  FerrySchedule,
  Cruise,
  CruiseRoute,
  CruiseSchedule,
  Stay,
  Room,
  StayAmenity,
  Booking,
  BookingGuest,
  BlogCategory,
  Blog,
  ContactMessage,
  Inquiry,
  Review,
  Media,
  Place,
  Activity,
  ActivityLocation,
  ActivitySlot,
  SlotReservation,
  Package,
  AuditLog,
  ShiftLog,
  FilmChapter,
  Testimonial,
  Itinerary,
  ItineraryDay,
  ItineraryActivity,
  ItineraryMeal,
  Setting,
  MasterCategory,
  MasterLocation,
  Gallery,
};
