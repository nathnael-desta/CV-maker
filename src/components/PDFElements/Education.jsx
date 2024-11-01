import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import EducationData from "./EducationData";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    alignItems: "flex-start",
  }
});

const Education = () => {
  return (
    <View style={styles.container}>
      <Text>Education</Text>
      <EducationData />
    </View>
  );
};

export default Education;
