import React from "react";
import {Routes,Route } from "react-router-dom";
import { Contacto } from "./componentes/Contacto/Contacto";
import { Footer } from "./componentes/Footer/Footer";
import { Header } from "./componentes/Header/Header";
import { Inicio } from "./componentes/Inicio/Inicio";
import { Navbar } from "./componentes/Navbar/Navbar";
import { Productos } from "./componentes/Productos/Productos";

function App  ()  {

    return(
<>
<Header/>
<Navbar/>

                <Routes>
                  
                    <Route path="/" element={<Inicio />} />
                    <Route path="/productos" element={<Productos />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Routes>


  <Footer/>
            </>
        )
}

export default App;
