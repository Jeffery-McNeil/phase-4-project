import React from "react";
import { NavLink } from "react-router-dom"

function NavBar () {
    return (
        <nav className="nav">
            <div className="nav-items">
                <NavLink to="/homepage" className="link-text">
                    Home Page
                </NavLink>   
            </div>    
        </nav>
    )
}

export default NavBar; 