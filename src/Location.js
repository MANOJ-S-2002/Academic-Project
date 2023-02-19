import React, { useState, useEffect } from "react";
import MapView, { Circle, Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import * as Location from "expo-location";
import { db } from "../FireBase";
import {ref,set} from "firebase/database"


export default function App() {

  

  
  
  const pin1 = {
    latitude: 13.059278,
    longitude: 80.233656,
  };
  const [pin, setPin] = useState({
    latitude: 13.059278,
    longitude: 80.233656,
  });
  // useEffect(()=>console.log(pin),pin);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
          console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(pin1);
      setPin({ latitude: location.coords.latitude, longitude: location.coords.longitude});
    })();
  }, []);

useEffect(()=>{
  set(ref(db,'Report/Location/'),{
    Latitude:pin1.latitude,
    Longitude:pin1.longitude
  })
  .then()
  .catch((err)=>console.log("error"))
})
  
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 13.059278,
          longitude: 80.233656,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002,
        }}
        showsUserLocation={true}
        onUserLocationChange={(e) => {
          setPin({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          });
        }}
      >
        <Marker
          coordinate={pin1}
          title="child"
          description="The place where your child last visited"
        />
        <Circle
          center={pin1}
          radius={100}
        ></Circle>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
