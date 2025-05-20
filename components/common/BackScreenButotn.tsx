import { BackArrow } from "@/assets/vectors";
import { router } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

const BackScreenButton = () => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => router.back()}>
      <BackArrow />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 54,
    height: 54,
    borderRadius: "50%",
    borderWidth: 1,
    borderColor: "#EBEAEC",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BackScreenButton;
