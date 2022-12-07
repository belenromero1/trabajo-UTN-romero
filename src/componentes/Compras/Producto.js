import React from "react";
import "./Producto.css"


export const Producto = ({item,handleClick}) =>{
    const {nombre, precio, img} = item;

    return(
        <div className="boxProducto">
            <div className="imagen">
                <img src={img} alt="img"/>
            </div>
            <div className="pieImagen">
                <p>{nombre}</p>
                <p> {precio} $</p>
                <button onClick={()=> handleClick(item)}>Añadir al carrito</button>
            </div>
        </div>
        
    )
} 