import { useNotes } from "../../context/notes-context"
import { findNoteInArchive } from "../../utils/findNotesInArchive"


export const NotesCard = ({ id, title, text, isPinned }) => {
    const { notesDispatch, archive } = useNotes();

    // const findNoteInArchive = (archive, id) => {
    //     return archive.some(note => note.id === id)
    // }

    const isNotesInArchive = findNoteInArchive(archive, id);

    const onPinClick = (id) => {
        !isPinned ? notesDispatch({
            type: "PIN_NOTE",
            payload: { id }
        }) : notesDispatch({
            type: "UNPIN_NOTE",
            payload: { id }
        })

    }
    const onArciveClick = (id) => {
        !isNotesInArchive ?
            notesDispatch({
                type: "ADD_TO_ARCHIVE",
                payload: { id }
            }) :
            notesDispatch({
                type: "REMOVE_FROM_ARCHIVE",
                payload: { id }
            })

    }




    return (
        <div key={id} className=" border border-neutral-800 p-2 m-2 rounded-sm w-72">
            <div className="flex justify-between border-b border-zinc-400 mb-2">
                <p> {title}</p>
                {
                    !isNotesInArchive ? <button onClick={() => onPinClick(id)}><span className={isPinned ? 'material-icons' : 'material-icons-outlined'}>push_pin</span></button>
                        : <></>
                }

            </div>
            <div className="flex flex-col">
                <p>{text}</p>
                <div className="flex justify-end gap-2">
                    <button onClick={() => onArciveClick(id)}> <span className={isNotesInArchive ? `material-icons` : `material-icons-outlined`}>archive</span></button>
                    <button><span className="material-icons-outlined">delete</span></button>
                </div>
            </div>

        </div>

    )
}