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
    skill: [],
    project: [
      // {
      //     title: '',
      //     details: '',
      //     start: '',
      //     end: ''
      // }
    ],
    course: [
      // {
      //     courseName: '',
      //     offeredBy: '',
      //     details: '',
      //     start: '',
      //     end: ''
      // }
    ],
    interest: [],
    language: [],
  });

  const changeData = (group, input, value) => {
    setData((prevData) => ({
      ...prevData,
      [group]: { ...prevData[group], [input]: value}
    }))
    
    console.log(data)
  }

  const changeDescription = (group, value) => {
    setData((prevData) => ({
      ...prevData,
      [group]: value
    }))
    console.log(data)
  }

  return (
    <div className={ContainerCss.container}>
      <Nav />
      <Editor data={data} handleChangeData={(type, input, value) => changeData(type, input, value)} handleChangeDescription={(type, value) => changeDescription(type, value)}/>
      <PDFFile />
    </div>
  );
};

export default Container;
