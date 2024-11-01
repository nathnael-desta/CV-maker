import { Page, View, Text, Document, StyleSheet } from "@react-pdf/renderer";
import PDFFileCSS from "../styles/PDFFile.module.css";
import BasicInfo from "./PDFElements/BasicInfo";
import Profile from "./PDFElements/Profile";

const styles = StyleSheet.create({
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
});

const PDFFile = () => {
  return (
    <Document className={PDFFileCSS.document}>
      <Page size="A4" class={PDFFileCSS}>
        <View className={PDFFileCSS.main}>
          <BasicInfo />
          <Profile />
        </View>
      </Page>
    </Document>
  );
};

export default PDFFile;
