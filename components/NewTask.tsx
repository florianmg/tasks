import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

import DatabaseManager from "../utils/DatabaseManager";
import { STATUS } from "../utils/constants";

import InputText from "./InputText";
import P from "./P";
import Button from "./Button";
import { ITask } from "../utils/types";

interface INewTask {}

const NewTask: React.FC<INewTask> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleIsOpen = () => setIsOpen((prevState) => !prevState);
  const handleNewTask = async () => {
    const { isError, error, result, newTask } =
      await DatabaseManager.insertTask({
        categoryId: 0,
        content: inputValue,
        status: STATUS.todo,
        position: 0,
      });
    if (!isError) {
      console.log("newTask => ", newTask);
      setIsOpen(false);
    }
  };
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
          <Button title="Ajouter" onPress={handleNewTask} />
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
