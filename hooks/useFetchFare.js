import { useState, useEffect } from "react";

export default function useFetchFare(vehicle) {
  const [fare, setFare] = useState(null);

  useEffect(() => {
    if (!vehicle) return;
    // fake fare calculation
    const result = {
      base: 50,
      distance: vehicle.price * 3,
      time: 120,
      tolls: 40,
      platform: 20,
      surge: 83,
      total: 50 + vehicle.price * 3 + 120 + 40 + 20 + 83,
    };
    setFare(result);
  }, [vehicle]);

  return fare;
}
