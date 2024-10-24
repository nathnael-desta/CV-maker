import { useEffect, useState } from "react";
import DesignItemCss from "../styles/DesignItem.module.css";

const DesignItem = ({ title, children }) => {
  return (
    <div className={DesignItemCss.container}>
      <div className={DesignItemCss.title}>{title}</div>
      {children}
    </div>
  );
};

export default DesignItem;
