import InputCss from "../styles/Input.module.css";
import { Images } from "../utils";
import { useState } from "react";

const Input = ({ icon, iconAlt, title }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(prevExpanded => !prevExpanded)
  }

  return (
    <div className={InputCss.input} onClick={toggleExpanded}>
      <div className={InputCss.left}>
        <img className={`${InputCss.svgs} ${title == 'Profile' ? InputCss.smaller : title == 'Profile' ? InputCss.smaller : null}`} src={icon} alt={iconAlt} />
        <div>{title}</div>
      </div>
      <div className={InputCss.right}>
        <img className={`${InputCss.arrow} ${expanded ? InputCss.rotated : null}`} src={Images.rightArrow} alt="expand" />
      </div>
    </div>
  );
};

export default Input;
