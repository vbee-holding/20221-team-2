import React from 'react';
import './Group.css';
import {groupApi} from '../../../apis/apiGroup.js';
import { useNavigate } from 'react-router-dom';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.bundle';
const Group = () =>{
    const navigation = useNavigate();
    const GoToDetailTeam = (id) => {
        console.log("Chi tiết về đội bóng Id:", {id});
        navigation(`/team/${id}`,{replace: true});
    }
    const teams = groupApi;
    return(
        <React.Fragment>
        <div className="groups">        
            <section className='p-3'>
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3">
                                    Vòng Bảng
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='line'></div>
            <section>
                <div className="container">
                    <div className="row">
                        {
                            Object.values(teams).map(group =>{
                                return(
                                    <div className="col-md-4" key={group.team}>
                                        <div className="card my-2" id ="group-team">
                                            <p className='h5 mx-2'> Group {group.team[0].table}</p> 
                                            <div className="table-body">
                                                <table className='table table-hover'>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Đội</th>
                                                        <th>P</th>
                                                        <th>W</th>
                                                        <th>D</th>
                                                        <th>L</th>
                                                        <th>GD</th>
                                                        <th>Pts</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        group.team[1].map((team) => (
                                                            <tr key={team.id}>
                                                                <td>{team.rank}</td>
                                                                <th className='pointer'><li onClick={()=> GoToDetailTeam(team.id)}><img className='icon' src={team.img} alt=""></img> {team.name}</li></th>
                                                                <td>{team.P}</td>
                                                                <td>{team.W}</td>
                                                                <td>{team.D}</td>
                                                                <td>{team.L}</td>
                                                                <td>{team.GD}</td>
                                                                <td>{team.Pts}</td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>                                   
                                )
                            })
                        }                        
                    </div>
                </div>
            </section>
        </div>
        </React.Fragment>
    )
};
export default Group;
