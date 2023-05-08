

import React from "react";
import { View } from "react-native";
import Report from "./Report";
const KeyPad = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Report />
    </View>
  );
};

export default KeyPad;






// import React, { useEffect } from "react";
// import { View, Text } from "react-native";
// import { db } from "../FireBase";
// import { ref, set } from "firebase/database";
// import { Button } from "react-native-paper";

// export default function KeyPad() {

// useEffect(() => {
//   set(ref(db, "Report/Search"), {
//     Search: 7
//   })
//     .then()
//     .catch((err) => console.log("error"));
// });

// function handlepress(){
// console.log("Press");
// }
//   return (
//     <>
//       <View>
//         <Text>
//           This feature helps to use the keypad search of your child and get the
//           negative search
//         </Text>
//         <Button onPress={handlepress} >KeyPad</Button>
//       </View>
//     </>
//   );
// }
