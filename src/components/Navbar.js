import './css/navBar.css'
import nanoLogo from './images/nanoLogo.png'

 function Navbar(){
    return(
        <div className="navbarcontainer">
            <img src={nanoLogo} alt="logo"></img>
            <div className="menu-opt">menu opt 1</div>
            <div className="menu-opt">menu opt 2</div>
            <div className="menu-opt">menu opt 3</div>
        </div>
    )
}
export default Navbar