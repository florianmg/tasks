import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import InputText from "./InputText";
import P from "./P";
import Button from "./Button";

interface INewTask {}

const NewTask: React.FC<INewTask> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleIsOpen = () => setIsOpen((prevState) => !prevState);

  return (
    <View style={styles.container}>
      <View style={styles.newButtonContainer}>
        <TouchableHighlight style={styles.newButton} onPress={toggleIsOpen}>
          <Text style={styles.newButtonText}>{isOpen ? "x" : "+"}</Text>
        </TouchableHighlight>
      </View>
      {isOpen && (
        <View>
          <P>Ajouter une chose a faire</P>
          <InputText value={inputValue} onChange={setInputValue} />
          <Button title="Ajouter" onPress={() => null} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  newButtonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  newButton: {
    width: 48,
    height: 48,
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 64,
  },
  newButtonText: {
    fontSize: 32,
    color: "white",
  },
});

export default NewTask;
