import Navbar from "../../components/Navbar"
import { Sidebar } from "../../components/Sidebar"
import { useNotes } from "../../context/notes-context"
import { NotesCard } from "../../components/NotesCard"
export default function Important() {
    const { bin } = useNotes();

    return <>
        <Navbar />
        <main className="flex  gap-3">
            <Sidebar />
            <div>
                <h1 className="text-3xl font-bold">BIN Page</h1>
                <div className="flex  flex-wrap gap-6 mt-7  w-screen">

                    {
                        bin.map(note => (
                            <NotesCard key={note.id} id={note.id} title={note.title} text={note.text} isPinned={note.isPinned} />
                        ))
                    }


                </div>
            </div>







        </main>

    </>
}