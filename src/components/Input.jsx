import InputCss from "../styles/Input.module.css";
import { Images } from "../utils";
import { useState } from "react";

const Input = ({ icon, iconAlt, title }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className={InputCss.input} onClick={toggleExpanded}>
      <div className={InputCss.topBar}>
        <div className={InputCss.left}>
          <div className={InputCss.imgContianer}>
            <img
              className={`${InputCss.svgs} ${
                title == "General"
                  ? InputCss.smaller
                  : title == "Profile"
                  ? InputCss.tiny
                  : null
              }`}
              src={icon}
              alt={iconAlt}
            />
          </div>
          <div>{title}</div>
        </div>
        <div className={InputCss.right}>
          <img
            className={`${InputCss.arrow} ${
              expanded ? InputCss.rotated : null
            }`}
            src={Images.rightArrow}
            alt="expand"
          />
        </div>
      </div>
      <div className={InputCss.dropdown}>
        {title == "General" && (
          <div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
