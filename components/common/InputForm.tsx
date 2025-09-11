import { StyleSheet, TextInput } from "react-native";

const InputForm = ({
  placeholder,
  onChangeText,
  value,
  isSecurity,
}: {
  placeholder: string;
  onChangeText?: (text: string) => void;
  value?: string;
  isSecurity?: boolean;
}) => {
  return (
    <TextInput
      style={styles.container}
      placeholder={placeholder}
      secureTextEntry={isSecurity}
      onChangeText={onChangeText}
      value={value}
      autoCapitalize="none"
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
