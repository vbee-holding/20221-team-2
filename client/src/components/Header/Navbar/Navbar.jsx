import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {

    return (
        <div className='navbar'>
            <Link to='/match' className='navItem'>Trận đấu</Link>
            <Link to='/news' className='navItem'>Tin tức</Link>
            <Link to='/matchChart' className='navItem'>Sơ đồ thi đấu</Link>
            <Link to='/player' className='navItem'>Cầu thủ</Link>
            <Link to='/stat' className='navItem'>Số liệu thống kê</Link>
            <Link to='/ranking' className='navItem'>Bảng xếp hạng</Link>
        </div>
    )
}

export default Navbar
