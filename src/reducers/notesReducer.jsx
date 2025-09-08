import { v4 as uuid } from "uuid"


const notesReducer = (state, { type, payload }) => {
    switch (type) {
        case "TITLE":
            return {
                ...state,
                title: payload
            }
        case "TEXT":
            return {
                ...state,
                text: payload
            }
        case "ADD_NOTE":

            return {
                ...state,
                notes: [...state.notes, {
                    title: state.title,
                    text: state.text,
                    id: uuid(),
                    isPinned: false,
                }],

            }
        case "CLEAR_INPUTS":
            return {
                ...state,
                title: "",
                text: ""
            }

        case "PIN_NOTE":
            return {
                ...state,
                notes: state.notes.map(note => note.id === payload.id ? { ...note, isPinned: true } : note)
            }
        case "UNPIN_NOTE":
            return {
                ...state,
                notes: state.notes.map(note => note.id === payload.id ? { ...note, isPinned: false } : note)
            }
        case "ADD_TO_ARCHIVE":
            return {
                ...state,
                archive: [...state.archive, state.notes.find(note => note.id === payload.id)],
                notes: state.notes.filter(note => note.id !== payload.id)
            }
        case "REMOVE_FROM_ARCHIVE":
            return {
                ...state,
                notes: [...state.notes, state.archive.find(note => note.id === payload.id)],
                archive: state.archive.filter(note => note.id !== payload.id)
            }




        default:
            return state;
    }


}

export default notesReducer;