import React from "react";
import {render} from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import {Formulario, Labell} from "./elements/forms";
class Registro extends React.Component{
    constructor(props){
        super(props);
        this.state ={}
    }
    render(){
        return( 
            <>
            <main>
              <Formulario>
                <Labell htmlFor="">Usuario</Labell>
                <input type="text" placeholder="Usuario"></input>
                <p>leyenda</p>
              </Formulario>
            </main>
            </>  
        );
    }
}


export default Registro;