import AddCss from '../styles/Add.module.css'

const Add = () => {
    return (
        <div className={AddCss.container}>
            <img src="src/assets/images/add.svg" alt="add" />
            <div className="text">Add</div>
        </div>
    )
}

export default Add