import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../context/authProvider';
import avatar from '../images/avatar.png';

const ContainerHeader = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .user-container{
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        p:nth-of-type(1){           
            font-style: normal;
            font-weight: 500;
            font-size: 1rem;
            line-height: 12px;
            text-align: center;
        }
        p:nth-of-type(2){            
            font-weight: 100;
            font-size: .8rem;
            padding: 5px 0;
            color: gray;
            cursor: pointer;
        }
    }

    .img-container{
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;

        img{
            width: 70%;
        }
    }

`
const Header = ()=>{

    const {logout, name} =useAuth();

    return(
        <ContainerHeader>
            <div className="user-container">
                <p>{name}</p>
                <p onClick={(logout)}>Logout</p>
            </div>
            <div className="img-container">
                <img src={avatar} alt="avatar" />
            </div>
        </ContainerHeader>
    )
}

export default Header;