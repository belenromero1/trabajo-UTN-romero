import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import Portada1 from "../Imagenes/carrusel1.jpg";
import Portada2 from "../Imagenes/carrusel2.jpg";
import Portada3 from "../Imagenes/carrusel3.jpg";


export const Carrusel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Portada1}
                    alt="foto1"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Portada2}
                    alt="foto2"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Portada3}
                    alt="foto3"
                />
            </Carousel.Item>
        </Carousel>
    );
}
