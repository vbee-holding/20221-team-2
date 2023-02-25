import { useEffect, useState } from 'react'
import axios from 'axios'
import './ContentNews.css'

const ContentNews = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        async function fetchData() {
          const result = await axios.get('/api/news');
          console.log(result.data)
          setData(result.data);
        }
        fetchData();
    }, []);
    return(
        <div className='cNews'>
            {data.map(element => (
                element.items.map((item) => (
                    <a className='cNewsLink' key={element._id} href={item.PageUrl}>
                        <div>
                            <div className='cNewsTitle'>{item.title}</div>
                            <div className='cNewsTime'>Bongdaplus - {item.dateDis} ngày trước</div>
                        </div>
                        <img className='cNewsImg' src={item.imageUrl} alt="anh" />
                    </a>
                ))
            ))}
        </div>
    )
}

export default ContentNews
