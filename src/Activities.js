import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Button } from "react-native-paper";

// Define motivational quotes data
const activity = [
  {
    id: 1,
    category: "happy",

    name: "Meditation",
    image: require("../components/activities/a1.jpg"),
    description:
      "Meditation is a technique that involves focusing your attention on a particular object, thought, or activity to calm your mind and reduce stress.",
    website: "https://www.headspace.com/",
    video: "https://www.youtube.com/watch?v=inpok4MKVLM",
  },
  {
    id: 2,
    category: "happy",

    name: "Cooking",
    image: require("../components/activities/a2.jpg"),
    description:
      "Cooking involves preparing food using various techniques such as chopping, mixing, and baking.",
    website: "https://www.foodnetwork.com/recipes",
    video: "https://www.youtube.com/watch?v=rhV7Ez_LGMU",
  },
  {
    id: 3,
    category: "sad",

    name: "Yoga",
    image: require("../components/activities/a3.jpg"),
    description:
      "Yoga is a physical, mental, and spiritual practice that originated in ancient India.",
    website: "https://www.yogajournal.com/",
    video: "https://www.youtube.com/watch?v=TxpA47tc3ZY",
  },
  {
    id: 4,
    category: "happy",

    name: "Reading",
    image: require("../components/activities/a4.jpg"),
    description:
      "Reading is a mental activity that involves interpreting written or printed information.",
    website: "https://www.goodreads.com/",
    video: "https://www.youtube.com/watch?v=pZVTgXlCRuw",
  },
  {
    id: 5,
    category: "sad",

    name: "Journaling",
    image: require("../components/activities/a5.jpg"),
    description:
      "Journaling is a written activity that involves recording your thoughts, feelings, and experiences.",
    website: "https://www.bulletjournal.com/",
    video: "https://www.youtube.com/watch?v=BAQFvdhqTUo",
  },
  {
    id: 6,
    category: "happy",

    name: "Kickboxing",
    image: require("../components/activities/a6.jpg"),
    description:
      "Kickboxing is a physical activity that combines martial arts techniques with boxing.",
    website: "https://www.titleboxingclub.com/",
    video: "https://www.youtube.com/watch?v=Hl7x5FmIuVw",
  },
  {
    id: 7,
    category: "happy",

    name: "Bungee jumping",
    image: require("../components/activities/a7.jpg"),
    description:
      "Bungee jumping is an extreme sport that involves jumping from a tall structure while connected to a bungee cord.",
    website: "https://www.bungee.com/",
    video: "https://www.youtube.com/watch?v=hT1OKrTJHN0",
  },
  {
    id: 8,
    category: "happy",

    name: "Skydiving",
    image: require("../components/activities/a8.jpg"),
    description:
      "Skydiving is an extreme sport that involves jumping from an airplane and freefalling before deploying a parachute.",
    website: "https://www.skydiving.com/",
    video: "",
  },
  {
    id: 9,
    category: "sad",

    name: "Listening to Music",
    image: require("../components/activities/a9.jpg"),
    description:
      "Listening to music can be a great way to lift your mood and reduce stress.",
    website: "https://www.spotify.com/",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 10,
    category: "happy",

    name: "Reading a Thriller Novel",
    image: require("../components/activities/a10.jpg"),
    description:
      "Reading a thriller novel can be a great way to experience fear in a safe and controlled environment.",
    website: "https://www.goodreads.com/list/show/10798.Best_Thrillers_Ever",
    video: null,
  },
  {
    id: 11,
    category: "happy",

    name: "Watching a Comedy Movie",
    image: require("../components/activities/a11.jpg"),
    description:
      "Watching a comedy movie can be a great way to lift your mood and reduce stress.",
    website: "https://www.imdb.com/genre/comedy/",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 12,
    category: "sad",

    name: "Hiking",
    image: require("../components/activities/a12.jpg"),
    description:
      "Hiking involves walking in nature, which can be a great way to reduce stress and improve mood.",
    website: "https://www.alltrails.com/",
    video: "https://www.youtube.com/watch?v=JUCbCF1zsjQ",
  },
  {
    id: 13,
    category: "happy",

    name: "Dancing",
    image: require("../components/activities/a13.jpg"),
    description:
      "Dancing can be a great way to improve mood and boost energy levels.",
    website: "https://www.dance.org/",
    video: "https://www.youtube.com/watch?v=PGNiXGX2nLU",
  },

  {
    id: 14,
    category: "happy",

    name: "Volunteering",
    image: require("../components/activities/a14.jpg"),
    description:
      "Volunteering can be a great way to improve mood and gain a sense of purpose.",
    website: "https://www.volunteermatch.org/",
    video: null,
  },
  {
    id: 15,
    category: "sad",

    name: "Screaming into a Pillow",
    image: require("../components/activities/a15.jpg"),
    description:
      "Screaming into a pillow can be a great way to release anger and frustration in a safe and controlled environment.",
    website: null,
    video: null,
  },
  {
    id: 16,
    category: "sad",

    name: "Watching a Horror Movie",
    image: require("../components/activities/a16.jpg"),
    description:
      "Watching a horror movie can be a great way to experience fear in a safe and controlled environment.",
    website: "https://www.imdb.com/genre/horror/",
    video: "https://www.youtube.com/watch?v=HdELcPN7Vd8",
  },
];

const MotivationalQuotesApp = () => {
  const video = () => {
    // Open video in a new screen or modal
    // Example:
    Linking.openURL(activity[1].video);
  };

  const website = () => {
    // Open website in a webview or in the device's default browser
    // Example:
    Linking.openURL(activity[1].website);
  };
  // const []
  // Render individual quote card
  const renderQuoteCard = ({ item }) =>
    item && item.category === "happy" ? (
      <View style={styles.cardContainer}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
        <Text
          style={{
            margin: 10,
            borderRadius: 7,
            fontSize: 20,
            fontWeight: "bold",
            paddingTop: 10,

            color: "black",
            // backgroundColor: "white",
          }}
        >
          {item.name}
        </Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.actions}>
          {item.website && (
            <Button
              style={{ margin: 10 }}
              mode="contained"
              color="orange"
              onPress={() => website()}
            >
              website
            </Button>
            //   <TouchableOpacity style={styles.button}>
            //     <Text style={styles.buttonText}>Website</Text>
            //   </TouchableOpacity>
          )}
        </View>

        <Button
          style={{ margin: 10 }}
          mode="contained"
          color="orange"
          onPress={() => video()}
        >
          video
        </Button>
      </View>
    ) : null;
  return (
    <View style={styles.container}>
      <FlatList
        data={activity}
        renderItem={renderQuoteCard}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 4,
    padding: 8,
    marginLeft: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  container: {
    // flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
    marginVertical: 8,
    padding: 16,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  //   image: {
  //     flex: 1,
  //     width: "100%",
  //     // height: "100%",
  //     borderRadius: 8,
  //     marginBottom: 8,
  //   },
});

export default MotivationalQuotesApp;
