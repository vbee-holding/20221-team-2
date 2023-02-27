import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FaFutbol, FaYoutube } from 'react-icons/fa'
import { Link } from "react-router-dom";
import './MatchDetail.css'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import HappeningsTab from '../../../components/Contents/MatchDetailTab/HappeningsTab/HappeningsTab' 
import SquadTab from '../../../components/Contents/MatchDetailTab/SquadTab/SquadTab'
import StatTab from '../../../components/Contents/MatchDetailTab/StatTab/StatTab'
import NewsTab from '../../../components/Contents/MatchDetailTab/NewsTab/NewsTab'

const MatchDetail = () => {
    //lấy data trả về từ api
    useEffect(() => {
        window.scrollTo(0, 0) //cuộn lên đầu trang
        const fetchData = async () => {
            const result = await axios.get('/api/overviewmatch/' + IdMatch)
            console.log(result.data)
            setData([result.data])
        }
        fetchData()
    }, []);
    const [data, setData] = useState([])
    const [ currentTab, setCurrentTab ] = useState('1')
    //Dùng Hook useState để lưu giá trị khi onClick
    const [selectedTab, setSelectedTab] = useState(0)
    //Set lại selectedTab = index
    const handleTabChange = (index, e) => {
        setSelectedTab(index)
        const id = e.target.getAttribute('id')
        if(id === '1') setCurrentTab('1')
        if(id === '2') setCurrentTab('2')
        if(id === '3') setCurrentTab('3')
        if(id === '4') setCurrentTab('4')
    }

    //Lấy id trên URL 
    const { IdMatch } = useParams()

    return (
        <div className='matchDetail'>
            <Header />
            {data.map((child) => (
                <div key={child._id} className='mDetail'>
                    <div className='mDetail1'>
                        <div className='mDetail1Title'>Giải Bóng đá Thế giới 2022 - {child.Date}</div>
                        <div className='mDetail1End'>Kết thúc</div>
                    </div>
                    <div className='mDetail2'>
                        <a className='mDetail2Link' href={child.LinkHomeTeam}> 
                            <img className='mDetail2Img1' src={child.HomeTeam.PictureUrl.replace('{format}', 'sq').replace('{size}','2')} alt="ảnh QK" />
                            <div className='mDetail2Team1'>{child.HomeTeam.TeamName}</div>
                        </a>
                        <div className='mDetail2Score1'>{child.HomeTeam.Score}</div>
                        <div className='mDetail2Score1-2'>-</div>
                        <div className='mDetail2Score2'>{child.AwayTeam.Score}</div>
                        <a className='mDetail2Link' href={child.LinkAwayTeam}>
                            <img className='mDetail2Img2' src={child.AwayTeam.PictureUrl.replace('{format}', 'sq').replace('{size}','2')} alt="ảnh QK" />
                            <div className='mDetail2Team2'>{child.AwayTeam.TeamName}</div>
                        </a>
                    </div>
                    {console.log(child.HomeTeamPenaltyScore)}
                    {(child.AwayTeam.Score === child.HomeTeam.Score && child.Description !== 'Vòng đấu bảng') ? (
                        <pre className='mDetail3Pen'>{child.HomeTeamPenaltyScore}    penalty   {console.log(typeof(child.AwayTeam.Score))} {child.AwayTeamPenaltyScore}</pre>) : <div></div>
                    }
                    <Link to={child.Description === 'Vòng đấu bảng' ? '/ranking' : '/matchChart'} className='mDetail3'>{child.Description} {child.Group == 0 ? '' : '-'} {child.Group == 0 ? '' : child.Group}</Link>
                    <div className='mDetail4'>
                        <div className='mDetail4List'>
                            {child.HomeTeam.Goals.map((element, index) => (
                                ((index) < child.HomeTeam.Score) ? (
                                    <a key={element.Minute} className='mDetail4ListPlayer' href={element.UrlPlayer}>
                                        <div className='mDetail4ListText' key={element}>{element.NamePlayer} {element.Minute}</div>
                                    </a>
                                ) : ''
                            ))}
                        </div>
                        <div className='mDetail4Futbol'>{<FaFutbol />}</div>
                        <div className='mDetail4List'>
                            {child.AwayTeam.Goals.map((element, index) => (
                                ((index) < child.AwayTeam.Score) ? (
                                    <a key={element.Minute} className='mDetail4ListPlayer' href={element.UrlPlayer}>
                                        <div className='mDetail4ListText' key={element}>{element.NamePlayer} {element.Minute}</div>
                                    </a>
                                ) : ''
                            ))}
                        </div>
                    </div>
                    <div className='mDetail5'>
                        <div className='mDetail5Stadium'>Sân vận động: </div>
                        <a className='mDetail5Link' href={child.Stadium_URL}>{child.Stadium}</a>
                    </div>
                    <div className='mDetail6'>
                        <a href={child.VideoURL}>
                            <img className='mDetail6Img' src={child.ImageURL} alt="ảnh highlight" />
                            <div className='mDetail6Text'>
                                <div className='mDetail6TextItem1'>{<FaYoutube />}</div>
                                <div className='mDetail6TextItem2'>Tóm tắt về trận đấu - {child.TimePlay}</div>
                            </div>
                        </a>
                    </div>
                    <div className='mDetail7'>
                        <button id='1' autoFocus className={`mDetail7Item ${currentTab=='1' && 'active1'}`} onClick={(e) => handleTabChange(0, e)}>DIỄN BIẾN CHÍNH</button>
                        <button id='2' className={`mDetail7Item ${currentTab=='2' && 'active1'}`} onClick={(e) => handleTabChange(1, e)}>ĐỘI HÌNH RA SÂN</button>
                        <button id='3' className={`mDetail7Item ${currentTab=='3' && 'active1'}`} onClick={(e) => handleTabChange(2, e)}>THỐNG KÊ</button>
                        <button id='4' className={`mDetail7Item ${currentTab=='4' && 'active1'}`} onClick={(e) => handleTabChange(3, e)}>TIN TỨC</button>
                    </div>
                    {selectedTab === 0 && <HappeningsTab arr={child}/>}
                    {selectedTab === 1 && <SquadTab arr={child}/>}
                    {selectedTab === 2 && <StatTab arr={child}/>}
                    {selectedTab === 3 && <NewsTab arr={child}/>}
                </div>
            ))}
            <Footer />
        </div>
    )
}

export default MatchDetail