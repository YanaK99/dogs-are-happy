import styled from "styled-components";

export const AccountWrapper = styled.div`
    position: relative;
    width: 100%;
`;
export const Patch = styled.img`
    height: 80px;
    width: 80px;
    position: absolute;
    z-index: 10;
    ${({ index }) => {
        if (index === 0) {
            return `
        top: -8%;
    left: -2%;
    transform: rotate(90deg);
      `;
        }
        if (index === 1) {
            return `
         top: -8%; 
        right: -2%;
      `;
        }
        if (index === 2) {
            return `
        bottom: -8%;  
        left: -2%;
      `;
        }
        if (index === 3) {
            return `
        bottom: -8%; 
        right: -2%;
        transform: rotate(90deg);
      `;
        }
    }}
`;
