import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ServiceButton = ({
  icon,
  text,
  bgColor,
  textColor,
}: {
  icon: React.ReactNode;
  text: string;
  bgColor: string;
  textColor: string;
}) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: bgColor }]}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={[styles.buttonText, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingVertical: 24,
    paddingHorizontal: 34,
    borderRadius: 40,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EBEAEC",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 24,
    height: 24,
  },
  buttonText: {
    fontFamily: "Helvatica-Medium",
    fontSize: 16,
    flex: 1,
    textAlign: "center",
  },
});

export default ServiceButton;
