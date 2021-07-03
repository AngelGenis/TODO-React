import React from 'react';
import styled from 'styled-components';

const Contenedor = styled.div`
    width: 100%;

    .titulo{
        font-weight: bolder;
        margin: 0;
        padding: 0 10px;
        font-size: .9rem;
    }

    .input{
        margin: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px;
      

        .contenedorImagen{
            width: 30px;
            height: 30px;
            border-bottom: 1px solid #C9C7DD;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;

            img{
                width: 80%;
            }

        }
        input{
            width: calc(100% - 30px);
            height: 30px;
            border: none;
            border-bottom: 1px solid #C9C7DD;
            outline: none;
            padding-left: 5px;
        }
    }
`;

export default function Input({ titulo, placeholder, icon = "", onChange, value, name, type = "text", image = true }) {
    return (
        <Contenedor>
            <p className="titulo">{titulo}</p>

            <div className="input">
                {
                    image && (
                        <div className="contenedorImagen">
                            <img src={icon} alt="icon" />
                        </div>
                    )
                }

                <input
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    name={name}
                    autoComplete="off"
                />
            </div>
        </Contenedor>
    )
}