import AddCss from "../styles/Add.module.css";

const Add = ({ handleChangePopup,  data, type }) => {
  return (
    <div
      className={AddCss.container}
      onClick={() => handleChangePopup(true, type, data[type].length, true, true)}
    >
      <img src="src/assets/images/add.svg" alt="add" />
      <div className="text">Add</div>
    </div>
  );
};

export default Add;
