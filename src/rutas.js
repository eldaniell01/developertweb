import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {BrowserRouder as Router, Route} from 'react-router-dom';

//rutas
import Navegacion from "./navegación";
import Registro from "./registro";

function Rutas(){
    return(
        <Router>
            <Navegacion></Navegacion>
            <Route path="/" exact component={}></Route>
        </Router>
    );
}