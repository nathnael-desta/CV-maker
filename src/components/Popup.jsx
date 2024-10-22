import { popupFormats } from "../Data";
import PopupCss from "../styles/Popup.module.css";
import FullInput from "./FullInput";
import HalfInput from "./HalfInput";
import Description from "./Description";
import SmallView from "./SmallView";
import ListItem from "./ListItem";
import Add from "./Add";
import Confirm from "./Confirm";
import { useState, useEffect } from "react";

const Popup = ({
  handleChangeData,
  data,
  handleChangePopup,
  popup,
  handleAppendToData,
  handleAppendMiniview,
  dropdowns,
  handleChangeDataList,
  handleTogglePopup,
  handleDeletePopup,
}) => {
  const componentMap = {
    FullInput,
    HalfInput,
    Description,
    SmallView,
    ListItem,
    Add,
    Confirm,
  };
  const [popupData, setPopupData] = useState(popupFormats[popup.input].data);

  const changePopupData = (inputName, value) => {
    setPopupData((prevPopupData) => ({
      ...prevPopupData,
      [inputName]: value,
    }));
  };

  return (
    <div className={PopupCss.container}>
      <div className={PopupCss.inside}>
        <img
          className={PopupCss.close}
          src="src/assets/images/Close.svg"
          alt="close"
          onClick={() => {
            handleTogglePopup();
            if (popup.newPopup) {
              handleDeletePopup(popup.input, popup.index);
            }
          }}
        />
        {popupFormats[popup.input].inputs.map((item, index) => {
          const Component = componentMap[item.inputKind];

          return (
            <Component
              key={item.id}
              index={popup.index}
              from="popup"
              {...item.props}
              data={data}
              type={popup.input}
              handlePopupData={(inputName, value) =>
                changePopupData(inputName, value)
              }
              handleAppendToData={handleAppendToData}
              popupData={popupData}
              handleChangePopup={handleChangePopup}
              handleAppendMiniview={
                item.inputKind == "Confirm" ? handleAppendMiniview : undefined
              }
              dropdowns={item.inputKind == "Confirm" ? dropdowns : undefined}
              handleChangeDataList={handleChangeDataList}
              handleTogglePopup={handleTogglePopup}
              popup={popup}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popup;
