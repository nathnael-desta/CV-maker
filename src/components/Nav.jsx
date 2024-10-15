import NavButton from "./NavButton";
import NavCss from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <div className={NavCss.navbar}>
      <NavButton text="Design" />
      <NavButton text="Info" />
    </div>
  );
};

export default Nav
