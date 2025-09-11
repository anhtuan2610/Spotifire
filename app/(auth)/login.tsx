import { GoogleIcon } from "@/assets/vectors";
import BackScreenButton from "@/components/common/BackScreenButotn";
import DarkThemeBG from "@/components/common/DarkThemeBG";
import { FormErrorMessage } from "@/components/common/FormErrorMessage";
import InputForm from "@/components/common/InputForm";
import MainButton from "@/components/common/MainButton";
import ServiceButton from "@/components/common/ServiceButton";
import { ILoginRequest } from "@/entities/auth/model/api/dto/authDto";
import { login } from "@/entities/auth/model/services/login";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import themeStore from "@/stores/theme";
import Fontisto from "@expo/vector-icons/Fontisto";
import { zodResolver } from "@hookform/resolvers/zod";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Email invalid, follow example@gmail.com"),
  password: z.string().min(3, "Password must be at least 3 characters"),
});

const LoginScreen = () => {
  const theme = themeStore((state) => state.theme);
  const mode = themeStore((state) => state.mode);
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (body: ILoginRequest) => {
    try {
      const response = await dispatch(login(body)).unwrap();
      if (response.data.accessToken && response.data.userInformation) {
        AsyncStorage.setItem("accessToken", response.data.accessToken);
        Toast.show({
          type: "success",
          text1: `Welcome back, ${response.data.userInformation.fullName}!`,
        });
        router.replace("/(welcome)/welcome");
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Login failed",
        text2:
          typeof error === "string" ? error : "Please check your credentials",
      });
    }
  };

  return (
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
          Welcome Back!
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
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputForm
                onChangeText={onChange}
                value={value}
                placeholder="Email address"
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputForm
                onChangeText={onChange}
                value={value}
                placeholder="Password"
                isSecurity={true}
              />
            )}
          />
          {errors.email ? (
            <FormErrorMessage message={errors.email.message} />
          ) : (
            errors.password && (
              <FormErrorMessage message={errors.password.message} />
            )
          )}
        </View>
        <MainButton
          text="LOG IN"
          styleButton={{ marginTop: 30 }}
          actionHandle={handleSubmit(handleLogin)}
        />
        <Text
          style={[
            { color: theme.colors.textForgot },
            styles.forgotPasswordText,
          ]}
        >
          Forgot Password?
        </Text>
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
