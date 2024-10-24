import { useEffect, useState } from "react";
import EditorCss from "../styles/Editor.module.css";
import Input from "./Input";
import Nav from "./Nav";
import DesignItem from "./DesignItem";
import Selector from "./Selector";

const Editor = (props) => {
  const { dropdowns, toggleDroppedDown } = props;

  const [nav, setNav] = useState("Info");

  const [designDropdowns, setDesignDropdowns] = useState([false, false]);

  const toggleDesignDropdown = (i) => {
    setDesignDropdowns((prevDesignDropdowns) =>
      prevDesignDropdowns.map((item, index) =>
        index == i ? !prevDesignDropdowns[index] : false
      )
    );
  };

  const changeNav = (newNav) => {
    setNav((prevNav) => newNav);
  };

  const [layoutChosen, setLayoutChosen] = useState(0);

  return (
    <div className={EditorCss.editor}>
      <Nav handleChangeNav={(newNav) => changeNav(newNav)} />
      <div className={EditorCss.inputs}>
        {nav == "Info" &&
          dropdowns.map((dropdown) => (
            <Input
              key={dropdown.id}
              dropdown={dropdown}
              handleToggleDropdown={() => toggleDroppedDown(dropdown.id)}
              {...props}
            />
          ))}

        {nav == "Design" && (
          <>
            <DesignItem title="Layout">
              <div className={EditorCss.layoutGrid}>
                <img
                  className={layoutChosen == 0 ? EditorCss.chosenImg : null}
                  src="src/assets/images/topColoredSplit.svg"
                  alt="top colored split bottom"
                  onClick={() => setLayoutChosen(0)}
                />
                <img
                  className={layoutChosen == 1 ? EditorCss.chosenImg : null}
                  src="src/assets/images/right.svg"
                  alt="right colored"
                  onClick={() => setLayoutChosen(1)}
                />
                <img
                  className={layoutChosen == 2 ? EditorCss.chosenImg : null}
                  src="src/assets/images/left.svg"
                  alt="left colored"
                  onClick={() => setLayoutChosen(2)}
                />
                <img
                  className={layoutChosen == 3 ? EditorCss.chosenImg : null}
                  src="src/assets/images/topColored.svg"
                  alt="top colored"
                  onClick={() => setLayoutChosen(3)}
                />
                <img
                  className={layoutChosen == 4 ? EditorCss.chosenImg : null}
                  src="src/assets/images/top.svg"
                  alt="top not colored"
                  onClick={() => setLayoutChosen(4)}
                />
                <img
                  className={layoutChosen == 5 ? EditorCss.chosenImg : null}
                  src="src/assets/images/topSplit.svg"
                  alt="top not colored split bottom"
                  onClick={() => setLayoutChosen(5)}
                />
              </div>
            </DesignItem>
            <DesignItem title="Font">
              <Selector title="Family" value="Helvetica" kind="FontDropdowns" handleToggleDesignDropdowns={() => toggleDesignDropdown(0)} droppedDown={designDropdowns[0]}/>
              <Selector title="Size" value="Medium" kind="Sizes" handleToggleDesignDropdowns={() => toggleDesignDropdown(1)} droppedDown={designDropdowns[1]}/>
            </DesignItem>
            <DesignItem title="Color">
              <Selector title="Accent" value="" kind="Color" />
              <Selector title="Text" value="" kind="Color" />
            </DesignItem>
          </>
        )}
      </div>
    </div>
  );
};

export default Editor;
