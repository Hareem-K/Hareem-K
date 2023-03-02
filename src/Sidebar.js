import React, { useState } from "react";

function Sidebar() {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    return (
        
        <div style={{width: isOpen ? "300px" : "10px"}}className="sidebar">
            <button className="button"
                type="button" onClick={toggle}>&#9776;
            </button> 
            <div className="subheader"> 
                <h2>Notes</h2>
                <div className="spacer" />
                <button> &#x2b; </button>

            </div>

            <div className="sidebarNotes">
                <div className="sidebarnote">
                    <div className="notetitle">

                        <strong>Title</strong>
                    </div>
                    <small className="note-mod-info">Last modified [date]</small>
                    <div className="preview"> Note Preview</div>
                </div>
            </div>

        </div>


    )
}

export default Sidebar;