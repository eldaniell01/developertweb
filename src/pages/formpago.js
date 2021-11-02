import React from "react";

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
  Formulario3,
  Interform2,
  Optionselect,
  Dateop,
  Selectbox,
  Roms
} from "../elements/forms";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faUserTie, faKey } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { HashRouter, Switch, Route, Link } from "react-router-dom";

function Formpay() {
  return (
    <>
    <div className="inicio">
    <Habitaciones>
      <Formulario>
        <Title>Reservación de Habitación</Title>
        <Interform1>
          <Interform2>
            <Labell>Nombre</Labell>
            <Textbox type="text"></Textbox>
          </Interform2>
          <Interform2>
            <Labell>Apellido</Labell>
            <Textbox type="text"></Textbox>
          </Interform2>
          <Interform2>
            <Labell>DPI</Labell>
            <Textbox type="text"></Textbox>
          </Interform2>
          <Interform2>
            <Labell>Dirección</Labell>
            <Textbox type="text"></Textbox>
          </Interform2>
          <Interform2>
            <Labell>Teléfono</Labell>
            <Textbox type="text"></Textbox>
          </Interform2>
        </Interform1>
        <hr/>
        <Roms>
          <Interform2>
            <Labell>Fecha de reservación</Labell>
            <Dateop type="date" name="fechaesperada"
       min="2018-01-01" max="2021-12-31"></Dateop>
          </Interform2>
          <Interform2>
            <Labell>Tipo de Habitación</Labell>
            <Selectbox>
              <Optionselect>hola</Optionselect>
            </Selectbox>
          </Interform2>
          <Interform2>
            <Labell>Alquiler de Vehículos</Labell>
            <Selectbox>
              <Optionselect>hola</Optionselect>
            </Selectbox>
          </Interform2>
          <Interform2>
            <Labell> Elegir tipo de Traslado</Labell>
            <Selectbox>
              <Optionselect>hola</Optionselect>
            </Selectbox>
          </Interform2>
          <Interform2>
            <Labell>Agregar desayunos</Labell>
            <Selectbox>
              <Optionselect>hola</Optionselect>
            </Selectbox>
          </Interform2>
        </Roms>
        <hr/>
        <Roms>
          <div></div>
          
          <Buttons type="button"><Textbutton>Reservar</Textbutton></Buttons>

       
          
          </Roms>
      </Formulario>
      </Habitaciones>
    </div>
      
      
    </>
  );
}

export default Formpay;