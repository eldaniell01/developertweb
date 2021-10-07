import React from "react";
import {render} from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import {Formulario, Labell, Inputsgrup, Textbox} from "./elements/forms";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

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
                <Inputsgrup>
                  <Textbox type="text" placeholder="Usuario"></Textbox>
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                </Inputsgrup>
                
                <p>leyenda</p>
              </Formulario>
            </main>
            </>  
        );
    }
}


export default Registro;