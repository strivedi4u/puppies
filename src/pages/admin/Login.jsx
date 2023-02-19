import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import logo from '../../images/logo.svg';
import '../../css/Login.css';
function Login() {
    var loggedIn = localStorage.getItem("auth-token");
    useEffect(() => {
        if (loggedIn) {
            window.location.href = '/dashboard';
        }
    },);

    const URL = "/";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(URL + "api/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: email, password: password })
        }).catch((e) => {
            swal("Ohh No!", "Server Error Occupied !", "error");
        })
        const json = await response.json();
        if (json.success === true) {
            localStorage.clear();
            localStorage.setItem('auth-token', json.authToken);
            localStorage.setItem('tokenfor', json.tokenfor);
            window.location.href = '/dashboard';
        }
        else {
            swal("Ohh No!", "Email Or Password Error !", "error");
        }
    }
    return (
        <><br></br><br></br><br></br><br></br>
            <div className="login-form">
                <h2 className="text-center"><b>Admin Login</b></h2>
                <form onSubmit={handleSubmit} method="post">
                    <div className="avatar" style={{ backgroundColor: "transparent" }}>
                        <img src={logo} alt="Avatar" />
                    </div>
                    <div className="form-group">
                        <input type="email" onChange={e => setEmail(e.target.value)} className="form-control input-lg" name="username" placeholder="Username" required="required" />
                    </div>
                    <div className="form-group">
                        <input type="password" onChange={e => setPassword(e.target.value)} className="form-control input-lg" name="password" placeholder="Password" required="required" />
                    </div>
                    <div className="form-group clearfix">
                        <button type="submit" className="btn btn-primary btn-lg pull-right">Sign in</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
