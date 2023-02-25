import React, {} from "react";
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Footer from "../../../../components/Footer/Footer";
import Header from "../../../../components/Header/Header";
import './Squad.css'
const Squad = () => {

    return(
        <div>
            <Header/>
            <div className="squad d-flex justify-content-center">
                <section>
                    <div className="container border border-primary my-2">
                        <div className="grid">
                            <div className="row Goalkeeper">
                                <div className="header-squad">
                                    <h4 className="Header-squad mx-2">Thủ môn</h4>
                                </div>
                                <div className="col-md-2">
                                    <div className="card my-2 ">
                                        <div className="row">
                                            <div className="logo1 mx-2">
                                                <img src="https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ARG?tx=c_fill,g_auto,q_auto,w_24" alt=""></img>
                                            </div>
                                            <div>
                                                <img className="logo2 my-3" src="https://digitalhub.fifa.com/transform/ec57583f-85ed-4b6e-b619-8ec94de13b8f/1442740128?io=transform:fill,width:792,height:900" alt=""></img>
                                                <h5>Emiliano MARTINEZ</h5>
                                                <div className="line mx-0"></div>
                                                <div>Tiền đạo</div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row Defender">
                                <div className="header-squad">
                                    <h4 className="Header-squad mx-2">Hậu vệ</h4>
                                </div>
                                <div className="col-md-2">
                                    <div className="card my-2 ">
                                        <div className="row">
                                            <div className="logo1 mx-2">
                                                <img src="https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ARG?tx=c_fill,g_auto,q_auto,w_24" alt=""></img>
                                            </div>
                                            <div>
                                                <img className="logo2 my-3" src="https://digitalhub.fifa.com/transform/ec57583f-85ed-4b6e-b619-8ec94de13b8f/1442740128?io=transform:fill,width:792,height:900" alt=""></img>
                                                <h5>Emiliano MARTINEZ</h5>
                                                <div className="line mx-0"></div>
                                                <div>Hậu vệ</div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row Midfielder">
                                <div className="header-squad">
                                    <h4 className="Header-squad mx-2">Tiền vệ</h4>
                                </div>
                                <div className="col-md-2">
                                    <div className="card my-2 ">
                                        <div className="row">
                                            <div className="logo1 mx-2">
                                                <img src="https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ARG?tx=c_fill,g_auto,q_auto,w_24" alt=""></img>
                                            </div>
                                            <div>
                                                <img className="logo2 my-3" src="https://digitalhub.fifa.com/transform/ec57583f-85ed-4b6e-b619-8ec94de13b8f/1442740128?io=transform:fill,width:792,height:900" alt=""></img>
                                                <h5>Emiliano MARTINEZ</h5>
                                                <div className="line mx-0"></div>
                                                <div>Tiền vệ</div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>


                            
                            <div className="row Forward">
                                <div className="header-squad">
                                    <h4 className="Header-squad mx-2">Tiền đạo</h4>
                                </div>
                                <div className="col-md-2">
                                    <div className="card my-2 ">
                                        <div className="row">
                                            <div className="logo1 mx-2">
                                                <img src="https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ARG?tx=c_fill,g_auto,q_auto,w_24" alt=""></img>
                                            </div>
                                            <div>
                                                <img className="logo2 my-3" src="https://digitalhub.fifa.com/transform/40e6d6b5-9742-4123-8fb8-d69662c3b24a/1442770580?io=transform:fill" alt=""></img>
                                                <h5>Lionel Messi</h5>
                                                <div className="line mx-0"></div>
                                                <div>Tiền đạo</div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                            <div className="row Manager">
                            <div className="header-squad">
                                    <h4 className="Header-squad mx-2">Huấn luận viên</h4>
                                </div>
                                <div className="col-md-2">
                                    <div className="card my-2 ">
                                        <div className="row">
                                            <div className="logo1 mx-2">
                                                <img src="https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ARG?tx=c_fill,g_auto,q_auto,w_24" alt=""></img>
                                            </div>
                                            <div>
                                                <img className="logo2 my-3" src="https://digitalhub.fifa.com/transform/1cd0729f-827e-4547-b7cb-93b186c209a5/1442739826?io=transform:fill,width:264,height:300" alt=""></img>
                                                <h5>Lionel SCALONI</h5>
                                                <div className="line mx-0"></div>
                                                <div>Huấn luận viên</div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div> 
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
