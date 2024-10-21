import MiniViewCss from '../styles/MiniView.module.css'


const MiniView = () => {
    return (
        <div className={MiniViewCss.container}>
            <div className={MiniViewCss.left}>
                Addis Ababa University
            </div>
            <div className={MiniViewCss.right}>
                <img src="src/assets/images/eye.svg" alt="unshow" />
                <img src="src/assets/images/dots.svg" alt="options" />
            </div>
        </div>
    )
}

export default MiniView