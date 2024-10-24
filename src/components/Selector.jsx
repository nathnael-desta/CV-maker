import { useEffect, useState } from "react";
import SelectorCss from "../styles/Selector.module.css";

const Selector = ({ title, value }) => {
  return (
    <div className={SelectorCss.container}>
      <div className={SelectorCss.left}>
        <div className={SelectorCss.title}>{title}</div>
        <img src="src/assets/images/dots.svg" alt="devider" />
        <div className="value">{value}</div>
      </div>
      <img className={SelectorCss.arrow} src="src/assets/images/rightArrow.png" alt="expand" />
    </div>
  );
};

export default Selector;
