import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="wrapper">
            <div className="container mt-3">
                <h1>
                    Dogs Are Happy
                    <button className="btn btn-outline-warning btn-lg header-button">
                        Button
                    </button>
                </h1>
            </div>
        </div>
    );
};

export default Header;
