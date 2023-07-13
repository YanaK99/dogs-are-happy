import React from "react";
import { HeaderItem, HeaderWrapper, Button } from "./styled";

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderItem />
            <h1>Dogs Are Happy</h1>
            <Button variant="contained">Contained</Button>
        </HeaderWrapper>
    );
};

export default Header;
