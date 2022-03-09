import React from "react";
import { NavLink, useHistory } from "react-router-dom"

function NavBar () {
    
    const history = useHistory()

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        })
        history.push('./')
    }

    return (
        <nav className="nav">
            <div className="nav-items">
                <NavLink to="/homepage" className="link-text">
                    Home Page
                </NavLink>
                <NavLink to="/medialist" className="link-text">
                    Media List    
                </NavLink>
                <header>
                    <button onClick={handleLogout}>Logout</button>    
                </header>   
            </div>    
        </nav>
    )
}

export default NavBar; 