import React from 'react'
import './Ranking.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Group from '../../components/Contents/Rankings/Group'
import MartChart from '../../components/Contents/MarchChart/MartChart'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { useState } from 'react'

const Ranking = () => {
    const [tab, setTab] = useState(0)
    const changeTab = (i) =>{
        setTab(i)
    }
    return (
        <React.Fragment>
            <div>
                <Header />
                <nav className='nav nav-tabs navbar-ranking justify-content-center'>                
                    <div className="row ranking ">
                        <div className="col nav-item mx-5 my-2">
                            <button class="btn btn-outline-warning button-rank" type="button" onClick={() => changeTab(0)}>Vòng bảng</button>
                        </div>
                        <div className='col nav-item mx-5 my-2'>
                            <button class="btn btn-outline-warning button-rank" type="button" onClick={() =>changeTab(1)} >Vòng loại 16 đội</button>
                        </div>
                    </div>
                    
                </nav>
                {
                    tab === 0 && (<div><Group/> <MartChart/></div>)
                }
                {
                    tab === 1 && (<div><MartChart/> <Group/></div>)
                }
                <Footer />
            </div>
         </React.Fragment>

    )
}
export default Ranking
