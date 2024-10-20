import { popups } from "../Data";
import PopupCss from "../styles/Popup.module.css";
import FullInput from "./FullInput";
import HalfInput from "./HalfInput";

const Popup = ({ handleChangeData, data, handleChangePopup }) => {
  return (
    <div className={PopupCss.container}>
      <div className={PopupCss.inside}>
        <img
          className={PopupCss.close}
          src="src/assets/images/Close.svg"
          alt="close"
          onClick={() => handleChangePopup(false)}
        />
        <FullInput
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
        />
      </div>
    </div>
  );
};

export default Popup;
