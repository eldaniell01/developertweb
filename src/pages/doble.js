import React from "react";
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
  Habitaciones,
  Interform2,
  Texth,
  Roms,
  Img,
  Rom,
} from "../elements/forms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faUserTie, faKey } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import img7 from ".././img/neonbrand-Wp7t4cWN-68-unsplash.jpg";
import img8 from ".././img/sidekix-media-WgkA3CSFrjc-unsplash.jpg";

function Doble() {
  return (
    <div className="inicio">
      <Habitaciones>
        <Roms>
          <Rom>
            <Link to="/pages/formpago">
              <Img src={img7}></Img>
            </Link>
            <Texth>Q. 300.00</Texth>
            <Link to="/pages/formpago">
              <Buttons>
                <Textbutton>Reservar</Textbutton>
              </Buttons>
            </Link>
          </Rom>
          <hr width="1" size="500" />
          <Rom>
            <Link to="/pages/formpago">
              <Img src={img8}></Img>
            </Link>
            <Texth>Q. 300.00</Texth>
            <Link to="/pages/formpago">
              <Buttons>
                <Textbutton>Reservar</Textbutton>
              </Buttons>
            </Link>
          </Rom>
        </Roms>
      </Habitaciones>
    </div>
  );
}
export default Doble;
