import React from "react";
import "./Header.css";
import Button from "@mui/material/Button";

const Header = () => {
    return (
        <div className="header">
            <div className="header-item" />
            <h1>Dogs Are Happy</h1>
            <Button className="header-button header-item" variant="contained">
                Contained
            </Button>
        </div>
    );
};

export default Header;
