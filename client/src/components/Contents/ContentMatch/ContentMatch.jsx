import { Link } from 'react-router-dom'
import { FaFutbol } from 'react-icons/fa'
import './ContentMatch.css'
import { MatchApi } from '../../../apis/SetupApi'

const ContentMatch = () => {
    return (
        <div className='contentMatch'>
            {Object.values(MatchApi).map((element) => {
                return(
                    <div key={element[0].date} className='loop'>
                        <div className='loop1'>{<FaFutbol />} {element[0].groupStage} - {element[0].date}</div>
                        <div className='loop2'>
                            {element.map((child) => (
                                <div key={child.id} className='loop21'>
                                    <Link to={`/matchDetail/${child.id}`} className='loop21Item1'>
                                        <div className='loop21Item1Frame'>
                                            <div className='frameChild'>{child.table}</div>
                                            <div className='frameChild1'>
                                                <div className='frameChildItem'>
                                                    <div className='frameChildItem1'>
                                                        <img className='frameChildItem11' src={child.image1} alt="anh Qk" />
                                                        <div className='frameChildItem12'>{child.team1}</div>
                                                    </div>
                                                    <div className='frameChildItem1'>
                                                        <img className='frameChildItem11' src={child.image2} alt="anh Qk" />
                                                        <div className='frameChildItem12'>{child.team2}</div>
                                                    </div>
                                                </div>
                                                <div className='frameChildItem'>
                                                    <div className='frameChildItem2'>{child.score[0]}</div>
                                                    <div className='frameChildItem2'>{child.score[1]}</div>
                                                </div>
                                                <div className='frameChildItem frameChildItemKT'>KT {child.date}</div>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className='loop21Item2'>
                                        <a href={child.video}>
                                            <img className='loop21Item2Img' src={child.imagehighlight} alt="ảnh highlight" />
                                        </a>
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
