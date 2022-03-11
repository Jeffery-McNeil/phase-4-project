import React from "react";
import { NavLink, useHistory } from "react-router-dom"
import '../css/NavBar.css'

function NavBar () {
    
    const history = useHistory()

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        })
        history.push('./')
    }

    function handleClick (event) {
        window.location.href = event.target.value ? 'homepage' : 'medialist'
    }

    return (
        <nav className="nav">
            <div className="nav-items">
                <div className="one">
                    <button onClick={handleClick} value={true} className="nav-button">Home Page</button>
                </div>
                <div className="two">
                    <button onClick={handleClick} value={null} className="nav-button">My List</button>
                </div>
                <div className="three">
                    <button onClick={handleLogout} className="nav-button">Logout</button>    
                </div>   
            </div>    
        </nav>
    )
}

export default NavBar; 