import { SplashScreenNavProp } from "@/types/navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  const navigation = useNavigation<SplashScreenNavProp>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem("accessToken");
        navigation.replace("AuthNavigator", { screen: "LoginScreen" });
        // if (token) {
        //   navigation.replace("TabsNavigator", { screen: "Home" });
        // } else {
        //   navigation.replace("AuthNavigator", { screen: "LoginScreen" });
        // }
      } catch (error) {
        navigation.replace("AuthNavigator", { screen: "LoginScreen" });
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigation]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 10 }}>Đang tải...</Text>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
