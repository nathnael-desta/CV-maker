import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  left: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  container: {
    display: "flex",
    flexDirection: "row",
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

const WorkData = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text>Technite Gmbh</Text>
        <Text>Product Manager</Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
          repellendus totam necessitatibus assumenda tempore consequatur illum
          sapiente reprehenderit. Aspernatur at iusto voluptates voluptas cum a!
        </Text>
      </View>
      <View style={styles.right}>
        <Text>08/2018 - 10/2019</Text>
        <Text>Addis Ababa, Ethiopia</Text>
      </View>
    </View>
  );
};

export default WorkData;
