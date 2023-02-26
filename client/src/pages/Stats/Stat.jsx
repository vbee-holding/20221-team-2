import {statData} from './StatData'
import './Stat.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Stat = () => {
    return (
        <div>
            <Header />
            <div className='Statistics'>
                {Object?.values(statData).map((element, index) => {
                    return(
                        <div className='loopStat'>
                            <div className='loopStat1'>
                                <div className='opening1'>{element[0].category}</div>
                                <div className='opening2'>
                                    <div>Player</div>
                                    <div className='category2'>{element[0].category}</div>
                                </div>
                            </div>
                            
                            <div className='loopStat2'>
                                {element.map((child) => (
                                    <a href={child.information}>
                                        <div className='body'>
                                            <div className='bodyRank'>{child.rankNumber}</div>
                                            <img className='bodyImage' src={child.image} alt='anh'/>
                                            <div className='bodyNation'>
                                                <div className='name'>{child.name}</div>
                                                <div className='nation'>
                                                    <img className='nationImage' src ={child.nationImage} alt='anh'/>
                                                    <div className='nationName'>{child.nationName}</div>
                                                </div>
                                            </div>
                                            <div className='bodyGoals'>{child.quantity}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}

export default Stat
