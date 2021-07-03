import React from 'react';
import styled from 'styled-components';
import Button from './button';
import { useHistory } from 'react-router-dom';


const Contenedor = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p{
        width: 80%;
        font-size: 1.4rem;
        text-align: center;
        margin: 30px 0;
        
    }
    .button-wrapper{
        width: 80%;
        margin-top: 40px;
    }
`


const AuthenticationMessage = () => {
    let history = useHistory();

    return (
        <Contenedor>
            <p>Debes iniciar sesión para acceder a tus notas</p>


            <div className="button-wrapper">

                <Button
                    onClick={() => {
                        history.push("/login");
                    }}
                    texto="Iniciar Sesión" />

            </div>

        </Contenedor>
    )
}

export default AuthenticationMessage;