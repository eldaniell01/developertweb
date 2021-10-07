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
const Inputsgrup = styled.div`
    position: relative;
`
const Textbox = styled.input`
    width: 100%;
    
    background: none;
    border: 3px;
    height: 45px;
    text-align: center;
    padding: 0 40px 0 10 px;
    line-height: 45px;
    transition: 0.5s ease all;
    border: 3px solid transparent;
    &:focus{
        border: 3px solid ${colores.border};
        outline: none;
    }
`
export {Formulario, Labell, Inputsgrup, Textbox};