function Sidebar() {
    return (
        <div className="sidebar" id="sidebar">
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