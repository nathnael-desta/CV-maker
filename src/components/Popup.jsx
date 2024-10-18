import PopupCss from "../styles/Popup.module.css";
import FullInput from "./FullInput";
import HalfInput from "./HalfInput";

const Popup = ({ handleChangeData, data }) => {
  return (
    <div className={PopupCss.container}>
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
        inputName1='afd'
        inputName2='adfs'
        data={data}
        type='general'
        handleChangeData={handleChangeData}
      />
    </div>
  );
};

export default Popup;
