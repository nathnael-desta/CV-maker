import Editor from "./Editor";
import ContainerCss from "../styles/Container.module.css";
import PDFFile from "./PDFFile";
import Nav from "./Nav";
import { useState } from "react";

const Container = () => {
  const [data, setData] = useState({
    general: {
      firstName: "",
      lastName: "",
      title: "",
    },
    profile: "",
    contact: {
      adress: "",
      email: "",
      phoneNo: "",
    },
    work: [
      // {
      //     companyName: '',
      //     postion: '',
      //     details: '',
      //     start: '',
      //     end: ''
      // }
    ],
    skills: [],
    projects: [
      // {
      //     title: '',
      //     details: '',
      //     start: '',
      //     end: ''
      // }
    ],
    courses: [
      // {
      //     courseName: '',
      //     offeredBy: '',
      //     details: '',
      //     start: '',
      //     end: ''
      // }
    ],
    interests: [],
    languages: [],
  });

  const changeData = (group, input, value) => {
    setData((prevData) => ({
      ...prevData,
      [group]: { ...prevData[group], [input]: value}
    }))
    
    console.log(data)
  }

  return (
    <div className={ContainerCss.container}>
      <Nav />
      <Editor data={data} handleChangeData={(type, input, value) => changeData(type, input, value)}/>
      <PDFFile />
    </div>
  );
};

export default Container;
