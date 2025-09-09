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
        case "ADD_TO_IMPORTANT":
            return {
                ...state,
                important: [...state.important, state.notes.find(note => note.id === payload.id)],
                notes: state.notes.filter(note => note.id !== payload.id)
            }

        case "REMOVE_FROM_IMPORTANT":
            return {
                ...state,
                notes: [...state.notes, state.important.find(note => note.id === payload.id)],
                important: state.important.filter(note => note.id !== payload.id)
            }
        case "ADD_TO_BIN":
            const noteToDelete = state.notes.find(note => note.id === payload.id) ||
                               state.archive.find(note => note.id === payload.id) ||
                               state.important.find(note => note.id === payload.id);
            return {
                ...state,
                bin: [...state.bin, noteToDelete],
                notes: state.notes.filter(note => note.id !== payload.id),
                archive: state.archive.filter(note => note.id !== payload.id),
                important: state.important.filter(note => note.id !== payload.id)
            }
        case "REMOVE_FROM_BIN":
            return {
                ...state,
                bin: state.bin.filter(note => note.id !== payload.id)
            }
        case "RESTORE_NOTE":
            return {
                ...state,
                notes: [...state.notes, state.bin.find(note => note.id === payload.id)],
                bin: state.bin.filter(note => note.id !== payload.id)
            }

        default:
            return state;
    }


}

export default notesReducer;