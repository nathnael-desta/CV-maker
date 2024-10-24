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

const Selector = ({ title, kind, handleToggleDesignDropdowns, droppedDown }) => {


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

  return (
    <div className={SelectorCss.container}>
      <div className={SelectorCss.top} onClick={() => handleToggleDesignDropdowns()}>
        <div className={SelectorCss.left}>
          <div className={SelectorCss.title}>{title}</div>
          <img src="src/assets/images/dots.svg" alt="devider" />
          <div className="value">{kinds[kind][index]}</div>
        </div>
        <img
          className={SelectorCss.arrow}
          src="src/assets/images/rightArrow.png"
          alt="expand"
        />
      </div>
      {droppedDown &&
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
