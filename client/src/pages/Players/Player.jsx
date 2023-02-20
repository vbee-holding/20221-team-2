import { playerData } from './PlayerData'
import './Player.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Player = () => {
    return (
        <div>
            <Header />
            <div className='player'>
                {Object?.values(playerData).map((element, index) => {
                    return(
                        <a key = {index} href={element.information}>
                            <div className='loopPlayer'>
                                <img className='loopImage' src={element.image} />
                                <div className ='loopName'>
                                    {element.name}
                                </div>
                                <div className='loopPosition'>
                                    {element.position}
                                </div>
                                <div className='loopNation'>
                                    <img className='loopNationImage' src={element.nationImage} />
                                    <div className='loopNationName'>{element.nation}</div>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}

export default Player
