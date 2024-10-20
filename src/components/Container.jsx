import Editor from "./Editor";
import ContainerCss from "../styles/Container.module.css";
import PDFFile from "./PDFFile";
import Nav from "./Nav";
import { useState } from "react";
import Popup from "./Popup";

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
    eduction: [
      // {
      //   name: '',
      //   offeredBy: '',
      //   details: '',
      //   start: '',
      //   end: ''
      // }
    ],
    work: [
      // {
      //     company: '',
      //     postion: '',
      //     details: '',
      //     start: '',
      //     end: ''
      // }
    ],
    skill: [
      // {
      //   skillName: ''
      // }
    ],
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
      //     name: '',
      //     offeredBy: '',
      //     details: '',
      //     start: '',
      //     end: ''
      // }
    ],
    interest: [
      // {
      //   interestName: ''
      // }
    ],
    language: [
      // {
      //   languageName: ''
      // }
    ],
  });

  const [popup, setPopup] = useState({
    isShown: false
  })

  const changeData = (group, input, value) => {
    setData((prevData) => ({
      ...prevData,
      [group]: { ...prevData[group], [input]: value },
    }));

    console.log(data);
  };

  const changeDescription = (group, value) => {
    setData((prevData) => ({
      ...prevData,
      [group]: value,
    }));
  };

  const changePopup = (isShown) => {
    setPopup((prevPopup) => ({
      ...prevPopup, 
      isShown: isShown
    }))
  }





  return (
    <div className={ContainerCss.container}>
      <Nav />
      <Editor
        data={data}
        handleChangeData={(type, input, value) =>
          changeData(type, input, value)
        }
        handleChangeDescription={(type, value) =>
          changeDescription(type, value)
        }
        handleChangePopup={(isShown) => changePopup(isShown)}
      />
      <PDFFile />
      { popup.isShown && <Popup
        handleChangeData={(type, input, value) =>
          changeData(type, input, value)
        }
        data={data}
        handleChangePopup={(isShown) => changePopup(isShown)}
      />}
    </div>
  );
};

export default Container;
