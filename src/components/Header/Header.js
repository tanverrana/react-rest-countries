import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <h2>This is our header Components</h2>
            <nav>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about">About Us</a>
            </nav>
        </div>
    );
};

export default Header;