import React, { useContext } from "react";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Container, ThemeButton, Wrapper } from "./styled";
import { Route, Routes } from "react-router-dom";
import MyPage from "./pages/MyPage/MyPage";
import MyFriend from "./pages/MyFriend/MyFriend";
import News from "./pages/News/News";
import Settings from "./pages/Settings/Settings";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ThemeContext from "./context/ThemeContext";

function App() {
    const { darkMode, toggleMode } = useContext(ThemeContext);
    return (
        <Wrapper $mode={darkMode}>
            <Container>
                <>
                    <Navigation />
                    <Header />

                    <Routes>
                        <Route path="/" element={<MyPage />} />
                        <Route path="/myfriend" element={<MyFriend />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </>
            </Container>
            <ThemeButton
                onClick={toggleMode}
                children={darkMode ? "Light" : "Dark"}
            />
        </Wrapper>
    );
}

export default App;
