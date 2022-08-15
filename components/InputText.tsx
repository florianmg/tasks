import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

interface IInputText {
  value: string;
  onChange: (nextValue: string) => void;
}

const InputText: React.FC<IInputText> = ({ value, onChange }) => {
  return (
    <TextInput style={style.container} value={value} onChangeText={onChange} />
  );
};

const style = StyleSheet.create({
  container: {},
});

export default InputText;
