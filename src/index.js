//todo lo que va dentro de los divs
import React from "react";
import  ReactDOM  from "react-dom";
import "./app.css";
ReactDOM.render(
    
    <><form className="form_log">
        <center><label htmlFor="title" className="t">HOTEL PRINCY</label></center>
        <div className="reg">
            <label className="txt txt2" htmlFor="user">Usuario</label>
            <input className="txt txt2 txt3" type="text" id="usuario" placeholder="usuario"></input>
            <label className="txt txt2" htmlFor="pass">Contraseña</label>
            <input className="txt txt2 txt3" type="password" id="contraseña" placeholder="Contraseña"></input>
        </div>
        <div className="buttons">
            <input className="txt but" type="button" id="log" value="Iniciar Sesión"></input>
            <input className="txt but" type="button" id="reg" value="Registrar Usuario"></input>
        </div>
    </form>
    <form className="form_reg">
        <center><label htmlFor="title" className="t">HOTEL PRINCY</label></center>
        <label className="txt txt2" htmlFor="user">Nombre</label>
        <label className="txt txt2" htmlFor="user">Apellido</label>
        <label className="txt txt2" htmlFor="user">Dirección</label>
        <label className="txt txt2" htmlFor="user">Teléfono</label>
        <label className="txt txt2" htmlFor="user">No. DPI</label>
        <label className="txt txt2" htmlFor="user">Correo Eléctronico </label>
        <label className="txt txt2" htmlFor="user">Contraseña</label>
        <label className="txt txt2" htmlFor="user">Repita la contraseña</label>
        <label className="txt txt2" htmlFor="user">Endiendo los TerminosS</label>
    </form></>,
    
    document.getElementById("root"));