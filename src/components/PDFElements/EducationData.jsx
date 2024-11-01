import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  left: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  container: {
    display: "flex",
    width: "100%"
  },
  left: {
    display: "flex",
    flex: 0.8,
    gap: 15,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  right: {
    flex: 0.2,
    display: "flex",
    gap: 15,
    flexDirection: "column",

  },
});

const EducationData = () => {
  return (
    <View style={styles.container}>
        <View style={styles.left}>
            <Text>Master of Bussiness Adminstration</Text>
            <Text>Adiss Ababa University</Text>

        </View>
        <View style={styles.right}>
            <Text>08/2018 - 10/2019</Text>
            <Text>Addis Ababa, Ethiopia</Text>
        </View>
      </View>
  );
};

export default EducationData;
