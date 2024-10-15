
import Editor from './Editor';
import ContainerCss from '../styles/Container.module.css'
import PDFFile from "./PDFFile"



const Container = () => {
  return (
    <div className={ContainerCss.container}>
      <Editor />
      <PDFFile />
    </div>
  );
};

export default Container;
