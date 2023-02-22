import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FaFutbol, FaYoutube } from 'react-icons/fa'

import './MatchDetail.css'
import { MatchApi } from '../../../apis/SetupApi'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import HappeningsTab from '../../../components/Contents/MatchDetailTab/HappeningsTab/HappeningsTab' 
import SquadTab from '../../../components/Contents/MatchDetailTab/SquadTab/SquadTab'
import StatTab from '../../../components/Contents/MatchDetailTab/StatTab/StatTab'
import NewsTab from '../../../components/Contents/MatchDetailTab/NewsTab/NewsTab'

const MatchDetail = () => {
    //Dùng Hook useEffect để cuộn lên đầu trang
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    //Dùng Hook useState để lưu giá trị khi onClick
    const [selectedTab, setSelectedTab] = useState(0)
    //Set lại selectedTab = index
    const handleTabChange = (index) => {
        setSelectedTab(index)
    }
    //Lấy id trên URL 
    const { id } = useParams()
    //Dùng vòng kết hợp vòng lặp map và find để lọc được mảng thõa mãn điều kiện
    const ArrFind =(Object.values(MatchApi).map((element) => (
        element.find(child => child.id === id)
    )))
    //Dùng vòng lặp filter để loại bỏ mảng có giá trị undefined
    const ArrFilter = ArrFind.filter(element => element !== undefined)

    return (
        <div className='matchDetail'>
            <Header />
            <div className='mDetail'>
                <div className='mDetail1'>
                    <div className='mDetail1Title'>Giải Bóng đá Thế giới 2022 - {ArrFilter[0].date}</div>
                    <div className='mDetail1End'>Kết thúc</div>
                </div>
                <div className='mDetail2'>
                    <a className='mDetail2Link' href={ArrFilter[0].linkTeam1}>
                        <img className='mDetail2Img1' src={ArrFilter[0].image1} alt="ảnh QK" />
                        <div className='mDetail2Team1'>{ArrFilter[0].team1}</div>
                    </a>
                    <div className='mDetail2Score1'>{ArrFilter[0].score[0]}</div>
                    <div className='mDetail2Score1-2'>-</div>
                    <div className='mDetail2Score2'>{ArrFilter[0].score[1]}</div>
                    <a className='mDetail2Link' href={ArrFilter[0].linkTeam2}>
                        <img className='mDetail2Img2' src={ArrFilter[0].image2} alt="ảnh QK" />
                        <div className='mDetail2Team2'>{ArrFilter[0].team2}</div>
                    </a>
                </div>
                <div className='mDetail3'>{ArrFilter[0].groupStage} - {ArrFilter[0].table}</div>
                <div className='mDetail4'>
                    <div className='mDetail4List'>
                        {ArrFilter[0].scorerName1.map(element => (
                            <div key={element}>{element}</div>
                        ))}
                    </div>
                    <div className='mDetail4Futbol'>{<FaFutbol />}</div>
                    <div className='mDetail4List'>
                        {ArrFilter[0].scorerName2.map(element => (
                            <div key={element}>{element}</div>
                        ))}
                    </div>
                </div>
                <div className='mDetail5'>
                    <div className='mDetail5Stadium'>Sân vận động: </div>
                    <a className='mDetail5Link' href={ArrFilter[0].linkStadium}>{ArrFilter[0].stadium}</a>
                </div>
                <div className='mDetail6'>
                    <a href={ArrFilter[0].video}>
                        <img className='mDetail6Img' src={ArrFilter[0].imagehighlight} alt="ảnh highlight" />
                        <div className='mDetail6Text'>
                            <div className='mDetail6TextItem1'>{<FaYoutube />}</div>
                            <div className='mDetail6TextItem2'>Tóm tắt về trận đấu - {ArrFilter[0].timehighlight}</div>
                        </div>
                    </a>
                </div>
                <div className='mDetail7'>
                    <button autoFocus className='mDetail7Item' onClick={() => handleTabChange(0)}>DIỄN BIẾN CHÍNH</button>
                    <button className='mDetail7Item' onClick={() => handleTabChange(1)}>ĐỘI HÌNH RA SÂN</button>
                    <button className='mDetail7Item' onClick={() => handleTabChange(2)}>THỐNG KÊ</button>
                    <button className='mDetail7Item' onClick={() => handleTabChange(3)}>TIN TỨC</button>
                </div>
                {selectedTab === 0 && <HappeningsTab arr={ArrFilter}/>}
                {selectedTab === 1 && <SquadTab arr={ArrFilter}/>}
                {selectedTab === 2 && <StatTab arr={ArrFilter}/>}
                {selectedTab === 3 && <NewsTab arr={ArrFilter}/>}
            </div>
            <Footer />
        </div>
    )
}

export default MatchDetail
