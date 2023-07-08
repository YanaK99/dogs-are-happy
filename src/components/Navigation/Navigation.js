import React, { useState } from "react";
import "./Navigation.css";

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
                <div id="mySidenav" className="sidenav">
                    <a className="closebtn" onClick={closeNav}>
                        &times;
                    </a>
                    <a href="#">My page</a>
                    <a href="#">My friend</a>
                    <a href="#">News</a>
                    <a href="#">Settings</a>
                </div>
            ) : (
                <span className={"navigation-span"} onClick={openNav}>
                    &#9776;{" "}
                </span>
            )}
        </>
    );
};

export default Navigation;
