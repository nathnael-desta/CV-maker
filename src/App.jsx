import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFFile from './components/PDFFile';

const App = () => {
	return (
		<div className="App">
			<PDFFile />


      {/* <PDFDownloadLink document={<PDFFile />} fileName="FORM">
        {({ loading }) => (
          loading ? <button>loading document...</button> : <button>Download</button>
        )}
      </PDFDownloadLink> */}
		</div>
	);
};

export default App;
