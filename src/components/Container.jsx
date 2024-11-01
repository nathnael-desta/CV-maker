import { v4 as uuidv4 } from "uuid";
import Editor from "./Editor";
import ContainerCss from "../styles/Container.module.css";
import PDFFile from "./PDFFile";
import Nav from "./Nav";
import { useState, useEffect } from "react";
import Popup from "./Popup";
import { popupFormats } from "../Data";
import { PDFDownloadLink } from "@react-pdf/renderer";

const Container = () => {
  const [data, setData] = useState({
    general: {
      firstName: "",
      lastName: "",
      title: "",
      id: uuidv4(),
    },
    profile: {
      text: "",
      id: uuidv4(),
    },
    contact: {
      adress: "",
      email: "",
      phoneNo: "",
      linkedIn: "",
      id: uuidv4(),
    },
    education: [
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

  useEffect(() => {
    console.log(data);
  }, [data]);

  const [dropdowns, setDropdowns] = useState([
    {
      title: "General",
      alt: "general",
      name: "general",
      droppedDown: false,
      type: "general",
      miniViews: [],
      id: uuidv4(),
    },
    {
      title: "Profile",
      alt: "profile",
      name: "profile",
      droppedDown: false,
      type: "profile",
      miniViews: [],
      id: uuidv4(),
    },
    {
      title: "Education",
      alt: "education",
      name: "education",
      droppedDown: false,
      type: "education",
      miniViews: [],
      id: uuidv4(),
    },
    {
      title: "Contact",
      alt: "contact",
      name: "contact",
      droppedDown: false,
      type: "contact",
      miniViews: [],
      id: uuidv4(),
    },
    {
      title: "Work History",
      alt: "work",
      name: "work",
      droppedDown: false,
      type: "work",
      miniViews: [],
      id: uuidv4(),
    },
    {
      title: "Skills",
      alt: "skill",
      name: "skill",
      droppedDown: false,
      type: "skill",
      miniViews: [],
      id: uuidv4(),
    },
    {
      title: "Projects",
      alt: "project",
      name: "project",
      droppedDown: false,
      type: "project",
      miniViews: [],
      id: uuidv4(),
    },
    {
      title: "Courses",
      alt: "course",
      name: "course",
      droppedDown: false,
      type: "course",
      miniViews: [],
      id: uuidv4(),
    },
    {
      title: "Interests",
      alt: "interest",
      name: "hobby",
      droppedDown: false,
      type: "interest",
      miniViews: [],
      id: uuidv4(),
    },
    {
      title: "Languages",
      alt: "languages",
      name: "language",
      droppedDown: false,
      type: "language",
      miniViews: [],
      id: uuidv4(),
    },
  ]);

  const [popup, setPopup] = useState({
    isShown: false,
    input: "",
    index: 0,
    newPopup: true,
    id: "",
    nextType: "",
  });

  const toggleDroppedDown = (id) => {
    setDropdowns((prevState) =>
      prevState.map((dropdown) =>
        dropdown.id === id
          ? { ...dropdown, droppedDown: !dropdown.droppedDown }
          : { ...dropdown, droppedDown: false }
      )
    );
  };

  const changeData = (group, input, value) => {
    setData((prevData) => ({
      ...prevData,
      [group]: { ...prevData[group], [input]: value },
    }));
  };

  const changeDataList = (type, index, inputName, value) => {
    setData((prevData) => ({
      ...prevData,
      [type]: prevData[type].map((item, i) => {
        if (i == index) {
          return { ...item, [inputName]: value };
        }
        return item;
      }),
    }));
  };

  const changeDescription = (group, value) => {
    setData((prevData) => ({
      ...prevData,
      [group]: { text: value },
    }));
  };

  const changePopup = (
    isShown,
    type,
    index,
    addData = true,
    newPopup = true,
    isDeletion = false,
    id = "",
    nextType = ""
  ) => {
    const newId = uuidv4();

    if (!isDeletion) {
      setPopup((prevPopup) => ({
        ...prevPopup,
        isShown: isShown,
        input: type,
        index: index,
        newPopup: newPopup,
        id: newId,
      }));
    } else {
      setPopup((prevPopup) => ({
        ...prevPopup,
        isShown: isShown,
        input: type,
        index: index,
        newPopup: newPopup,
        id: id,
        nextType: nextType,
      }));
    }

    if (addData) {
      setData((prevData) => ({
        ...prevData,
        [type]: [...prevData[type], { ...popupFormats[type].data, id: newId }],
      }));
    }
  };

  const togglePopup = () => {
    setPopup((prevPopup) => ({
      ...prevPopup,
      isShown: !prevPopup.isShown,
    }));
  };

  const appendToData = (inputName, object) => {
    setData((prevData) => ({
      ...prevData,
      [inputName]: [...prevData[inputName], object],
    }));
  };

  const appendMiniView = (type, newMiniView) => {
    setDropdowns((prevDropdowns) =>
      prevDropdowns.map((dropdown, i) =>
        dropdown.type === type
          ? { ...dropdown, miniViews: [...dropdown.miniViews, newMiniView] }
          : dropdown
      )
    );
  };

  const deletePopup = (type, index) => {
    setData((prevData) => ({
      ...prevData,
      [type]: prevData[type].filter((item, i) => item.id !== popup.id),
    }));
  };

  // useEffect(() => {
  //   console.log("this is the new data", data); // Log the updated data whenever it changes
  // }, [data]); // Dependency array with data

  useEffect(() => {
    console.log("this is the index", popup); // Log the updated data whenever it changes
  }, [popup]); // Dependency array with data

  return (
    <div className={ContainerCss.container}>
      <Editor
        data={data}
        dropdowns={dropdowns}
        toggleDroppedDown={toggleDroppedDown}
        popup={popup}
        handleChangeData={(type, input, value) =>
          changeData(type, input, value)
        }
        handleChangeDescription={(type, value) =>
          changeDescription(type, value)
        }
        handleChangePopup={(
          isShown,
          inputName,
          index,
          addData,
          newPopup,
          isDeletion,
          id,
          nextType
        ) =>
          changePopup(
            isShown,
            inputName,
            index,
            addData,
            newPopup,
            isDeletion,
            id,
            nextType
          )
        }
        handleAppendToData={(inputName, object) =>
          appendToData(inputName, object)
        }
        handleTogglePopup={() => togglePopup()}
        handleDeletePopup={(type, index) => deletePopup(type, index)}
      />
      <PDFFile />
      {/* <PDFDownloadLink document={<PDFFile />} fileName="CV.pdf" className={ContainerCss.PDFDownloadLink}>
          {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
        </PDFDownloadLink> */}

      {popup.isShown && (
        <Popup
          handleChangeData={(type, input, value) =>
            changeData(type, input, value)
          }
          data={data}
          handleChangePopup={(isShown, inputName, index, addData, newPopup) =>
            changePopup(isShown, inputName, index, addData, newPopup)
          }
          popup={popup}
          handleAppendToData={(inputName, object) =>
            appendToData(inputName, object)
          }
          handleAppendMiniview={(index, miniView) =>
            appendMiniView(index, miniView)
          }
          dropdowns={dropdowns}
          handleChangeDataList={(type, index, inputName, value) =>
            changeDataList(type, index, inputName, value)
          }
          handleTogglePopup={() => togglePopup()}
          handleDeletePopup={(type, index) => deletePopup(type, index)}
        />
      )}
    </div>
  );
};

export default Container;
