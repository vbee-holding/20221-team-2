import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { FaStopwatch, FaFutbol } from 'react-icons/fa'
import './HappeningsTab.css'

const HappeningsTab = (props) => {
    
    const [data, setData] = useState([])
    useEffect(() => {
        async function fetchData() {
            const result = await axios.get('/api/EventMatch/' + IdMatch)
            console.log([result.data])
            setData([result.data]);
        }
        fetchData();
    }, []);
    
    const { IdMatch } = useParams()
    return (
        <div className='selectedTab0'>
            <div className='selectedTab0List1'>
                <div className='selectedTab0Item1'>{<FaStopwatch />}</div>
                <div className='selectedTab0Item2'>KẾT THÚC TRẬN ĐẤU</div>
                <div className='selectedTab0Item3'>{props.TimeEnd}</div>
            </div>
            {data.map((child) => (
                child.EventArr.map((item) => (
                    (item.Tag === 'Bookings' && item.Card === 'Thẻ vàng') ? 
                        (<div key={item.IdPlayer} className='selectedTab0List2 selectedTab0List3'>
                            <div className='tab0Item1'>
                                <div className='tab0Item11'>
                                    <img className='tab0Item1Img' src="https://ssl.gstatic.com/onebox/sports/game_feed/yellow_card_icon.svg" alt="ảnh thẻ vàng" />
                                    <div className='tab0Item1Title'>THẺ VÀNG</div>
                                </div>
                                <div className='tab0Item1Time'>Phút {item.Minute}'</div>
                            </div>
                            <hr />
                            <div className='tab0Item2Flex'>
                                <div className='tab0Item2 tab0Item23'>
                                    <a className='tab0Item2Name' href={item.UrlPlayer}><div>{item.NamePlayer} - {item.JerseyNum}</div></a>
                                    <a className='tab0Item2Content' href={item.UrlTeam}>
                                        <img className='tab0Item2Img' src={item.UrlPictureTeam} alt="ảnh QK" />
                                        <div className='tab0Item2Content1'>{item.TeamName} - {item.PositionLocalized}</div>
                                    </a>
                                </div>
                            </div>
                        </div>) : (item.Tag === 'Bookings' && item.Card === 'Thẻ đỏ') ?
                        (<div key={child._id} className='selectedTab0List2 selectedTab0List3'>
                            <div className='tab0Item1'>
                                <div className='tab0Item11'>
                                    <img className='tab0Item1Img' src="//ssl.gstatic.com/onebox/sports/soccer_timeline/red-card-right.svg" alt="ảnh thẻ đỏ" />
                                    <div className='tab0Item1Title'>THẺ ĐỎ</div>
                                </div>
                                <div className='tab0Item1Time'>Phút {item.Minute}'</div>
                            </div>
                            <hr />
                            <div className='tab0Item2Flex'>
                                <div className='tab0Item2 tab0Item23'>
                                    <a className='tab0Item2Name' href={item.UrlPlayer}><div>{item.NamePlayer} - {item.JerseyNum}</div></a>
                                    <a className='tab0Item2Content' href={item.UrlTeam}>
                                        <img className='tab0Item2Img' src={item.UrlPictureTeam} alt="ảnh QK" />
                                        <div className='tab0Item2Content1'>{item.TeamName} - {item.PositionLocalized}</div>
                                    </a>
                                </div>
                            </div>
                        </div>) : (item.Tag === 'Sub' ? 
                        (<div key={item.Minute} className='selectedTab0List2'>
                            <div className='tab0Item1'>
                                <div className='tab0Item11'>
                                    <img className='tab0Item1Img' src="https://ssl.gstatic.com/onebox/sports/game_feed/substitution_icon.svg" alt="ảnh icon" />
                                    <div className='tab0Item1Title'>THAY NGƯỜI</div>
                                </div>
                                <div className='tab0Item1Time'>Phút {item.Minute}'</div>
                            </div>
                            <hr />
                            <div className='tab0Item2Flex'>
                                <div className='tab0Item2'>
                                    <div className='tab0Item2Title'>VÀO SÂN</div>
                                    <a className='tab0Item2Name' href={item.UrlPlayerOn}>{item.PlayerOnName} - {item.JerseyNumOn}</a>
                                    <a className='tab0Item2Content' href={item.UrlTeam}>
                                        <img className='tab0Item2Img' src={item.UrlPictureTeam} alt="ảnh QK" />
                                        <div className='tab0Item2Content1'>{item.TeamName} - {item.PositionLocalizedOn}</div>
                                    </a>
                                </div>
                                <div className='tab0Item3'>
                                    <div className='tab0Item3Title'>RA SÂN</div>
                                    <a className='tab0Item3Name' href={item.UrlPlayerOff}>{item.JerseyNumOff} - {item.PlayerOffName}</a>
                                    <a className='tab0Item3Content' href={item.UrlTeam}>
                                        <div className='tab0Item3Content1'>{item.PositionLocalizedOn} - {item.TeamName}</div>
                                        <img className='tab0Item3Img' src={item.UrlPictureTeam} alt="ảnh QK" />
                                    </a>
                                </div>
                            </div>
                        </div>) : 
                        (<div key={Math.random()} className='selectedTab0List2 selectedTab0List3'>
                            <div className='tab0Item1'>
                                <div className='tab0Item11'>
                                    <div className='tab0Item11Icon'>{<FaFutbol />}</div>
                                    <div className='tab0Item1Title'>GHI BÀN</div>
                                </div>
                                <div className='tab0Item1Time'>Phút {item.Minute}'</div>
                            </div>
                            <hr />
                            <div className='tab0Item2Flex'>
                                <div className='tab0Item2 tab0Item23'>
                                    <a className='tab0Item2Name' href={item.UrlPlayer}><div>{item.NamePlayer} - {item.JerseyNum}</div></a>
                                    <a className='tab0Item2Content' href={item.UrlTeam}>
                                        <img className='tab0Item2Img' src={item.UrlPictureTeam} alt="ảnh QK" />
                                        <div className='tab0Item2Content1'>{item.TeamName} - {item.PositionLocalized}</div>
                                    </a>
                                </div>
                            </div>
                        </div>)
                    )
                ))
            ))}
        </div>
    )
}

export default HappeningsTab
