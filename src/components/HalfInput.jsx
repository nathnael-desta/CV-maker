import HalfInputCss from "../styles/HalfInput.module.css";

const HalfInput = ({ firstText, secondText }) => {
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
