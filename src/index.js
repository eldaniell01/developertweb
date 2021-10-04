//todo lo que va dentro de los divs
import React from "react";
import  ReactDOM  from "react-dom";
import "./app.css";
ReactDOM.render(
    
    <><form className="form_log" id="form1">
        <center><label htmlFor="title" className="t">HOTEL PRINCY</label></center>
        <div className="reg">
            <label className="txt txt2" htmlFor="user">Usuario</label>
            <input className="txt txt2 txt3" type="text" id="usuario" placeholder="usuario"></input>
            <label className="txt txt2" htmlFor="pass">Contraseña</label>
            <input className="txt txt2 txt3" type="password" id="contraseña" placeholder="Contraseña"></input>
        </div>
        <div className="buttons">
            <input className="txt but" type="button" id="log" value="Iniciar Sesión"></input>
            <input className="txt but regg" type="button" id="reg" value="Registrar Usuario" onClick={cambiotamaño}></input>
        </div>
    </form>
    <form className="form_reg" id="formr">
        <center><label htmlFor="title" className="t">HOTEL PRINCY</label></center>
        <div className="f">
            <div className="column">
                <label className="txt txt2" htmlFor="user">Nombre</label>
                <input className="txt txt2 txt3" type="text" id="usuario" placeholder="Nombre"></input>
            </div>
            <div className="column">
                <label className="txt txt2" htmlFor="user">Apellido</label>
                <input className="txt txt2 txt3" type="text" id="usuario" placeholder="Apellido"></input>
            </div>
            <div className="column">
                <label className="txt txt2" htmlFor="user">Dirección</label>
                <input className="txt txt2 txt3" type="text" id="usuario" placeholder="Dirección"></input>
            </div>
            <div className="column">
                <label className="txt txt2" htmlFor="user">Teléfono</label>
                <input className="txt txt2 txt3" type="text" id="usuario" placeholder="Teléfono"></input>
            </div>
            <div className="column">
                <label className="txt txt2" htmlFor="user">No. DPI</label>
                <input className="txt txt2 txt3" type="text" id="usuario" placeholder="DPI"></input>
            </div>
            <div className="column">
                <label className="txt txt2" htmlFor="user">Correo Eléctronico </label>
                <input className="txt txt2 txt3" type="email" id="usuario" placeholder="Correo Eléctronico"></input>
            </div> 
        </div>
        <div>
            <div>
                <label className="txt txt2" htmlFor="user">Contraseña</label>
                <input className="txt txt2 txt3" type="password" id="usuario" placeholder="Contraseña"></input>
            </div>
            <div>
                <label className="txt txt2" htmlFor="user">Repita la contraseña</label>
                <input className="txt txt2 txt3" type="password" id="usuario" placeholder="Contraseña"></input>
            </div>
        </div>
        <div>
            <input className="txt txt2 txt3" type="checkbox" id="term"></input>
            <label className="txt txt2" htmlFor="user">Endiendo los Terminos</label>
        </div>
        <div className="buttons">
            <input className="txt but" type="button" id="create" value="Crear Usuario"></input>
            <input className="txt but" type="button" id="c" value="Cancelar"></input>
        </div>
    </form></>,
    
    document.getElementById("root"));

    function cambiotamaño(){
        
        var caja = document.getElementsByClassName("login")[0];
        caja.style.width= 900 +"px";
        document.getElementById("form1").style.display ="none";
        document.getElementById("form1").style.opacity ="0";
        document.getElementById("formr").style.display ="flex";
    }