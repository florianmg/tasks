import { StyleSheet } from "react-native";

import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

import ScreenLayout from "../components/ScreenLayout";

const HomeScreen: React.FC = () => {
  return (
    <ScreenLayout>
      <Title title="Salut 👋" />
      <SubTitle title="Qu'allez vous faire aujourd'hui ?" />
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
