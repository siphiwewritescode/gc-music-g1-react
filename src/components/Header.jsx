import React from "react";
import { Link } from "react-router-dom";
import gcLogo from "../assets/gc-logo.png"

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">
                    <img src={gcLogo} alt="Logo" className="nav-logo"/>
                </Link>
                <ul className="nav-menu">
                    <li className="menu-item">
                        <a href="#">Songs</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">About Us</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;