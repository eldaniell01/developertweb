import React, { useRef, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {BrowserRouder as Router, Route} from 'react-router-dom';

//rutas
import Navegacion from "./navegación";
import Registro from "./registro";

function Rutas(){
    const [conectado, setconectado] = useState(false);
    const acceder = (estado)=>{
        setconectado(estado);
    }
    return(
        conectado ? <Dashboard/> : <Registro acceder ={acceder}/>
    );
}
export default Rutas;