import React, { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";

interface IP {
  children: ReactNode;
}

const P: React.FC<IP> = ({ children }) => {
  const [isFontLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat.ttf"),
  });
  if (!isFontLoaded) return <Text>{children}</Text>;
  return <Text style={styles.paragraph}>{children}</Text>;
};

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Montserrat",
    marginVertical: 5,
  },
});

export default P;
