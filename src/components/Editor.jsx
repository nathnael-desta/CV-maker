import { useEffect, useState } from "react";
import EditorCss from "../styles/Editor.module.css";
import Input from "./Input";
import Nav from "./Nav";

const Editor = (props) => {
  const { dropdowns, toggleDroppedDown } = props;

  const [ nav, setNav ] = useState("Info");

  const changeNav = (newNav) => {
    setNav((prevNav) => newNav)
  }


  return (
    <div className={EditorCss.editor}>
      <Nav handleChangeNav={(newNav) => changeNav(newNav)}/>
      <div className={EditorCss.inputs}>
        {nav == "Info" && dropdowns.map((dropdown) => (
          <Input
            key={dropdown.id}
            dropdown={dropdown}
            handleToggleDropdown={() => toggleDroppedDown(dropdown.id)}
            {...props}
          />
        ))}

        {nav == "Design" && <div>kajsdfnansfkld</div>}
      </div>
    </div>
  );
};

export default Editor;
