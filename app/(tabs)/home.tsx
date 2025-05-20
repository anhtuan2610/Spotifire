import DailyThought from "@/components/home/DailyThought";
import MusicCard from "@/components/home/MusicCard";
import MusicCard2 from "@/components/home/MusicCard2";
import Recommended from "@/components/home/Recommended";
import { Image, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/home/logo.png")}
        style={styles.logo}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title1}>Good Morning, Afsar</Text>
        <Text style={styles.title2}>We Wish you have a good day</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.cardsMusicContainer}>
          <MusicCard />
          <MusicCard2 />
        </View>
        <DailyThought />
        <Recommended />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 50,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 178,
    height: 40,
    objectFit: "contain",
  },
  title1: {
    fontFamily: "Helvatica-Bold",
    fontSize: 30,
    color: "#3F414E",
    lineHeight: 30,
  },
  title2: {
    fontFamily: "Helvatica-Light",
    fontSize: 20,
    color: "#A1A4B2",
  },
  titleContainer: {
    marginTop: 30,
    alignSelf: "flex-start",
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    marginTop: 30,
  },
  cardsMusicContainer: {
    flexDirection: "row",
    gap: 20,
    width: "100%",
  },
});

export default HomeScreen;
