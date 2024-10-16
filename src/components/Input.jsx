import InputCss from "../styles/Input.module.css";
import { Images } from "../utils";
import { useState } from "react";
import FullInput from "./FullInput";
import HalfInput from "./HalfInput";
import Description from "./Description";
import SmallView from "./SmallView";
import ListItem from "./ListItem";

const Input = ({ dropdown, handleToggleDropdown }) => {
  const { name: icon, alt: iconAlt, title, droppedDown } = dropdown

  return (
    <div className={InputCss.input}>
      <div className={InputCss.topBar} onClick={handleToggleDropdown}>
        <div className={InputCss.left}>
          <div className={InputCss.imgContianer}>
            <img
              className={`${InputCss.svgs} ${
                title == "General"
                  ? InputCss.smaller
                  : title == "Profile"
                  ? InputCss.tiny
                  : null
              }`}
              src={`${Images[icon]}`}
              alt={iconAlt}
            />
          </div>
          <div>{title}</div>
        </div>
        <div className={InputCss.right}>
          <img
            className={`${InputCss.arrow} ${
              droppedDown ? InputCss.rotated : null
            }`}
            src={Images.rightArrow}
            alt="expand"
          />
        </div>
      </div>
      {droppedDown && <ListItem text={"JavaScript"}/>}
    </div>
  );
};

export default Input;
