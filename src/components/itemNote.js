import React from 'react';
import styled from 'styled-components';
import trash from '../images/trash.png'

const ItemContainer = styled.div`
    width: 100%;
    height: 50px;
    background: #F7F8FD;
    border: 1px solid #DADADA;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(130, 130, 130, 0.25);
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    input{
        width: calc(80% - 20px);
        height: 100%;
        border: none;
        outline: none;
        padding: 0 10px;
    }
`
const AddButton = styled.button`
    width: 15%;
    height: 80%;
    border: none;
    background: linear-gradient(119.36deg, #396AFC 15.78%, #8F94FB 97.17%);
    border-radius: 5px;
    color: white;
    font-weight: bolder;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
`
const DeleteButton = styled(AddButton)`
    background: linear-gradient(119.36deg, #EC4866 15.78%, #FE8298 97.17%);
`

export const Item = (props) => {
    return (
        <ItemContainer>
            <input
                type="text"
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                name={props.name}
                readOnly={props.readOnly}
            />
            {
                props.add ? (
                    <AddButton onClick={props.handleAdd} > + </AddButton>) :
                    <DeleteButton onClick={props.handleDelete}>
                        <img src={trash} alt="trash" />
                    </DeleteButton>
            }
        </ItemContainer>
    )
}