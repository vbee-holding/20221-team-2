import { useState, useEffect } from "react"
// import Carousel from "react-multi-carousel"
// import "react-multi-carousel/lib/styles.css"
import './ContentHome.css'
import { FaAngleRight } from 'react-icons/fa'

const ContentHome = () => {
    const images = [
        [   
            "https://www.youtube.com/watch?v=Qjn46wnCNA0&ab_channel=VTVTh%E1%BB%83Thao",
            "https://digitalhub.fifa.com/transform/b817ecc7-f044-45b8-8f67-a084a5d10e39/Argentina-v-France-Final-FIFA-World-Cup-Qatar-2022?io=transform:fill,height:434,width:683&quality=75",
            "GIẢI VÔ ĐỊCH BÓNG ĐÁ THẾ GIỚI QATAR 2022",
            "Một kỳ World Cup đột phá với cái kết cổ tích",
            "Lionel Messi là người hùng của kỳ World Cup ghi nhiều bàn thắng nhất trong lịch sử. FIFA+ nhìn lại một giải đấu lịch sử."
        ],
        [
            "https://www.youtube.com/watch?v=tpPmn2ZuOV8&t=3s&ab_channel=VTVTh%E1%BB%83Thao",
            "https://digitalhub.fifa.com/transform/46dfe58f-7618-484a-9ea5-4985b8f064ba/1450130000?io=transform:fill,height:434,width:683&quality=75",
            "TRẬN CHUNG KẾT",
            "Điểm nổi bật từ một trận chung kết đáng kinh ngạc",
            "Xem những điểm nổi bật từ trận đấu giữa Argentina và Pháp diễn ra tại Sân vận động Lusail, Lusail vào Chủ Nhật, ngày 18 tháng 12 năm 2022."
        ],
        [
            "https://www.youtube.com/watch?v=GjXgiSfPUtM&ab_channel=VTVTh%E1%BB%83Thao",
            "https://digitalhub.fifa.com/transform/2d264787-f3b5-4533-9142-cb0df6ca0142/Brazil-v-Serbia-Group-G-FIFA-World-Cup-Qatar-2022?io=transform:fill,height:434,width:683&quality=75",
            "MỤC TIÊU CỦA GIẢI ĐẤU",
            "Đá quý Richarlison giành được Bàn thắng của giải đấu Hyundai",
            "Richarlison giành được Bàn thắng của giải đấu Hyundai Richarlison đã bắt chước Maxi Rodriguez, Diego Forlan, James Rodriguez và Benjamin Pavard và giành giải Bàn thắng của giải đấu tại FIFA World Cup."
        ]
    ]

    const [data, setData] = useState([])
    const [currentImage, setCurrentImage] = useState(images[0])
    const [currentIndex, setCurrentIndex] = useState(1)

    useEffect(() => {
        fetch('http://localhost:3000/HomeData.json')
        .then(response => {
            return response.json()
        })
        .then(data => {
            setData(data)
         })
        .catch(error => {
            console.error(error)
        });
    }, [])
    
    const handleNextImage = () => {
        setCurrentIndex((currentIndex + 1) % images.length)
        setCurrentImage(images[currentIndex])
    }

  return (
    <div className="cHome">
        <div className="cHome1">
            <div className="cHome1Item1">
                <div className="cHome1Item11">
                    <a href="https://www.youtube.com/watch?v=ZHSl7Q42COo">
                        <img className="cHome1Item11Img" src="https://congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2022/11/10/body-11-16680546196062073393166.jpg" alt="linh vật" />
                    </a>
                    <div className="cHome1Item11Final">
                        <div className="cHome1Item11Final1">Trận chung kết</div>
                        <a className="cHome1Item11FinalHref" href="https://www.youtube.com/watch?v=tpPmn2ZuOV8&ab_channel=VTVTh%E1%BB%83Thao">
                            <div className="cHome1Item11Final2">
                                <div className="cHome1Item11Final21">
                                    <div className="cHome1Item11Final211">Kết thúc</div>
                                    <div className="cHome1Item11Final212">18/12/2022</div>
                                </div>
                                <div className="cHome1Item11Final22">Sân vận động Lusail</div>
                                <div className="cHome1Item11Final23">
                                    <div className="cHome1Item11Final231">
                                        <img className="cHome1Item11Final231Img" src="https://ssl.gstatic.com/onebox/media/sports/logos/1xBWyjjkA6vEWopPK3lIPA_96x96.png" alt="ảnh QK" />
                                        <div className="cHome1Item11Final231QG">Argentina</div>
                                    </div>
                                    <div className="cHome1Item11Final232">
                                        <div className="cHome1Item11Final2321">(4)</div>
                                        <div className="cHome1Item11Final2322">3</div>
                                    </div>
                                </div>
                                <div className="cHome1Item11Final24">
                                    <div className="cHome1Item11Final241">
                                        <img className="cHome1Item11Final241Img" src="https://ssl.gstatic.com/onebox/media/sports/logos/z3JEQB3coEAGLCJBEUzQ2A_96x96.png" alt="ảnh QK" />
                                        <div className="cHome1Item11Final241QG">Pháp</div>
                                    </div>
                                    <div className="cHome1Item11Final242">
                                        <div className="cHome1Item11Final2421">(2)</div>
                                        <div className="cHome1Item11Final2422">3</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="cHome1Item12">
                
                </div>
            </div>
            <div className="cHome1Item2">
                <div className="cHome1Item21">
                    <a className="cHome1Item21Link" href={currentImage[0]}>
                        <img className="cHome1Item21Img" src={currentImage[1]} alt="Current" />
                        <div className="cHome1Item21Item">
                            <div className="cHome1Item21Item1">
                                {currentImage[2]}
                            </div>
                            <div className="cHome1Item21Item2">
                                {currentImage[3]}
                            </div>
                            <div className="cHome1Item21Item3">
                                {currentImage[4]}
                            </div>
                        </div>
                    </a>
                    <button className="cHome1Item21Button" onClick={handleNextImage}>{<FaAngleRight />}</button>
                </div>
            </div>
        </div>
        <div className="cHome2">
            <div className="cHome21">NHỮNG ĐIỀU TUYỆT VỜI NHẤT CỦA WORLD CUP</div>
            <div className="cHome22">
                {data.map(element => (
                    element.best.map(child => (
                        <a key={child.link} className="cHome22Link" href={child.link}>
                            <img className="cHome22Img" src={child.img} alt="anh" />
                            <div className="cHome22Title">{child.title}</div>
                        </a>
                    ))
                ))}
            </div>
        </div>
        <div className="cHome3">
            <div className="cHome31">TIN TỨC</div>
            <div className="cHome32">
                <div className="cHome321">
                    <a className="cHome321Link" href="https://www.fifa.com/fifaplus/en/articles/raphael-varane-retires-from-international-football-france-world-cup">
                        <img className="cHome321Img" src="https://digitalhub.fifa.com/transform/faf7b548-bcbc-4706-b716-032de2c606fd/France-s-defender-Raphael-Varane-holds-the-World-Cup-trophy-after-winning-the-Russia-2018-World-Cup-final-football-match-between-France-and-Croatia-at-the-Luzhniki-Stadium-in-Moscow-on-July-15-2018?io=transform:fill" alt="anh" />
                        <div className="cHome321Title">
                            <div className="cHome321Title1">Varane giã từ sự nghiệp thi đấu quốc tế</div>
                            <div className="cHome321Title2">Hậu vệ của Manchester United đã viết rằng \"đã đến lúc\" để anh rút lui khỏi nhiệm vụ ở Pháp.</div>
                        </div>
                    </a>
                </div>
                <div className="cHome322">
                    <a className="cHome3Link" href="https://www.fifa.com/fifaplus/en/articles/five-world-cup-qatar-2022-stars-who-moved-in-january-transfers">
                        <div className="cHome322Item1">
                            <img className="cHome322Item1Img" src="https://digitalhub.fifa.com/transform/52c4c5e0-b863-4bc9-9bb9-490afad7872f/Argentina-v-France-Final-FIFA-World-Cup-Qatar-2022?io=transform:fill,aspectratio:16x16&quality=75" alt="anh" />
                            <div className="cHome322Item1Title">Năm ngôi sao Qatar 2022 đã chuyển đến vào tháng Giêng</div>
                        </div>
                    </a>
                    <a className="cHome3Link" href="https://www.fifa.com/fifaplus/en/articles/messi-i-would-have-liked-maradona-to-give-me-the-world-cup-qatar-2022">
                        <div className="cHome322Item2">
                            <img className="cHome322Item2Img" src="https://digitalhub.fifa.com/transform/64008392-ab58-44e7-98cd-5cf3e925b3b8/102465544?io=transform:fill,aspectratio:16x16&quality=75" alt="anh" />
                        <div className="cHome322Item2Title">Messi: Tôi muốn Maradona trao World Cup cho tôi</div>
                        </div>
                    </a>
                    <a className="cHome3Link" href="https://www.fifa.com/fifaplus/en/articles/graham-arnold-signs-on-with-australia-socceroos-until-2026-world-cup">
                        <div className="cHome322Item3">
                            <img className="cHome322Item3Img" src="https://digitalhub.fifa.com/transform/ef4ee31d-0094-4665-b4c0-8b39251df7d7/Australia-v-Denmark-Group-D-FIFA-World-Cup-Qatar-2022?io=transform:fill,height:485,width:746&quality=100" alt="#" />
                            <div className="cHome322Item3Title">Arnold ký hợp đồng với Socceroos đến năm 2026</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div className="cHome4">
            <div className="cHome41">VÀO CHƯƠNG TRÌNH</div>
            <div className="cHome42">
                <a className="cHome42Link" href="https://www.fifa.com/fifaplus/en/watch/series/1RT5GREmk3y6SBVt46X8Fa/02Vxt5kkyPO5hIgkf03Wh/RSVil1HsJfI95agPrea7e">
                    <img className="cHome42Link1Img" src="https://digitalhub.fifa.com/transform/7dbb87c0-bce5-4a46-9ec4-3fc2fd7b0210/FIFA-WORLD-CUP-DAILY_EP01_THUMB_V2?io=transform:fill,aspectratio:16x9,width:554&quality=100" alt="anh" />
                    <div className="cHome42Link1Title">FIFA World Cup Daily, bởi Hisense</div>
                </a>
                <a className="cHome42Link" href="https://www.fifa.com/fifaplus/en/watch/movie/1zJuognvbbpU4GBXx4i07H">
                    <img className="cHome42Link2Img" src="https://digitalhub.fifa.com/transform/54888a4c-9508-4ae8-b169-8c25380fcbb4/FIFAPLS_UltimateFanTourGuide_Kia_Thumb_00?io=transform:fill,aspectratio:16x9,width:554&quality=100" alt="anh" />
                    <div className="cHome42Link2title">FIFA World Cup 2022 - Road to Inspiration, do Kia trình bày</div>
                </a>
                <a className="cHome42Link" href="https://www.fifa.com/fifaplus/en/watch/series/31et0B05ZuC0tFUqZVDzoI/ZKPlbCbtvlhtBKf0WnJqT/ge4wwRpauPVCcekqCKm6c">
                    <img className="cHome42Link3Img" src="https://digitalhub.fifa.com/transform/f5503d57-7d9b-4d31-aa72-b3b74a858da4/FIFAPLS_S02E02_SouthLondonBallers_MainFeed_00?io=transform:fill,aspectratio:16x9,width:554&quality=100" alt="anh" />
                    <div className="cHome42Link3Title">Các tín đồ</div>
                </a>
            </div>
        </div>
        <div className="cHome5">
            <div className="cHome51">VÀO HUYỀN THOẠI</div>
            <div className="cHome52">
                <a className="cHome52Link" href="https://www.fifa.com/fifaplus/en/archive/lionel-messi">
                    <img className="cHome521Img" src="https://digitalhub.fifa.com/transform/d93104bb-f6f3-45df-b98e-9760a5a89baa/Argentina-v-France-Final-FIFA-World-Cup-Qatar-2022?io=transform:fill,aspectratio:16x9,width:844&quality=100" alt="anh" />
                    <div className="cHome521Title">Lionel Messi</div>
                </a>
                <a className="cHome52Link" href="https://www.fifa.com/fifaplus/en/archive/kylian-mbappe">
                    <img className="cHome522Img" src="https://digitalhub.fifa.com/transform/e22dc45d-9b46-4db5-a024-91342aeb96c4/Kylian-Mbappe-of-France-kisses-the-trophy-after-the-Russia-2018-final?io=transform:fill,aspectratio:16x9,width:844&quality=100" alt="#" />
                    <div className="cHome522Title">Kylian Mbappe</div>
                </a>
            </div>
        </div>
        <div className="cHome6">
            <div className="cHome61">SÂN VẬN ĐỘNG</div>
            <div className="cHome62">
                {data.map(element => (
                    element.stadiums.map(child => (
                        <a key={child.link} className="cHome62Link" href={child.link}>
                            <img className="cHome62Img" src={child.img} alt="anh SVD" />
                            <div className="cHome62Title">{child.title}</div>
                        </a>
                    ))
                ))}
            </div>
        </div>
    </div>
  );
}

export default ContentHome
