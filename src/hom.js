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
  Habitaciones,
  Iconuser,
  Interform1,
  Interform2,
  Texth,
  Img,
  Descrip,
} from "./elements/forms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faUserTie, faKey } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import img1 from ".././src/img/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg";
import img2 from ".././src/img/alexander-kaunas-Fk9d0cxYqC4-unsplash.jpg";
import img3 from ".././src/img/roberto-nickson-emqnSQwQQDo-unsplash.jpg";
import img4 from ".././src/img/sidekix-media-xroM8RaMnSI-unsplash.jpg";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Simple from "./pages/simple";
import Doble from "./pages/doble";
import Cuadruple from "./pages/cuadruple";
import Triple from "./pages/triple";
function Home() {
  return (
    <>
      <HashRouter>
        <div className="inicio">
          <Habitaciones>
            <Descrip>
              <div className="centrado">
                <Link to="/pages/formpago">
                  <Texth>Habitación Simple</Texth>
                </Link>
                <Textbutton>
                  Es una habitación amplia para una o dos personas, con baño
                  personal.
                </Textbutton>
              </div>
              <div>
                <Link to="/pages/formpago">
                  <Img src={img1}></Img>
                </Link>
              </div>
            </Descrip>
            <hr />
            <Descrip>
            <div className="centrado">
                <Link to="/pages/formpago">
                  <Img src={img2}></Img>
                </Link>
              </div>
              <div className="centrado">
                <Link to="/pages/formpago">
                  <Texth>Habitación Doble</Texth>
                </Link>
                <Textbutton>
                  Es una habitación amplia para cuatro personas o más.
                </Textbutton>
              </div>
            </Descrip>
            <hr />
            <Descrip>
            <div className="centrado">
                <Link to="/pages/formpago">
                  <Texth>Habitación Triple</Texth>
                </Link>
                <Textbutton>
                  Es una habitación amplia para una o dos personas, con baño
                  personal.
                </Textbutton>
              </div>
              <div>
                <Link to="/pages/formpago">
                  <Img src={img3}></Img>
                </Link>
              </div>
            </Descrip>
            <hr />
            <Descrip>
              <div>
                <Link to="/pages/formpago">
                  <Img src={img4}></Img>
                </Link>
              </div>
              <div className="centrado">
                <Link to="/pages/formpago">
                  <Texth>Habitación Cuadruple</Texth>
                
                </Link>
                <Textbutton>
                  Es una habitación amplia para cuatro personas o más.
                </Textbutton>
              </div>
            </Descrip>
          
            
          </Habitaciones>
        </div>
      </HashRouter>
    </>
  );
}
export default Home;
