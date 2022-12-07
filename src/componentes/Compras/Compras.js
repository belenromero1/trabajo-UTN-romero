import React from "react";
import lista from "../Data/Data"
import { Producto } from "../Compras/Producto";

export const Compras = ({ handleClick}) =>{
    return(
        <section className="sectionCompra">
            {
                lista.map((item)=>(
                    <Producto item ={item} key={item.id} handleClick={handleClick}/>

                ))
            }
        </section>
    )
}
;