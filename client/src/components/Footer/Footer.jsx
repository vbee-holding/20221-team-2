import './Footer.css'
import { Link } from 'react-router-dom'
import Google from './Images/googlePlay.png'
import Apple from './Images/appleAppStore.png'
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaThumbsUp } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='contact'>
                <Link to='/' className='contactTitle'>FIFA WORLD CUP 2022</Link>
                <div className='contactIcons'>
                    <a className='contactIconsLink' href="https://twitter.com/FIFAcom"><FaTwitter /></a>
                    <a className='contactIconsLink' href="https://www.facebook.com/fifa"><FaFacebook /></a>
                    <a className='contactIconsLink' href="https://www.instagram.com/fifaworldcup/"><FaInstagram /></a>
                    <a className='contactIconsLink' href="https://www.youtube.com/FIFATV"><FaYoutube /></a>
                    <a className='contactIconsLink' href="https://www.tiktok.com/@fifaworldcup"><FaTiktok /></a>
                </div>
                <div className='contactDownload'>
                    <a className='contactDownloadLink' href="https://play.google.com/store/apps/details?id=com.fifa.fifaapp.android&hl=en&pli=1">
                        <img className='contactDownloadImage' src={Google} alt="anh google" />
                    </a>
                    <a className='contactDownloadLink' href="https://apps.apple.com/us/app/fifa-official-app/id756904853">
                        <img className='contactDownloadImage' src={Apple} alt="anh apple" />
                    </a>
                </div>  
            </div>
            
            <p className='footerContent'>Trang web được xây dựng dựa trên trang web Fifa World Cup</p>

            <div className='footerIcon'><FaThumbsUp /></div>

            <div className='regulations'>
                <div className='regulationsItem'>
                    <a href='https://www.fifa.com/data-protection-portal/data-protection-policy' className='regulationsItem1'>
                        CHÍNH SÁCH BẢO MẬT
                    </a>
                    <a href='https://www.fifa.com/terms-of-service' className='regulationsItem1'>
                        ĐIỀU KHOẢN DỊCH VỤ
                    </a>
                    <a href='https://www.fifa.com/fifaplus/en/articles/advertise-with-us' className='regulationsItem1'>
                        QUẢNG CÁO
                    </a>
                    <a href='https://www.fifa.com/data-protection-portal/cookie-policy' className='regulationsItem1'>
                        QUẢN LÝ TÙY CHỌN COOKIE
                    </a>
                </div>
                <div className='regulationsItem'>
                    <div className='regulationsItem2'>Bản quyền: @Nhóm 2 Project ĐHBK HN</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
