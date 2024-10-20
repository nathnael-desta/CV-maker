import AddCss from '../styles/Add.module.css'

const Add = ({ handleChangePopup, inputName }) => {
    return (
        <div className={AddCss.container} onClick={() => handleChangePopup(true, inputName)}>
            <img src="src/assets/images/add.svg" alt="add" />
            <div className="text">Add</div>
        </div>
    )
}

export default Add