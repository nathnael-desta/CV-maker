import HalfInputCss from "../styles/HalfInput.module.css";

const HalfInput = ({
  firstText,
  secondText,
  inputName1,
  inputName2,
  data,
  type,
  handleChangeData,
  from,
  handlePopupData,
  popup,
  handleChangeDataList
}) => {
  const handleInputChange1 = (event) => {
    const inputValue = event.target.value;

    if (from == "popup") {
    handleChangeDataList(type, popup.index, inputName1, inputValue)
    } else {
      handleChangeData(type, inputName1, inputValue);
    }
  };

  const handleInputChange2 = (event) => {
    const inputValue = event.target.value;

    if (from == "popup") {
        handleChangeDataList(popup.input, popup.index, inputName2, inputValue)
    } else {
      handleChangeData(type, inputName2, inputValue);
    }
  };

  return (
    <div className={HalfInputCss.container}>
      <div className={HalfInputCss.subContainer}>
        <div className={HalfInputCss.left}>{firstText}</div>
        <input
          className={HalfInputCss.right}
          type="text"
          name=""
          id=""
          onChange={handleInputChange1}
          value={from == "popup" ? data[popup.input][popup.index][inputName1] : data[type][inputName1]}
        />
      </div>
      <div className={HalfInputCss.subContainer}>
        <div className={HalfInputCss.left}>{secondText}</div>
        <input
          className={HalfInputCss.right}
          type="text"
          name=""
          id=""
          onChange={handleInputChange2}
          value={from == "popup" ? data[popup.input][popup.index][inputName2] : data[type][inputName2]}
        />
      </div>
    </div>
  );
};

export default HalfInput;
