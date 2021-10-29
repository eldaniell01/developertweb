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
  Grouplink,
  Iconnav,
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
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Registro from "./registro";
import Home from "./hom";
import We from "./we";
//<Registro></Registro>
function App() {
  return (
    <>
      <HashRouter>
        <div>
          <Navgroup>
            <Grouplink>
              <Iconnav icon={faHouseUser}></Iconnav>
              <Link to="/">INICIO</Link>
            </Grouplink>
            <Grouplink>
              <Iconnav icon={faIdCardAlt} to="/registro"></Iconnav>
              <Link to="/registro">NOSOTROS</Link>
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
          </Switch>
        </div>
      </HashRouter>
      <main></main>
    </>
  );
}
function home() {
  return <h1>hola mundo</h1>;
}

export default App;
