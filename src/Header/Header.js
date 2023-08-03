import React from "react";
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <div className="button-container">
                 <button className="today-date">Today</button>
                 <button className="work-date">Work</button>
            </div>
        </div>
    )
}

export default Header;