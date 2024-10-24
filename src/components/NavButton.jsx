import NavButtonCss from '../styles/NavButton.module.css'

const NavButton = ({text, handleChangeNav}) => {
    return <div className={NavButtonCss.navButton} onClick={() => handleChangeNav(text)}>
        {text}
    </div>
}

export default NavButton