import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";

export default function Profile({ navigation }) {
  return (
    <View >
      <View style={style.container1}>
        <Text style={style.title}>User Profile</Text>
      </View>
      <View style={{ padding: 20, alignItems: "center" }}>
      </View>
      <View style={{ position: "absolute" }}>
     
        <View style={{ paddingTop:50, paddingLeft: 100 }}>
    
          <Text style={style.profile}>Andrew</Text>
          <Text style={style.profile}>andrew@gmail.com</Text>
          <Text style={style.profile}>LICET, Nungambakkam, Chennai,India</Text>

          <Text style={style.profile}>89898990</Text>


          <TouchableOpacity
            style={style.logico}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
           
          </TouchableOpacity>
        </View>
      
      </View>
    </View>
  );
}

const style = StyleSheet.create({

  container1: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  title: {
    fontWeight: "bold",
    fontSize: 25,
  },

  userImage: {
    height: 70,
    width: 70,
    borderRadius: 50,
    borderColor: "#ffffff",
  },

  // userName: {
  //   textAlign: "center",
  //   fontSize: 12,
  //   marginTop: 5,
  //   letterSpacing: 2,
  // },

  // addBtnContainer: {
  //   marginTop: 55,
  //   backgroundColor: "#4c68d7",
  //   marginLeft: "53%",
  //   width: 19,
  //   height: 19,
  //   borderRadius: 50,
  //   borderWidth: 1.5,
  //   borderColor: "#fff",
  //   justifyContent: "center",
  // },

  // addBtn: {
  //   alignItems: "center",
  // },

  icons: {
    height: 50,
    width: 50,
    borderRadius: 50,
    // borderColor: "yellow",
    borderWidth: 3,
    marginStart: 10,
  },

  icons1: {
    marginEnd: 10,
  },

  about: {
    alignItems: "center",
    padding: 15,
    textAlign: "center",
    paddingTop: 100,
  },

  logico: {
    fontSize: 12,
    margin: 35,
    alignItems: "center",
  },

  icons3: {
    height: 30,
    width: 26,
    padding: 10,
  },

  profile: {
    flex: 1,
    padding: 10,
    fontWeight: "bold",
  },
});
