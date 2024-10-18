import HalfInputCss from "../styles/HalfInput.module.css";

const HalfInput = ({ firstText, secondText }) => {
    const handleInputChange1 = (event) => {
        const inputValue = event.target.value;

        handleChangeData(type, inputName, inputValue)
    }

    const handleInputChange2 = (event) => {
        const inputValue = event.target.value;

        handleChangeData(type, inputName, inputValue)
    }

  return (
    <div className={HalfInputCss.container}>
      <div className={HalfInputCss.subContainer}>
        <div className={HalfInputCss.left}>{firstText}</div>
        <input className={HalfInputCss.right} type="text" name="" id="" />
      </div>
      <div className={HalfInputCss.subContainer}>
        <div className={HalfInputCss.left}>{secondText}</div>
        <input className={HalfInputCss.right} type="text" name="" id="" />
      </div>
    </div>
  );
};

export default HalfInput
