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
import img2 from ".././src/img/alexander-kaunas-Fk9d0cxYqC4-unsplash.jpg"
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Simple from "./pages/simple";
import Doble from "./pages/doble";
function Home(){
    return(
      <>
      <HashRouter>
      <div className="inicio">
        <Habitaciones>
          <Descrip>
            <div>
              <Link to="/pages/simple">
              <Title>Habitación Simple</Title></Link>
              <Textbutton>
                Es una habitación amplia para una o dos personas, con baño personal.
              </Textbutton>
            </div>
            <div>
            <Link to="/pages/simple" ><Img src={img1}></Img></Link>
            </div>
            
          </Descrip>
          <hr/>
          <Descrip>
          <div>
          <Link to="/pages/doble"><Img src={img2}></Img></Link> 
            </div>
            <div>
            <Link to="/pages/doble">
              <Title>Habitación Doble</Title></Link>
              <Textbutton>
                Es una habitación amplia para cuatro personas o más.
              </Textbutton>
            
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
          <Switch>
              <Route path="/pages/simple" component={Simple}></Route>
              <Route path="/pages/doble" component={Doble}></Route>
            </Switch>
        </Habitaciones>
      </div>
      </HashRouter>
      </>
    );
}
export default Home;