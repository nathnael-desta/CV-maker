import { useEffect, useState } from "react";
import SelectorCss from "../styles/Selector.module.css";
import SelectionItem from "./SelectionItem";

const fontFamily = [
  "Helvetica",
  "Open Sans",
  "Robotica",
  "Comic Sans",
  "Pretentious",
];
const fontSize = ["Very Small", "Small", "Medium", "Large", "Very Large"];

const Selector = ({
  title,
  kind,
  handleToggleDesignDropdowns,
  droppedDown,
  designConfigs,
  handleChangeDesignConfigs
}) => {
  const [index, setIndex] = useState(2);

  const kinds = {
    fontFamily: fontFamily,
    fontSize: fontSize,
  };

  const changeIndex = (newIndex) => {
    setIndex(newIndex);
  };

  const [colorValue, setColorValue] = useState("#112131");

  const handleColorChange = (e) => {
    handleChangeDesignConfigs(kind, e.target.value);
  };

  const colorStyle = {
    margin: "0",
    padding: "0",
    border: "none",
    outline: "none",
    background: "none",
    font: "inherit",
    color: "inherit",
    appearance: "none",
    width: "30px",
    height: "30px",
    borderRadius: "50%", // Use camelCase
    cursor: "pointer",
    backgroundColor: designConfigs[kind], // Make sure the value is a string
  };

  return (
    <div
      className={`${SelectorCss.container} ${
        (kind !== "textColor" && kind != "accentColor") ? SelectorCss.pointer : null
      }`}
    >
      <div
        className={SelectorCss.top}
        onClick={(kind !== "textColor" && kind != "accentColor") ? () => handleToggleDesignDropdowns(): null}
      >
        <div className={SelectorCss.left}>
          <div className={SelectorCss.title}>{title}</div>
          <img src="src/assets/images/dots.svg" alt="devider" />
          {kind !== "textColor" && kind != "accentColor" && (
            <div className="value">{title == "Family" ? designConfigs.fontFamily : designConfigs.fontSize}</div>
          )}
          {(kind == "textColor" || kind == "accentColor") && (
            <>
              <input
                style={colorStyle}
                className={SelectorCss.color}
                type="color"
                onChange={(e) => handleColorChange(e)}
              />
            </>
          )}
        </div>
        {kind !== "textColor" && kind != "accentColor" && (
          <img
            className={SelectorCss.arrow}
            src="src/assets/images/rightArrow.png"
            alt="expand"
          />
        )}
      </div>
      {droppedDown &&
        (kind !== "textColor" && kind != "accentColor") &&
        kinds[kind].map((item, i) => (
          <SelectionItem
            key={i}
            title={item}
            handleSetIndex={() => changeIndex(i)}
            handleChangeDesignConfigs={handleChangeDesignConfigs}
            last={i == kinds[kind].length - 1}
            kind={kind}
          />
        ))}
    </div>
  );
};

export default Selector;
