import './SquadTab.css'

const SquadTab = (props) => {
    return (
        <div className='tab1'>
            <div className='tab1Title'>ĐỘI HÌNH RA SÂN</div>
            <div className='tab1Content'>
                <div className='tab1Item1'>
                    <div className='tab1Item11'>
                        <div className='tab1Item11Title'>
                            <img className='tab1Item11Img' src={props.arr.HomeTeam.PictureUrl.replace('{format}', 'sq').replace('{size}','2')} alt="ảnh QK" />
                            <div className='tab1Item11Team'>{props.arr.HomeTeam.TeamName} 5-3-2</div>
                        </div>
                        <pre className='tab1Item11Name'>Akram Afif           #11</pre>
                        <pre className='tab1Item11Name'>Almoez Ali           #19</pre>
                        <pre className='tab1Item11Name'>Abdulaziz Hatem      #6</pre>
                        <pre className='tab1Item11Name'>Karim Boudiaf        #12</pre>
                        <pre className='tab1Item11Name'>Hassan AlHaidos      #10</pre>
                        <pre className='tab1Item11Name'>Homam Ahmed          #14</pre>
                        <pre className='tab1Item11Name'>Abdelkarim Hassan    #3</pre>
                        <pre className='tab1Item11Name'>Boualem Khoukhi      #16</pre>
                        <pre className='tab1Item11Name'>Hisham Al Rawi       #15</pre>
                        <pre className='tab1Item11Name'>Pedro Miguel         #2</pre>
                        <pre className='tab1Item11Name'>Saad Al Sheeb        #1</pre>
                    </div>
                    <div className='tab1Item12'>
                        <div className='tab1Item12Title'>Vị trí</div>
                        <pre className='tab1Item12Name'>Tiền đạo</pre>
                        <pre className='tab1Item12Name'>Tiền đạo</pre>
                        <pre className='tab1Item12Name'>Tiền vệ</pre>
                        <pre className='tab1Item12Name'>Tiền vệ</pre>
                        <pre className='tab1Item12Name'>Tiền vệ</pre>
                        <pre className='tab1Item12Name'>Hậu vệ</pre>
                        <pre className='tab1Item12Name'>Hậu vệ</pre>
                        <pre className='tab1Item12Name'>Hậu vệ</pre>
                        <pre className='tab1Item12Name'>Hậu vệ</pre>
                        <pre className='tab1Item12Name'>Hậu vệ</pre>
                        <pre className='tab1Item12Name'>Thủ môn</pre>
                    </div>
                </div>
                <hr />
                <div className='tab1Item2'>
                    <div className='tab1Item21'>
                        <div className='tab1Item21Title'>Vị trí</div>
                        <pre className='tab1Item21Name'>Tiền đạo</pre>
                        <pre className='tab1Item21Name'>Tiền đạo</pre>
                        <pre className='tab1Item21Name'>Tiền vệ</pre>
                        <pre className='tab1Item21Name'>Tiền vệ</pre>
                        <pre className='tab1Item21Name'>Tiền vệ</pre>
                        <pre className='tab1Item21Name'>Tiền vệ</pre>
                        <pre className='tab1Item21Name'>Hậu vệ</pre>
                        <pre className='tab1Item21Name'>Hậu vệ</pre>
                        <pre className='tab1Item21Name'>Hậu vệ</pre>
                        <pre className='tab1Item21Name'>Hậu vệ</pre>
                        <pre className='tab1Item21Name'>Thủ môn</pre>
                    </div>
                    <div className='tab1Item22'>
                        <div className='tab1Item22Title'>
                            <div className='tab1Item22Team'>4-4-2 {props.arr.AwayTeam.TeamName}</div>
                            <img className='tab1Item22Img' src={props.arr.AwayTeam.PictureUrl.replace('{format}', 'sq').replace('{size}','2')} alt="ảnh QK" />
                        </div>
                        <pre className='tab1Item22Name'>#13      Enner Valencia</pre>
                        <pre className='tab1Item22Name'>#11     Michael Estrada</pre>
                        <pre className='tab1Item22Name'>#19       Gonzalo Plata</pre>
                        <pre className='tab1Item22Name'>#20        Sebas Méndez</pre>
                        <pre className='tab1Item22Name'>#23      Moisés Caicedo</pre>
                        <pre className='tab1Item22Name'>#10      Romario Ibarra</pre>
                        <pre className='tab1Item22Name'>#17     Ángelo Preciado</pre>
                        <pre className='tab1Item22Name'>#2         Félix Torres</pre>
                        <pre className='tab1Item22Name'>#3       Piero Hincapié</pre>
                        <pre className='tab1Item22Name'>#7     Pervis Estupiñán</pre>
                        <pre className='tab1Item22Name'>#1      Hernán Galíndez</pre>
                    </div>
                </div>
            </div>
            <div className='tab1Content1'>
                <div className='tab1Item3'>
                    <img className='tab1Item3Img' src={props.arr.HomeTeam.PictureUrl.replace('{format}', 'sq').replace('{size}','2')} alt="ảnh QK" />
                    <pre className='tab1Item3Name'>1    Franco Armani</pre>
                    <pre className='tab1Item3Name'>2    Juan Foyth</pre>
                    <pre className='tab1Item3Name'>4    Gonzalo Montiel</pre>
                    <pre className='tab1Item3Name'>6    Germán Pezzella</pre>
                    <pre className='tab1Item3Name'>8    Marcos Acuña</pre>
                    <pre className='tab1Item3Name'>9    Julián Álvarez</pre>
                    <pre className='tab1Item3Name'>12   Gerónimo Rulli</pre>
                    <pre className='tab1Item3Name'>14   Exequiel Palacios</pre>
                    <pre className='tab1Item3Name'>15   Ángel Correa</pre>
                    <pre className='tab1Item3Name'>16   Thiago Almada</pre>
                    <pre className='tab1Item3Name'>18   Guido Rodríguez</pre>
                    <pre className='tab1Item3Name'>20   Alexis Mac Allister</pre>
                    <pre className='tab1Item3Name'>21   Paulo Dybala</pre>
                    <pre className='tab1Item3Name'>24   Enzo Fernández</pre>
                    <pre className='tab1Item3Name'>25   Lisandro Martínez</pre>
                    </div>
                <div className='tab1Item4'>CẦU THỦ DỰ BỊ</div>
                <div className='tab1Item5'>
                    <div className='tab1Item5Flex'>
                        <img className='tab1Item5img' src={props.arr.AwayTeam.PictureUrl.replace('{format}', 'sq').replace('{size}','2')} alt="ảnh QK" />
                    </div>
                    <pre className='tab1Item5Name'>Mohammed Al Yami    1</pre>
                    <pre className='tab1Item5Name'>Sultan Al-Ghannam    2</pre>
                    <pre className='tab1Item5Name'>Abdullah Madu    3</pre>
                    <pre className='tab1Item5Name'>Abdulelah Al-Amri    4</pre>
                    <pre className='tab1Item5Name'>Mohammed Al-Breik    6</pre>
                    <pre className='tab1Item5Name'>Abdullah Otayf   14</pre>
                    <pre className='tab1Item5Name'>Ali Alhassan   15</pre>
                    <pre className='tab1Item5Name'>Sami Al-Najei   16</pre>
                    <pre className='tab1Item5Name'>Nawaf Alabid   18</pre>
                    <pre className='tab1Item5Name'>Hattan Bahebri   19</pre>
                    <pre className='tab1Item5Name'>Abdulrahman Alobud   20</pre>
                    <pre className='tab1Item5Name'>Nawaf Alaqidi   22</pre>
                    <pre className='tab1Item5Name'>Nasser Aldawsari   24</pre>
                    <pre className='tab1Item5Name'>Haitham Asiri   25</pre>
                </div>
            </div>
            <div className='tab1Content2'>
                <div className='tab1Item6'>
                    <img className='tab1Item3Img' src={props.arr.HomeTeam.PictureUrl.replace('{format}', 'sq').replace('{size}','2')} alt="ảnh QK" />
                    <pre>Lionel Scaloni</pre>
                </div>
                <div className='tab1Item7'>NGƯỜI QUẢN LÝ</div>
                <div className='tab1Item8'>
                    <div className='tab1Item8Flex'>
                        <img className='tab1Item5img' src={props.arr.AwayTeam.PictureUrl.replace('{format}', 'sq').replace('{size}','2')} alt="ảnh QK" />
                    </div>
                    <pre>Hervé Renard</pre>
                </div>
            </div>
        </div>
    )
}

export default SquadTab
