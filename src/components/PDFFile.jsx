import {Page, Text, Document, StyleSheet} from '@react-pdf/renderer';

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
    <Document>
        <Page size="A4">
            <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum inventore voluptatem perspiciatis officiis est veniam quibusdam repellat hic, id obcaecati molestiae voluptas sit repellendus itaque culpa eum veritatis esse modi!</Text>
        </Page>
    </Document>
    )
}

export default PDFFile