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
  Textbox,
  Buttongrup,
  Leyend,
  Iconvalue,
  Iconuser,
  Interform1,
  Interform2,
} from "./elements/forms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faUserTie, faKey } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const url_login = "http://localhost:3000/api/login.php";

const sendData = async (url, dat = {}) => {
  try{
    const answer = await fetch(url, {
      method: "POST",
      body: JSON.stringify(dat),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(answer=>answer.text())
    .then(text => console.log(text));
    //console.log(answer);
    //const json = await answer.json();
    //console.log(json);
  }catch(error){
    console.log('Error happened here!')
    console.error(error)

  }
  
};

function App() {
  const [list, setlist] = useState([]);
  const [nombre, setnombre] = useState("");
  const [apellido, setapellido] = useState("");
  const [direccion, setdireccion] = useState("");
  const [telefono, settelefono] = useState("");
  const [dpi, setdpi] = useState("");
  const [correo, setcorreo] = useState("");
  const [pass, setpass] = useState("");
  const [id, setid] = useState("");
  const [bandera, setbandera] = useState(true);
  const [correo2, setcorreo2] = useState("");
  const [pass2, setpass2] = useState("");
  const refUser = useRef(null);
  const refPassword = useRef(null);
  useEffect(() => {
    getUser();
  }, []);
  async function getUser() {
    const res = await axios.get("http://localhost:3000/api/index.php");
    setlist(res.data);
    console.log(res.data);
  }

  async function addUser(e) {
    if (validetions() != true) {
      alert("hay un error en el campo");
    } else {
      alert("todo");
      e.preventDefault();
      const obj = { nombre, apellido, direccion, telefono, dpi, correo, pass };
      const res = await axios.post("http://localhost:3000/api/index.php", obj);

      console.log(res.data);
    }
  }

  async function updateuser(e) {
    const obj = {
      id,
      nombre,
      apellido,
      direccion,
      telefono,
      dpi,
      correo,
      pass,
    };
    const res = await axios.put("http://localhost:3000/api/", obj);
    console.log(res.data);
  }

  function add(e) {
    e.preventDefault();
    addUser();
    clearstate();
  }

  function clearstate() {
    setid("");
    setnombre("");
    setapellido("");
    setdireccion("");
    setdpi("");
    setcorreo("");
    setpass("");
    setbandera(true);
  }
  const login = (e) => {
    e.preventDefault();
    const data = {
      "usuario": refUser.current.value,
      "clave": refPassword.current.value,
    };
    console.log(data);
    sendData(url_login, data);
  };

  return (
    <>
      <main>
        <Formulario  id="log">
          <Title htmlFor="">Hotel</Title>
          <Labell htmlFor="">Email</Labell>
          <Inputsgrup>
            <Textbox
              type="text"
              name="user"
              placeholder="Email"
              id="email1"
              ref={refUser}
            ></Textbox>
            <Iconvalue icon={faCheck}></Iconvalue>
            <Iconuser icon={faUserTie}></Iconuser>
          </Inputsgrup>
          <Leyend>leyenda</Leyend>
          <Labell htmlFor="">Contraseña</Labell>
          <Inputsgrup>
            <Textbox
              type="password"
              name="password"
              placeholder="******"
              id="pass"
              ref={refPassword}
            ></Textbox>
            <Iconvalue icon={faCheck}></Iconvalue>
            <Iconuser icon={faKey} onClick={showpass}></Iconuser>
          </Inputsgrup>
          <Leyend id="leyenl">leyenda</Leyend>
          <div>
            <Labell htmlFor="" id="ter">
              <Confirm
                type="checkbox"
                name="terminos"
                id="terminos"
                onClick={showpass}
              ></Confirm>
              Mostrartrar contraseña
            </Labell>
          </div>

          <Buttongrup id="bt">
            <Buttons type="submit" id="enviar" onClick={login}>
              <Textbutton>Iniciar Sesión</Textbutton>
            </Buttons>
            <Buttons type="button" onClick={cambiotamaño}>
              <Textbutton>Crear Usuario</Textbutton>
            </Buttons>
          </Buttongrup>
        </Formulario>
      </main>
      <main>
        <Ocultar id="sing">
          <Title htmlFor="">Hotel</Title>
          <Formulario2 name="form2" id="form2" onSubmit={chec1}>
            <Interform1>
              <div>
                <Labell htmlFor="">Nombre</Labell>
                <Inputsgrup>
                  <Textbox
                    id="name"
                    type="text"
                    pattern="^[A-Za-zñÑÁÉÍÓÚáéíóú ]+$"
                    maxlength="40"
                    required
                    placeholder="Nombre"
                    onChange={(e) => setnombre(e.target.value)}
                    value={nombre}
                  ></Textbox>
                  <Iconvalue icon={faCheck}></Iconvalue>
                </Inputsgrup>
                <Leyend>leyenda</Leyend>
              </div>
              <div>
                <Labell htmlFor="">Apellido</Labell>
                <Inputsgrup>
                  <Textbox
                    id="last_name"
                    type="text"
                    pattern="^[A-Za-zñÑÁÉÍÓÚáéíóú ]+$"
                    maxlength="40"
                    required
                    placeholder="Apellido"
                    onChange={(e) => setapellido(e.target.value)}
                    value={apellido}
                  ></Textbox>
                  <Iconvalue icon={faCheck}></Iconvalue>
                </Inputsgrup>
                <Leyend>leyenda</Leyend>
              </div>

              <div>
                <Labell htmlFor="">Dirección</Labell>
                <Inputsgrup>
                  <Textbox
                    id="address"
                    type="text"
                    pattern="^[A-Za-zñÑÁÉÍÓÚáéíóú.1-9 ]+$"
                    maxlength="50"
                    required
                    placeholder="Dirección"
                    onChange={(e) => setdireccion(e.target.value)}
                    value={direccion}
                  ></Textbox>
                  <Iconvalue icon={faCheck}></Iconvalue>
                </Inputsgrup>
                <Leyend>leyenda</Leyend>
              </div>

              <div>
                <Labell htmlFor="">Teléfono</Labell>
                <Inputsgrup>
                  <Textbox
                    id="phone"
                    type="text"
                    pattern="^[0-9]+$"
                    maxlength="8"
                    minLength="8"
                    required
                    placeholder="Teléfono"
                    onChange={(e) => settelefono(e.target.value)}
                    value={telefono}
                  ></Textbox>
                  <Iconvalue icon={faCheck}></Iconvalue>
                </Inputsgrup>
                <Leyend>leyenda</Leyend>
              </div>

              <div>
                <Labell htmlFor="">DPI o Nit</Labell>
                <Inputsgrup>
                  <Textbox
                    id="dpi"
                    type="text"
                    pattern="^[0-9]+$"
                    maxlength="13"
                    minLength="13"
                    required
                    placeholder="DPI o Nit"
                    onChange={(e) => setdpi(e.target.value)}
                    value={dpi}
                  ></Textbox>
                  <Iconvalue icon={faCheck}></Iconvalue>
                </Inputsgrup>
                <Leyend>leyenda</Leyend>
              </div>

              <div>
                <Labell htmlFor="">Correo Electronico</Labell>
                <Inputsgrup>
                  <Textbox
                    id="email"
                    type="text"
                    pattern="^[a-z_@.]+$"
                    maxlength="50"
                    required
                    placeholder="Correo Electronico"
                    onChange={(e) => setcorreo(e.target.value)}
                    value={correo}
                  ></Textbox>
                  <Iconvalue id="ch" icon={faCheck}></Iconvalue>
                </Inputsgrup>
                <Leyend>leyenda</Leyend>
              </div>
              <div>
                <Labell htmlFor="">Contraseña</Labell>
                <Inputsgrup>
                  <Textbox
                    type="password"
                    pattern="^[0-9A-ZáéíóúÁÉÍÓÚa-z_*@#. ]+$"
                    minLength="7"
                    required
                    placeholder="*********"
                    id="pass2"
                    onChange={(e) => setpass(e.target.value)}
                    value={pass}
                  ></Textbox>
                  <Iconvalue id="v" icon={faCheck}></Iconvalue>
                  <Iconuser icon={faKey} onClick={showpass}></Iconuser>
                </Inputsgrup>
                <Leyend>leyenda</Leyend>
              </div>
              <div>
                <Labell htmlFor="">Repetir Contraseña</Labell>
                <Inputsgrup>
                  <Textbox
                    type="password"
                    pattern="^[0-9A-ZáéíóúÁÉÍÓÚa-z_*@#. ]+$"
                    minLength="7"
                    required
                    placeholder="*********"
                    id="pass3"
                  ></Textbox>
                  <Iconvalue id="v" icon={faCheck}></Iconvalue>
                  <Iconuser icon={faKey} onClick={showpass}></Iconuser>
                </Inputsgrup>
                <Leyend>leyenda</Leyend>
              </div>
            </Interform1>
            <Interform2>
              <Labell htmlFor="" id="ter">
                <Confirm type="checkbox" name="terminos" id="termin"></Confirm>
                Aceptar Terminos y Condiciones
              </Labell>
              <Buttongrup id="bt">
                <Buttons
                  type="button"
                  onClick={(e) => addUser(e)}
                  value="Registrar"
                >
                  <Textbutton>Registrar Usuario</Textbutton>
                </Buttons>
                <Buttons
                  type="button"
                  onClick={ocultarregistro}
                  value="Regresar"
                >
                  <Textbutton>Regresar</Textbutton>
                </Buttons>
              </Buttongrup>
            </Interform2>
          </Formulario2>
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
                    <Textbox type="text" placeholder="Nombre" onChange={(e)=>setnombre(e.target.value)}></Textbox>
                    <Iconvalue icon={faCheck}></Iconvalue>
                  </Inputsgrup>
                  <Leyend>leyenda</Leyend>                
                </div>
                <div> 
                  <Labell htmlFor="">Apellido</Labell>
                  <Inputsgrup>
                    <Textbox type="text" placeholder="Apellido" onChange={(e)=>setapellido(e.target.value)}></Textbox>
                    <Iconvalue icon={faCheck}></Iconvalue>
                  </Inputsgrup>
                  <Leyend>leyenda</Leyend>
                </div>
                
                <div>
                  <Labell htmlFor="">Dirección</Labell>
                  <Inputsgrup>
                    <Textbox type="text" placeholder="Dirección" onChange={(e)=>setdireccion(e.target.value)}></Textbox>
                    <Iconvalue icon={faCheck}></Iconvalue>
                  </Inputsgrup>
                  <Leyend>leyenda</Leyend>
                </div>
                
                <div>
                  <Labell htmlFor="">Teléfono</Labell>
                  <Inputsgrup>
                    <Textbox type="text" placeholder="Teléfono" onChange={(e)=>settelefono(e.target.value)}></Textbox>
                    <Iconvalue icon={faCheck}></Iconvalue>
                  </Inputsgrup>
                  <Leyend>leyenda</Leyend>
                </div>
                
                <div>
                  <Labell htmlFor="">DPI</Labell>
                  <Inputsgrup>
                    <Textbox type="text" placeholder="DPI" onChange={(e)=>setdpi(e.target.value)}></Textbox>
                    <Iconvalue icon={faCheck}></Iconvalue>
                  </Inputsgrup>
                  <Leyend>leyenda</Leyend>
                </div>
                
                <div>
                  <Labell htmlFor="">Correo Electronico</Labell>
                  <Inputsgrup>
                    <Textbox type="text" placeholder="Correo Electronico" onChange={(e)=>setcorreo(e.target.value)}></Textbox>
                    <Iconvalue id="ch" icon={faCheck}></Iconvalue>
                  </Inputsgrup>
                  <Leyend>leyenda</Leyend>
                </div>
                <div>
                  <Labell htmlFor="">Contraseña</Labell>
                  <Inputsgrup>
                    <Textbox type="password" placeholder="*********"  id="pass2" onChange={(e)=>setpassw(e.target.value)}></Textbox>
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
                <Buttons onClick={(e)=>app.addUser(e)}><Textbutton>Registrar Usuario</Textbutton></Buttons>
                <Buttons onClick={ocultarregistro}><Textbutton>Cancelar</Textbutton></Buttons>
              </Buttongrup> 
              </Ocultar>
              
            </main>
            </>  
        );
    }
}*/

function cambiotamaño() {
  var caja = document.getElementsByClassName("login")[0];
  caja.style.width = 900 + "px";

  document.getElementById("log").style.display = "none";
  document.getElementById("bt").style.display = "none";
  document.getElementById("sing").style.display = "flex";
  document.getElementById("ter").style.marginTop = "15px";
  /*document.getElementById("form1").style.opacity ="0";
  document.getElementById("formr").style.display ="flex";
*/
}

function ocultarregistro() {
  var caja = document.getElementsByClassName("login")[0];
  caja.style.width = 550 + "px";
  document.getElementById("log").style.display = "grid";
  document.getElementById("bt").style.display = "flex";
  document.getElementById("sing").style.display = "none";
}

function validarlog() {
  var dat = true;
  if (
    /^([a-z1-9@*._])*$/.test(document.getElementById("email1").value) &&
    document.getElementById("email1").value.length > 5
  ) {
  } else {
    console.log("email1");
    dat = false;
  }
  if (document.getElementById("pass").value.length > 7) {
  } else {
    console.log("contraseña");
    dat = false;
  }

  return dat;
}

function showpass() {
  var tipo = document.getElementById("pass");
  var tipo2 = document.getElementById("pass2");
  var tipo3 = document.getElementById("pass3");
  if (
    (tipo.type == "password") |
    (tipo2.type == "password") |
    (tipo3.type == "password")
  ) {
    tipo.type = "text";
    tipo2.type = "text";
    tipo3.type = "text";
  } else {
    tipo.type = "password";
    tipo2.type = "password";
    tipo3.type = "password";
  }
}

function validetions(e) {
  var dat = true;

  if (
    /^([a-zA-Z])*$/.test(document.getElementById("name").value) &&
    document.getElementById("name").value.length > 2
  ) {
  } else {
    console.log("nombre");
    dat = false;
  }
  if (
    /^([a-zA-Z])*$/.test(document.getElementById("last_name").value) &&
    document.getElementById("last_name").value.length > 2
  ) {
  } else {
    console.log("apellido");
    dat = false;
  }
  if (
    /^([A-Za-zñÑÁÉÍÓÚáéíóú.1-9 ])*$/.test(
      document.getElementById("address").value
    ) &&
    document.getElementById("address").value.length > 3
  ) {
  } else {
    console.log("direccion");
    dat = false;
  }

  if (
    /^([a-z1-9@*._])*$/.test(document.getElementById("email").value) &&
    document.getElementById("email").value.length > 5
  ) {
  } else {
    console.log("email");
    dat = false;
  }

  if (
    document.getElementById("phone").value.length == 8 &&
    /^([0-9])*$/.test(document.getElementById("phone").value)
  ) {
  } else {
    console.log("telefono");
    dat = false;
  }

  if (
    document.getElementById("dpi").value.length == 13 &&
    /^([0-9])*$/.test(document.getElementById("dpi").value)
  ) {
  } else {
    console.log("dpi");
    dat = false;
  }

  if (!document.getElementById("termin").checked) {
    alert("debe de aceptar los terminos");
    dat = false;
  } else {
    alert(" terminos");
  }
  if (
    document.getElementById("pass2").value.length > 7 &&
    document.getElementById("pass3").value.length > 7 &&
    document.getElementById("pass2").value ==
      document.getElementById("pass3").value
  ) {
  } else {
    console.log("contraseña");
    dat = false;
  }
  return dat;
}

function chec1(e) {
  if (!document.getElementById("termin").checked) {
    alert("debe de aceptar los terminos");
    e.preventDefault();
  } else {
    alert(" terminos");
  }
  e.preventDefault();
}



function sendform(e){
  e.preventDefault();
  if(document.getElementById("enviar")){
    document.getElementById("enviar").addEventListener('click', function(e){
      e.preventDefault();
      let formd = document.getElementById("log");
      let data = new FormData(formd);
      fetch('"https://localhost:3000/log.php',{
        method: 'POST',
        body: data
      }).then(datos => datos.json())
      .then(datosformulario=>{
        console.log(datosformulario);
      })
    
    });
  }else{
    console.log("error");
  }
}
export default App;
