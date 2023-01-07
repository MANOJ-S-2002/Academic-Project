import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import image from "../components/login.png";

export default function Home() {
  return (
    <>
      <ImageBackground style={Styles.image} source={image}>
        
        <View style={{ paddingTop:300}}>
          <Text style={{padding:20,color:"white" ,backgroundColor:"black" , borderRadius:10,}}>
            Hello parents this app is to maintain your students activities
          </Text>
        </View>
      </ImageBackground>
    </>
  );
}

const Styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "auto",
    flex: 1,
    alignItems: "center",
  },
});
