import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Home";
import Login from "./src/Login";
import LoginNavigator from "./src/DrawerNavigator";
import Signup from "./src/Signup";
import DrawerNavigator from "./src/DrawerNavigator";
import HelpPage from "./src/HelpPage"
import About from "./src/AboutUs"
import Location from "./src/Location"
import Profile from "./src/Profile";
import AppUsage from "./src/AppUsage";
import { Keyboard } from "react-native";
import KeyPad from "./src/KeyPad";
import Report from "./src/Report";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
          }}
          initialRouteName="Login"
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />

          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Help" component={HelpPage} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Location" component={Location} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="AppUsage" component={AppUsage} />
          <Stack.Screen name="KeyPad" component={KeyPad} />
          <Stack.Screen name="Report "  component={Report}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
