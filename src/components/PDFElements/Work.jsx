import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import WorkData from "./WorkData";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    alignItems: "flex-start",
  }
});

const Work = () => {
  return (
    <View style={styles.container}>
      <Text>Professional Experience</Text>
      <WorkData />
    </View>
  );
};

export default Work;
