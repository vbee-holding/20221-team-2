import { useState, useEffect } from 'react'
import axios from 'axios'
import {playerData} from './PlayerData'
import './Player.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Player = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/api/player')
            console.log(result.data)
            setData(result.data)
        }
        fetchData()
    }, [])
    return (
        <div>
            <Header />
            <div className='player'>
                {Object?.values(playerData).map((element, index) => {
                    return(
                        <a key = {index} href={element.information}>
                            <div className='loopPlayer'>
                                <img className='loopImage1' src={element.image} alt='anhCauThu' />
                                <div className ='loopName'>
                                    {element.name}
                                </div>
                                <div className='loopPosition'>
                                    {element.position}
                                </div>
                                <div className='loopNation'>
                                    <img className='loopNationImage' src={element.nationImage} alt='anhQuocGia' />
                                    <div className='loopNationName'>{element.nation}</div>
                                </div>
                            </div>
                        </a>
                    )
                })}

                {Object?.values(data).map((element, index) => {
                    return(
                        <a key = {index} href={element.information}>
                            <div className='loopPlayer'>
                                <img className='loopImage2' src={element.playerPicture} alt='anhCauThu' />
                                <div className ='loopName'>
                                    {element.playerName}
                                </div>
                                <div className='loopPosition'>
                                    {element.position}
                                </div>
                                <div className='loopNation'>
                                    <img className='loopNationImage' src={element.nationImage} alt='anhQuocGia' />
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
