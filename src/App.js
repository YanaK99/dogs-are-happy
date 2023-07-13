import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";

function App() {
    return (
        <div className="container">
            <Navigation />
            <Header />
        </div>
    );
}

export default App;
