import useThemeStore from "@/stores/theme";
import Feather from "@expo/vector-icons/Feather";
import { TouchableOpacity } from "react-native";

export default function ThemeToggle() {
  const { mode, setMode } = useThemeStore();

  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      style={{
        position: "absolute",
        top: 60,
        right: 20,
        zIndex: 1,
        padding: 8,
        borderRadius: 20,
      }}
    >
      {mode === "light" ? (
        <Feather name="sun" size={24} color="black" />
      ) : (
        <Feather name="moon" size={24} color="white" />
      )}
    </TouchableOpacity>
  );
}
