import MiniViewCss from "../styles/MiniView.module.css";

const MiniView = ({
  title,
  handleTogglePopup,
  popup,
  handleChangePopup,
  type,
  index,
}) => {
  return (
    <div
      className={MiniViewCss.container}
      onClick={() => {
        handleChangePopup(popup.isShown, type, index, false, false);
        handleTogglePopup();
      }}
    >
      <div className={MiniViewCss.left}>
        <img
          className={MiniViewCss.drag}
          src="src/assets/images/drag.svg"
          alt="drag"
        />
        <div className={MiniViewCss.text}>{title}</div>
      </div>
      <div className={MiniViewCss.right}>
        <img src="src/assets/images/eye.svg" alt="unshow" />
        <img
          className={MiniViewCss.close}
          src="src/assets/images/Close.svg"
          alt="options"
          onClick={(e) => {
            e.stopPropagation();
            handleChangePopup(popup.isShown, "delete", 1, false, false);
            handleTogglePopup();
          }}
        />
      </div>
    </div>
  );
};

export default MiniView;
