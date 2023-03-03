import React, { useState } from "react";

function Sidebar({isOpen, toggle}) {
    const sidebarStyle = {
        left: isOpen ? 0 : -350, // Use the left property to move the sidebar
    };
    return (
        <>
            <button className="button"
                type="button" onClick={toggle}>&#9776;
            </button> 
            <div style={sidebarStyle} className="sidebar">
                <div className="subheader"> 
                    <h2>Notes</h2>
                    <div className="spacer" />
                    <button>  &#x2b; </button>
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
        </>

    );
}

export default Sidebar;