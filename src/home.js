import React, { useRef, useEffect, useState } from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import {
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
  Navgroup,
  Grouplink,
  Iconnav,
  Habitaciones,
  Interform2,
} from "./elements/forms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faUserTie,
  faKey,
  faHeadset,
  faIdCardAlt,
  faHouseUser,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { HashRouter, Router, Switch, Route, Link } from "react-router-dom";
import Registro from "./registro";
import Home from "./hom";
import We from "./we";
import Navegacion from "./navegación";
import Simple from "./pages/simple";
import Doble from "./pages/doble";
import Cuadruple from "./pages/cuadruple";
import Triple from "./pages/triple";
import Formpay from "./pages/formpago";
import Dashboard from "./pages/dashboard";
//<Registro></Registro>
function App() {
  return (
    <>
      <HashRouter>
        <Navegacion></Navegacion>
        <Route path="/hom" component={Home}></Route>
        <Route path="/registro" component={Registro}></Route>
        <Route path="/pages/simple" component={Simple}></Route>
        <Route path="/pages/doble" component={Doble}></Route>
        <Route path="/pages/triple" component={Triple}></Route>
        <Route path="/pages/cuadruple" component={Cuadruple}></Route>
        <Route path="/pages/formpago" component={Formpay}></Route>
        <Route path="/pages/dashboard" component={Dashboard}></Route>
      </HashRouter>
    </>
    /*<div>
    <Navgroup>
      <Grouplink>
        <Iconnav icon={faHouseUser}></Iconnav>
        <Link to="/hom">INICIO</Link>
        
      </Grouplink>
      <Grouplink>
        <Iconnav icon={faIdCardAlt} to="/registro"></Iconnav>
        <Link to="/navegacion">NOSOTROS</Link>
      </Grouplink>
      <Grouplink>
        <Iconnav icon={faHeadset}></Iconnav>
        <Link to="/registro">CONTACTO</Link>
      </Grouplink>
      <Grouplink>
        <Iconnav icon={faUserTie}></Iconnav>
        <Link to="/registro">INICIAR SESIÓN O REGISTRARSE</Link>
      </Grouplink>
    </Navgroup>
    <Switch>
      <Route path="/registro" component={Registro}></Route>
      <Route path="/navegacion" component={Navegacion}></Route>
      <Route path="/hom" component={Home}></Route>
    </Switch>
  </div>*/
  );
}
function home() {
  return <h1>hola mundo</h1>;
}

export default App;
