import NavButtonCss from '../styles/NavButton.module.css'

const NavButton = ({text}) => {
    return <div className={NavButtonCss.navButton}>
        {text}
    </div>
}

export default NavButton