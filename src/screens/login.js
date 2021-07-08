import React from 'react';
import styled from "styled-components"
import Input from '../components/input';
import { useForm } from '../hooks/useForm';
import userIcon from '../images/user.png';
import lock from '../images/lock.png';
import { useAuth } from '../context/authProvider';
import Button from '../components/button';
// import {ButtonWithRender} from '../components/button';

const Container = styled.div`
    background: #F7F8FD;
    position: relative;
    width: 100%;
    height: calc(100vh - 120px);
    padding-top: 100px;

    @media screen and (min-width: 767px){
        width: 30%;
        left: 50%;
        position: relative;
        transform: translateX(-50%);
    }

    .iniciar-sesion{
        font-weight: bolder;
        font-size: 1.8rem;
        padding-left: 12%;
        letter-spacing: -1.5px;
    }

    .contenedorCampos{
        width: 80%;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        margin-bottom: 0;
        margin-top: 40px;
        position: relative;
        left: 50%;
        transform: translateX(-50%); 
    }

    .contenedorRecuperarContraseña{
        width: 90%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        column-gap: 5px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        
        p{
            font-size: .8rem;
        }
        p:nth-of-type(2){
            color: #F9703E;
        }
    }
    .error{
        font-size: 12px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        color: red;
        width: 80%;
        padding: 10px;
        padding-left: 25px;
    }
    .button-wrapper{
        width: 80%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 120px;
        cursor: pointer;
    }
`

const Login = () => {
    const { login, error } = useAuth();

    const { handlerChangeText, formulario } = useForm({
        user: "",
        password: ""
    });

    const { user, password } = formulario;

    return (
        <Container>
            <p className="iniciar-sesion">Iniciar Sesión</p>
            <div className="contenedorCampos">
                <Input
                    titulo="E-mail o nombre de usuario"
                    placeholder="angel.genis98@gmail.com"
                    icon={userIcon}
                    onChange={handlerChangeText}
                    value={formulario.user}
                    name="user"
                />
                <Input
                    titulo="Contraseña"
                    placeholder="************"
                    icon={lock}
                    onChange={handlerChangeText}
                    value={formulario.password}
                    name="password"
                    type="password"
                />
            </div>
            
            <p className="error">{error}</p>

            {/*ingresando a la función login con render props*/}
            {/* <ButtonWithRender 
                render={({ login }) => (
                   <p onClick={login}>Iniciar Sesión</p>
                )}
            /> */}

            {/* ingresando a la función login con un custom hook */}

            <div className="button-wrapper">
                <Button onClick={() => { login(user, password) }} texto="INGRESAR" />
            </div>

        </Container >
    )
}

export default Login;