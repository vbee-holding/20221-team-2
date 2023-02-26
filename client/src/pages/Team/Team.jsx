import React,{ useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Matchs from "./Detail/Matchs/Matchs";
import Squad from "./Detail/Squad.css/Squad";
import './Team.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { useParams } from "react-router-dom";
import axios from "axios";
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
    const idTeam = useParams()
    const [team, setTeam] = useState('');
    useEffect(() =>{
        const fetchTeam = async() =>{
            const team = await axios('http://localhost:5005/api/team/'+ idTeam.id);
            setTeam(team.data)
        }
        fetchTeam();
    },[])
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
                                        {
                                            team &&(
                                                <div>
                                                    <img className="icon-header-team" src={team.PictureUrl} alt=""></img> {team.Name}
                                                </div>
                                            )
                                        }
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
