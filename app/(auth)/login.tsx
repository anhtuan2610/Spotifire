import { GoogleIcon } from "@/assets/vectors";
import BackScreenButton from "@/components/common/BackScreenButotn";
import InputForm from "@/components/common/InputForm";
import MainButton from "@/components/common/MainButton";
import ServiceButton from "@/components/common/ServiceButton";
import Fontisto from "@expo/vector-icons/Fontisto";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const LoginScreen = () => {
  const handleLogin = () => {
    router.replace("/(welcome)/welcome");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require("@/assets/images/login/background.png")}
      />
      <BackScreenButton />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome Back!</Text>
        <View style={styles.serviceContainer}>
          <ServiceButton
            icon={<Fontisto name="facebook" size={24} color="white" />}
            text="CONTINUE WITH FACEBOOK"
            textColor="#fff"
            bgColor="#7583CA"
          />
          <ServiceButton
            icon={<GoogleIcon />}
            text="CONTINUE WITH GOOGLE"
            textColor="#3F414E"
            bgColor="#ffffff"
          />
        </View>
        <Text style={styles.orText}>OR LOG IN WITH EMAIL</Text>
        <View style={styles.inputFormContainer}>
          <InputForm placeholder="Email address" />
          <InputForm placeholder="Password" />
        </View>
        <MainButton
          text="LOG IN"
          styleButton={{ marginTop: 30 }}
          actionHandle={handleLogin}
        />
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        <View style={styles.bottomContainer}>
          <Text style={styles.alreadyText}>ALREADY HAVE AN ACCOUNT? </Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
            <Text style={styles.logInText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  imageBackground: {
    position: "absolute",
    top: -50,
  },
  title: {
    fontFamily: "Helvatica-Bold",
    fontSize: 28,
    color: "#3F414E",
  },
  serviceContainer: {
    gap: 20,
    marginTop: 32,
    width: "100%",
  },
  contentContainer: {
    alignItems: "center",
    marginTop: 28,
    flex: 1,
  },
  orText: {
    marginVertical: 40,
    fontFamily: "Helvatica-Bold",
    fontSize: 16,
    color: "#A1A4B2",
  },
  inputFormContainer: {
    width: "100%",
    gap: 20,
  },
  forgotPasswordText: {
    marginTop: 20,
    fontFamily: "HelveticaNeue-Medium",
    fontSize: 14,
    color: "#3F414E",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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

export default LoginScreen;
