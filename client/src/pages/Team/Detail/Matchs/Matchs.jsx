import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './Matchs.css'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import axios from "axios";
const Matchs = () => {
    const idTeam = useParams()
    const [matchs, setMatchs] = useState([]);
    useEffect(()=>{ 
        const fetchMatchs = async() =>{
            const team = await axios('http://localhost:5005/api/team/'+ idTeam.id);
            console.log('listMatch',(team.data.IdMatchs[0]))
            let matchDetail = []
            for(let i=0; i<team.data.IdMatchs.length; i++){
                const detail = await axios('http://localhost:5005/api/overviewmatch/'+ team.data.IdMatchs[i])
                console.log(detail)
                matchDetail.push(detail.data)
            }
            console.log("matchs",matchDetail)
            setMatchs(matchDetail)
        };
        fetchMatchs();
    },[])
    return(
            <div className="Matchs">
                <div className="d-flex justify-content-center Matchs-body">
                    <div className="col-md-8">
                        {
                            matchs && matchs.map(match => {
                                return(
                                    <div className="row my-2" key={match.idMatch}>
                                    <div className="card mx-2 Match-detail">
                                        <div className="row card-header" id="card-header">
                                            <div className="col">{match.Description}</div>
                                            <div className="col">{match.Date}/2022</div>
                                        </div>
                                        <Link to={`/matchDetail/${match.IdMatch}`} className ='link-team' >
                                            <div className="row card-body hover">
                                                <div className="col"> <img className="icon" src={match.AwayTeam.PictureUrl} alt='anh'></img> {match.AwayTeam.TeamName}</div>
                                                <div className="col">{match.AwayTeam.Score} - {match.HomeTeam.Score}</div>
                                                <div className="col"> <img className="icon" src={match.HomeTeam.PictureUrl} alt='anh'></img> {match.HomeTeam.TeamName}</div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
    )
}
export default Matchs;
