import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Text, TouchableOpacity, View } from "react-native";

const CustomBottomTab = ({ state, navigation }: BottomTabBarProps) => {
  const goTo = (routeName: string) => {
    navigation.navigate("");
  };

  return (
    <View
      style={{
        flexDirection: "row",
        height: 70,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderColor: "#ddd",
      }}
    >
      <TouchableOpacity
        onPress={() => goTo("index")}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Ionicons
          name="home"
          size={24}
          color={state.index === 0 ? "tomato" : "gray"}
        />
        <Text style={{ color: state.index === 0 ? "tomato" : "gray" }}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => goTo("profile")}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Ionicons
          name="person"
          size={24}
          color={state.index === 1 ? "tomato" : "gray"}
        />
        <Text style={{ color: state.index === 1 ? "tomato" : "gray" }}>
          Profile
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => goTo("settings")}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Ionicons
          name="settings"
          size={24}
          color={state.index === 2 ? "tomato" : "gray"}
        />
        <Text style={{ color: state.index === 2 ? "tomato" : "gray" }}>
          Settings
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomBottomTab;
