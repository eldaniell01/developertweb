import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
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

export default class Navegacion extends Component {
  render() {
      return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/hom">
          HOTEL
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/hom">
                INICIO
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                NOSOTROS
              </Link>
            </li>
  
            <li className="nav-item">
              <Link className="nav-link" to="/pages/formpago">
                RESERVAR HABITACIÓN
              </Link>
            </li>
  
            <li className="nav-item">
              <Link className="nav-link" to="/registro">
                INICIAR SESIÓN O REGISTRARSE
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    
      );
  }
}
