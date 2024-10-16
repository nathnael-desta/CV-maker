import ListItemCss from "../styles/ListItem.module.css";

const ListItem = ( {text} ) => {
    return (
        <div className={ListItemCss.container}>
            <img src="src/assets/images/move.svg" alt="move" />
            <div className={ListItemCss.text}>{text}</div>
            <img className={ListItemCss.close} src="src/assets/images/Close.svg" alt="close" />
        </div>
    )
}

export default ListItem