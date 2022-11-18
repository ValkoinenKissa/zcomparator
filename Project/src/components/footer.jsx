import React from "react";
import "./footer.css";
import pixelArt from "./logo.png";
import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsGoogle} from "react-icons/bs"

function Footer(){
    return (
        <div className="App-footer">
            <div className="Navleft">
                <li className="logo"><picture><img src={pixelArt}/> <tool-tip role="Tooltip">Zcomparator</tool-tip></picture></li>
            </div>
            <div className="Social">
                <ul>
                    <li className="SIcon"><a href="#"><BsFacebook style={{color: "gray", width: "45px", height: "45px"}} /></a></li>
                    <li className="SIcon"><a href="#"><BsInstagram style={{color: "gray", width: "45px", height: "45px"}} /></a></li>
                    <li className="SIcon"><a href="#"><BsTwitter style={{color: "gray", width: "45px", height: "45px"}} /></a></li>
                    <li className="SIcon"><a href="#"><BsGoogle style={{color: "gray", width: "45px", height: "45px"}} /></a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;