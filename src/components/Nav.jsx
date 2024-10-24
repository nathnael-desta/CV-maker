import NavButton from "./NavButton";
import NavCss from "../styles/Nav.module.css";

const Nav = ({ handleChangeNav }) => {
  return (
    <div className={NavCss.navbar}>
      <NavButton text="Design" handleChangeNav={handleChangeNav}/>
      <NavButton text="Info" handleChangeNav={handleChangeNav}/>
    </div>
  );
};

export default Nav
