import React, { useState } from "react";
import { NavigationSpan, Sidenav } from "./styled";

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
                    <a onClick={closeNav}>&times;</a>
                    <a href="#">My page</a>
                    <a href="#">My friend</a>
                    <a href="#">News</a>
                    <a href="#">Settings</a>
                </Sidenav>
            ) : (
                <NavigationSpan onClick={openNav}>&#9776; </NavigationSpan>
            )}
        </>
    );
};

export default Navigation;
