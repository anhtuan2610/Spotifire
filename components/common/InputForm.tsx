import { StyleSheet, TextInput } from "react-native";

const InputForm = ({
  placeholder,
  secureTextEntry,
}: {
  placeholder: string;
  secureTextEntry?: boolean;
}) => {
  return (
    <TextInput
      style={styles.container}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 22,
    paddingHorizontal: 20,
    width: "100%",
    backgroundColor: "#F2F3F7",
    borderRadius: 15,
  },
});

export default InputForm;
