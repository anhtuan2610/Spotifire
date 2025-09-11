import { AuthStackParamsList } from "@/types/navigation";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./login";
import RegisterScreen from "./register";

const AuthStack = createStackNavigator<AuthStackParamsList>();

const AuthLayout = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthLayout;
