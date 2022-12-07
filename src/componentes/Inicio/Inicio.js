import React from "react";
import { Carrusel } from "../Carrusel/Carrusel";
import { FaCarSide } from "react-icons/fa"
import { FaCreditCard } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import "./Inicio.css"
import fotoKids from "../Imagenes/foto_inicio.jpg"
import fotoMujer from "../Imagenes/foto_mujer.jpg"
import fotoHombre from "../Imagenes/foto_hombre.jpg"



export const Inicio = () => {
    return (
<>
            <Carrusel />

            <div className="iconosInicio">
                <div>
                    <div className="logosInicio">
                        <FaCarSide />
                    </div>
                    <p className="texto">Envios gratis</p>
                </div>
                <div>
                    <div className="logosInicio">
                        <FaCreditCard />
                    </div>
                    <p className="texto">3 y 6 cuotas</p>
                </div>
                <div>
                    <div className="logosInicio">
                        <FaPhone />
                    </div>
                    <p className="texto"> 11-3579-3955</p>
                </div>
            </div>

            <section className="fotosInicio">
                <img className="fotos" src={fotoKids} alt='fotoKids' />
                <img className="fotos" src={fotoMujer} alt='fotoMujer' />
                <img className="fotos" src={fotoHombre} alt='fotoHombre' />
            </section>

        
</>
    )
}