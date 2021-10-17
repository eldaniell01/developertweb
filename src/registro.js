import React, { useRef, useEffect, useState} from "react";
import {render} from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import {Formulario, Confirm, Formulario2, Ocultar, Buttons, Title, Labell, Textbutton, Inputsgrup, Textbox, Buttongrup, Leyend, Iconvalue, Iconuser} from "./elements/forms";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faUserTie, faKey } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

function app(){
    const [nombre, setnombre] = ('');
    const [apellido, setapellido] =('');
    const [direccion, setdireccion]=('');
    const [telefono, settelefono]=('');
    const [dpi, setdpi]=('');
    const [correo, setcorreo]=('');
    const [passw, setpassw]=('');
    
    useEffect(()=>{
      adduser();
    },[])


    async function addUser(e){
      e.preventDefault();
      const obj= {nombre, apellido, direccion, telefono, dpi, correo, passw};
      const res = await axios.post('http://localhost:3000/api/', obj);
      console.log(res);
    }
    return( 
      <>
      <main>
        <Formulario id="log">
          <Title htmlFor="">Hotel</Title>
          <Labell htmlFor="">Email</Labell>
          <Inputsgrup>
            <Textbox type="text" placeholder="Email" id="textname"></Textbox>
            <Iconvalue icon={faCheck}></Iconvalue>
            <Iconuser icon={faUserTie}></Iconuser>
          </Inputsgrup>
          <Leyend>leyenda</Leyend>
          <Labell htmlFor="">Contraseña</Labell>
          <Inputsgrup>
            <Textbox type="password" placeholder="******" id="pass"></Textbox>
            <Iconvalue icon={faCheck}></Iconvalue>
            <Iconuser icon={faKey} onClick={showpass}></Iconuser>
          </Inputsgrup>
          <Leyend id="leyenl">leyenda</Leyend>
          <div>
          <Labell htmlFor="" id="ter">
            <Confirm type="checkbox" name="terminos" id="terminos" onClick={showpass}>
            </Confirm>Mostrartrar contraseña
          </Labell> 
        </div>
        </Formulario>
        
        <Buttongrup id="bt">
          <Buttons onClick={validarlog}><Textbutton>Iniciar Sesión</Textbutton></Buttons>
          <Buttons onClick={cambiotamaño}><Textbutton>Crear Usuario</Textbutton></Buttons>
        </Buttongrup> 
      </main>


      <main>
        <Ocultar id="sing">
        <Title htmlFor="">Hotel</Title>
        <Formulario2>
        
          <div>
            <Labell htmlFor="">Nombre</Labell>
            <Inputsgrup>
              <Textbox type="text" placeholder="Nombre"></Textbox>
              <Iconvalue icon={faCheck}></Iconvalue>
            </Inputsgrup>
            <Leyend>leyenda</Leyend>                
          </div>
          <div> 
            <Labell htmlFor="">Apellido</Labell>
            <Inputsgrup>
              <Textbox type="text" placeholder="Apellido"></Textbox>
              <Iconvalue icon={faCheck}></Iconvalue>
            </Inputsgrup>
            <Leyend>leyenda</Leyend>
          </div>
          
          <div>
            <Labell htmlFor="">Dirección</Labell>
            <Inputsgrup>
              <Textbox type="text" placeholder="Dirección"></Textbox>
              <Iconvalue icon={faCheck}></Iconvalue>
            </Inputsgrup>
            <Leyend>leyenda</Leyend>
          </div>
          
          <div>
            <Labell htmlFor="">Teléfono</Labell>
            <Inputsgrup>
              <Textbox type="text" placeholder="Teléfono"></Textbox>
              <Iconvalue icon={faCheck}></Iconvalue>
            </Inputsgrup>
            <Leyend>leyenda</Leyend>
          </div>
          
          <div>
            <Labell htmlFor="">DPI o Nit</Labell>
            <Inputsgrup>
              <Textbox type="text" placeholder="DPI o Nit"></Textbox>
              <Iconvalue icon={faCheck}></Iconvalue>
            </Inputsgrup>
            <Leyend>leyenda</Leyend>
          </div>
          
          <div>
            <Labell htmlFor="">Correo Electronico</Labell>
            <Inputsgrup>
              <Textbox type="text" placeholder="Correo Electronico"></Textbox>
              <Iconvalue id="ch" icon={faCheck}></Iconvalue>
            </Inputsgrup>
            <Leyend>leyenda</Leyend>
          </div>
          <div>
            <Labell htmlFor="">Contraseña</Labell>
            <Inputsgrup>
              <Textbox type="password" placeholder="*********"  id="pass2"></Textbox>
              <Iconvalue id="v" icon={faCheck}></Iconvalue>
              <Iconuser icon={faKey} onClick={showpass}></Iconuser>
            </Inputsgrup>
            <Leyend>leyenda</Leyend>
          </div>
          <div>
            <Labell htmlFor="">Repetir Contraseña</Labell>
            <Inputsgrup>
              <Textbox type="password" placeholder="*********" id="pass3"></Textbox>
              <Iconvalue id="v" icon={faCheck}></Iconvalue>
              <Iconuser icon={faKey} onClick={showpass} ></Iconuser>
            </Inputsgrup>
            <Leyend>leyenda</Leyend>
          </div>
        </Formulario2>
        <div>
          <Labell htmlFor="" id="ter">
            <Confirm type="checkbox" name="terminos" id="terminos">
            </Confirm>Aceptar Terminos y Condiciones
          </Labell> 
        </div>
        
        <Buttongrup id="bt">
          <Buttons ><Textbutton>Registrar Usuario</Textbutton></Buttons>
          <Buttons onClick={ocultarregistro}><Textbutton>Cancelar</Textbutton></Buttons>
        </Buttongrup> 
        </Ocultar>
        
      </main>
      </>  
  );

}
/*
class Registro extends React.Component{
    constructor(props){
        super(props);
        this.state ={}
    }
    
    render(){
        return( 
            <>
            <main>
              <Formulario id="log">
                <Title htmlFor="">Hotel</Title>
                <Labell htmlFor="">Email</Labell>
                <Inputsgrup>
                  <Textbox type="text" placeholder="Email" id="textname"></Textbox>
                  <Iconvalue icon={faCheck}></Iconvalue>
                  <Iconuser icon={faUserTie}></Iconuser>
                </Inputsgrup>
                <Leyend>leyenda</Leyend>
                <Labell htmlFor="">Contraseña</Labell>
                <Inputsgrup>
                  <Textbox type="password" placeholder="******" id="pass"></Textbox>
                  <Iconvalue icon={faCheck}></Iconvalue>
                  <Iconuser icon={faKey} onClick={showpass}></Iconuser>
                </Inputsgrup>
                <Leyend id="leyenl">leyenda</Leyend>
                <div>
                <Labell htmlFor="" id="ter">
                  <Confirm type="checkbox" name="terminos" id="terminos" onClick={showpass}>
                  </Confirm>Mostrartrar contraseña
                </Labell> 
              </div>
              </Formulario>
              
              <Buttongrup id="bt">
                <Buttons onClick={validarlog}><Textbutton>Iniciar Sesión</Textbutton></Buttons>
                <Buttons onClick={cambiotamaño}><Textbutton>Crear Usuario</Textbutton></Buttons>
              </Buttongrup> 
            </main>


            <main>
              <Ocultar id="sing">
              <Title htmlFor="">Hotel</Title>
              <Formulario2>
              
                <div>
                  <Labell htmlFor="">Nombre</Labell>
                  <Inputsgrup>
                    <Textbox type="text" placeholder="Nombre"></Textbox>
                    <Iconvalue icon={faCheck}></Iconvalue>
                  </Inputsgrup>
                  <Leyend>leyenda</Leyend>                
                </div>
                <div> 
                  <Labell htmlFor="">Apellido</Labell>
                  <Inputsgrup>
                    <Textbox type="text" placeholder="Apellido"></Textbox>
                    <Iconvalue icon={faCheck}></Iconvalue>
                  </Inputsgrup>
                  <Leyend>leyenda</Leyend>
                </div>
                
                <div>
                  <Labell htmlFor="">Dirección</Labell>
                  <Inputsgrup>
                    <Textbox type="text" placeholder="Dirección"></Textbox>
                    <Iconvalue icon={faCheck}></Iconvalue>
                  </Inputsgrup>
                  <Leyend>leyenda</Leyend>
                </div>
                
                <div>
                  <Labell htmlFor="">Teléfono</Labell>
                  <Inputsgrup>
                    <Textbox type="text" placeholder="Teléfono"></Textbox>
                    <Iconvalue icon={faCheck}></Iconvalue>
                  </Inputsgrup>
                  <Leyend>leyenda</Leyend>
                </div>
                
                <div>
                  <Labell htmlFor="">DPI o Nit</Labell>
                  <Inputsgrup>
                    <Textbox type="text" placeholder="DPI o Nit"></Textbox>
                    <Iconvalue icon={faCheck}></Iconvalue>
                  </Inputsgrup>
                  <Leyend>leyenda</Leyend>
                </div>
                
                <div>
                  <Labell htmlFor="">Correo Electronico</Labell>
                  <Inputsgrup>
                    <Textbox type="text" placeholder="Correo Electronico"></Textbox>
                    <Iconvalue id="ch" icon={faCheck}></Iconvalue>
                  </Inputsgrup>
                  <Leyend>leyenda</Leyend>
                </div>
                <div>
                  <Labell htmlFor="">Contraseña</Labell>
                  <Inputsgrup>
                    <Textbox type="password" placeholder="*********"  id="pass2"></Textbox>
                    <Iconvalue id="v" icon={faCheck}></Iconvalue>
                    <Iconuser icon={faKey} onClick={showpass}></Iconuser>
                  </Inputsgrup>
                  <Leyend>leyenda</Leyend>
                </div>
                <div>
                  <Labell htmlFor="">Repetir Contraseña</Labell>
                  <Inputsgrup>
                    <Textbox type="password" placeholder="*********" id="pass3"></Textbox>
                    <Iconvalue id="v" icon={faCheck}></Iconvalue>
                    <Iconuser icon={faKey} onClick={showpass} ></Iconuser>
                  </Inputsgrup>
                  <Leyend>leyenda</Leyend>
                </div>
              </Formulario2>
              <div>
                <Labell htmlFor="" id="ter">
                  <Confirm type="checkbox" name="terminos" id="terminos">
                  </Confirm>Aceptar Terminos y Condiciones
                </Labell> 
              </div>
              
              <Buttongrup id="bt">
                <Buttons ><Textbutton>Registrar Usuario</Textbutton></Buttons>
                <Buttons onClick={ocultarregistro}><Textbutton>Cancelar</Textbutton></Buttons>
              </Buttongrup> 
              </Ocultar>
              
            </main>
            </>  
        );
    }
}*/

