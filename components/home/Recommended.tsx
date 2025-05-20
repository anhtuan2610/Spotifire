import { StyleSheet, Text, View } from "react-native";

const Recommended = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended for you</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  title: {
    fontFamily: "Helvatica-Medium",
    fontSize: 24,
    color: "#3F414E",
  },
});

export default Recommended;
