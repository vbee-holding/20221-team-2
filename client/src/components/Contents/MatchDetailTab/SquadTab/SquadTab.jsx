import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './SquadTab.css'

const SquadTab = (props) => {
    const { IdMatch } = useParams()

    const [data, setData] = useState([])
    useEffect(() => {
        async function fetchData() {
          const result = await axios.get('/api/TaticsMatch/' + IdMatch);
          console.log([result.data])
          setData([result.data]);
        }
        fetchData();
    }, []);
    return (
        <div className='tab1'>
            <div className='tab1Title'>ĐỘI HÌNH RA SÂN</div>
            <div className='tab1Content'>
                <div className='tab1Item1'>
                    {data.map((child) => (
                        <div className='tab1Item1Display'>
                            <div key={child._id} className='tab1Item11'>
                                <div className='tab1Item11Title'>
                                    <a href={props.arr.LinkHomeTeam}>
                                        <img className='tab1Item11Img' src={props.arr.HomeTeam.PictureUrl.replace('{format}', 'sq').replace('{size}','2')} alt="ảnh QK" />
                                    </a>
                                    <div className='tab1Item11Team'>{props.arr.HomeTeam.TeamName} {child.HomeTeam.Tactics}</div>
                                </div>
                                {child.HomeTeam.Players.map((item) => (
                                    item.Status === 1 ? <a href={item.URL_Player}><pre className='tab1Item11Name'>{item.Name} #{item.ShirtNumber}</pre></a> : ''
                                ))} 
                            </div>
                            <div className='tab1Item12'>
                                <div className='tab1Item12Title'>Vị trí</div>
                                {child.HomeTeam.Players.map((item) => (
                                    item.Status === 1 ? (item.Position === 0 ? <pre className='tab1Item12Name'>Thủ môn</pre> : 
                                    (item.Position === 1 ? <pre className='tab1Item12Name'>Hậu vệ</pre> : 
                                    (item.Position === 2 ? <pre className='tab1Item12Name'>Trung vệ</pre> :
                                    <pre className='tab1Item12Name'>Tiền đạo</pre>))) : ''
                                ))} 
                            </div>
                        </div>
                    ))}
                </div>
                <hr />
                <div className='tab1Item2'>
                    {data.map((child) => (
                        <div className='tab1Item2Display'>
                            <div className='tab1Item21'>
                                <div className='tab1Item21Title'>Vị trí</div>
                                {child.AwayTeam.Players.map((item) => (
                                    item.Status === 1 ? (item.Position === 0 ? <pre className='tab1Item21Name'>Thủ môn</pre> : 
                                    (item.Position === 1 ? <pre className='tab1Item21Name'>Hậu vệ</pre> : 
                                    (item.Position === 2 ? <pre className='tab1Item21Name'>Trung vệ</pre> :
                                    <pre className='tab1Item21Name'>Tiền đạo</pre>))) : ''
                                ))} 
                            </div>
                            <div key={child._id} className='tab1Item22'>
                                <div className='tab1Item22Title'>
                                    <div className='tab1Item22Team'>{child.AwayTeam.Tactics} {props.arr.AwayTeam.TeamName}</div>
                                    <a href={props.arr.LinkAwayTeam}>
                                        <img className='tab1Item22Img' src={props.arr.AwayTeam.PictureUrl.replace('{format}', 'sq').replace('{size}','2')} alt="ảnh QK" />
                                    </a>
                                </div>
                                {child.AwayTeam.Players.map((item) => (
                                    item.Status === 1 ? <a href={item.URL_Player}><pre className='tab1Item22Name'>#{item.ShirtNumber} {item.Name}</pre></a> : ''
                                ))} 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='tab1Content1'>
                <div className='tab1Item3'>
                    {data.map(child => (
                        <div>
                            <a href={props.arr.LinkHomeTeam}>
                                <img className='tab1Item3Img' src={props.arr.HomeTeam.PictureUrl.replace('{format}', 'sq').replace('{size}','2')} alt="ảnh QK" />
                            </a>
                            {child.HomeTeam.Players.map((item) => (
                                item.Status === 2 ? <a href={item.URL_Player}><pre className='tab1Item11Name'>{item.ShirtNumber} {item.Name}</pre></a> : ''
                            ))} 
                        </div>
                    ))}
                </div>
                <div className='tab1Item4'>CẦU THỦ DỰ BỊ</div>
                <div className='tab1Item5'>
                    {data.map(child => (
                        <div>
                            <a className='tab1Item5Link' href={props.arr.LinkAwayTeam}>
                                <img className='tab1Item5img' src={props.arr.AwayTeam.PictureUrl.replace('{format}', 'sq').replace('{size}','2')} alt="ảnh QK" />
                            </a>
                            {child.AwayTeam.Players.map((item) => (
                                item.Status === 2 ? <a href={item.URL_Player}><pre className='tab1Item22Name'>{item.Name} {item.ShirtNumber}</pre></a> : ''
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className='tab1Content2'>
                <div className='tab1Item6'>
                    {data.map(child => (
                        <div>
                            <a href={props.arr.LinkHomeTeam}>
                                <img className='tab1Item3Img' src={props.arr.HomeTeam.PictureUrl.replace('{format}', 'sq').replace('{size}','2')} alt="ảnh QK" />
                            </a>
                            {child.HomeTeam.Coaches.map((item) => (
                                <a href={item.URL_Coach}>
                                    <pre className='tab1Item11Name'>{item.Name}</pre>
                                </a>
                            ))} 
                        </div>
                    ))}
                </div>
                <div className='tab1Item7'>NGƯỜI QUẢN LÝ</div>
                <div className='tab1Item8'>
                    {data.map(child => (
                        <div>
                            <a className='tab1Item5Link' href={props.arr.LinkAwayTeam}>
                                <img className='tab1Item5img' src={props.arr.AwayTeam.PictureUrl.replace('{format}', 'sq').replace('{size}','2')} alt="ảnh QK" />
                            </a>
                            {child.AwayTeam.Coaches.map((item) => (
                                <a href={item.URL_Coach}><pre className='tab1Item22Name'>{item.Name}</pre></a> 
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SquadTab
