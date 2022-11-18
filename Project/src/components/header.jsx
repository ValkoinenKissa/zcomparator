import React from "react";
import "./header.css"
import pixelArt from "./logo.png"
import Login from "./login";
import Contact from "../containers/contact/contact";
import Home from "../containers/home/home"
import {useState} from "react";
import {Link} from "react-router-dom";


function Header(){

    const [enable, setEnable] = useState(false);
    const [Econtact, setEContact] = useState(false);
    const [Ehome, setEHome] = useState(true);


    function handleClick(){
        setEnable(!enable);
    }
    function handleContact(){
        setEContact(!Econtact)
        setEHome(false)
    }
    function handleHome(){
        setEHome(!Ehome)
        setEContact(false)
    }

    return (<div>
        <div className="App-header">
            <div className="Navleft">
                <li className="logo"><picture><img src={pixelArt}/> <tool-tip role="Tooltip">Zcomparator</tool-tip></picture></li>
            </div>
            <div className="Navcenter">
                <ul className="Nav">
                    <li className="contact-page"><Link to="/">Home</Link></li>
                    <li><a href="#">Comparator</a></li>
                    <li><a href="#">About us</a></li>
                    <li className="contact-page"><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
            <div className="Navright">
                <ul className="auth">
                    <li className="authlogin" onClick={() => handleClick()}><a href="#">Login</a></li>
                    <li className="authlogin" onClick={() => handleClick()}><a href="#">Sign in</a></li>
                </ul>
            </div>
        </div>
            {enable ?
                <div style={{left:"-50%"}}><Login/></div> : null
            }
        </div>
    );
}

export default Header;