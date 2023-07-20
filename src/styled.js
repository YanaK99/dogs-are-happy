import styled from "styled-components";

export const Container = styled.div`
    max-width: 80vw;
    margin: 0 auto;
    height: 100vh;
`;
export const Wrapper = styled.div`
    background-color: ${(properties) => (properties.$mode ? "#888" : "#fff")};
    color: ${(properties) => (properties.$mode ? "whitesmoke" : "#000")};
`;

// export const GlobalStyle = createGlobalStyle`
//     body {
//         background: ${(props) => (props.$darkMode ? "#888" : "#fff")};
//         color: ${(props) => (props.$darkMode ? "whitesmoke" : "#000")};
//     }
// `;
export const ThemeButton = styled.button`
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    background: #ccc;
    cursor: pointer;
    font-size: 1rem;
    position: absolute;
    top: 10px;
    right: 10px;
    &:hover {
        background: #efefe8;
    }
`;
