export const findNoteInImportant = (important, id) => {
    return archive.some(note => note.id === id)
}