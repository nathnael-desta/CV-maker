import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import BasicInfoCss from "../../styles/PDFElementsCSS/BasicInfo.module.css";

const BasicInfo = () => {
  return (
    <View className={BasicInfoCss.container}>
      <Text className={BasicInfoCss.Name}>Lara Miller</Text>
      <Text className={BasicInfoCss.title}>UX/UI Designer</Text>
      <View className={BasicInfoCss.contact}>
        <Text className={BasicInfoCss.email}>lora@miller.design</Text>
        <Text className={BasicInfoCss.phoneNo}>+49 30 616 714 610</Text>
        <Text className={BasicInfoCss.location}>King James avenue, Addis Ababa</Text>
        <Text className={BasicInfoCss.linkedin}>millerdesign</Text>
      </View>
    </View>
  );
};

export default BasicInfo;
