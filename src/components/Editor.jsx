import { useEffect, useState } from "react";
import EditorCss from "../styles/Editor.module.css";
import Input from "./Input";
import Nav from "./Nav";
import DesignItem from "./DesignItem";
import Selector from "./Selector";

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

  useEffect(() => {
    console.log(designConfigs);
  }, [designConfigs]);

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

  const designItems = {
    layoutImgs: [
      {
        layout: 0,
        src: "src/assets/images/topColoredSplit.svg",
        alt: "top colored split bottom",
      },
      {
        layout: 1,
        src: "src/assets/images/right.svg",
        alt: "right colored",
      },
      {
        layout: 2,
        src: "src/assets/images/left.svg",
        alt: "left colored",
      },
      {
        layout: 3,
        src: "src/assets/images/topColored.svg",
        alt: "top colored",
      },
      {
        layout: 4,
        src: "src/assets/images/top.svg",
        alt: "top not colored",
      },
      {
        layout: 5,
        src: "src/assets/images/topSplit.svg",
        alt: "top not colored split bottom",
      },
    ],
    fontSelectors: [
      {
        title: "Family",
        kind: "fontFamily",
        dropdown: 0,
      },
      {
        title: "Size",
        kind: "fontSize",
        dropdown: 1,
      },
    ],
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
              <Selector
                
                title="Accent"
                value=""
                kind="accentColor"
                designConfigs={designConfigs}
                handleChangeDesignConfigs={(type, value) =>
                  changeDesignConfigs(type, value)
                }
              />
              <Selector
                title="Text"
                value=""
                kind="textColor"
                designConfigs={designConfigs}
                handleChangeDesignConfigs={(type, value) =>
                  changeDesignConfigs(type, value)
                }
              />
            </DesignItem>
          </>
        )}
      </div>
    </div>
  );
};

export default Editor;
