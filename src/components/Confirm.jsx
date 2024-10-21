import ConfirmCss from "../styles/Confirm.module.css";

const Confirm = ({ handleAppendToData, type, popupData, handleChangePopup, handleAppendMiniview, dropdowns }) => {
  return <div className={ConfirmCss.container} onClick={() => {
    handleAppendToData(type, popupData)
    handleChangePopup(false)

    // const index = dropdowns.reduce((acc, dropdown, i) => {
    //     if (dropdown.type == type) {
    //         acc = i
    //     }

    //     return acc
    // }, null)

    // if (index) {
    //     handleAppendMiniview(index, popupData)
    // }

    handleAppendMiniview(type, popupData)



}}>Confirm</div>;
};

export default Confirm;
