import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function VehicleCard({ vehicle, selected, onSelect }) {
  const isSelected = selected?.id === vehicle.id;
  return (
    <TouchableOpacity
      style={[styles.card, isSelected && styles.selected]}
      onPress={onSelect}
    >
      <Text>{vehicle.type} - ₹{vehicle.price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { padding: 12, marginVertical: 5, borderWidth: 1, borderRadius: 6, borderColor: "#ccc" },
  selected: { backgroundColor: "#d1f7d6", borderColor: "green" }
});
