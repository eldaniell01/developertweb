//todo lo que va dentro de los divs
import React, {Component} from "react";

import  ReactDOM from "react-dom";
import { render }  from "react-dom";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Registro from "./component/registro.js";
ReactDOM.render(
    
    <Registro/>,
    
    document.getElementById("root"));

    //render(<Registro/>, document.getElementById("root"));

    function cambiotamaño(){
        
        var caja = document.getElementsByClassName("login")[0];
        caja.style.width= 900 +"px";
        document.getElementById("form1").style.display ="none";
        document.getElementById("form1").style.opacity ="0";
        document.getElementById("formr").style.display ="flex";
        
    }

    function ocultarregistro(){
        var caja = document.getElementsByClassName("login")[0];
        caja.style.width= 550 +"px";
        document.getElementById("form1").style.display ="flex";
        document.getElementById("form1").style.opacity ="1";
        document.getElementById("formr").style.display ="none";
    }