import React from "react";
import { createContext, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext({
    darkMode: false,
    toggleMode: () => {},
});

export const ThemeContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleMode = () => {
        setDarkMode((prevState) => !prevState);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ThemeContext;
