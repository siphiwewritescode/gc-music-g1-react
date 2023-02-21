import React from "react";
import gcLogo from "../assets/logo-black.png"

const Header = () => {
    return (
        <nav>
            <header>
                <a href="index.html">
                    <img src={gcLogo} alt="Logo" />
                </a>
                <ul class="nav-menu">
                    <li class="menu-item">
                        <a href="#">Songs</a>
                    </li>
                    <li class="menu-item">
                        <a href="#">About Us</a>
                    </li>
                </ul>
            </header>
        </nav>

    )
}

export default Header;