import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    container : {
        display:"flex",
        flexDirection: "column",
        gap: 15,
        alignItems: "center"
    },
    contact: {
        display: "flex",
        gap: 15
    }
})

const BasicInfo = () => {
  return (
    <View style={styles.container}>
      <Text >Lara Miller</Text>
      <Text >UX/UI Designer</Text>
      <View style={styles.contact}>
        <Text >lora@miller.design</Text>
        <Text >+49 30 616 714 610</Text>
        <Text >King James avenue, Addis Ababa</Text>
        <Text >millerdesign</Text>
      </View>
    </View>
  );
};

export default BasicInfo;
