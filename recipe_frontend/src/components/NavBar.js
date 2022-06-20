import NavItem from "./NavItem"
import logo from './images/Recipe_Gen.png'

const NavBar = () => {
    return (
        <>
        <nav className="navbar">

            <div className="logo-container">
                <img className="logo" src={logo} alt="logo image"/>
            </div>

            <div className="nav-items-container">
                <NavItem  text ="Add Recipe"/>
                <NavItem  text ="Find Recipe"/>
                <NavItem  text ="Shopping"/>

            </div>


        </nav>
        </>
    )
}

export default NavBar