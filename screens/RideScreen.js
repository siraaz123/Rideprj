import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import FareCard from "../components/FareCard";
import useRideReducer from "../hooks/useRideReducer";
import useFetchFare from "../hooks/useFetchFare";
import Header from "../components/Header";

export default function RideScreen({ route, navigation }) {
  const { pickup, drop, vehicle } = route.params;
  const [state, dispatch] = useRideReducer();
  const fare = useFetchFare(vehicle);

  useEffect(() => {
    dispatch({ type: "REQUEST" });
    setTimeout(() => dispatch({ type: "ACCEPT" }), 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Ride Details" onBack={() => navigation.goBack()} />

      <Text style={styles.heading}>Your Ride</Text>
      <Text>Pickup: {pickup}</Text>
      <Text>Drop: {drop}</Text>
      <Text>Vehicle: {vehicle.type}</Text>

      <FareCard fare={fare} />

      <Text style={styles.status}>Status: {state.status}</Text>

      {state.status === "in-progress" && (
        <Button title="Complete Ride" onPress={() => dispatch({ type: "COMPLETE" })} />
      )}

      {state.status === "completed" && (
        <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f9fa" },
  heading: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  status: { marginTop: 15, fontSize: 16, fontWeight: "bold", color: "#1e90ff" },
});
