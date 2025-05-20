import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

const MainButton = ({
  text,
  styleButton,
  styleText,
  actionHandle,
}: {
  text: string;
  styleButton?: ViewStyle;
  styleText?: TextStyle;
  actionHandle?: () => void;
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, styleButton]}
      onPress={actionHandle}
    >
      <Text style={[styles.buttonText, styleText]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#8E97FD",
    paddingVertical: 24,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Helvatica-Medium",
    fontSize: 16,
  },
});

export default MainButton;
