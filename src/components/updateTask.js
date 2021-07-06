import styled from "styled-components";
import { useNotes } from "../context/notesContext";
import { useForm } from "../hooks/useForm";
import Input from "./input";
import { AddButton } from '../components/button'

const UpdateContainer = styled.div`
    width: 90%;
    display: flex;
    background: lightgray;
    height: 80vh;
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    align-items: center;
    justify-content: center;
    flex-direction: column;

    input{
        height: 40px !important;
        margin: 0;
        width: 100% !important;
    }
    div{
        width: 100% !important;
    }
`

const UpdateTask = (props) => {
    const { formulario, handlerChangeText } = useForm({
        id: props.id,
        note: props.note
    });

    const { updateNotes, setModal } = useNotes();

    return (
        <UpdateContainer>
            <Input
                type="text"
                image={false}
                onChange={handlerChangeText}
                value={formulario.note}
                name="note"
            />
            <AddButton onClick={() => {
                updateNotes(formulario.id, formulario.note)
                setModal(false);
            }}>
                <p>EDITAR</p>
            </AddButton>

        </UpdateContainer>
    )
}

export default UpdateTask;