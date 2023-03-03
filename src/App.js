import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Note from "./Note"

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return(
    <>
    <Header />
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Note isOpen={isOpen} />

    </>
  )
}


export default App;
