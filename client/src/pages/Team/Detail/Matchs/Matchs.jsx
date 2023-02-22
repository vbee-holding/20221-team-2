import React, {} from "react";
import { Link } from "react-router-dom";
import './Matchs.css'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../../../node_modules/bootstrap/dist/js/bootstrap.bundle';
const Matchs = () => {
    const listMatchs = [1,2];

    return(
        // <div className="container">
            <div className="Matchs">
                <div className="d-flex justify-content-center Matchs-body">
                    <div className="col-md-8">
                        {/* Trận 1 */}
                        <div className="row my-2">
                            <div className="card mx-2 Match-detail">
                                <div className="row card-header" id="card-header">
                                    <div className="col">Chung kết</div>
                                    <div className="col">18/12/2022</div>
                                </div>
                                <Link to={`/matchDetail/${listMatchs[0]}`} className ='link-team' >
                                    <div className="row card-body hover">
                                        <div className="col"> <img src="https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ARG?tx=c_fill,g_auto,q_auto,w_24"></img> ARG</div>
                                        <div className="col">(4)3-3(2)</div>
                                        <div className="col"> <img src="https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/FRA?tx=c_fill,g_auto,q_auto,w_24"></img> FRA</div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Trận 1 */}
                        <div className="row my-2">
                            <div className="card mx-2 Match-detail">
                                <div className="row card-header" id="card-header">
                                    <div className="col">Chung kết</div>
                                    <div className="col">18/12/2022</div>
                                </div>
                                <Link to={`/matchDetail/${listMatchs[1]}`} className ='link-team' >
                                    <div className="row card-body hover">
                                        <div className="col"> <img src="https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ARG?tx=c_fill,g_auto,q_auto,w_24"></img> ARG</div>
                                        <div className="col">(4)3-3(2)</div>
                                        <div className="col"> <img src="https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/FRA?tx=c_fill,g_auto,q_auto,w_24"></img> FRA</div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        
  
                    </div>
                </div>
            </div>
        // </div>
    )
}
export default Matchs;