import TextViewCss from "../styles/TextView.module.css";

const TextView = ({ text }) => {
    return (
        <div className={TextViewCss.text}>{text}</div>
    )
}

export default TextView
