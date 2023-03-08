import { useNavigate, useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


function Note({isOpen, activeNote, onDeleteNote, onUpdateNote, notes}) {
    const noteStyle = {
        marginLeft: isOpen ? 350 : 0
    }

    const { noteTitle } = useParams();

    const [editing, setEditing] = useState(false);
    const [noteContent, setNoteContent] = useState(activeNote?.body || "");
    //const [currentDate, setCurrentDate] = useState(new Date());
    const [lastModified, setLastModified] = useState(activeNote?.lastModified || new Date());
    const datePickerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Set note content to active note's body
        setNoteContent(activeNote?.body || "");
    }, [activeNote]);

    
    useEffect(() => {
        // Save note content to local storage on update
        localStorage.setItem("noteContent", noteContent);
    }, [noteContent]);


    const handleEdit = () => {
        setEditing(true);
        datePickerRef.current.disabled = false;
        navigate(`/notes/${notes.indexOf(activeNote) + 1}/edit`)
    };

    const handleSaveNote = () => {
        //const strippedContent = noteContent.replace(/<[^>]+>/g, ''); //remove html tags
        onEditField("body", noteContent);
        setEditing(false);
        datePickerRef.current.disabled = true;
        localStorage.setItem('noteContent', activeNote.body);
        navigate(`/notes/${notes.indexOf(activeNote) + 1}`)
    };


    //brings most recently edited note to the top of sidebar
    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now(),
        });
        
    };
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    }; 

    /*
    const formatDate = (when) => {
        const formatted = new Date(when).toLocaleString("en-US", options);
        if (formatted === "Invalid Date") {
          return "";
        }
        return formatted;
    };
    */

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
                <p className="date"></p>

                
                <input
                    type="datetime-local"
                    className="datePicker"
                    style={{
                        width: "200px",
                        height: "9px",
                        fontSize: "14px",
                        marginTop: "-30px",
                        border: "none",
                        marginLeft: "-21px"
                    }}
                    disabled={!editing}
                    ref={datePickerRef}
                    value={new Date(lastModified).toISOString().substr(0, 16)}
                    onChange={(e) => {
                        if (editing) {
                        setLastModified(new Date(e.target.value));
                        (new Date(e.target.value));
                        onEditField("lastModified", new Date(e.target.value).getTime());
                        }
                    }}
                />



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
                        <ReactQuill style={{height: 525, marginLeft: -25}} className="no-outline" id="body" placeholder="Your Note Here" value={noteContent} onChange={setNoteContent} modules={{ toolbar: editing }}/>
                    ) : (
                        <div
                            className="markdown-preview"
                            style={{ marginLeft: -11, marginTop: 10}}
                            dangerouslySetInnerHTML={{__html: noteContent }}
                        ></div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Note;