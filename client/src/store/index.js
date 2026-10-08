import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import destinationReducer from './destinationSlice';
import ferryReducer from './ferrySlice';
import cruiseReducer from './cruiseSlice';
import stayReducer from './staySlice';
import bookingReducer from './bookingSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    destinations: destinationReducer,
    ferries: ferryReducer,
    cruises: cruiseReducer,
    stays: stayReducer,
    bookings: bookingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
