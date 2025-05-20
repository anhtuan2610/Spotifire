import { router } from "expo-router";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const TopicScreen = () => {
  const handleRedirect = () => {
    router.push("/(welcome)/reminders");
  };
  return (
    <View style={styles.container}>
      <Image
        style={{ position: "absolute", top: 60 }}
        source={require("@/assets/images/welcome/topic.png")}
      />
      <View>
        <Text style={styles.title1}>What Brings you</Text>
        <Text style={styles.title2}>to Silent Moon?</Text>
      </View>
      <Text style={styles.title3}>choose a topic a focuse on:</Text>
      <ScrollView
        contentContainerStyle={styles.topicContainer}
        showsVerticalScrollIndicator={false}
      >
        <Pressable
          style={[styles.topicCard, { backgroundColor: "#8E97FD" }]}
          onPress={handleRedirect}
        >
          <Image
            style={styles.topicCardImage}
            source={require("@/assets/images/topic/image1.png")}
          />
          <Text style={[styles.topicCardText, { color: "#FFECCC" }]}>
            Reduce Stress
          </Text>
        </Pressable>
        <Pressable
          style={[styles.topicCard, { backgroundColor: "#FA6E5A" }]}
          onPress={handleRedirect}
        >
          <Image
            style={styles.topicCardImage}
            source={require("@/assets/images/topic/image2.png")}
          />
          <Text style={[styles.topicCardText, { color: "#FEF9F3" }]}>
            Improve Performance
          </Text>
        </Pressable>
        <Pressable
          style={[styles.topicCard, { backgroundColor: "#FEB18F" }]}
          onPress={handleRedirect}
        >
          <Image
            style={styles.topicCardImage}
            source={require("@/assets/images/topic/image3.png")}
          />
          <Text style={[styles.topicCardText, { color: "#3F414E" }]}>
            Increase Happiness
          </Text>
        </Pressable>
        <Pressable
          style={[styles.topicCard, { backgroundColor: "#FFCF86" }]}
          onPress={handleRedirect}
        >
          <Image
            style={styles.topicCardImage}
            source={require("@/assets/images/topic/image4.png")}
          />
          <Text style={[styles.topicCardText, { color: "#3F414E" }]}>
            Reduce Anxiety
          </Text>
        </Pressable>
        <Pressable
          style={[styles.topicCard, { backgroundColor: "#6CB28E" }]}
          onPress={handleRedirect}
        >
          <Image
            style={styles.topicCardImage}
            source={require("@/assets/images/topic/image5.png")}
          />
          <Text style={[styles.topicCardText, { color: "#FFECCC" }]}>
            Personal Growth
          </Text>
        </Pressable>
        <View style={[styles.topicCard, { backgroundColor: "#4E5567" }]}>
          <Image
            style={styles.topicCardImage}
            source={require("@/assets/images/topic/image6.png")}
          />
          <Text style={[styles.topicCardText, { color: "#EBEAEC" }]}>
            Better Sleep
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 76,
  },
  title1: {
    fontFamily: "Helvatica-Bold",
    fontSize: 28,
    color: "#3F414E",
    lineHeight: 30,
  },
  title2: {
    fontFamily: "Helvatica-Bold",
    fontSize: 28,
    color: "#3F414E",
  },
  title3: {
    fontFamily: "Helvatica-Light",
    fontSize: 26,
    color: "#A1A4B2",
    marginVertical: 16,
  },
  topicContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 24,
    gap: 14,
    paddingBottom: 60,
  },
  topicCard: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    overflow: "hidden",
    justifyContent: "space-between",
  },
  topicCardImage: {
    width: "100%",
    height: 150, // thêm chiều cao để tránh ảnh bị collapse
    resizeMode: "cover", // Thay vì objectFit
  },
  topicCardText: {
    fontFamily: "Helvatica-Bold",
    fontSize: 18,
    paddingHorizontal: 16,
    paddingBlock: 16,
    lineHeight: 24,
  },
});

export default TopicScreen;
