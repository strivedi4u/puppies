import React from 'react';
import swal from 'sweetalert';
import logo from '../images/logo.svg';
import '../css/Login.css';
function FindPuppie() {
    return (
        <><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div className="login-form">
            <form method="post">
                <div className="avatar" style={{ backgroundColor: "transparent" }}>
                    <img src={logo} alt="Avatar" />
                </div>
                
            <h2 className="text-center"><b>Shipping Status</b></h2>
                <div className="form-group">
                    <input type="email" onChange={e => (e.target.value)} className="form-control input-lg" placeholder="Enter your Transcation Id" required="required" />
                </div>
                <center>
                <div className="form-group clearfix">
                <button type="submit" className="btn btn-primary btn-lg pull-right">Find</button>
                </div>
                </center>
            </form>
        </div>
    </>
    );
}

export default FindPuppie;
