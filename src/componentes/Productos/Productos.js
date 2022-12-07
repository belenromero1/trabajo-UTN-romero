import React, {useState}from "react";
import { Compras } from "../Compras/Compras";
import { Carrito } from "../Carrito/Carrito";


export const Productos = ({size})=>{
    const [cart, setCart] = useState([]);

    const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
        if (item.id === product.id)
            isPresent = true;
    })
    if (isPresent) {
        return;
    }
    setCart([...cart, item]);

}
return(
    
    <React.Fragment>
        <Carrito size={cart.length}/>
        <Compras  handleClick={handleClick} />
    </React.Fragment>

    )

}