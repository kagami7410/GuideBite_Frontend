import NavItem from "./NavItem"
import logo from './images/Recipe_Gen.png'
import recipe1 from './images/recipe1.jpeg'

const NavBar = () => {
    return (
        <>
        <nav className="navbar">

            <div className="logo-container">
                <img className="logo" src={logo} alt="logo image"/>
                <img className="logo" src= {recipe1} alt=" "/>
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