import './StatTab.css'

const StatTab = (props) => {
    return (
        <div className='selectedTab2'>
            <div className='selectedTab2List1'>
                <img className='selectedTab2Img' src={props.arr[0].image1} alt="ảnh QK" />
                <div className='selectedTab2Item1'>5</div>
                <div className='selectedTab2Item1'>0</div>
                <div className='selectedTab2Item1'>47%</div>
                <div className='selectedTab2Item1'>434</div>
                <div className='selectedTab2Item1'>80%</div>
                <div className='selectedTab2Item1'>15</div>
                <div className='selectedTab2Item1'>4</div>
                <div className='selectedTab2Item1'>0</div>
                <div className='selectedTab2Item1'>3</div>
                <div className='selectedTab2Item1'>1</div>
            </div>
            <div className='selectedTab2List2'>
                <div className='selectedTab2Title'>SỐ LIỆU THỐNG KÊ VỀ ĐỘI TUYỂN</div>
                <div className='selectedTab2Item2'>Số lần sút</div>
                <div className='selectedTab2Item2'>Số lần trúng đích</div>
                <div className='selectedTab2Item2'>Kiểm soát bóng</div>
                <div className='selectedTab2Item2'>Lượt chuyền bóng</div>
                <div className='selectedTab2Item2'>Tỷ lệ chuyền bóng chính xác</div>
                <div className='selectedTab2Item2'>Phạm lỗi</div>
                <div className='selectedTab2Item2'>Thẻ vàng</div>
                <div className='selectedTab2Item2'>Thẻ đỏ</div>
                <div className='selectedTab2Item2'>Việt vị</div>
                <div className='selectedTab2Item2'>Phạt góc</div>
            </div>
            <div className='selectedTab2List3'>
                <img className='selectedTab2Img' src={props.arr[0].image2} alt="ảnh QK" />
                <div className='selectedTab2Item3'>6</div>
                <div className='selectedTab2Item3'>3</div>
                <div className='selectedTab2Item3'>53%</div>
                <div className='selectedTab2Item3'>486</div>
                <div className='selectedTab2Item3'>84%</div>
                <div className='selectedTab2Item3'>15</div>
                <div className='selectedTab2Item3'>2</div>
                <div className='selectedTab2Item3'>0</div>
                <div className='selectedTab2Item3'>4</div>
                <div className='selectedTab2Item3'>3</div>
            </div>
        </div>
    )
}

export default StatTab
