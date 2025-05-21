import { GoogleIcon } from "@/assets/vectors";
import BackScreenButton from "@/components/common/BackScreenButotn";
import DarkThemeBG from "@/components/common/DarkThemeBG";
import InputForm from "@/components/common/InputForm";
import MainButton from "@/components/common/MainButton";
import ServiceButton from "@/components/common/ServiceButton";
import themeStore from "@/stores/theme";
import Fontisto from "@expo/vector-icons/Fontisto";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const LoginScreen = () => {
  const mode = themeStore((state) => state.mode);
  const theme = themeStore((state) => state.theme);
  const [isChecked, setChecked] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {mode === "light" ? (
          <Image
            style={styles.imageBackground}
            source={require("@/assets/images/login/background.png")}
          />
        ) : (
          <DarkThemeBG />
        )}
        <BackScreenButton />
        <View style={styles.contentContainer}>
          <Text style={[{ color: theme.colors.textAuthTitle }, styles.title]}>
            Create your account
          </Text>
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
            <InputForm placeholder="Password" secureTextEntry />
            <InputForm placeholder="Confirm Password" secureTextEntry />
          </View>
          <View style={styles.privacyPolicyContainer}>
            <Text style={styles.privacyPolicyText1}>
              i have read the{" "}
              <Text style={styles.privacyPolicyText2}>Privacy Policy</Text>
            </Text>
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#7583CA" : undefined}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            />
          </View>
          <MainButton text="GET STARTED" styleButton={{ marginTop: 30 }} />
        </View>
      </View>
    </TouchableWithoutFeedback>
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
  privacyPolicyText1: {
    fontFamily: "Helvetica-Medium",
    fontSize: 14,
    color: "#A1A4B2",
  },
  privacyPolicyText2: {
    fontFamily: "Helvetica-Medium",
    fontSize: 14,
    color: "#7583CA",
  },
  privacyPolicyContainer: {
    width: "100%",
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default LoginScreen;
