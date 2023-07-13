import styled, { css } from "styled-components";
import ButtonM from "@mui/material/Button";

const buttonStyles = css`
    width: 130px;
    height: 50px;
`;

export const HeaderWrapper = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderItem = styled.div`
    ${buttonStyles}
`;

export const Button = styled(ButtonM)`
    ${buttonStyles}
`;
