import '../components/styles/global.css'
import '../components/styles/navbar.css'
import logo from '../assets/logo.png'
import right from '../assets/Right.svg'
function NavBar(){
    return(
        <nav>
            <div className='navbar'>
                <img className="logo" src={logo} alt="" />
                <div className="navbartext">
                    <a href=""><em>Home</em></a>
                    <a href=""><em>About</em></a>
                    <a href=""><em>Contact</em></a>
                    <a href=""><em>Pricing</em></a>
                    <a href=""><em>Testimonials</em></a>
                    <a href=""><em className="loginbutton">Login <img className='right' src={right} alt="" /></em></a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;