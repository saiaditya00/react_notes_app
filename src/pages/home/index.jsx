import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { NotesCard } from "../../components/NotesCard";
import { useNotes } from "../../context/notes-context";



export default function HomePage() {
    const { title, text, notes, archive, notesDispatch } = useNotes();
    const onTitleChange = (e) => {
        notesDispatch({
            type: "TITLE",
            payload: e.target.value
        })
    }
    const onTextChange = (e) => {
        notesDispatch({
            type: "TEXT",
            payload: e.target.value
        })
    }

    const onAddNote = () => {
        notesDispatch({
            type: "ADD_NOTE",

        })
        notesDispatch({
            type: "CLEAR_INPUTS",

        })


    }
    const pinnedNotes = notes.filter(note => note.isPinned);
    const unpinnedNotes = notes.filter(note => !note.isPinned);




    return (
        <>
            <Navbar />
            <main className="flex gap-3">
                <Sidebar />
                <div className="flex flex-col flex-1 p-7">
                    <div className="flex justify-center mb-8">
                        <div className="flex flex-col w-80 relative border rounded">
                            <input
                                value={title}
                                className="border border-neutral-800 rounded-t-md focus:outline-none border-b-0 p-3"
                                placeholder="Enter Title"
                                onChange={onTitleChange}
                            />
                            <textarea
                                value={text}
                                className="border border-neutral-800 rounded-b-md focus:outline-none border-t-0 p-3 min-h-24"
                                placeholder="Enter Text"
                                onChange={onTextChange}
                            />
                            <button
                                disabled={title.length === 0 || text.length === 0}
                                onClick={onAddNote}
                                className="absolute bottom-2 right-2 bg-indigo-800 text-slate-50 rounded-full w-8 h-8 flex items-center justify-center disabled:bg-gray-400"
                            >
                                <span className="material-icons-outlined text-sm">add</span>
                            </button>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {pinnedNotes?.length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Pinned</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {pinnedNotes.map(({ id, title, text, isPinned }) => (
                                        <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {unpinnedNotes?.length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold mb-4">{pinnedNotes?.length > 0 ? `Other Notes` : `Notes`}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {unpinnedNotes.map(({ id, title, text, isPinned }) => (
                                        <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}