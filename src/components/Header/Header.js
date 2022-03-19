import "./Header.css"
import React from 'react';

const Header = () => {
    return (
        <div>
            <h1>Welcome TO My Rest Countries</h1>
            <nav className="menu">
                <a href="/home">Home</a>
                <a href="/countries">Countries</a>
                <a href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;