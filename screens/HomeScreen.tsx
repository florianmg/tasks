import { View, StyleSheet, Button } from "react-native";
import DatabaseManager from "../utils/DatabaseManager";
const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Ajouter tache"
        onPress={async () => {
          const { result, isError, error, newTask } =
            await DatabaseManager.insertTasks();
          if (!isError) {
            console.log("> new task inserted: ", newTask);
          }
        }}
      />
      <Button
        title="Récupère toutes les taches"
        onPress={async () => {
          const { result, isError, error } =
            await DatabaseManager.getAlltasks();
          if (result && !isError) {
            console.log("> all tasks: ", result.rows._array);
          } else {
            console.log("error", error);
          }
        }}
      />
      <Button
        title="Supprimer toutes les taches"
        onPress={async () => {
          const { isError, error, result } =
            await DatabaseManager.deleteAllTasks();
          if (!isError) {
            console.log("> delete al tasks", result);
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
