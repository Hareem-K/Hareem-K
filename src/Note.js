function Note({isOpen, activeNote, onDeleteNote, onUpdateNote}) {
    const noteStyle = {
        marginLeft: isOpen ? 350 : 0
    }

    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now(),
        });
    };

    if(!activeNote) return <div className="no-active-note">Select a note, or create a new one.</div>

    return (
        <div className="Note" style={noteStyle}> 
            <div className="app-main-note-edit">
                <input type="text" id="title" value={activeNote.title} onChange={(e) => onEditField("title", e.target.value)} autoFocus/>
                <p className="date">{new Date(activeNote.lastModified).toLocaleDateString("en-CA",{
                                hour: "2-digit",
                                minute: "2-digit",
                            } )}
                </p>

                <div className="buttons">
                    <button className="save">Edit</button>
                    <button onClick={() => onDeleteNote(activeNote.id)} className="delete">delete</button>
                </div>
                <textarea id="body" placeholder="Your Note Here" value={activeNote.body} onChange={(e) => onEditField("body", e.target.value)}/> 
            </div>

            <div className="app-main-note-preview">
                <h1 className="preview-title">{activeNote.title}</h1>
                <p className="date">{new Date(activeNote.lastModified).toLocaleDateString("en-CA",{
                                hour: "2-digit",
                                minute: "2-digit",
                            } )}
                </p>
                <div className="markdown-preview">
                    {activeNote.body}
                </div>
            </div>
            
        </div>
    )
}

export default Note;