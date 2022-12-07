import React from "react";
import "./Carrito.css"
import {FaCartPlus  } from "react-icons/fa";

export const Carrito = ({size}) =>{
    return(
        <div className="cartShopping" >
    <span >
    <FaCartPlus />
    </span>
    <span className="size">{size}</span>
    </div>
    )
}