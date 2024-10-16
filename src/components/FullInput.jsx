import FullInputCss from '../styles/FullInput.module.css'

const FullInput = ({text}) => {
    return (
        <div className={FullInputCss.container}>
            <div className={FullInputCss.left}>{text}</div>
            <input className={FullInputCss.right} type="text" name="" id="" />
        </div>
    )
}

export default FullInput