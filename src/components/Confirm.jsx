import ConfirmCss from "../styles/Confirm.module.css";

const Confirm = ({ handleAppendToData, type, popupData, handleChangePopup, handleAppendMiniview, dropdowns }) => {
  return <div className={ConfirmCss.container} onClick={() => {
    handleAppendToData(type, popupData)
    handleChangePopup(false)
    handleAppendMiniview(type, popupData)

}}>Confirm</div>;
};

export default Confirm;
