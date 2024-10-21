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
  const {dropdowns, toggleDroppedDown} = props


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
