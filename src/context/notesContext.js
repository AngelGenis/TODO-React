import { createContext, useState, useContext, useEffect } from 'react'
import axios from 'axios';
import { useAuth } from './authProvider';

const NotesContextDefaultValues = {
    notes: []
}

//Create context
const NotesContext = createContext(NotesContextDefaultValues);

//Custom hook 
export const useNotes = () => useContext(NotesContext);

export function NotesProvider({ children }) {
    const [state, setState] = useState(NotesContextDefaultValues)
    const { notes } = state;
    const {id} = useAuth();
    const [modal, setModal] = useState(false);

    const addNote = (titulo) => {
        axios.post(`http://localhost:8000/users/${id}/notes`, { titulo })
            .then(res => {
                setState({
                    notes: [{ titulo: titulo, id: res.data.id }, ...notes]
                })
            });
    }

    const deleteNote = async (noteId) => {
        await axios.delete(`http://localhost:8000/notes/${noteId}`)
            .then(() => {

                setState({
                    notes: [...notes.filter((note) => note.id !== noteId)]
                })
            })      
    }

    const getNotes = () => {
        if(id){
            axios.get(`http://localhost:8000/users/${id}/notes`)
                .then(res => {
                    const notes = res.data;
                    setState({
                        notes: [...notes]
                    })
                })
        }
    }

    const updateNotes = async (idNote, nota) => {
        await axios.put(`http://localhost:8000/notes/${idNote}`, {titulo: nota, userId: id});
        getNotes(id);
    }

    useEffect(() => {
        getNotes(id);
    },[id]);

    const value = {
        notes,
        addNote,
        deleteNote,
        getNotes,
        updateNotes,
        modal, 
        setModal
    };

    return (
        <>
            <NotesContext.Provider value={value}>
                {children}
            </NotesContext.Provider>
        </>
    );
}

