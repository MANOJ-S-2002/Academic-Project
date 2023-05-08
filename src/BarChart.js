import React from "react";
import { StyleSheet, View } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

const Activity = ({data}) => {
  // console.log(data)
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <BarChart
        style={graphStyle.chart}
        data={data}
        width={screenWidth}
        height={220}
        // yAxisLabel=""
        chartConfig={{
          backgroundGradientFrom: "#f5f5f5",
          backgroundGradientFromOpacity: 1,
          backgroundGradientTo: "#f5f5f5",
          backgroundGradientToOpacity: 1,
          color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Use a shade of blue
          strokeWidth: 2, // optional, default 3
          barPercentage: 1,
          useShadowColorFromDataset: false, // optional
        }}
        verticalLabelRotation={20}
      />
    </View>
  );
};

const graphStyle = StyleSheet.create({
  chart: {
    borderRadius: 16,
    marginBottom: 16,
    marginTop:22,
    // paddingHorizontal: 16,
    // paddingVertical: 12,
    backgroundColor: "#fff",
  },
});
export default Activity;

// import React from "react";
// import { BarChart, XAxis, YAxis,Grid } from "react-native-svg-charts";
// import { View } from "react-native";
// const BarChartExample = () => {
//   const data = [

//     {
//       month: "Jan",
//       value: 50,
//     },
//     {
//       month: "Feb",
//       value: 70,
//     },
//     {
//       month: "Mar",
//       value: 60,
//     },
//     {
//       month: "Apr",
//       value: 80,
//     },
//   ];

//   const xAxisData = data.map((item) => item.month);
//   const yAxisData = data.map((item) => item.value);

//   return (
//     <View style={{ height: 300, padding: 20 }}>
//       <BarChart
//         style={{ flex: 1 }}
//         data={yAxisData}
//         svg={{ fill: "rgba(134, 65, 244, 0.8)" }}
//         contentInset={{ top: 20, bottom: 20 }}
//       >
//         <XAxis
//           style={{ marginHorizontal: -10 }}
//           data={xAxisData}
//           formatLabel={(value, index) => xAxisData[index]}
//           contentInset={{ left: 10, right: 10 }}
//           svg={{ fontSize: 14, fill: "black" }}
//         />
//         <YAxis
//           data={yAxisData}
//           contentInset={{ top: 20, bottom: 20 }}
//           svg={{ fontSize: 10, fill: "black" }}
//         />
//         <Grid/>
//       </BarChart>

//     </View>
//   );
// };

// export default BarChartExample;

// const generateDailyData = () => {
//   const data = {
//     labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//     datasets: [
//       {
//         data: [
//           Math.random() * 100,
//           Math.random() * 100,
//           Math.random() * 100,
//           Math.random() * 100,
//           Math.random() * 100,
//           Math.random() * 100,
//           Math.random() * 100,
//         ],
//         color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
//       },
//     ],
//   };

//   return data;
// };

// const generateWeeklyData = () => {
//   const data = {
//     labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
//     datasets: [
//       {
//         data: [
//           Math.random() * 100,
//           Math.random() * 100,
//           Math.random() * 100,
//           Math.random() * 100,
//         ],
//         color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
//       },
//     ],
//   };

//   return data;
// };

// const generateMonthlyData = () => {
//   const data = {
//     labels: [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ],
//     datasets: [
//       {
//         data: [
//           Math.random() * 100,
//           Math.random() * 100,
//           Math.random() * 100,
//           Math.random() * 100,
//           Math.random() * 100,
//           Math.random() * 100,
//           Math.random() * 100,
//           Math.random() * 100,
//           Math.random() * 100,
//           Math.random() * 100,
//           Math.random() * 100,
//           Math.random() * 100,
//         ],
//         color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
//       },
//     ],
//   };

//   return data;
// };
