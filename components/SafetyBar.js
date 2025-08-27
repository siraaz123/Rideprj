import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default function SafetyBar() {
  return (
    <View style={styles.container}>
      <Button title="SOS" onPress={() => alert("SOS Triggered!")} />
      <Button title="Share Ride" onPress={() => alert("Ride shared with contacts")} />
      <Button title="Cancel" onPress={() => alert("Ride Cancelled")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-around", marginVertical: 15 }
});
