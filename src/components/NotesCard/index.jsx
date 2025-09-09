import { useNotes } from "../../context/notes-context"
import { findNoteInArchive } from "../../utils/findNotesInArchive"


export const NotesCard = ({ id, title, text, isPinned }) => {
    const { notesDispatch, archive, important, bin } = useNotes();

    // const findNoteInArchive = (archive, id) => {
    //     return archive.some(note => note.id === id)
    // }

    const isNotesInArchive = findNoteInArchive(archive, id);
    const isNotesInImportant = findNoteInArchive(important, id);
    const isNotesInBin = findNoteInArchive(bin, id);


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

    const onImportantClick = (id) => {
        !isNotesInImportant ?
            notesDispatch({
                type: "ADD_TO_IMPORTANT",
                payload: { id }
            }) :
            notesDispatch({
                type: "REMOVE_FROM_IMPORTANT",
                payload: { id }
            })

    }

    const onDeleteClick = (id) => {
        if (!isNotesInBin) {
            notesDispatch({
                type: "ADD_TO_BIN",
                payload: { id }
            });
        } else if (isNotesInBin) {
            notesDispatch({
                type: "RESTORE_NOTE",
                payload: { id }
            });
        }
    }
    const onDeleteFromBinClick = (id) => {
        notesDispatch({
            type: "REMOVE_FROM_BIN",
            payload: { id }
        })
    }


    return (
        <div key={id} className=" border border-neutral-800 p-2 m-2 rounded-sm w-72">
            <div className="flex justify-between border-b border-zinc-400 mb-2">
                <p> {title}</p>
                {
                    !isNotesInArchive && !isNotesInImportant && !isNotesInBin ?
                        <button onClick={() => onPinClick(id)}><span className={isPinned ? 'material-icons' : 'material-icons-outlined'}>push_pin</span></button>
                        : <></>
                }
                {
                    isNotesInBin ? <button onClick={() => onDeleteFromBinClick(id)}><span className={isNotesInImportant ? `material-icons-outlined` : `material-icons`}>delete_outline</span></button>
                        : <></>
                }

            </div>
            <div className="flex flex-col">
                <p>{text}</p>

                <div className="flex justify-between gap-2 mt-4">
                    <div className="flex justify-start gap-2 ">
                        {
                            !isNotesInBin && !isNotesInArchive ?
                                <button onClick={() => onImportantClick(id)}><span className={isNotesInImportant ? `material-icons-outlined` : `material-icons`}>label_important_outline</span></button>
                                : <></>
                        }






                    </div>
                    <div className="flex justify-end gap-2">
                        {
                            !isNotesInBin && !isNotesInImportant ? <button onClick={() => onArciveClick(id)}> <span className={isNotesInArchive ? `material-icons` : `material-icons-outlined`}>archive</span></button>
                                : <></>



                        }
                        <button onClick={() => onDeleteClick(id)}><span className={isNotesInBin ? "material-icons" : "material-icons-outlined"}>delete</span></button>


                    </div>

                </div>

            </div>


        </div>

    )
}