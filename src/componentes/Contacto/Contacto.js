import React, { useState } from "react";
import {useForm} from 'react-hook-form';
import "./Contacto.css"

export const Contacto = () =>{
    const [formularioEnviado, cambioFormulario] =useState(false)
    const { register,formState:{errors}, handleSubmit } = useForm();
    const onSubmit = () => cambioFormulario(true);
    
    return(
        <>
        
        <form  onSubmit={handleSubmit(onSubmit)}>
        
        <div className="contenedorForm">
        <h1 className="tituloContacto">Contactanos</h1>
        
    <div >
            <label>Nombre</label>
            <input type="text" {...register("nombre", {required:true})} />
            {errors.nombre?.type === 'required' && <p> Este campo es obligatorio</p>}
    </div>
    <div>
        <label>Apellido</label>
        <input type="text" {...register("apellido")} />
    </div>
    <div>
    <label>Email</label>
    <input type="email" {...register("email",{required:true, pattern:/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/})}/>
    {errors.email?.type === 'pattern' && <p>El formato es incorrecto</p>}
</div>
<div>
    <label>Mensaje</label>
    <textarea className="mensaje" type="text" cols="30" rows="5" {...register("mensaje", {required:true, maxLength:60 })}/>  
    {errors.mensaje?.type === 'required' && <p> Este campo es obligatorio</p>}
    {errors.mensaje?.type === 'maxLength' && <p> Este campo debe tener menos de 30 caracteres</p> }
</div>
<div className="submit">
<input type="submit" value="Enviar"/>
</div>
{formularioEnviado && <p className="enviado">Este formulario fue enviado con exito!</p>}
</div>
    
    
</form>

</>
    )
}
