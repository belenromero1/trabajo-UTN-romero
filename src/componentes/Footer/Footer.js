import React from "react";
import "./Footer.css"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import swal from 'sweetalert';


export const Footer = () => {
    swal({
        title: "Estas seguro que quieres recibir correos?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("Perfecto! tu suscripción a sido exitosa", {
                    icon: "success",
                });
            } 
        });
    return (
        <footer className="footer">

            <label className="labelFooter"> Suscribite y enterate de todas las novedades</label>

            <div className="suscribirse">
                <input className="correo" type="email" name="correo" placeholder="Ingresa tu email" />
                <div class="botonSuscribirse">
                    <input onClick={Footer} type="submit" name="submit" value="Suscribirse" />
                </div>
            </div>

            <div className="textoIconos">
                <h2> Seguinos</h2>
            </div>
            <div className="iconos">
                <FaInstagram />
                <FaFacebook />
                <FaYoutube className="youtube" />
            </div>
        </footer>
    )
}