// src/context/MapContext.jsx
// ─────────────────────────────────────────────────────────────────────────────
// MapContext — Global state provider for 3D map destination selection & camera target.

import React, { createContext, useContext, useState } from 'react';

const MapContext = createContext({
  selectedDestination: null,
  setSelectedDestination: () => {},
  cameraTarget: null,
  setCameraTarget: () => {},
  activeFilter: 'all',
  setActiveFilter: () => {},
});

export const MapProvider = ({ children }) => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [cameraTarget, setCameraTarget] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <MapContext.Provider
      value={{
        selectedDestination,
        setSelectedDestination,
        cameraTarget,
        setCameraTarget,
        activeFilter,
        setActiveFilter,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export const useMapContext = () => useContext(MapContext);
