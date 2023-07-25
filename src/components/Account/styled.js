import styled from "styled-components";

export const InfoContainer = styled.div`
    display: flex;
    width: 75%;
    margin: 0 auto;
    align-items: center;
    position: relative;
    padding: 15px 10px 30px 10px;
    outline: none;
    background: #f3eedb;
    justify-content: space-between;
`;

export const PhotoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > span {
        color: #c4741d;
        font-weight: 800;
        font-family: "Modern No. 20";
        margin: 7px 0;
        letter-spacing: 1.5px;
    }
`;
export const PhotoImage = styled.img`
    border-radius: 50%;
    height: 200px;
    width: 200px;
    overflow: hidden;
    object-fit: cover;
`;
export const PersonalInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: rgba(238, 100, 24, 0.35);
    border-radius: 10%;

    > span {
        color: #511f0d;
        font-weight: 800;
        font-family: "Modern No. 20";
        font-size: 20px;
        margin: 7px 0;
        letter-spacing: 1.5px;
        position: relative;
    }
`;
export const PawsImage = styled.img`
    height: 100px;
    width: 100px;
    position: absolute;
    object-fit: cover;
    right: 25px;
`;
