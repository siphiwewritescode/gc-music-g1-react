import React from "react";
import gcLogo from "../assets/gc-logo.png"

const Header = () => {
    return (
        <header>
            <nav>
                <a href="index.html">
                    <img src={gcLogo} alt="Logo" class="nav-logo"/>
                </a>
                <ul class="nav-menu">
                    <li class="menu-item">
                        <a href="#">Songs</a>
                    </li>
                    <li class="menu-item">
                        <a href="#">About Us</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;