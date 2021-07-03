import React from 'react';
import styled from 'styled-components';
import { useNotes } from '../context/notesContext';
import { useForm } from '../hooks/useForm';
import { Item } from './itemNote';


const ListContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
`

const TodoList = () => {
    const { handlerChangeText, formulario } = useForm({ id: " ",titulo: "" });
    const { addNote, deleteNote, notes, updateNotes } = useNotes();

    return (
        <ListContainer>
            <Item
                add
                placeholder="Escribe una nueva actividad"
                onChange={handlerChangeText}
                value={formulario.titulo}
                name="titulo"
                handleAdd={()=>{addNote(formulario.titulo)}}
               
            />

            {
                notes.map((note, key) => {
                    return(
                        <Item
                            key={key}
                            value={note.titulo}
                            readOnly
                            handleDelete={()=>{deleteNote(note.id)}}
                            
                        />
                    )
                })
            }



        </ListContainer>
    )
}

export default TodoList;