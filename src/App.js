import React from "react";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Container } from "./styled";

function App() {
    return (
        <Container>
            <Navigation />
            <Header />
        </Container>
    );
}

export default App;
