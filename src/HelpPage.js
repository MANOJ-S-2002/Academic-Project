import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import HelpData from "./HelpPageData";

export default function HelpPage() {
  const [answer, setAnswer] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.mainheader}>FAQ</Text>
      <View>
        {HelpData.map(({ id, question, Answer }) => {
          return (
            <View key={id} style={styles.Listcontainer}>
              <View style={styles.questionContainer}>
                <Text style={styles.questionText}>{question}</Text>
                <View style={styles.btn}>
                  <Pressable onPress={() => setAnswer(!answer)}>
                    {!answer ? (
                      <Ionicons name="add" size={25} color="black" />
                    ) : (
                      <Ionicons name="remove" size={25} color="black" />
                    )}
                  </Pressable>
                </View>
              </View>
              <View style={answer ? styles.answer : styles.hidden}>
                {answer && <Text style={styles.answerText}>{Answer}</Text>}
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainheader: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 40,
    marginBottom: 20,
    fontWeight: "bold",
  },
  Listcontainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  questionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  btn: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#f6f6f6",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  answer: {
    marginTop: 10,
    padding: 20,
    backgroundColor: "#f6f6f6",
    borderRadius: 10,
  },
  answerText: {
    fontSize: 16,
  },
  hidden: {
    height: 0,
    overflow: "hidden",
  },
});

// import React, { useState } from "react";
// import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import HelpData from "./HelpPageData";

// export default function HelpPage () {
//   const [answer, setAnswer] = useState(true);

//   return (
//     // <React.StrictMode>
//     <ScrollView>
//       <SafeAreaView style={styles.container}>
//         <Text style={styles.mainheader}>FAQ</Text>
//         <View>
//           {HelpData.map(({ id, question, Answer }) => {
//             return (
//               <View key={id} style={styles.Listcontainer}>
//                 <View
//                   style={{
//                     flexDirection: "row",
//                     justifyContent: "space-between",
//                   }}
//                 >
//                   <Text style={{ fontWeight: "bold" }}>{question}</Text>
//                   <View style={styles.btn}>
//                     <Pressable
//                       onPress={() => {
//                         setAnswer(!answer);
//                       }}
//                     >
//                       {!answer ? (
//                         <Ionicons name="add" size={25}></Ionicons>
//                       ) : (
//                         <Ionicons name="remove" size={25}></Ionicons>
//                       )}
//                     </Pressable>
//                   </View>
//                 </View>
//                 <View style={styles.answer}>
//                   {answer && <Text>{Answer}</Text>}
//                 </View>
//               </View>
//             );
//           })}
//         </View>
//       </SafeAreaView>
//     </ScrollView>
//     // </React.StrictMode>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//     margin: 10,
//     marginRight: 30,
//     marginLeft: 30,
//   },
//   mainheader: {
//     textAlign: "center",
//     marginTop: 20,
//     // fontSize: 20,
//   },
//   Listcontainer: {
//     justifyContent: "space-between",
//     marginTop: 30,
//     padding: 10,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     backgroundColor: "white",
//     marginTop: 20,
//   },
//   btn: {
//     width: 25,
//     alignItems: "center",
//     height: 25,
//     justifyContent: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     backgroundColor: "white",
//     borderRadius: 50,
//   },
//   answer: {
//     backgroundColor: "#f6f6f6",
//   },
// });
