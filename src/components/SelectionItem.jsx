import { useEffect, useState } from "react";
import SelectionItemCss from "../styles/SelectionItem.module.css";

const SelectionItem = ({ title, noBottom, handleSetIndex, last }) => {
  return (
    <div className={`${SelectionItemCss.container} ${!last ? SelectionItemCss.bottomLine : SelectionItemCss.lastItem}`} onClick={() => handleSetIndex()}>
      <div className={SelectionItemCss.title}>{title}</div>
    </div>
  );
};

export default SelectionItem;
