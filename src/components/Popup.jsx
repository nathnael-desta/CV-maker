import { popups } from "../Data";
import PopupCss from "../styles/Popup.module.css";
import FullInput from "./FullInput";
import HalfInput from "./HalfInput";
import Description from "./Description";
import SmallView from "./SmallView";
import ListItem from "./ListItem";
import Add from "./Add";
import Confirm from "./Confirm";
import { useState } from "react";

const Popup = ({ handleChangeData, data, handleChangePopup, popup }) => {
    const componentMap = {
        FullInput,
        HalfInput,
        Description,
        SmallView,
        ListItem,
        Add,
        Confirm
      }
    const [ popupData, setPopupData] = useState(popups[popup.input].data)

    const changePopupData = (inputName, value) => {
        console.log(popupData, '1812344444')
        setPopupData((prevPopupData) => ({
            ...prevPopupData,
            [inputName]: value
        }))
    }

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
            const Component = componentMap[item.inputKind]

            return <Component key={index} from='popup' {...item.props} data={data} type={popup.input} handlePopupData={(inputName, value) => changePopupData(inputName, value)}/>
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
