import React, { ReactNode } from "react";
import { StyleSheet, View, StatusBar } from "react-native";

const ScreenLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default ScreenLayout;
