import React, { useEffect, useState } from 'react';
import './Group.css';
import { useNavigate } from 'react-router-dom';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import axios from 'axios';
const Group = () =>{
    const navigation = useNavigate();
    const GoToDetailTeam = (id) => {
        console.log("Chi tiết về đội bóng Id:", {id});
        navigation(`/team/${id}`,{replace: true});
    }
    const [groups, setGroup] = useState([]);
    useEffect(() =>{
        const fetchGroups = async() =>{
            const res = await axios('http://localhost:5005/api/matchgroup');
            console.log(res.data)
            setGroup(res.data)
            console.log("groups",groups)
        }
        fetchGroups();
        
    }, [])
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
                    <div className="row ">
                        {
                            groups && groups.map(group =>{
                                return(
                                    <div className="col-md-6 my-2" key={group._id}>
                                        <div className="card my-2" id ="group-team">
                                            <p className='h5 mx-2'> Group {group.Group}</p> 
                                            <div className="table-body">
                                                <table className='table table-hover'>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th></th>
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
                                                        group.Data.map((team) => (
                                                            <tr key={team.IdTeam}>
                                                                <td>{team.Rank}</td>
                                                                <th className="pointer"><li onClick={()=> GoToDetailTeam(team.IdTeam)}><img className='icon' src={team.ImgUrl.replace('{format}','sq').replace('{size}','2')} alt=""></img></li></th>
                                                                <th className='pointer'><li onClick={()=> GoToDetailTeam(team.IdTeam)}>{team.TeamName}</li></th>
                                                                <td>{team.Pld}</td>
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
