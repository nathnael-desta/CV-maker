import { useState } from "react";
import EditorCss from "../styles/Editor.module.css";
import Input from "./Input";

const Editor = (props) => {
  const { dropdowns, toggleDroppedDown } = props;


  return (
    <div className={EditorCss.editor}>
      <div className={EditorCss.inputs}>
        {dropdowns.map((dropdown) => (
          <Input
            key={dropdown.id}
            dropdown={dropdown}
            handleToggleDropdown={() => toggleDroppedDown(dropdown.id)}
            {...props}
          />
        ))}
      </div>
    </div>
  );
};

export default Editor;
