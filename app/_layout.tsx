import ThemeToggle from "@/components/common/ThemeToggle";
import themeStore from "@/stores/theme";
import { ThemeProvider } from "@shopify/restyle";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const theme = themeStore((state) => state.theme);
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider style={styles.container}>
        <ThemeToggle />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
        </Stack>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
  },
});
