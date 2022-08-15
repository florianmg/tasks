import React from "react";
import { StyleSheet, TouchableHighlight, Text } from "react-native";

interface IButton {
  title: string;
  onPress: () => void;
}

const Button: React.FC<IButton> = ({ title, onPress }) => {
  return (
    <TouchableHighlight style={styles.container} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Button;
