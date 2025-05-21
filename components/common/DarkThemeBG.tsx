import { Cloud3 } from "@/assets/vectors";
import themeStore from "@/stores/theme";
import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const DarkThemeBG = () => {
  const mode = themeStore((state) => state.mode);
  const translateX1 = useSharedValue(0);
  const translateX2 = useSharedValue(0);

  const translateXStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX1.value }],
    };
  });

  const translateX2Style = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX2.value }],
    };
  });

  useEffect(() => {
    translateX1.value = withRepeat(
      withTiming(400, { duration: 16000, easing: Easing.linear }),
      -1,
      true
    );
    translateX2.value = withRepeat(
      withTiming(-400, { duration: 16000, easing: Easing.linear }),
      -1,
      true
    );
  }, []);

  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          backgroundColor: "#03174C",
        },
      ]}
    >
      <Image source={require("@/assets/images/theme/bg.png")} />
      {mode === "dark" && (
        <>
          <Animated.View style={[translateXStyle, styles.cloud1Container]}>
            <Cloud3 />
          </Animated.View>
          <Animated.View style={[translateX2Style, styles.cloud2Container]}>
            <Cloud3 />
          </Animated.View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cloud1Container: {
    position: "absolute",
    top: 100,
    left: 0,
  },
  cloud2Container: {
    position: "absolute",
    top: 400,
    right: 0,
  },
});

export default DarkThemeBG;
