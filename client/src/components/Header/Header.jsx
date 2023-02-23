import './Header.css'
import { Link } from 'react-router-dom'
import logoWC from './Logo/Logo.png'
import Navbar from './Navbar/Navbar'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/' className='headerLogoTitle'>
                <img className='logoWC' src={logoWC} alt='logo'/>
                <h1 className='title'>Giải bóng đá Vô địch Thế giới Qatar 2022</h1>
            </Link>

            <Navbar />
        </div>
    )
}

export default Header
