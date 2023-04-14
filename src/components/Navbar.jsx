import React from "react";
import '../style-sheets/nav.css';

function Navbar() {
    return(
        <>
            <header className="header">
                
                <div className="logo">
                    <a href="/" >
                        <img src="./img/logo.png" alt="Logotipo" />
                    </a>
                </div>

                <div>
                    <nav className="bar">
                        <a href="/">Home</a>
                        <a href="/">About</a>
                        <a href="/">Portfolio</a>
                        <a href="/">Product</a>
                        <a href="/">Career</a>
                        <a href="/">Blog</a>
                    </nav>
                </div>
                
                <input type="text" placeholder="Search Here" className="search" />

                <div>
                    <a className="blue-buttom" href="/">Contact Us</a>
                </div>
                
            </header>
        
        </>

    )
}

export default Navbar;