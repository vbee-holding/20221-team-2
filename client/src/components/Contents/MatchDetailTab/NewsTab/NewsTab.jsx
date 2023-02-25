import { FaPager } from 'react-icons/fa'
import './NewsTab.css'

const NewsTab = (props) => {
    return (
        <div className='selectedTab3'>
            <div className='selectedTab3Icon'>{<FaPager />}</div>
            <div className='selectedTab3Title'>
                Gần đây, không có tin tức nào về <a 
                    className='selectedTab3TitleNews' href={props.arr.LinkHomeTeam}>{props.arr.HomeTeam.TeamName}
                </a> hoặc <a
                     className='selectedTab3TitleNews' href={props.arr.LinkAwayTeam}>{props.arr.AwayTeam.TeamName}
                </a>
            </div>
        </div>
    )
}

export default NewsTab
