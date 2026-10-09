// src/context/TripContext.jsx
// ─────────────────────────────────────────────────────────────────────────────
// TripContext — Global state provider for trip planning wizard & customized bookings.

import React, { createContext, useContext, useState } from 'react';

const TripContext = createContext({
  tripDraft: {
    dates: null,
    travelers: 2,
    style: 'Honeymoon & Romantic',
    selectedIslands: ['havelock', 'neil'],
    budget: 'luxury',
  },
  setTripDraft: () => {},
  updateTripDraft: () => {},
});

export const TripProvider = ({ children }) => {
  const [tripDraft, setTripDraft] = useState({
    dates: null,
    travelers: 2,
    style: 'Honeymoon & Romantic',
    selectedIslands: ['havelock', 'neil'],
    budget: 'luxury',
  });

  const updateTripDraft = (fields) => {
    setTripDraft((prev) => ({ ...prev, ...fields }));
  };

  return (
    <TripContext.Provider value={{ tripDraft, setTripDraft, updateTripDraft }}>
      {children}
    </TripContext.Provider>
  );
};

export const useTripContext = () => useContext(TripContext);
