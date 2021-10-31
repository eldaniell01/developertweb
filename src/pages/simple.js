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

import img5 from ".././img/roberto-nickson-rEJxpBskj3Q-unsplash.jpg";
import img6 from ".././img/beazy-vlEvtZnlQJc-unsplash.jpg";

function Simple() {
  return (
    <div className="inicio">
      <Habitaciones>
        <Roms>
          <Rom>
            <Link to="/pages/formpago">
              <Img src={img5}></Img>
            </Link>
            <Texth>Q. 300.00</Texth>
            <Link to="/pages/formpago">
              <Buttons>
                <Textbutton>Reservar</Textbutton>
              </Buttons>
            </Link>
          </Rom>

          <Rom>
            <Link to="/pages/formpago">
              <Img src={img6}></Img>
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
export default Simple;
