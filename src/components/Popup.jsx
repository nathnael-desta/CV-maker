import { popups } from "../Data";
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
  dropdowns
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
  const [popupData, setPopupData] = useState(popups[popup.input].data);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(data);
    }, 2000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

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
          onClick={() => handleChangePopup(false)}
        />
        {popups[popup.input].inputs.map((item, index) => {
          const Component = componentMap[item.inputKind];

          return (
            <Component
              key={index}
              index={index}
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
              handleAppendMiniview={item.inputKind== "Confirm" ? handleAppendMiniview : undefined}
              dropdowns={item.inputKind== "Confirm" ? dropdowns : undefined}
            />
          );
        })}
        {/* <FullInput
          text="Field"
          inputName="firstName"
          handleChangeData={handleChangeData}
          type="general"
          data={data}
        />
        <FullInput
          text="Institution"
          inputName="firstName"
          handleChangeData={handleChangeData}
          type="general"
          data={data}
        />
        <HalfInput
          firstText="Start"
          secondText="End"
          inputName1="afd"
          inputName2="adfs"
          data={data}
          type="general"
          handleChangeData={handleChangeData}
        /> */}
      </div>
    </div>
  );
};

export default Popup;
