import styled from "styled-components";
import LoadImage from "../../images/Loading.png";

export const LoaderContainer = styled.div`
    width: 100%;
    left: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
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
