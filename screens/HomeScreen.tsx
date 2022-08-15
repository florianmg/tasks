import { StyleSheet, View } from "react-native";

import SubTitle from "../components/SubTitle";
import Title from "../components/Title";
import NewTask from "../components/NewTask";
import ScreenLayout from "../components/ScreenLayout";

const HomeScreen: React.FC = () => {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <View>
          <Title title="Salut 👋" />
          <SubTitle title="Qu'allez vous faire aujourd'hui ?" />
        </View>
        <NewTask />
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default HomeScreen;
