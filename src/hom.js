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
  Img,
  Descrip
} from "./elements/forms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faUserTie, faKey } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import img1 from ".././src/img/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg";

function Home(){
    return(
      <div className="inicio">
        <Habitaciones>
          <Descrip>
            <div>
              <Title>Habitación Simple</Title>
              
            </div>
            <div>
              <Img src={img1}></Img>
            </div>
          </Descrip>
          <Descrip>
            <div>
              <Title>Habitación Doble</Title>
            </div>
          </Descrip>
          <Descrip>
            <div>
              <Title>Habitación Triple</Title>
            </div>
          </Descrip>
          <Descrip>
            <div>
              <Title>Habitación Cuadruple</Title>
            </div>
          </Descrip>
          
        </Habitaciones>
      </div>
      
    );
}
export default Home;