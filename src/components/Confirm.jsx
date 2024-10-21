import ConfirmCss from "../styles/Confirm.module.css";

const Confirm = ({ handleAppendToData, type, popupData, handleChangePopup }) => {
  return <div className={ConfirmCss.container} onClick={() => {
    handleAppendToData(type, popupData)
    handleChangePopup(false)
}}>Confirm</div>;
};

export default Confirm;
