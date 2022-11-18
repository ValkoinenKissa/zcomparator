import React from "react";
import backgroundImg from "./shoes1.png";
import "./home.css";

function Home(){
    return (
        <div className="container App-home">
            <div className="ZapatillasBg">
                <img className="zapatillai1" src={backgroundImg} alt="zapatilla" />
                <img className="zapatillai2" src={backgroundImg} alt="zapatilla" />
                <img className="zapatillai3" src={backgroundImg} alt="zapatilla" />
                <img className="zapatillai4" src={backgroundImg} alt="zapatilla" />
                <img className="zapatillai5" src={backgroundImg} alt="zapatilla" />
            </div>
            <div className="zapatillat">
                <h1>Sneakers</h1>
            </div>
        </div>
    );
}

export default Home;