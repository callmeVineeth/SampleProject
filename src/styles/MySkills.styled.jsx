import styled from "styled-components";

export const SkillsCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    padding: 0 5%;

    @media(max-width: ${({theme})=> theme.breakpoints.mobile}) {
        display: block;
        padding: 0;
    }
`

export const SkillsCard = styled.div`
    width: 170px;
    border: 1px solid #fff;
    padding: 1.5rem 0;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({theme})=> theme.colors.primary_light};

    @media(max-width: ${({theme})=> theme.breakpoints.mobile}) {
        width: 100%;
        margin-top: 2rem
    }
`