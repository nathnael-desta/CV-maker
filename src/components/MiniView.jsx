import MiniViewCss from "../styles/MiniView.module.css";

const MiniView = ({
  title,
  handleTogglePopup,
  popup,
  handleChangePopup,
  type,
  index,
  data
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
            console.log("the id is ......................................", data[type][index].id)
            handleChangePopup(popup.isShown, 'delete', -1, false, false, true, data[type][index].id, type);
            handleTogglePopup();
          }}
        />
      </div>
    </div>
  );
};

export default MiniView;
