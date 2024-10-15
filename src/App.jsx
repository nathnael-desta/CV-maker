import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFFile from './components/PDFFile';
import Container from './components/Container';
import AppCss from './styles/App.module.css';


const App = () => {
	return (
		<div className={AppCss.app}>

      <Container />

      {/* <PDFDownloadLink document={<PDFFile />} fileName="FORM">
        {({ loading }) => (
          loading ? <button>loading document...</button> : <button>Download</button>
        )}
      </PDFDownloadLink> */}
		</div>
	);
};

export default App;
