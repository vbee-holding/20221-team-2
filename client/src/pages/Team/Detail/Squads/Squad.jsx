import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Footer from "../../../../components/Footer/Footer";
import Header from "../../../../components/Header/Header";
import './Squad.css'
const Squad = () => {
    const idTeam = useParams();
    const [squad, setSquad] = useState('');
    const [coach, setCoach] = useState('');
    useEffect(() => {
        const fetchSquad = async() => {
            const res1 = await axios('http://localhost:5005/api/player/' + idTeam.id)
            const res2 = await axios('http://localhost:5005/api/coach/' + idTeam.id)
            console.log(res1.data)
            console.log(res2.data)
            setSquad(res1.data)
            setCoach(res2.data)
        }
        fetchSquad();
    },[])
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
            <div className="squad d-flex justify-content-center">
                <section>
                    <div className="container border border-primary my-2">
                        <div className="grid my-4">
                            <div className="row Goalkeeper">
                                <div className="header-squad">
                                    <h4 className="Header-squad mx-2 my-2">Thủ môn</h4>
                                </div>
                                {
                                    squad && squad.map(player =>{
                                        if(player.PositionLocalized ==="Goalkeeper"){
                                            return(
                                                <div className="col-md-2 my-2" key={player.IdPlayer}>
                                                    <div className="card my-2 ">
                                                        <div className="row">
                                                            {
                                                                team &&(
                                                                    <div className="mx-2 logo" >
                                                                        <img className="logo1" src={team.PictureUrl} alt=""></img>
                                                                    </div>
                                                                )
                                                            }
                                                            <div>
                                                                <a href={`https://www.google.com/search?q=${player.PlayerName}`} className="link-team">
                                                                    <img className="logo2 my-3" src={player.PlayerPicture} alt=""></img>
                                                                </a>
                                                                <h6>{player.PlayerName}</h6>
                                                                <div className="line mx-0"></div>
                                                                <div>Thủ môn</div>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                            </div>
                                            )
                                        }
                                    })
                                }
                            </div>


                            <div className="row Defender">
                                <div className="header-squad">
                                    <h4 className="Header-squad mx-2 my-2">Hậu vệ</h4>
                                </div>
                                {
                                    squad && squad.map(player =>{
                                        if(player.PositionLocalized ==="Defender"){
                                            return(
                                                <div className="col-md-2 my-2" key={player.IdPlayer}>
                                                <div className="card my-2 ">
                                                    <div className="row">
                                                        {
                                                            team &&(
                                                                <div className="mx-2 logo" >
                                                                    <img className="logo1" src={team.PictureUrl} alt=""></img>
                                                                </div>
                                                            )
                                                        }
                                                        <div>
                                                            <a href={`https://www.google.com/search?q=${player.PlayerName}`} className="link-team">
                                                                <img className="logo2 my-3" src={player.PlayerPicture} alt=""></img>
                                                            </a>
                                                            <h6>{player.PlayerName}</h6>
                                                            <div className="line mx-0"></div>
                                                            <div>Hậu vệ</div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        }
                                    })
                                }
                            </div>


                            <div className="row Midfielder">
                                <div className="header-squad">
                                    <h4 className="Header-squad mx-2 my-2">Tiền vệ</h4>
                                </div>
                                {
                                    squad && squad.map(player =>{
                                        if(player.PositionLocalized ==="Midfielder"){
                                            return(
                                                <div className="col-md-2 my-2" key={player.IdPlayer}>
                                                <div className="card my-2 ">
                                                    <div className="row">
                                                        {
                                                            team &&(
                                                                <div className="mx-2 logo" >
                                                                    <img className="logo1" src={team.PictureUrl} alt=""></img>
                                                                </div>
                                                            )
                                                        }
                                                        <div>
                                                            <a href={`https://www.google.com/search?q=${player.PlayerName}`} className="link-team">
                                                                <img className="logo2 my-3" src={player.PlayerPicture} alt=""></img>
                                                            </a>
                                                            <h6>{player.PlayerName}</h6>
                                                            <div className="line mx-0"></div>
                                                            <div>Tiền vệ</div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        }
                                    })
                                }
                            </div>


                            
                            <div className="row Forward">
                                <div className="header-squad">
                                    <h4 className="Header-squad mx-2 my-2">Tiền đạo</h4>
                                </div>
                                {
                                    squad && squad.map(player =>{
                                        if(player.PositionLocalized ==="Forward"){
                                            return(
                                                <div className="col-md-2 my-2" key={player.IdPlayer}>
                                                <div className="card my-2 ">
                                                    <div className="row">
                                                        {
                                                            team &&(
                                                                <div className="mx-2 logo" >
                                                                    <img className="logo1" src={team.PictureUrl} alt=""></img>
                                                                </div>
                                                            )
                                                        }
                                                        <div>
                                                            <a href={`https://www.google.com/search?q=${player.PlayerName}`} className="link-team">
                                                                <img className="logo2 my-3" src={player.PlayerPicture} alt=""></img>
                                                            </a>
                                                            <h6>{player.PlayerName}</h6>
                                                            <div className="line mx-0"></div>
                                                            <div>Tiền đạo</div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        }
                                    })
                                }
                            
                            </div>
                            <div className="row Manager">
                            <div className="header-squad">
                                    <h4 className="Header-squad mx-2 my-2">Huấn luyện viên</h4>
                                </div>
                                {
                                    coach && coach.map(player =>{
                                        return(
                                            <div className="col-md-2 my-2" key={player.IdCoach}>
                                            <div className="card my-2 ">
                                                <div className="row">
                                                    {
                                                        team &&(
                                                            <div className="mx-2 logo" >
                                                                <img className="logo1" src={team.PictureUrl} alt=""></img>
                                                            </div>
                                                        )
                                                    }
                                                    <div>
                                                        <a href={`https://www.google.com/search?q=${player.Name}`} className="link-team">
                                                            <img className="logo2 my-3" src={player.PictureUrl} alt=""></img>
                                                        </a>
                                                        <h6>{player.Name}</h6>
                                                        <div className="line mx-0"></div>
                                                        <div>Huấn luyện viên</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    
                </section>
            </div>
            <Footer/>
        </div>
    )
}
export default Squad;
