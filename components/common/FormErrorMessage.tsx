import { StyleSheet, Text, View } from "react-native";

interface Props {
  message?: string;
}

export const FormErrorMessage = ({ message }: Props) => {
  if (!message) return null;
  return (
    <View style={{ alignItems: "center", width: "100%" }}>
      <Text style={styles.errorText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: "#FF3B30", // đỏ iOS
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 20,
    marginTop: 6,
    marginLeft: 2,
  },
});
