import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

interface ISubTitle {
  title: string;
}

const SubTitle: React.FC<ISubTitle> = ({ title }) => {
  const [fontsLoaded] = useFonts({
    "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
  });
  if (!fontsLoaded) return <Text>{title}</Text>;
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Inter-Medium",
    fontSize: 28,
  },
});

export default SubTitle;
