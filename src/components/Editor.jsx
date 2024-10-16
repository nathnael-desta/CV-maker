import { useState } from "react";
import EditorCss from "../styles/Editor.module.css";
import { Images } from "../utils";
import Input from "./Input";

const Editor = () => {
  const [dropdowns, setDropdowns] = useState([
    {
      title: "General",
      alt: "general",
      name: "general",
      droppedDown: false,
    },
    {
      title: "Profile",
      alt: "profile",
      name: "profile",
      droppedDown: false,
    },
    {
      title: "Education",
      alt: "education",
      name: "education",
      droppedDown: false,
    },
    {
      title: "Contact",
      alt: "contact",
      name: "contact",
      droppedDown: false,
    },
    {
      title: "Work History",
      alt: "work",
      name: "work",
      droppedDown: false,
    },
    { title: "Skills", alt: "skill", name: "skill", droppedDown: false },
    {
      title: "Projects",
      alt: "project",
      name: "project",
      droppedDown: false,
    },
    {
      title: "Courses",
      alt: "course",
      name: "course",
      droppedDown: false,
    },
    {
      title: "Interests",
      alt: "interest",
      name: "hobby",
      droppedDown: false,
    },
    {
      title: "Languages",
      alt: "languages",
      name: "language",
      droppedDown: false,
    },
  ]);

  const toggleDroppedDown = (index) => {
    setDropdowns((prevState) =>
      prevState.map((dropdown, i) =>
        i === index
          ? { ...dropdown, droppedDown: !dropdown.droppedDown }
          : {...dropdown, droppedDown: false}
      )
    );
  }

  return (
    <div className={EditorCss.editor}>
      <div className={EditorCss.inputs}>
        {dropdowns.map((dropdown, index) => 
          <Input
            key={index}
            dropdown = {dropdown}
            handleToggleDropdown={() => toggleDroppedDown(index)}
          />
        )}
      </div>
    </div>
  );
};

export default Editor;
