function Note({isOpen}) {
    const noteStyle = {
        marginLeft: isOpen ? 350 : 0
    }

    return (
        <div className="Note" style={noteStyle}> 
            <div className="subHead">
                <strong>Header</strong>
                <button className="button1">Delete</button>
                <button className="button1">Save</button>
            </div> 
            <div className="fonts">fonts</div>
            <div className="noteContent">this is a note</div>   
        </div>
    )
}

export default Note;