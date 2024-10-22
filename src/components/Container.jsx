import Editor from "./Editor";
import ContainerCss from "../styles/Container.module.css";
import PDFFile from "./PDFFile";
import Nav from "./Nav";
import { useState, useEffect } from "react";
import Popup from "./Popup";
import { popups } from "../Data";

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

  const [dropdowns, setDropdowns] = useState([
    {
      title: "General",
      alt: "general",
      name: "general",
      droppedDown: false,
      type: "general",
      miniViews: [],
    },
    {
      title: "Profile",
      alt: "profile",
      name: "profile",
      droppedDown: false,
      type: "profile",
      miniViews: [],
    },
    {
      title: "Education",
      alt: "education",
      name: "education",
      droppedDown: false,
      type: "education",
      miniViews: [],
    },
    {
      title: "Contact",
      alt: "contact",
      name: "contact",
      droppedDown: false,
      type: "contact",
      miniViews: [],
    },
    {
      title: "Work History",
      alt: "work",
      name: "work",
      droppedDown: false,
      type: "work",
      miniViews: [],
    },
    {
      title: "Skills",
      alt: "skill",
      name: "skill",
      droppedDown: false,
      type: "skill",
      miniViews: [],
    },
    {
      title: "Projects",
      alt: "project",
      name: "project",
      droppedDown: false,
      type: "project",
      miniViews: [],
    },
    {
      title: "Courses",
      alt: "course",
      name: "course",
      droppedDown: false,
      type: "course",
      miniViews: [],
    },
    {
      title: "Interests",
      alt: "interest",
      name: "hobby",
      droppedDown: false,
      type: "interest",
      miniViews: [],
    },
    {
      title: "Languages",
      alt: "languages",
      name: "language",
      droppedDown: false,
      type: "language",
      miniViews: [],
    },
  ]);

  const [popup, setPopup] = useState({
    isShown: false,
    input: "",
    index: 0,
  });

  const toggleDroppedDown = (index) => {
    setDropdowns((prevState) =>
      prevState.map((dropdown, i) =>
        i === index
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
      [group]: value,
    }));
  };

  const changePopup = (isShown, inputName, index) => {
    setPopup((prevPopup) => ({
      ...prevPopup,
      isShown: isShown,
      input: inputName,
      index: index,
    }));

    setData((prevData) => ({
      ...prevData,
      [inputName]: [...prevData[inputName], popups[inputName].data],
    }));
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
      [type]: prevData[type].splice(index, 1),
    }));
  };

  useEffect(() => {
    console.log("this is the new data", data); // Log the updated data whenever it changes
  }, [data]); // Dependency array with data

  return (
    <div className={ContainerCss.container}>
      <Nav />
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
        handleChangePopup={(isShown, inputName, index) =>
          changePopup(isShown, inputName, index)
        }
        handleAppendToData={(inputName, object) =>
          appendToData(inputName, object)
        }
      />
      <PDFFile />
      {popup.isShown && (
        <Popup
          handleChangeData={(type, input, value) =>
            changeData(type, input, value)
          }
          data={data}
          handleChangePopup={(isShown, inputName, index) =>
            changePopup(isShown, inputName, index)
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
