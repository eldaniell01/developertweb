import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colores ={
    border: "#218DA6",
    error: "#F20530",
    complet: "#3FD49B"

}

const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    
`

const Labell = styled.label`
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 1.1em;
    align-items: center;
`
const Inputsgrup = styled.div`
    position: relative;
`
const Textbox = styled.input`
    width: 100%;
    background: white;
    border: 3px;
    border-radius: 10px;
    height: 45px;
    text-align: center;
    padding: 0 40px 0 40px;
    line-height: 45px;
    transition: 0.5s ease all;
    border: 3px solid transparent;
    &:focus{
        border: 3px solid ${colores.border};
        outline: none;
        cursor: pointer;
    }
`
const Leyend = styled.p`
    font-family: 'Noto Sans', sans-serif;
    font-weight: 500;
    font-size: 12px;
    margin-bottom: 0%;
    color: ${colores.error};
    display: none;
`
const Iconvalue = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index: 100;
    font-size: 16px;
    display: none;
`
const Buttongrup = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    gap: 25px;
    margin: 15px;
`
const Iconuser = styled(FontAwesomeIcon)`
    position: absolute;
    left: 10px;
    bottom: 14px;
    z-index: 100;
    font-size: 16px;
`
const Buttons = styled.button`
    background: #CDE5F7;
    transition: 0.4s;
    margin: 10px;
    width: 150px;
    height: 40px;
    line-height: 40px;
    border: none;
    text-align: center;
    align-items: center;
    border-radius: 10px;
    &:hover{
        background: #82C3F5;
    }
`
const Textbutton = styled.p`
    font-family: 'Noto Sans', sans-serif;
    font-weight: bold;
    font-size: 0.9em;
`
const Title = styled.label`
    font-family: 'Noto Sans', sans-serif;
    font-weight: normal;
    display: flex;
    justify-content: center;
    margin: 20px;
    font-size: 2.4em;
`
const Formulario2 = styled.form`
    display: flex;
    flex-flow: column;
`
const Ocultar = styled.div`
    display: none;
    flex-flow: column;
    justify-content: center;
`
const Confirm = styled.input`
    border-radius: 3px solid;
    margin: 15px;
`  
const Interform1 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
`
const Interform2 = styled.div`
    margin: 15px;
    padding: 20px;
    justify-content: center;

`

export {Formulario, Ocultar, Confirm, Formulario2,  Interform1, Interform2, Title, Textbutton, Labell, Inputsgrup, Buttons, Textbox, Leyend, Iconvalue, Buttongrup, Iconuser};