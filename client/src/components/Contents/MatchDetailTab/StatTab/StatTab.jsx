import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './StatTab.css'

const StatTab = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/api/summarymatch/' + IdMatch)
            console.log(result.data)
            setData(result.data)
        }
        fetchData()
    }, []);

    const { IdMatch } = useParams()

    return (
        <div>
            {data.map((child) => (
                <div key={child._id} className='selectedTab2'>
                    <div className='selectedTab2List1'>
                        <a href={props.arr.LinkHomeTeam}><img className='selectedTab2Img' src={props.arr.HomeTeam.PictureUrl.replace('{format}', 'sq').replace('{size}','2')} alt="ảnh QK" /></a>
                        <div className='selectedTab2Item1'>{child.PropertiesHomeTeam[1][1]}</div>
                        <div className='selectedTab2Item1'>{child.PropertiesHomeTeam[4][1]}</div>
                        <div className='selectedTab2Item1'>{child.PropertiesHomeTeam[5][1]}</div>
                        <div className='selectedTab2Item1'>{Math.round(child.PropertiesHomeTeam[0][1]*100)}%</div>
                        <div className='selectedTab2Item1'>{child.PropertiesHomeTeam[6][1]}</div>
                        <div className='selectedTab2Item1'>{child.PropertiesHomeTeam[9][1]}</div>
                        <div className='selectedTab2Item1'>{child.PropertiesHomeTeam[7][1]}</div>
                        <div className='selectedTab2Item1'>{child.PropertiesHomeTeam[8][1]}</div>
                        <div className='selectedTab2Item1'>{child.PropertiesHomeTeam[10][1]}</div>
                        <div className='selectedTab2Item1'>{child.PropertiesHomeTeam[3][1]}</div>
                    </div>
                    <div className='selectedTab2List2'>
                        <div className='selectedTab2Title'>SỐ LIỆU THỐNG KÊ VỀ ĐỘI TUYỂN</div>
                        <div className='selectedTab2Item2'>Số bàn thắng</div>
                        <div className='selectedTab2Item2'>Số lần sút</div>
                        <div className='selectedTab2Item2'>Số lần trúng đích</div>
                        <div className='selectedTab2Item2'>Kiểm soát bóng</div>
                        <div className='selectedTab2Item2'>Lượt chuyền bóng</div>
                        <div className='selectedTab2Item2'>Phạm lỗi</div>
                        <div className='selectedTab2Item2'>Thẻ vàng</div>
                        <div className='selectedTab2Item2'>Thẻ đỏ</div>
                        <div className='selectedTab2Item2'>Việt vị</div>
                        <div className='selectedTab2Item2'>Hỗ trợ</div>
                    </div>
                    <div className='selectedTab2List3'>
                        <a href={props.arr.LinkAwayTeam}><img className='selectedTab2Img' src={props.arr.AwayTeam.PictureUrl.replace('{format}', 'sq').replace('{size}','2')} alt="ảnh QK" /></a>
                        <div className='selectedTab2Item3'>{child.PropertiesAwayTeam[1][1]}</div>
                        <div className='selectedTab2Item3'>{child.PropertiesAwayTeam[4][1]}</div>
                        <div className='selectedTab2Item3'>{child.PropertiesAwayTeam[5][1]}</div>
                        <div className='selectedTab2Item3'>{Math.round(child.PropertiesAwayTeam[0][1]*100)}%</div>
                        <div className='selectedTab2Item3'>{child.PropertiesAwayTeam[6][1]}</div>
                        <div className='selectedTab2Item3'>{child.PropertiesAwayTeam[9][1]}</div>
                        <div className='selectedTab2Item3'>{child.PropertiesAwayTeam[7][1]}</div>
                        <div className='selectedTab2Item3'>{child.PropertiesAwayTeam[8][1]}</div>
                        <div className='selectedTab2Item3'>{child.PropertiesAwayTeam[10][1]}</div>
                        <div className='selectedTab2Item3'>{child.PropertiesAwayTeam[3][1]}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default StatTab
