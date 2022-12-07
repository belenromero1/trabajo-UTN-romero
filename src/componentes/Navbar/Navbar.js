import React from "react";
import "./Navbar.css"
import Logo from "../Imagenes/logo-atomik.png"
import { Link } from "react-router-dom";


export const Navbar = () =>{
    return(
        
    <div className="Navbar">
        <Link to="/">
    <div className="logo">
    <img src={Logo} alt='logoAtomik'  />
    </div>
        </Link>
    <nav >
        <ul className="contenedorMenu">
    <Link className="menu" to="/">Inicio</Link>
    <Link className="menu" to="/productos">Productos</Link>
    <Link className="menu"  to="/contacto">Contacto</Link>
</ul>
    </nav>

    
    </div>
    )
}