

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import about from "../components/about.png"


const Aboutus = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {

  const fetchData=()=>{
    console.log("clicked")
       fetch("http://10.0.2.2:5000/predict")

    // fetch("http://192.168.103.225:5000/predict")
      .then((res) => 
        res.json())
      .then((data) => {
        console.log("insdem 2 then");
        setData(data);
        console.log(data);
      })
      .catch((e) => {

        console.log("insdem errr");
        console.log(e)
      });
  // }, []);
    }
// let a=1//;/
// useEffect(()=> console.log(a++,data),[])

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Text
              style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }}
            >
           {data}
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  color: "#005114",
                  padding: 5,
                  textAlign: "center",
                }}
                onPress={()=>fetchData()}
              >
                SPAM
              </Text>
            </View>

            <View>
              <Image
                source={about}
                style={{
                  height: 350,
                  width: 330,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "black",
                  padding: 5,
                }}
              >
                Our Mission
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 15, padding: 10 }}>
                To provide children activity maintenance and genetrate a report
                and that will be sent to the parents
              </Text>
            </View>

            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "black",
                  padding: 5,
                  textAlign: "center",
                }}
              >
                Contact us
              </Text>
            </View>
            <View style={styles.contact}>
              <View>
                <Text style={styles.InputHighLight}>Email :</Text>
                <TextInput
                  style={styles.input}
                  mode="outlined"
                  label="Enter Email"
                  //   style={{ marginLeft: 0 }}
                />
              </View>
              <View>
                <Text style={styles.InputHighLight}>Message :</Text>
                <TextInput
                  style={styles.input}
                  mode="outlined"
                  label="Enter Message"
                  //   style={{ height: 150, marginLeft: 0 }}
                />
              </View>
              <View>
                <Button
                  style={{
                    margin: 10,
                    backgroundColor: "black",
                    marginLeft: 0,
                    // color: "black"
                  }}
                  mode="contained"
                >
                  Submit
                </Button>
              </View>
            </View>

            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "black",
                  padding: 5,
                }}
              >
                Follow us on
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                padding: 10,
                justifyContent: "space-around",
                backgroundColor: "#f6f6f6",
              }}
            >
              <Pressable>
                <Ionicons
                  name="logo-facebook"
                  style={{ color: "#4267B2", fontSize: 30 }}
                />
              </Pressable>
              <Pressable>
                <Ionicons
                  name="logo-instagram"
                  style={styles.icons}
                  //   style={{ color: "#8a3ab9", fontSize: 30 }}
                />
              </Pressable>
              <Pressable>
                <Ionicons
                  name="logo-twitter"
                  style={{ color: "#1DA1F2", fontSize: 30 }}
                />
              </Pressable>
              <Pressable>
                <Ionicons
                  name="logo-github"
                  style={{ color: "#333", fontSize: 30 }}
                />
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Aboutus;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    // backgroundColor: "#f6f6f6",
  },
  steps: {
    padding: 4,
  },
  highLight: {
    color: "#2EA2C1",
    fontSize: 17,
  },
  input: {
    width: 300,
    height: 40,
    marginHorizontal: 25,
  },
  contact: {
    padding: 5,
  },
  InputHighLight: {
    padding: 3,
    fontSize: 17,
    // color: "#005114",
    fontWeight: "bold",
  },
});
