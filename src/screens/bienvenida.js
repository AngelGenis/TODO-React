import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../context/authProvider';
import requireAuthentication from '../hooks/requireAuthentication'

const ContainerBienvenida = styled.div`
    background: linear-gradient(119.36deg, #396AFC 15.78%, #8F94FB 97.17%);
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    p{
        color: white;
        font-size: 1.8rem;
        width: 80%;
        text-align: center;
    }
`

const Bienvenida = ()=>{
    const {name} = useAuth();

    return (
        <ContainerBienvenida>
            <p>BIENVENIDO {name.toUpperCase()}</p>
        </ContainerBienvenida>
    )
}


export default requireAuthentication(Bienvenida);
