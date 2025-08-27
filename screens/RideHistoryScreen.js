import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Header from "../components/Header";
import { useRide } from "../App"; // get rides from context

export default function RideHistoryScreen({ navigation }) {
  const { rides } = useRide(); // use rides from context

  return (
    <View style={styles.container}>
      <Header title="Ride History" onBack={() => navigation.goBack()} />

      {rides.length === 0 ? (
        <Text style={styles.empty}>No rides yet</Text>
      ) : (
        <FlatList
          data={rides}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.date}>{item.date || "Today"}</Text>
              <Text style={styles.route}>
                {item.pickup} → {item.drop}
              </Text>
              <Text>Vehicle: {item.vehicle}</Text>
              <Text style={styles.fare}>Total: ₹{item.fare}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f9fa" },
  card: {
    backgroundColor: "white",
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  date: { color: "#555", marginBottom: 4, fontSize: 12 },
  route: { fontWeight: "bold", fontSize: 16, marginBottom: 4 },
  fare: { marginTop: 6, fontWeight: "bold", color: "#1e90ff" },
  empty: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
    color: "gray",
  },
});
