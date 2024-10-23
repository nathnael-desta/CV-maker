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
  handleTogglePopup,
  handleDeletePopup
}) => {
  const {
    name: icon,
    alt: iconAlt,
    title,
    droppedDown,
    type,
    miniViews,
  } = dropdown;

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
      {Array.isArray(data[type]) && droppedDown &&
        data[type].map((item, i) => (
          <MiniView
            key={item.id}
            handleTogglePopup={handleTogglePopup}
            title={
              data[type][i].name
                ? data[type][i].name
                : data[type][i].company
                ? data[type][i].company
                : data[type][i].skillName
                ? data[type][i].skillName
                : data[type][i].title
                ? data[type][i].title
                : data[type][i].interestName
                ? data[type][i].interestName
                : data[type][i].languageName
                ? data[type][i].languageName
                : ""
            }
            popup={popup}
            handleChangePopup={handleChangePopup}
            type={type}
            index={i}
            handleDeletePopup={handleDeletePopup}
            data={data}
          />
        ))}
      {droppedDown &&
        arrangements[type].map((item, index) => {
          const Component = componentMap[item.inputKind];
          return (
            <Component
              key={item.id}
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
    </div>
  );
};

export default Input;
