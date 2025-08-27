import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import VehicleCard from "../components/VehicleCard";
import Header from "../components/Header";

const vehicles = [
  { id: "1", type: "Bike", price: 90 },
  { id: "2", type: "Auto", price: 150 },
  { id: "3", type: "Cab", price: 300 },
];

export default function HomeScreen({ navigation }) {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [selected, setSelected] = useState(null);

  const confirmRide = () => {
    if (pickup && drop && selected) {
      navigation.navigate("Ride", { pickup, drop, vehicle: selected });
    } else {
      alert("⚠ Please fill all details");
    }
  };

  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <Header title="RideRight - Home" />

      {/* Quick navigation buttons */}
      <View style={styles.navRow}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("RideHistory")} // ✅ fixed
        >
          <Text style={styles.navText}>Ride History</Text>
        </TouchableOpacity>
      </View>

      {/* Ride booking inputs */}
      <TextInput
        placeholder="Pickup Location"
        style={styles.input}
        value={pickup}
        onChangeText={setPickup}
      />
      <TextInput
        placeholder="Drop Location"
        style={styles.input}
        value={drop}
        onChangeText={setDrop}
      />

      <Text style={styles.subheading}>Select Vehicle</Text>

      {/* Vehicle list + Confirm Ride under it */}
      <FlatList
        data={vehicles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <VehicleCard
            vehicle={item}
            selected={selected}
            onSelect={() => setSelected(item)}
          />
        )}
        ListFooterComponent={
          <View style={{ marginTop: 15 }}>
            <Button title="Confirm Ride" onPress={confirmRide} />
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f9fa" },

  navRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  navButton: {
    flex: 1,
    backgroundColor: "black",
    padding: 12,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: "center",
  },
  navText: { color: "white", fontWeight: "bold", fontSize: 16 },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 8,
    borderRadius: 5,
    backgroundColor: "white",
  },
  subheading: { fontSize: 18, fontWeight: "600", marginVertical: 10 },
});
