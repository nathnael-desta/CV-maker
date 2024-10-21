import MiniViewCss from '../styles/MiniView.module.css'


const MiniView = ({ title }) => {
    return (
        <div className={MiniViewCss.container}>
            <div className={MiniViewCss.left}>
                <img className={MiniViewCss.drag} src="src/assets/images/drag.svg" alt="drag" />
                <div className={MiniViewCss.text}>{title}</div>
            </div>
            <div className={MiniViewCss.right}>
                <img src="src/assets/images/eye.svg" alt="unshow" />
                <img src="src/assets/images/dots.svg" alt="options" />
            </div>
        </div>
    )
}

export default MiniView