function cambiotamaño(){
        
  var caja = document.getElementsByClassName("login")[0];
  caja.style.width= 900 +"px";

  document.getElementById("log").style.display ="none";
  document.getElementById("bt").style.display ="none";
  document.getElementById("sing").style.display = "flex";
  document.getElementById("ter").style.marginTop="15px"
  /*document.getElementById("form1").style.opacity ="0";
  document.getElementById("formr").style.display ="flex";
*/
}

function ocultarregistro(){
  var caja = document.getElementsByClassName("login")[0];
  caja.style.width= 550 +"px";
  document.getElementById("log").style.display ="grid";
  document.getElementById("bt").style.display ="flex";
  document.getElementById("sing").style.display = "none";
}




function validarlog(){
  var name = document.getElementById("textname").value;
  var password = document.getElementById("pass").value;
  if(name.length > 2){
    
    console.log(password);
    console.log('Formulario Enviado');
    document.getElementById("textname").value ="";
    document.getElementById("pass").value ="";
  }
}

function showpass(){
  var tipo = document.getElementById("pass")
  var tipo2 = document.getElementById("pass2");
  var tipo3 = document.getElementById("pass3");
      if(tipo.type == "password"| tipo2.type == "password"|tipo3.type == "password"){
        tipo.type = "text";
        tipo2.type = "text";
        tipo3.type = "text";
      }else{
        tipo.type = "password";
        tipo2.type = "password";
        tipo3.type = "password";
      }
}

function conectar(){

}

export default Registro;