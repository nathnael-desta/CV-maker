import { useEffect, useState } from "react";
import SelectorCss from "../styles/Selector.module.css";
import SelectionItem from "./SelectionItem";

const FontDropdowns = [
  "Helvetica",
  "Open Sans",
  "Robotica",
  "Comic Sans",
  "Pretentious",
];
const Sizes = ["Very Small", "Small", "Medium", "Large", "Very Large"];

const Selector = ({
  title,
  kind,
  handleToggleDesignDropdowns,
  droppedDown,
}) => {
  const [index, setIndex] = useState(2);

  const kinds = {
    FontDropdowns: FontDropdowns,
    Sizes: Sizes,
  };

  const changeIndex = (newIndex) => {
    setIndex(newIndex);
  };

  const toggleDroppedDown = () => {
    setDroppedDown((prevDroppedDown) => !prevDroppedDown);
  };

  const [colorValue, setColorValue] = useState("#112131");

  const handleColorChange = (e) => {
    setColorValue(e.target.value)
  }

  const colorStyle = {
    margin: "0",
  padding: "0",
  border: "none",
  outline: "none",
  background: "none",
  font: "inherit",
  color: 'inherit',
  appearance: "none",
    width: "30px",
    height: "30px",
    borderRadius: "50%", // Use camelCase
    cursor: "pointer",
    backgroundColor: colorValue, // Make sure the value is a string
  };

  return (
    <div
      className={`${SelectorCss.container} ${
        kind !== "Color" ? SelectorCss.pointer : null
      }`}
    >
      <div
        className={SelectorCss.top}
        onClick={() => handleToggleDesignDropdowns()}
      >
        <div className={SelectorCss.left}>
          <div className={SelectorCss.title}>{title}</div>
          <img src="src/assets/images/dots.svg" alt="devider" />
          {kind !== "Color" && (
            <div className="value">{kinds[kind][index]}</div>
          )}
          {kind == "Color" && (
            <>
              <input style={colorStyle} className={SelectorCss.color} type="color"  onChange={() => handleColorChange() }/>
            </>
          )}
        </div>
        {kind !== "Color" && (
          <img
            className={SelectorCss.arrow}
            src="src/assets/images/rightArrow.png"
            alt="expand"
          />
        )}
      </div>
      {droppedDown &&
        kind !== "Color" &&
        kinds[kind].map((item, i) => (
          <SelectionItem
            key={i}
            title={item}
            handleSetIndex={() => changeIndex(i)}
            last={i == kinds[kind].length - 1}
          />
        ))}
    </div>
  );
};

export default Selector;
