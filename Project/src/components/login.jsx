import React from "react";
import "./login.css";
import pixelArt from "./logo.png";

function Login() {
    return (

        <div className="Login">
            <div className="login-form">
                <h2>Sign In</h2>
                <div className="inputbox">
                    <input type="text" required="required"/>
                    <span>Username</span>
                    <i></i>
                </div>
                <div className="inputbox">
                    <input type="password" required="required"/>
                    <span>Password</span>
                    <i></i>
                </div>
                <div className="links">
                    <a href="src/components/login">Forgot Password</a>
                    <a href="src/components/login">Sign Up</a>
                </div>
                <input className="loginbtn" type="submit" value="login"/>
            </div>
        </div>
    );

}
export default Login;