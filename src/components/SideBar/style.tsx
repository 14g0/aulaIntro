import styled from "styled-components";

export const SideBarDiv = styled.div `
    display: grid;
    grid-template-rows: 15% 60% 15%;
    height: 100%;
    width: 15%;

    padding: 0 0 0 3%;

    border-right: 1px solid #6b6b6b;
`;

export const InstaLogo = styled.img `
    width: 60%;
    align-self: center;
    margin: 0 0 10% 0;
`;

/*----------------------------------------------------------------------------*/

export const SidePages = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const SideButtonDiv = styled.div `
    display: grid;
    grid-template-columns: 9% auto;
    grid-column-gap: 5%;
    align-items: center;
`;

export const SideButtonImg = styled.img `
    width: 100%;
`;

export const SideButtonText = styled.p `
    color: white;
    font-weight: 500;
`;

/*----------------------------------------------------------------------------*/