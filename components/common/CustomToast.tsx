import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  text1?: string;
  text2?: string;
  type?: "success" | "error" | "info";
}

export const CustomToast = ({ text1, text2, type = "info" }: Props) => {
  const getIcon = () => {
    switch (type) {
      case "success":
        return <Ionicons name="checkmark-circle" size={24} color="#fff" />;
      case "error":
        return <Ionicons name="close-circle" size={24} color="#fff" />;
      default:
        return <Ionicons name="information-circle" size={24} color="#fff" />;
    }
  };

  return (
    <View style={[styles.container, styles[type]]}>
      <View style={styles.icon}>{getIcon()}</View>
      <View style={styles.textContainer}>
        {text1 ? <Text style={styles.title}>{text1}</Text> : null}
        {text2 ? <Text style={styles.message}>{text2}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "92%",
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginTop: 10,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  icon: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 2,
  },
  message: {
    fontSize: 13,
    fontWeight: "400",
    color: "#f2f2f2",
  },
  success: {
    backgroundColor: "#4CAF50",
  },
  error: {
    backgroundColor: "#F44336",
  },
  info: {
    backgroundColor: "#2196F3",
  },
});
