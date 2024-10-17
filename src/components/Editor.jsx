import { useState } from "react";
import EditorCss from "../styles/Editor.module.css";
import { Images } from "../utils";
import Input from "./Input";
import { arrangements } from "../Data";
import FullInput from "./FullInput";
import HalfInput from "./HalfInput";
import Description from "./Description";
import SmallView from "./SmallView";
import ListItem from "./ListItem";
import Add from "./Add";

const Editor = (props) => {




  const [dropdowns, setDropdowns] = useState([
    {
      title: "General",
      alt: "general",
      name: "general",
      droppedDown: false,
      type: 'general'
    },
    {
      title: "Profile",
      alt: "profile",
      name: "profile",
      droppedDown: false,
      type: 'profile'
    },
    {
      title: "Education",
      alt: "education",
      name: "education",
      droppedDown: false,
      type: 'education'
    },
    {
      title: "Contact",
      alt: "contact",
      name: "contact",
      droppedDown: false,
      type: 'contact'
    },
    {
      title: "Work History",
      alt: "work",
      name: "work",
      droppedDown: false,
      type: 'work'
    },
    { title: "Skills", alt: "skill", name: "skill", droppedDown: false, type: 'skill' },
    {
      title: "Projects",
      alt: "project",
      name: "project",
      droppedDown: false,
      type: 'project'
    },
    {
      title: "Courses",
      alt: "course",
      name: "course",
      droppedDown: false,
      type: 'course'
    },
    {
      title: "Interests",
      alt: "interest",
      name: "hobby",
      droppedDown: false,
      type: 'interest'
    },
    {
      title: "Languages",
      alt: "languages",
      name: "language",
      droppedDown: false,
      type: 'language'
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
            { ...props }
          />

        )}
      </div>
    </div>
  );
};

export default Editor;
