import React, {useState} from 'react';
import styled from 'styled-components';
import { useAuth } from '../context/authProvider';
import { useNotes } from '../context/notesContext';
import { useForm } from '../hooks/useForm';
import { Item } from './itemNote';
import UpdateTask from '../components/updateTask'

const ListContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
`


const TodoList = () => {
    const { id } = useAuth();
    const { handlerChangeText, formulario } = useForm({ id: id ? id : '', titulo: '', updated: '' });
    const { addNote, deleteNote, notes, modal, setModal } = useNotes();

    const [dataUpdate, setDataUpdate ] = useState({
        id: '',
        note: ''
    });

    const handlerEditar =(id, note)=>{
        setDataUpdate({id: id, note: note});
        setModal(true);
    }

    return (
        <ListContainer>
            <Item
                add
                placeholder="Escribe una nueva actividad"
                onChange={handlerChangeText}
                value={formulario.titulo}
                name="titulo"
                handleAdd={() => { addNote(formulario.titulo) }}
            />

            {
                notes.map((note, key) => {
                    return (
                        <Item
                            key={key}
                            value={note.titulo}
                            handleDelete={() => { deleteNote(note.id) }}
                            handlerUpdate={() => {handlerEditar(note.id, note.titulo) }}
                            readOnly
                        />
                    )
                })
            }

            {modal && (<UpdateTask id={dataUpdate.id} note={dataUpdate.note}/>)}

        </ListContainer>
    )
}

export default TodoList;