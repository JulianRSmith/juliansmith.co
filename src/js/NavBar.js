import React from "react";
import "../css/NavBar.css";

function NavItem({ text, link, clickAction, isActive }) {
    return (
        <li
            className={`navbar-item${isActive ? " active" : ""}`}
            onClick={clickAction}
        >
            {link ? (
                <a
                    href={link}
                    target={String(link).startsWith("mailto") ? "" : "_blank"}
                    rel="noopener noreferrer"
                >
                    {text}
                </a>
            ) : (
                <span>{text}</span>
            )}
        </li>
    );
}

function NavBar({ showAbout, showWork, view }) {
    return (
        <nav className={"navbar"}>
            <div className="container">
                <ul className="navbar-menu main">
                    {/* <NavItem
                        text={"About"}
                        clickAction={() => showAbout()}
                        isActive={view.about}
                    />
                    <NavItem
                        text={"Work"}
                        clickAction={() => showWork()}
                        isActive={view.work}
                    /> */}
                </ul>
                <ul className="navbar-menu social">
                    <NavItem
                        text={"LinkedIn"}
                        link={"https://www.linkedin.com/in/julianrsmith95"}
                    />
                    <NavItem
                        text={"GitHub"}
                        link={"https://github.com/JulianRSmith"}
                    />
                    <NavItem
                        text={"Email me"}
                        link={"mailto:contact@juliansmith.co"}
                    />
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
