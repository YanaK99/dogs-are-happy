import styled from "styled-components";
import LoadImage from "./images/Loading.png";

export const Container = styled.div`
    max-width: 80vw;
    margin: 0 auto;
`;

export const LoaderContainer = styled.div`
    width: 100%;
    left: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: rgba(0, 0, 0, 0.834);
    z-index: 1;
`;

export const Spinner = styled.div`
    width: 200px;
    height: 200px;
    background: url(${LoadImage});
    animation: spin-anim 3s linear infinite;

    @keyframes spin-anim {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
