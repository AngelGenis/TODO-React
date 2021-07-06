import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(119.36deg, #396AFC 15.78%, #8F94FB 97.17%);
    height: 60px;
    border-radius: 20px;

    p{
        color: white;
    }
`

const AddButtonContainer = styled.div`
    width: 50px;
    height: 40px;
    border: none;
    background: linear-gradient(119.36deg, #396AFC 15.78%, #8F94FB 97.17%);
    border-radius: 5px;
    color: white;
    font-weight: bolder;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    p{
        text-align: center;
        padding: 0 !important;
        margin: 0 !important;
    }

    img{
        width: 25px;
    }
`

export const ButtonWithRender = ({ render }) => {
    const login = () => {
        console.log("funcion login compartida");
        // setState({ isAuth: true, username: "Angel" });
        // Cookies.set("user", "Angel");

        // const inter = setInterval(() => {
        //     setTimeout(() => {
        //         history.push("/");
        //     }, 3000);

        //     history.push("/bienvenida");
        //     clearInterval(inter)
        // }, 100);
    }

    return (
        <ButtonContainer>
            {render({ login })}
        </ButtonContainer>
    )
}

export const Button = ({ onClick, texto}) => {
    return (
        <ButtonContainer onClick={onClick}>
            <p>{texto}</p>
        </ButtonContainer>
    )
}

export const AddButton = ({ onClick, texto, children}) => {
    return (
        <AddButtonContainer onClick={onClick}>
            {children}
        </AddButtonContainer>
    )
}

export default Button;