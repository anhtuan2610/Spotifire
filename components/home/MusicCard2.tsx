import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MusicCard2 = () => {
  return (
    <View style={styles.cardMusicContainer}>
      <View style={{ position: "absolute", top: 20, right: 20 }}>
        <Image
          source={require("@/assets/images/home/card2.png")}
          style={styles.cardMusicImage}
        />
      </View>
      <Text style={styles.cardMusicText1}>Relaxation</Text>
      <Text style={styles.cardMusicText2}>MUSIC</Text>
      <View style={styles.cardMusicFooter}>
        <Text style={styles.cardMusicFooterText}>3-10 MIN</Text>
        <TouchableOpacity style={styles.cardMusicFooterButton}>
          <Text style={styles.cardMusicFooterButtonText}>START</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardMusicContainer: {
    position: "relative",
    padding: 15,
    overflow: "hidden",
    backgroundColor: "#FFC97E",
    borderRadius: 10,
    flex: 1,
  },
  cardMusicImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    transform: [{ scale: 1.5 }],
  },
  cardMusicText1: {
    marginTop: 60,
    fontFamily: "Helvatica-Bold",
    fontSize: 20,
    color: "#3F414E",
  },
  cardMusicText2: {
    fontFamily: "Helvatica-Medium",
    color: "#3F414E",
    fontSize: 14,
  },
  cardMusicFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  cardMusicFooterText: {
    color: "#3F414E",
    fontSize: 12,
    fontFamily: "Helvatica-Medium",
  },
  cardMusicFooterButton: {
    backgroundColor: "#3F414E",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
  },
  cardMusicFooterButtonText: {
    color: "#FEFFFE",
    fontSize: 14,
    fontFamily: "Helvatica-Medium",
  },
});
export default MusicCard2;
