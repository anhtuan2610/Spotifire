import AntDesign from "@expo/vector-icons/AntDesign";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DailyThought = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("@/assets/images/home/daily-thought.png")}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Daily Thought</Text>
        <Text style={styles.subtitle}>MEDITATION • 3 - 10 MIN</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <AntDesign name="caretright" size={20} color="#3F414E" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333242",
    borderRadius: 10,
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    overflow: "hidden",
    position: "relative",
    marginTop: 20,
    paddingHorizontal: 30,
  },
  image: {
    position: "absolute",
    top: -48,
    left: -190,
    borderRadius: 30,
    marginRight: 15,
    transform: [{ scale: 0.6 }],
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontFamily: "Helvatica-Bold",
  },
  subtitle: {
    color: "#EBEAEC",
    fontSize: 12,
    fontFamily: "Helvatica-Medium",
    marginTop: 5,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DailyThought;
