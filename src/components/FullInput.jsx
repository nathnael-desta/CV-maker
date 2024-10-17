import FullInputCss from '../styles/FullInput.module.css'

const FullInput = ({text, inputName , handleChangeData, type}) => {
    const handleInputChange = (event) => {
        const inputValue = event.target.value;

        handleChangeData(type, inputName, inputValue)
    }
    return (
        <div className={FullInputCss.container}>
            <div className={FullInputCss.left}>{text}</div>
            <input className={FullInputCss.right} type="text" name="" id="" onChange={handleInputChange}/>
        </div>
    )
}

export default FullInput