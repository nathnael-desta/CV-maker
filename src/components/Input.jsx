import InputCss from "../styles/Input.module.css";
import { Images } from "../utils";
import { useState } from "react";
import FullInput from "./FullInput";
import HalfInput from "./HalfInput";
import Description from "./Description";
import SmallView from "./SmallView";
import ListItem from "./ListItem";
import Add from "./Add";
import { arrangements } from "../Data";
import Confirm from "./Confirm";
import MiniView from "./MiniView";

const Input = ({
  dropdown,
  handleToggleDropdown,
  data,
  handleChangeData,
  handleChangeDescription,
  handleChangePopup,
  popup,
}) => {
  const { name: icon, alt: iconAlt, title, droppedDown, type } = dropdown;

  const componentMap = {
    FullInput,
    HalfInput,
    Description,
    SmallView,
    ListItem,
    Add,
    Confirm,
  };

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
      {droppedDown &&
        arrangements[type].map((item, index) => {
          const Component = componentMap[item.inputKind];
          return (
            <Component
              key={index}
              from="input"
              {...item.props}
              handleChangeData={handleChangeData}
              handleChangeDescription={handleChangeDescription}
              type={type}
              data={data}
              handleChangePopup={handleChangePopup}
              popup={popup}
            />
          );
        })}
      <MiniView />
    </div>
  );
};

export default Input;
