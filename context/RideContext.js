import React, { createContext, useState, useContext } from "react";

const RideContext = createContext();

export const RideProvider = ({ children }) => {
  const [rides, setRides] = useState([]);

  const addRide = (ride) => {
    setRides((prevRides) => [...prevRides, ride]);
  };

  return (
    <RideContext.Provider value={{ rides, addRide }}>
      {children}
    </RideContext.Provider>
  );
};

export const useRide = () => useContext(RideContext);
