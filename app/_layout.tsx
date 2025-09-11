import { CustomToast } from "@/components/common/CustomToast";
import { store } from "@/stores/redux";
import themeStore from "@/stores/theme";
import { RootStackParamList } from "@/types/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "@shopify/restyle";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import AuthLayout from "./(auth)/_layout";
import SplashScreen from "./splash";

const RootStack = createStackNavigator<RootStackParamList>();

export default function RootLayout() {
  const theme = themeStore((state) => state.theme);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider style={styles.container}>
          <NavigationContainer>
            {/* <ThemeToggle />  */}
            <RootStack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName="SplashScreen"
            >
              <RootStack.Screen name="SplashScreen" component={SplashScreen} />
              <RootStack.Screen name="AuthNavigator" component={AuthLayout} />
              <RootStack.Screen name="TabsNavigator" component={SplashScreen} />
            </RootStack.Navigator>
          </NavigationContainer>
          <Toast
            position="top"
            config={{
              success: (props) => <CustomToast {...props} type="success" />,
              error: (props) => <CustomToast {...props} type="error" />,
              info: (props) => <CustomToast {...props} type="info" />,
            }}
            topOffset={50}
          />
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
  },
});
