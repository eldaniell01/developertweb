import styled from "styled-components";

const colores ={
    border: "#218DA6",
    error: "#F20530",
    complet: "#3FD49B"

}

const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    
`

const Labell = styled.label`
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 1.5em;
`
export {Formulario, Labell};