import React from "react";


import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useEffect, useState } from "react";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";
import { db } from "../FireBase";
import { ref,onValue} from "firebase/database";
// import { color } from "react-native-reanimated";

export default function Report() {
  const [report, setReport] = useState([]);

useEffect(() => {
  onValue(ref(db), (snapshot) => {
    // setReport([]);
    const data = snapshot.val();

   
    if (data !== null) {
      Object.values(data).map((report) => {
     
        setReport((oldArray) => [...oldArray, report]);
        console.log(report)
      });
    }
  });
}, []);






  
const html = `
    <html>
      <body>
        <h1>Hi This is your child's activity</h1>
        <h2>He is in the location LICET</h2>
        <h2>He serched negative activity 5 times </h2>
      </body>
    </html>
  `;

  let generatePdf = async () => {
    const file = await printToFileAsync({
      html: html,
      base64: false,
    });

    await shareAsync(file.uri);
  };

  return (
    <View style={styles.container}>
      <View>
        {report.map((rep) => (
          <>
            <Text>Location:
              Latitude:{rep.Location.Latitude}</Text>
            <Text>Longitude:{rep.Location.Longitude}</Text>
            <Text>Negative Search:{rep.Search.Search}</Text>
          </>
        ))}
      </View>
      <Button title="Generate PDF" onPress={generatePdf} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 5
  },
  textInput: {
    alignSelf: "stretch",
    padding: 8,
    margin: 8,
  },
});