import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FaFutbol, FaCaretRight } from 'react-icons/fa'
import './ContentMatch.css'
// import { MatchApi } from '../../../apis/SetupApi'

const ContentMatch = () => {
    const [data, setData] = useState({})
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/api/tutorialmatch')
            console.log(result.data)
            setData(result.data)
        }
        fetchData()
    }, [])
    return (
        <div className='contentMatch'>
            {Object.values(data).map((element) => {
                return(
                    <div key={element[0].date} className='loop'>
                        <div className='loop1'>{<FaFutbol />} {element[0].groupStage} - {element[0].date}</div>
                        <div className='loop2'>
                            {element.map((child) => (
                                <div key={child.id} className='loop21'>
                                    <Link to={`/matchDetail/${child.IdMatch}`} className='loop21Item1'>
                                        <div className='loop21Item1Frame'>
                                            <div className='frameChild'>{child.table==0 ? child.groupStage : child.table}</div>
                                            <div className='frameChild1'>
                                                <div className='frameChildItem'>
                                                    <div className='frameChildItem1'>
                                                        <img className='frameChildItem11' src={child.imagehomeTeam.replace('{format}', 'sq').replace('{size}','2')} alt="anh Qk" />
                                                        <div className='frameChildItem12'>{child.homeTeam}</div>
                                                    </div>
                                                    <div className='frameChildItem1'>
                                                        <img className='frameChildItem11' src={child.imageawayTeam.replace('{format}', 'sq').replace('{size}','2')} alt="anh Qk" />
                                                        <div className='frameChildItem12'>{child.awayTeam}</div>
                                                    </div>
                                                </div>
                                                <div className='frameChildItem'>
                                                    <div className='frameChildItem2'>{child.score[1]}</div>
                                                    <div className='frameChildItem2'>{child.score[0]}</div>
                                                </div>
                                                <div className='frameChildItem frameChildItemKT'>KT {child.date}</div>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className='loop21Item2'>
                                        <a href={child.video}>
                                            <img className='loop21Item2Img' src={child.imagehightlight} alt="ảnh highlight" />
                                        </a>
                                        <div className='loop21Item2Icon'></div>
                                        <div className='loop21Item2Icon1'>{<FaCaretRight />}{child.timehighlight}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default ContentMatch
