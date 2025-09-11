import { NavigatorScreenParams } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  AuthNavigator: NavigatorScreenParams<AuthStackParamsList>;
  TabsNavigator: NavigatorScreenParams<MainTabsParamsList>;
  SplashScreen: undefined;
};

export type AuthStackParamsList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

export type MainTabsParamsList = {
  Home: undefined; // tam thoi the nay sau nay them man trong home thi khai bao NavigatorScreenParams
  MessageScreen: undefined;
  ProfileScreen: undefined;
};

export type SplashScreenNavProp = StackNavigationProp<
  RootStackParamList,
  "SplashScreen"
>;
