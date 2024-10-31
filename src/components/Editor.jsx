import { useEffect, useState } from "react";
import EditorCss from "../styles/Editor.module.css";
import Input from "./Input";
import Nav from "./Nav";
import DesignItem from "./DesignItem";
import Selector from "./Selector";
import { designItems } from "../Data";

const Editor = (props) => {
  const { dropdowns, toggleDroppedDown } = props;

  const [nav, setNav] = useState("Info");

  const [designConfigs, setDesignConfigs] = useState({
    layout: 0,
    fontFamily: "Comic Sans",
    fontSize: "Medium",
    accentColor: "#112131",
    textColor: "#112131",
    designDropdowns: [false, false],
  });

  const changeDesignConfigs = (type, value) => {
    if (type !== "designDropdowns") {
      setDesignConfigs((prevDesignConfigs) => ({
        ...prevDesignConfigs,
        [type]: value,
      }));
    } else {
      setDesignConfigs((prevDesignConfigs) => ({
        ...prevDesignConfigs,
        designDropdowns: prevDesignConfigs.designDropdowns.map((item, index) =>
          index == value ? !item : false
        ),
      }));
    }
  };

  const changeNav = (newNav) => {
    setNav(newNav);
  };

  

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
                {designItems.layoutImgs.map((item) => (
                  <img
                    key={item.layout}
                    className={
                      designConfigs.layout == item.layout
                        ? EditorCss.chosenImg
                        : null
                    }
                    src={item.src}
                    alt={item.alt}
                    onClick={() => changeDesignConfigs("layout", item.layout)}
                  />
                ))}
              </div>
            </DesignItem>
            <DesignItem title="Font">
              {designItems.fontSelectors.map((item) => (
                <Selector
                  key={item.dropdown}
                  title={item.title}
                  kind={item.kind}
                  handleToggleDesignDropdowns={() =>
                    changeDesignConfigs("designDropdowns", item.dropdown)
                  }
                  droppedDown={designConfigs.designDropdowns[item.dropdown]}
                  designConfigs={designConfigs}
                  handleChangeDesignConfigs={(type, value) =>
                    changeDesignConfigs(type, value)
                  }
                />
              ))}
            </DesignItem>
            <DesignItem title="Color">
              {designItems.colorSelectors.map((item, index) => (
                <Selector
                key={index}
                  title={item.title}
                  kind={item.kind}
                  designConfigs={designConfigs}
                  handleChangeDesignConfigs={(type, value) =>
                    changeDesignConfigs(type, value)
                  }
                />
              ))}
            </DesignItem>
          </>
        )}
      </div>
    </div>
  );
};

export default Editor;
