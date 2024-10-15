
import Editor from './Editor';
import ContainerCss from '../styles/Container.module.css'
import PDFFile from "./PDFFile"
import Nav from './Nav';



const Container = () => {
  return (
    <div className={ContainerCss.container}>
      <Nav />
      <Editor />
      <PDFFile />
    </div>
  );
};

export default Container;
