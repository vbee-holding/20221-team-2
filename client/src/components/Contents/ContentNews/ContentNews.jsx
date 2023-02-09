import { useEffect, useState } from 'react'
import './ContentNews.css'

const ContentNews = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/NewsData.json')
        .then(response => {
            return response.json()
        })
        .then(data => {
            setData(data)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

    return(
        <div className='cNews'>
            {data.map(element => (
                <a className='cNewsLink' key={element.link} href={element.link}>
                    <div>
                        <div className='cNewsTitle'>{element.title}</div>
                        <div className='cNewsTime'>{element.newspaper} - {element.time}</div>
                    </div>
                    <img className='cNewsImg' src={element.img} alt="anh" />
                </a>
            ))}
        </div>
    )
}

export default ContentNews
