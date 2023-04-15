import './Navbar.css'
import logo1 from '../../assets/images/logo1.png'
const Navbar = () =>{
    return(
        <nav>
            <div>
                <img src={logo1} alt='logo' className='logo'/>
            </div>
        </nav>
    )
}

export default Navbar;