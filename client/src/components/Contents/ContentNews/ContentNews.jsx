import { useEffect, useState } from 'react'
import axios from 'axios'
import './ContentNews.css'

const ContentNews = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        async function fetchData() {
          const result = await axios.get('./NewsData.json');
          console.log(result.data)
          setData(result.data);
        }
        fetchData();
    }, []);
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
