import { Link } from "react-router-dom";
import { useState } from "react";
import './Navbar.css'

const Navbar = () => {
    const [ currentPage, setCurrentPage ] = useState('')

    const handleChange = (e) => {
        const id = e.target.getAttribute('id')
        if(id === '1') setCurrentPage('match')
        if(id === '2') setCurrentPage('news')
        if(id === '3') setCurrentPage('matchChart')
        if(id === '4') setCurrentPage('player')
        if(id === '5') setCurrentPage('stat')
        if(id === '6') setCurrentPage('ranking')
    }
    return (
        <div className='navbar-header'>
            <Link id='1' to='/match' onClick={e => handleChange(e)} className={`navItem ${currentPage=='match' && 'active'}`}>Trận đấu</Link>
            <Link id='2' to='/news' onClick={e => handleChange(e)} className={`navItem ${currentPage=='news' && 'active'}`}>Tin tức</Link>
            <Link id='3' to='/matchChart' onClick={e => handleChange(e)} className={`navItem ${currentPage=='matchChart' && 'active'}`}>Sơ đồ thi đấu</Link>
            <Link id='4' to='/player' onClick={e => handleChange(e)} className={`navItem ${currentPage=='home' && 'player'}`}>Cầu thủ</Link>
            <Link id='5' to='/stat' onClick={e => handleChange(e)} className={`navItem ${currentPage=='home' && 'stat'}`}>Số liệu thống kê</Link>
            <Link id='6' to='/ranking' onClick={e => handleChange(e)} className={`navItem ${currentPage=='home' && 'ranking'}`}>Bảng xếp hạng</Link>
        </div>
    )
}

export default Navbar
