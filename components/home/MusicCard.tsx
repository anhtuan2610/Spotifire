import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MusicCard = () => {
  return (
    <View style={styles.cardMusicContainer}>
      <View style={{ position: "absolute", top: -5, right: 0 }}>
        <Image
          source={require("@/assets/images/home/card1.png")}
          style={styles.cardMusicImage}
        />
      </View>
      <Text style={styles.cardMusicText1}>Basics</Text>
      <Text style={styles.cardMusicText2}>COURSE</Text>
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
    backgroundColor: "#8E97FD",
    borderRadius: 10,
    flex: 1,
  },
  cardMusicImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  cardMusicText1: {
    marginTop: 60,
    fontFamily: "Helvatica-Bold",
    fontSize: 20,
    color: "#FFECCC",
  },
  cardMusicText2: {
    fontFamily: "Helvatica-Medium",
    color: "#F7E8D0",
    fontSize: 14,
  },
  cardMusicFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  cardMusicFooterText: {
    color: "#EBEAEC",
    fontSize: 12,
    fontFamily: "Helvatica-Medium",
  },
  cardMusicFooterButton: {
    backgroundColor: "#EBEAEC",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
  },
  cardMusicFooterButtonText: {
    color: "#3F414E",
    fontSize: 14,
    fontFamily: "Helvatica-Medium",
  },
});
export default MusicCard;
