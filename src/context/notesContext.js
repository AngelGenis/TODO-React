import { createContext, useState, useContext, useEffect } from 'react'
import axios from 'axios';

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

    const addNote = (titulo) => {
        axios.post(`https://60df2d57abbdd9001722d2b9.mockapi.io/api/users/1/notes`, { titulo })
            .then(res => {
                setState({
                    notes: [{ titulo: titulo, id: res.data.id }, ...notes]
                })
            });
    }

    const deleteNote = (noteId) => {
        axios.delete(`https://60df2d57abbdd9001722d2b9.mockapi.io/api/users/1/notes/${noteId}`)
            .then(() => {

                setState({
                    notes: [...notes.filter((note) => note.id !== noteId)]
                })
            })      
    }

    const getNotes = (userId="1") => {
        axios.get(`https://60df2d57abbdd9001722d2b9.mockapi.io/api/users/${userId}/notes`)
            .then(res => {
                const notes = res.data;
                setState({
                    notes: [...notes]
                })
            })
    }

    const updateNotes = ({idNote, nota}) => {
        axios.put(`https://60df2d57abbdd9001722d2b9.mockapi.io/api/users/1/notes/${idNote}`, nota)
            .then(response => {
                console.log(response.data);
                
                setState({
                    notes: [notes.filter((note)=> note.id !== idNote)]
                })
            });
    }

    useEffect(() => {
        getNotes();
    }, []);

    const value = {
        notes,
        addNote,
        deleteNote,
        getNotes,
        updateNotes
    };

    return (
        <>
            <NotesContext.Provider value={value}>
                {children}
            </NotesContext.Provider>
        </>
    );
}

