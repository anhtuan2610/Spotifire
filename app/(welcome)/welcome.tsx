import {
  Bird1,
  Bird2,
  Circle1,
  Circle2,
  Circle3,
  Circle4,
  Cloud1,
  Cloud2,
} from "@/assets/vectors";
import MainButton from "@/components/common/MainButton";
import { router } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const WelcomeScreen = () => {
  const translateX = useSharedValue(50);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(0);

  const translateXStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const translateYStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const scaleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  useEffect(() => {
    translateX.value = withTiming(0, {
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
    });
    translateY.value = withRepeat(
      withTiming(-20, { duration: 1000, easing: Easing.inOut(Easing.ease) }), // thay đổi giá trị theo thời gian
      -1, // số lần lặp lại animation
      true // true: lặp lại theo chiều ngược lại (tức là từ giá trị ban đầu là 0 sẽ đến -20 rồi lại từ -20 về 0)
    );
    scale.value = withTiming(1, {
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/welcome/logo.png")}
        style={styles.logo}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title1}>Hi Afsar, Welcome</Text>
        <Text style={styles.title2}>to Silent Moon</Text>
      </View>
      <Text style={styles.title3}>
        Explore the app, Find some peace of mind to{"\n"} prepare for meditation
      </Text>
      <Animated.View style={[styles.cloud1Container, translateXStyle]}>
        <Cloud1 />
      </Animated.View>
      <View style={styles.circleWrapContainer}>
        <Animated.View style={[styles.circleWrapper, scaleStyle]}>
          <Circle4 />
        </Animated.View>
        <Animated.View style={[styles.circleWrapper, scaleStyle]}>
          <Circle3 />
        </Animated.View>
        <Animated.View style={[styles.circleWrapper, scaleStyle]}>
          <Circle2 />
        </Animated.View>
        <Animated.View style={[styles.circleWrapper, scaleStyle]}>
          <Circle1 />
        </Animated.View>
      </View>
      <Animated.Image
        style={[styles.image, translateYStyle]}
        source={require("@/assets/images/welcome/image.png")}
      />
      <Animated.View style={[styles.cloud2Container, translateXStyle]}>
        <Cloud2 />
      </Animated.View>
      <MainButton
        text="GET STARTED"
        styleButton={{ backgroundColor: "#EBEAEC", marginTop: 460 }}
        styleText={{ color: "#171717" }}
        actionHandle={() => router.push("/(welcome)/topic")}
      />
      <View style={styles.bird1Container}>
        <Bird1 />
      </View>
      <View style={styles.bird2Container}>
        <Bird2 />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8E97FD",
    paddingTop: 50,
    alignItems: "center",
    paddingHorizontal: 22,
  },
  logo: {
    width: 178,
    height: 40,
    objectFit: "contain",
  },
  titleContainer: {
    marginTop: 76,
  },
  title1: {
    fontFamily: "Helvatica-Bold",
    fontSize: 30,
    color: "#FFECCC",
    textAlign: "center",
    lineHeight: 30,
  },
  title2: {
    fontFamily: "Helvatica-Light",
    fontSize: 30,
    color: "#FFECCC",
    textAlign: "center",
  },
  title3: {
    fontFamily: "Helvatica-Medium",
    fontSize: 16,
    color: "#EBEAEC",
    textAlign: "center",
    marginTop: 15,
    lineHeight: 28,
  },
  image: {
    position: "absolute",
    bottom: 120,
    width: "75%",
    objectFit: "contain",
  },
  circleWrapContainer: {
    position: "absolute",
    top: 600,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  circleWrapper: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  cloud1Container: {
    position: "absolute",
    top: "40%",
    left: 0,
  },
  cloud2Container: {
    position: "absolute",
    top: "50%",
    right: 0,
  },
  bird1Container: {
    position: "absolute",
    top: "50%",
    left: 40,
  },
  bird2Container: {
    position: "absolute",
    top: "40%",
    right: 0,
  },
});
