import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FareCard({ fare }) {
  if (!fare) return null;

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Fare Estimate</Text>
      <Text>Base Fare: ₹{fare.base}</Text>
      <Text>Distance: ₹{fare.distance}</Text>
      <Text>Time: ₹{fare.time}</Text>
      <Text>Tolls: ₹{fare.tolls}</Text>
      <Text>Platform Fee: ₹{fare.platform}</Text>
      <Text>Surge: ₹{fare.surge}</Text>
      <Text style={styles.total}>Total: ₹{fare.total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderWidth: 1, padding: 15, marginVertical: 10, borderRadius: 8 },
  heading: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
  total: { marginTop: 8, fontWeight: "bold", fontSize: 16 }
});
