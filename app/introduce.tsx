// app/introduce.tsx
import MainButton from "@/components/common/MainButton";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function IntroduceScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/introduce/background.png")}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/introduce/logo.png")}
          style={{ width: 178, height: 40, objectFit: "contain" }}
        />
      </View>
      <Image
        source={require("@/assets/images/introduce/image.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.title}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Helvatica-Bold",
              fontSize: 30,
              color: "#3F414E",
            }}
          >
            We are what we do
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Helvatica-Light",
              fontSize: 18,
              color: "#A1A4B2",
              lineHeight: 24,
            }}
          >
            Thousand of people are usign silent moon{"\n"} for smalls meditation
          </Text>
        </View>
        <MainButton text="SIGN UP" styleButton={{ marginTop: 62 }} />
        <View style={styles.bottomContainer}>
          <Text style={styles.alreadyText}>ALREADY HAVE AN ACCOUNT? </Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
            <Text style={styles.logInText}>LOG IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: "center",
  },
  imageBackground: {
    width: "100%",
    position: "absolute",
    top: -50,
  },
  logoContainer: {
    marginTop: 10,
  },
  image: {
    width: 333,
    height: 244,
    marginTop: 50,
  },
  content: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 130,
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },

  bottomContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  alreadyText: {
    textAlign: "center",
    fontFamily: "Helvatica-Medium",
    fontSize: 14,
    color: "#A1A4B2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logInText: {
    fontFamily: "Helvatica-Medium",
    fontSize: 14,
    color: "#8E97FD",
  },
});

export function unstable_settings() {
  return {
    initialRouteName: "introduce",
  };
}
