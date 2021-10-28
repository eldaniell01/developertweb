import React, { useRef, useEffect, useState } from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import {
  Formulario,
  Confirm,
  Formulario2,
  Ocultar,
  Buttons,
  Title,
  Labell,
  Textbutton,
  Inputsgrup,
  Buttonsinputs,
  Groups,
  Links,
  Textbox, 
  Buttongrup,
  Leyend,
  Iconvalue,
  Iconuser,
  Interform1,
  Navgroup,
  Interform2,
} from "./elements/forms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faUserTie, faKey } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Registro from "./registro";
import Home from "./hom";
//<Registro></Registro>
function App(){
    return(
        <Router>
            <Navgroup></Navgroup>
            <div className="container">
            <Switch>
                <Route path="/home" exact>
                    <Home></Home>
                </Route>
            </Switch>
            </div>
            
            
        </Router>
        
    );
}

export default App;