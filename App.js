import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import RideScreen from "./screens/RideScreen";
import RideHistoryScreen from "./screens/RideHistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}   // 👈 hides default header
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Ride" component={RideScreen} />
        <Stack.Screen name="History" component={RideHistoryScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
