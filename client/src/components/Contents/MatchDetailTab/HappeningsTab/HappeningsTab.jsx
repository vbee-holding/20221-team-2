import { FaStopwatch } from 'react-icons/fa'
import './HappeningsTab.css'

const HappeningsTab = (props) => {
    return (
        <div className='selectedTab0'>
            <div className='selectedTab0List1'>
                <div className='selectedTab0Item1'>{<FaStopwatch />}</div>
                <div className='selectedTab0Item2'>KẾT THÚC TRẬN ĐẤU</div>
                <div className='selectedTab0Item3'>{props.TimeEnd}</div>
            </div>
            <div className='selectedTab0List2'>
                <div className='tab0Item1'>
                    <div className='tab0Item11'>
                        <img className='tab0Item1Img' src="https://ssl.gstatic.com/onebox/sports/game_feed/substitution_icon.svg" alt="ảnh icon" />
                        <div className='tab0Item1Title'>THAY NGƯỜI</div>
                    </div>
                    <div className='tab0Item1Time'>Phút 90</div>
                </div>
                <hr />
                <div className='tab0Item2Flex'>
                    <div className='tab0Item2'>
                        <div className='tab0Item2Title'>VÀO SÂN</div>
                        <div className='tab0Item2Name'>Alan Franco - 21</div>
                        <div className='tab0Item2Content'>
                            {console.log(props)}
                            <img className='tab0Item2Img' src={props.arr.AwayTeam.PictureUrl.replace('{format}', 'sq').replace('{size}','2')} alt="ảnh QK" />
                            <div className='tab0Item2Content1'>Ecuador - Tiền vệ</div>
                        </div>
                    </div>
                    <div className='tab0Item3'>
                        <div className='tab0Item3Title'>RA SÂN</div>
                        <div className='tab0Item3Name'>23 - Moisés Caisedo</div>
                        <div className='tab0Item3Content'>
                            <div className='tab0Item3Content1'>Tiền vệ - Ecuador</div>
                            <img className='tab0Item3Img' src={props.arr.AwayTeam.PictureUrl.replace('{format}', 'sq').replace('{size}','2')} alt="ảnh QK" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='selectedTab0List2 selectedTab0List3'>
                <div className='tab0Item1'>
                    <div className='tab0Item11'>
                        <img className='tab0Item1Img' src="https://ssl.gstatic.com/onebox/sports/game_feed/substitution_icon.svg" alt="ảnh icon" />
                        <div className='tab0Item1Title'>THAY NGƯỜI</div>
                    </div>
                    <div className='tab0Item1Time'>Phút 90</div>
                </div>
                <hr />
                <div className='tab0Item2Flex'>
                    <div className='tab0Item2'>
                        <div className='tab0Item2Title'>VÀO SÂN</div>
                        <div className='tab0Item2Name'>Alan Franco - 21</div>
                        <div className='tab0Item2Content'>
                            <img className='tab0Item2Img' src={props.arr.AwayTeam.PictureUrl.replace('{format}', 'sq').replace('{size}','2')} alt="ảnh QK" />
                            <div className='tab0Item2Content1'>Ecuador - Tiền vệ</div>
                        </div>
                    </div>
                    <div className='tab0Item3'>
                        <div className='tab0Item3Title'>RA SÂN</div>
                        <div className='tab0Item3Name'>23 - Moisés Caisedo</div>
                        <div className='tab0Item3Content'>
                            <div className='tab0Item3Content1'>Tiền vệ - Ecuador</div>
                            <img className='tab0Item3Img' src={props.arr.AwayTeam.PictureUrl.replace('{format}', 'sq').replace('{size}','2')} alt="ảnh QK" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='selectedTab0List2 selectedTab0List3'>
                <div className='tab0Item1'>
                    <div className='tab0Item11'>
                        <img className='tab0Item1Img' src="https://ssl.gstatic.com/onebox/sports/game_feed/yellow_card_icon.svg" alt="ảnh thẻ vàng" />
                        <div className='tab0Item1Title'>THẺ VÀNG</div>
                    </div>
                    <div className='tab0Item1Time'>Phút 78</div>
                </div>
                <hr />
                <div className='tab0Item2Flex'>
                    <div className='tab0Item2 tab0Item23'>
                        <div className='tab0Item2Name'>Akram Afif - 11</div>
                        <div className='tab0Item2Content'>
                            <img className='tab0Item2Img' src={props.arr.AwayTeam.PictureUrl.replace('{format}', 'sq').replace('{size}','2')} alt="ảnh QK" />
                            <div className='tab0Item2Content1'>Ecuador - Tiền đạo</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HappeningsTab
