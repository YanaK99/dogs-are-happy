import styled from "styled-components";
import AvatarPhoto from "../../images/Avatar.jpg";
import PatchImage from "../../images/patch.png";
import Paws from "../../images/paw.png";

export const InfoContainer = styled.div`
    display: flex;

    justify-content: center;
    padding: 15px 10px;
    outline: none;
    background: #f3eedb;
`;

export const PatchImageBox = styled.div`
    position: relative;
    width: 90%;
    display: flex;
    align-items: center;
    > div {
        background: url(${PatchImage});
        height: 60px;
        width: 60px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: absolute;
        &:first-child {
            top: -150px;
            transform: rotate(90deg);
            left: -20px;
        }
        &:last-child {
            top: -150px;
            right: -118px;
        }
        &:nth-child(2) {
            bottom: -324px;
            left: -20px;
        }
        &:nth-child(3) {
            right: -118px;
            bottom: -324px;
            transform: rotate(90deg);
        }
    }
`;

export const InfoContent = styled.div`
    position: relative;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 30px;
`;

export const PhotoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 78px;

    > span {
        color: #c4741d;
        font-weight: 800;
        font-family: "Modern No. 20";
        margin: 7px 0;
        letter-spacing: 1.5px;
    }
`;
export const PhotoImage = styled.div`
    background: url(${AvatarPhoto});
    border-radius: 50%;
    height: 200px;
    width: 200px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
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
export const PawsImage = styled.div`
    background: url(${Paws});
    height: 100px;
    width: 100px;
    position: absolute;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    right: 25px;
`;
