import DescriptionCss from '../styles/Description.module.css'

const Description = ({ handleChangeDescription, type, data }) => {
    const handleInputChange = (event) => {
        const inputValue = event.target.value;

        handleChangeDescription(type, inputValue)
    }

    return (
        <textarea className={DescriptionCss.text} name="" id="" placeholder="Talk about yourself..." onChange={handleInputChange} value={data[type].text}></textarea>
    )
}

export default Description