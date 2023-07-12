import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Container, LoaderContainer, Spinner } from "./styled";
import { Route, Routes } from "react-router-dom";
import MyPage from "./pages/MyPage";
import MyFriend from "./pages/MyFriend";
import News from "./pages/News";
import Settings from "./pages/Settings";
import ErrorPage from "./pages/ErrorPage";

function App() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <Container>
            {loading ? (
                <LoaderContainer>
                    <Spinner />
                </LoaderContainer>
            ) : (
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
            )}
        </Container>
    );
}

export default App;
