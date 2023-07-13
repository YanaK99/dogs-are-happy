import styled from "styled-components";

export const Sidenav = styled.ul`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    margin-top: 0;
    padding-top: 70px;
    padding-left: 50px;
    background-color: #ffc107;
    overflow-x: hidden;
    transition: 0.5s;
    > li {
        &:first-child {
            position: absolute;
            top: 0;
            right: 25px;
            margin-left: 50px;
            cursor: pointer;
            font-size: 50px;
            &:hover {
                color: #f1f1f1;
            }
        }
    }
    > li {
        list-style: none;
        a {
            display: block;
            padding: 8px 8px 8px 0;
            color: #1d1a1a;
            font-size: 25px;
            text-decoration: none;
            transition: 0.3s;
            &:hover {
                color: #f1f1f1;
            }
        }
    }
`;
export const NavigationSpan = styled.span`
    position: absolute;
    z-index: 10;
    top: 2%;
    left: 7%;
    cursor: pointer;
    font-size: 35px;
    transition: 0.5s;
    &:hover {
        color: gray;
    }
`;
