import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Chart from "./BarChart";
const dailyData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [5, 7, 8, 6, 9, 10, 12],
    },
  ],
};

const weeklyData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      data: [20, 30, 25, 35],
    },
  ],
};

const monthlydata = {
  labels: ["Jan", "Feb", "Mar", "Apr"],
  datasets: [
    {
      data: [33, 15, 46,67],
    },
  ],
};
const DailyStatus = () => {
  return (
    <>
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>Daily Status</Text>
        <View>
          <Chart data={dailyData}  />
        </View>
        {/* <Text style={styles.statusValue}>Good</Text>        */}
      </View>
    </>
  );
};

const WeeklyStatus = () => {
  return (
    <View style={styles.statusContainer}>
      <Text style={styles.statusText}>Weekly Status</Text>
      <View>
        <Chart data ={weeklyData}/>
      </View>
      {/* <Text style={styles.statusValue}>Excellent</Text> */}
    </View>
  );
};

const MonthlyStatus = () => {
  return (
    <View style={styles.statusContainer}>
      <Text style={styles.statusText}>Monthly Status</Text>
      <View>
        <Chart data={monthlydata}/>
      </View>
      {/* <Text style={styles.statusValue}>Average</Text> */}
    </View>
  );
};

const Report = () => {
  const [activeTab, setActiveTab] = useState("daily");

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "daily" && styles.activeTabButton,
          ]}
          onPress={() => handleTabPress("daily")}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === "daily" && styles.activeTabButtonText,
            ]}
          >
            Daily
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "weekly" && styles.activeTabButton,
          ]}
          onPress={() => handleTabPress("weekly")}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === "weekly" && styles.activeTabButtonText,
            ]}
          >
            Weekly
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "monthly" && styles.activeTabButton,
          ]}
          onPress={() => handleTabPress("monthly")}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === "monthly" && styles.activeTabButtonText,
            ]}
          >
            Monthly
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.statusContainer}>
        {activeTab === "daily" && <DailyStatus />}
        {activeTab === "weekly" && <WeeklyStatus />}
        {activeTab === "monthly" && <MonthlyStatus />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    marginTop: 5,
  },
  tabsContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  tabButton: {
    paddingHorizontal: 35,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 7,
  },
  tabButtonText: {
    fontWeight: "bold",
    color: "#fff",
  },
  activeTabButton: {
    backgroundColor: "orange",
  },
  activeTabButtonText: {
    color: "#fff",
  },
  statusContainer: {
    // alignItems: "center",
    // justifyContent: "center",
  },
  statusText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  statusValue: {
    fontSize: 16,
    fontWeight: "normal",
  },
});

export default Report;








// import React from "react";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, Button, TextInput } from "react-native";
// import { useEffect, useState } from "react";
// import { printToFileAsync } from "expo-print";
// import { shareAsync } from "expo-sharing";
// import { db } from "../FireBase";
// import { ref, onValue } from "firebase/database";
// // import { color } from "react-native-reanimated";

// export default function Report() {
//   const [report, setReport] = useState([]);

//   useEffect(() => {
//     onValue(ref(db), (snapshot) => {
//       const data = snapshot.val();

//       if (data !== null) {
//         const firstReport = Object.values(data)[0]; // get the first item
//         setReport([firstReport]); // set the report state with the first item only
//       }
//     });
//   }, []);

//   const html = `
//     <html>
//       <body>
//         <h1>Hi This is your child's activity</h1>
//         <h2>He is in the location LICET</h2>
//         <h2>He serched negative activity 5 times </h2>
//       </body>
//     </html>
//   `;

//   let generatePdf = async () => {
//     const file = await printToFileAsync({
//       html: html,
//       base64: false,
//     });

//     await shareAsync(file.uri);
//   };

//   return (
//     <View style={styles.container}>
//       <View>
//         {report.map((rep) => (
//           <>
//             <Text>Location: Latitude:{rep.Location.Latitude}</Text>
//             <Text>Longitude:{rep.Location.Longitude}</Text>
//             <Text>Negative Search:{rep.Search.Search}</Text>
//           </>
//         ))}
//       </View>

//       <Button title="Generate PDF" onPress={generatePdf} />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     paddingBottom: 5,
//   },
//   textInput: {
//     alignSelf: "stretch",
//     padding: 8,
//     margin: 8,
//   },
// });
