import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

interface IInputText {
  value: string;
  onChange: (nextValue: string) => void;
  autoFocus?: boolean;
}

const InputText: React.FC<IInputText> = ({
  value,
  onChange,
  autoFocus = true,
}) => {
  return (
    <TextInput
      autoFocus={autoFocus}
      style={style.container}
      value={value}
      onChangeText={onChange}
    />
  );
};

const style = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 18,
    fontWeight: "500",
  },
});

export default InputText;
