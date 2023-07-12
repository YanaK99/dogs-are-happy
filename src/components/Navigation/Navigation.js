import React, { useState } from "react";
import { NavigationSpan, Sidenav } from "./styled";
import { Link } from "react-router-dom";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => {
        setIsOpen(true);
    };

    const closeNav = () => {
        setIsOpen(false);
    };

    return (
        <>
            {isOpen ? (
                <Sidenav>
                    <li>
                        <span onClick={closeNav}>&times;</span>
                    </li>
                    <li>
                        <Link to="/">My page</Link>
                    </li>
                    <li>
                        <Link to="/myfriend">My friend</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                </Sidenav>
            ) : (
                <NavigationSpan onClick={openNav}>&#9776; </NavigationSpan>
            )}
        </>
    );
};

export default Navigation;
