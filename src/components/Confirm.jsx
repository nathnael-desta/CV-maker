import ConfirmCss from "../styles/Confirm.module.css";
import Popup from "./Popup";

const Confirm = ({ handleAppendToData, type, popupData, handleChangePopup, handleAppendMiniview, dropdowns, handleTogglePopup, handleDeletePopup, popup }) => {
  return <div className={ConfirmCss.container} onClick={() => {
    handleTogglePopup()
    if (type == 'delete') {
        handleDeletePopup(popup.nextType)
    }
}}>Confirm</div>;
};

export default Confirm;
