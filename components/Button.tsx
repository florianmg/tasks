import React from "react";
import { StyleSheet, TouchableHighlight, Text } from "react-native";
import { useFonts } from "expo-font";
interface IButton {
  title: string;
  onPress: () => void;
}

const Button: React.FC<IButton> = ({ title, onPress }) => {
  const [isFontLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat.ttf"),
  });
  return (
    <TouchableHighlight style={styles.button} onPress={onPress}>
      <Text style={isFontLoaded && styles.buttonText}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 5,
    paddingVertical: 10,
    backgroundColor: "black",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 20,
  },
});

export default Button;
