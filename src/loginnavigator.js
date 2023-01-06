import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./login";
import Signup from "./signup";

const Stack = createNativeStackNavigator();

export default function LoginNavigator(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Signup"
        component={Signup}
        // screenOptions={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        // screenOptions={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
