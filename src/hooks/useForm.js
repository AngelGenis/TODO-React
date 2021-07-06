import {useState} from 'react'

export const useForm = (initialState) => {
    const [formulario, setFormulario] = useState(initialState);

    const handlerChangeText = (target) => {
        const { name, value } = target.target;
       
        setFormulario({
            ...formulario,
            [name]: value
        });  
    }

    return {
        formulario,
        handlerChangeText,
    }
}