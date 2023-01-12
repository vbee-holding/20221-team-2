import { FaPager } from 'react-icons/fa'
import './NewsTab.css'

const NewsTab = (props) => {
    return (
        <div className='selectedTab3'>
            <div className='selectedTab3Icon'>{<FaPager />}</div>
            <div className='selectedTab3Title'>
                Gần đây, không có tin tức nào về {props.arr[0].team1} hoặc {props.arr[0].team2}
            </div>
        </div>
    )
}

export default NewsTab
