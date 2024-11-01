import { Page, View, Text, Document, StyleSheet } from "@react-pdf/renderer";
import BasicInfo from "./PDFElements/BasicInfo";
import Profile from "./PDFElements/Profile";
import PDFFileCss from "../styles/PDFFile.module.css";
import Work from "./PDFElements/Work";
import Education from "./PDFElements/Education";

const styles = StyleSheet.create({
  document: {
    backgroundColor: "white",
    height: 1580,
    width: 1117,
    // Note: overflowY is not usually effective in @react-pdf/renderer; it may be ignored.
    overflow: "hidden", // `overflow` will be handled internally by the PDF renderer.
  },
  main: {
    padding: 30,
  },
  page: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
    gap: 40,
  },
});

const PDFFile = () => {
  return (
    <Document className={PDFFileCss.document} style={styles.document}>
      <Page size="A4" style={styles.page}>
        <BasicInfo />
        <Profile />
        <Work />
        <Education />
      </Page>
    </Document>
  );
};

export default PDFFile;
