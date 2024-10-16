import SmallViewCss from "../styles/SmallView.module.css";


const SmallView = ({ text }) => {
    const shown = true
    return (
        <div className={SmallViewCss.container}>
            <div className={SmallViewCss.left}>{text}</div>
            <div className={SmallViewCss.right}>
                {shown && <img src="src/assets/images/eye.svg" alt="shown" />}
                {!shown &&<img src="src/assets/images/eyeOff.svg" alt="hidden" />}
                <img src="src/assets/images/dots.svg" alt="options" />
            </div>
        </div>
    )
}

export default SmallView