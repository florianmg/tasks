import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

interface ITitle {
  title: string;
}

const Title: React.FC<ITitle> = ({ title }) => {
  const [fontsLoaded] = useFonts({
    "Inter-ExtraBold": require("../assets/fonts/Inter-ExtraBold.ttf"),
  });
  if (!fontsLoaded) return <Text>{title}</Text>;
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Inter-ExtraBold",
    fontSize: 54,
  },
});

export default Title;
