import React, { useState, useEffect} from "react";
import uuid from "react-uuid";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Note from "./Note"

function App() {
  //toggle sidebar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : []);
  const [activeNote, setAvtiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
  }


  const onDeleteNote = (idToDelete) => {
    if (window.confirm("Are you sure?")) {
      setNotes(notes.filter((note) => note.id !== idToDelete));
    }
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if(note.id === activeNote) {
        return updatedNote;
      }

      return note;

    })

    setNotes(updatedNotesArray);
  }


  const getActiveNote = () => {
    //returns active note for main section to show each active note when selected
    return notes.find((note) => note.id === activeNote);
  }

  return(
    <>
    <Header />
    <Sidebar isOpen={isOpen} toggle={toggle} notes={notes} onAddNote={onAddNote} activeNote={activeNote} setAvtiveNote={setAvtiveNote}/>
    <Note isOpen={isOpen} activeNote={getActiveNote()} onDeleteNote={onDeleteNote} onUpdateNote={onUpdateNote}/>
   
    </>
  )
}


export default App;
