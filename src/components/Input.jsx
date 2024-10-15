import InputCss from "../styles/Input.module.css";
import { Images } from "../utils";

const Input = ({ icon, iconAlt, title }) => {
  return (
    <div className={InputCss.input}>
      <div className={InputCss.left}>
        <img className={`${InputCss.svgs} ${title == 'Profile' ? InputCss.smaller : title == 'Profile' ? InputCss.smaller : null}`} src={icon} alt={iconAlt} />
        <div>{title}</div>
      </div>
      <div className={InputCss.right}>
        <img src={Images.rightArrow} alt="expand" />
      </div>
    </div>
  );
};

export default Input;
