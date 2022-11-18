import React from "react";
import "./contact.css";
import backgroundImg2 from "../contact/fotogente.png";


function Contact (){
    return (
        <div className="container App-contact">
            <div className="fotogenteBg">
                <img className="fotogente1" src={backgroundImg2} alt="equipo"/>
            </div>
            <div className="grid-div">
                <div className="column-div">
                    <h2>Contacta con Nosotros</h2>
                    <div className="contenidoT">
                        <input type="text" required="required"/><span>Nombre</span><i></i>
                        <input type="email" required="required"/><span>Email</span><i></i>
                        <input type="number" placeholder="+34" required="required"/><span>Numero de telefono</span><i></i>
                    </div>
                    <div className="contenidoM">
                        <textarea name="Text1" cols="40" rows="5"></textarea><span>Mensaje</span><i></i>
                        <input className="contactbtn" type="submit" value="Enviar"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact