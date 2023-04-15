import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HelpPage from "./HelpPage";
import Aboutus from "./AboutUs";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import Home from "./Home"
import Location from "./Location";
import Report from "./Report";
import KeyPad from "./KeyPad";
import AppUsage from "./AppUsage";
import Profile from "./Profile";
import LoginStackNavigator from "./LoginStackNavigator";
const Drawer = createDrawerNavigator();

export default function DrawerContainer(props) {
  return (
    // <NavigationContainer>
    <Drawer.Navigator
      screenOptions={{
        // headerShown: false,
        drawerActiveBackgroundColor: "orange",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign name="profile" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Register"
        component={LoginStackNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign name="profile" size={25} color={color} />
          ),
        }}
      />
    
      <Drawer.Screen
        name="Location"
        component={Location}
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign name="profile" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="KeyPad"
        component={KeyPad}
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign name="profile" size={25} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="AppUsage"
        component={AppUsage}
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign name="profile" size={25} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Report"
        component={Report}
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign name="profile" size={25} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="User Profile"
        component={Profile}
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign name="profile" size={25} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Help"
        component={HelpPage}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="help" size={25} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="AboutUs"
        component={Aboutus}
        options={{
          drawerIcon: ({ color }) => (
            // <Image source={IconLogo} style={{ width: 35, height: 35 }} />
            <Ionicons name="help" size={25} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
    /* </NavigationContainer> */
  );
}
