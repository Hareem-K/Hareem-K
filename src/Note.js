//import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Note({isOpen, activeNote, onDeleteNote, onUpdateNote}) {
    const noteStyle = {
        marginLeft: isOpen ? 350 : 0
    }

    const [editing, setEditing] = useState(false);
    const [noteContent, setNoteContent] = useState(activeNote?.body || "");

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSaveNote = () => {
        const strippedContent = noteContent.replace(/<[^>]+>/g, ''); // Remove HTML tags
        onEditField("body", strippedContent);
        setEditing(false);
    };

    //brings most recently edited note to the top of sidebar
    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now(),
        });
    };

    //message if no current note selected
    if(!activeNote) return <div className="no-active-note">Select a note, or create a new one.</div>;

    return (
        <div className="Note" style={noteStyle}> 
            <div className="app-main-note-edit">
                <input style={{marginLeft: -25}} type="text" id="title" value={activeNote.title} onChange={(e) => {
                    if (editing) {
                        onEditField("title", e.target.value)
                    }
                }} disabled={!editing} autoFocus={!editing}/>
                <p className="date">{new Date(activeNote.lastModified).toLocaleDateString("en-CA", {
                    hour: "2-digit",
                    minute: "2-digit",
                })}</p>
                <div className="buttons">
                    {editing ? (
                        <button className="save" onClick={handleSaveNote}>Save</button>
                    ) : (
                        <button className="edit" onClick={handleEdit}>Edit</button>
                    )}
                    <button onClick={() => onDeleteNote(activeNote.id)} className="delete">delete</button>
                </div>
                <div className="noteBody">
                    {editing ? (
                        <ReactQuill style={{height: 525, marginLeft: -25}} className="no-outline" id="body" placeholder="Your Note Here" value={noteContent} onChange={setNoteContent} />
                    ) : (
                        <div className="markdown-preview">
                            {activeNote.body}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Note;
