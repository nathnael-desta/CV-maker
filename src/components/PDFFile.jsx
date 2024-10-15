import {Page, Text, Document, StyleSheet} from '@react-pdf/renderer';
import PDFFileCSS from '../styles/PDFFile.module.css'

const styles = StyleSheet.create({
    text: {
        margin: 12, 
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman"
    }
})

const PDFFile = () => {
    return (
    <Document class={PDFFileCSS.document}>
        <Page size="A4">
            <Text style={styles.text}></Text>
        </Page>
    </Document>
    )
}

export default PDFFile