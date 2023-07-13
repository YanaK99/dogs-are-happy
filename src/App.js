import React from "react";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Container } from "./styled";
import { Route, Routes } from "react-router-dom";
import MyPage from "./pages/MyPage";
import MyFriend from "./pages/MyFriend";
import News from "./pages/News";
import Settings from "./pages/Settings";

function App() {
    return (
        <Container>
            <Navigation />
            <Header />
            <Routes>
                <Route path="/" element={<MyPage />} />
                <Route path="/myfriend" element={<MyFriend />} />
                <Route path="/news" element={<News />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Container>
    );
}

export default App;
