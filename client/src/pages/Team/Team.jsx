import React,{useEffect, useState} from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Matchs from "./Detail/Matchs/Matchs";
import Squad from "./Detail/Squad.css/Squad";
import './Team.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';
const Team = () =>{
    const[active1, setActive1] = useState(true);
    const[active2, setActive2] = useState(false);
    const clickItem1 = () =>{
        setActive1(true)
        setActive2(false)
    }
    const clickItem2 = () =>{
        setActive2(true)
        setActive1(false)
    }
    return(
        <div>
            <Header/>
            <div className="team">
                <section className="header-team">
                    <div className="container">
                        <div className="grid">
                            <div className="row">
                                <div className="col">
                                    <p className="h3 my-2">
                                    <img className="icon-header-team" src="https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ARG?tx=c_fill,g_auto,q_auto" alt=""></img> Argentina
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                      <div className=" row d-flex justify-content-center" >
                        <div className="col-sm-1 my-2">
                            <button onClick={clickItem1} type="button" className={active1 ? "button-team-click btn mx-2" : "btn btn-light mx-2" }>Trận đấu</button>
                        </div>
                        <div className="col-sm-1 my-2">
                            <button onClick={clickItem2} type="button" className={active2 ? "button-team-click btn mx-2" : "btn btn-light mx-2" }>Đội hình</button>
                        </div>
                      </div>
                </section>
            </div>

            {
                active1 && <Matchs/>
            }
            {
                active2 && <Squad/>
            }
            <Footer/>
        </div>
    )

}
export default Team;