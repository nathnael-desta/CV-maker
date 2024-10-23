import ConfirmCss from "../styles/Confirm.module.css";

const Confirm = ({ handleAppendToData, type, popupData, handleChangePopup, handleAppendMiniview, dropdowns, handleTogglePopup }) => {
  return <div className={ConfirmCss.container} onClick={() => {
    handleTogglePopup()

}}>Confirm</div>;
};

export default Confirm;
