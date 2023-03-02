import toggleFunctions from "./ToggleSidebar";


function Header() {
    return (
        <div className="header"> 
            <h1>Lotion</h1> 
            <p>Like Notion, but worse.</p>
            
            <button className="button"
                type="button" onClick={toggleFunctions}>&#9776;
            </button>  
        </div>
    )
}

export default Header; 