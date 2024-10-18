import HalfInputCss from "../styles/HalfInput.module.css";

const HalfInput = ({ firstText, secondText, inputName1, inputName2, data, type, handleChangeData }) => {
    const handleInputChange1 = (event) => {
        const inputValue = event.target.value;

        handleChangeData(type, inputName1, inputValue)
    }

    const handleInputChange2 = (event) => {
        const inputValue = event.target.value;

        handleChangeData(type, inputName2, inputValue)
    }

  return (
    <div className={HalfInputCss.container}>
      <div className={HalfInputCss.subContainer}>
        <div className={HalfInputCss.left}>{firstText}</div>
        <input className={HalfInputCss.right} type="text" name="" id="" onChange={handleInputChange1} value={data[type][inputName1]} />
      </div>
      <div className={HalfInputCss.subContainer}>
        <div className={HalfInputCss.left}>{secondText}</div>
        <input className={HalfInputCss.right} type="text" name="" id="" onChange={handleInputChange2} value={data[type][inputName2]}/>
      </div>
    </div>
  );
};

export default HalfInput
