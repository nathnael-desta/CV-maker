import FullInputCss from "../styles/FullInput.module.css";

const FullInput = ({
  text,
  inputName,
  handleChangeData,
  type,
  data,
  from,
  handlePopupData,
  popup,
  handleChangeDataList
}) => {
  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    if (from == "popup") {
      // handlePopupData(inputName, inputValue);
      handleChangeDataList(type, popup.index, inputName, inputValue)
    } else {
      handleChangeData(type, inputName, inputValue);
    }
  };
  return (
    <div className={FullInputCss.container}>
      <div className={FullInputCss.left}>{text}</div>
      <input
        className={FullInputCss.right}
        type="text"
        name=""
        id=""
        onChange={handleInputChange}

        value={from == "popup" ? data[type][popup.index][inputName] : data[type][inputName]}
      />
    </div>
  );
};

export default FullInput;
