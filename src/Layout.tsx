import styled from 'styled-components'
import {shadow} from './components'

export const Wrap = shadow(styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`);

export const Header = shadow(styled.header`
    /* Stick to the top */
    top: 0;
    width: 100%;
    height: 100%;
`);

export const Footer = shadow(styled.footer`
    flex-shrink: 0;
    width: 100%;
    height: 100%;
`);

export const Side = shadow(styled.div`
    dislay: flex;
    flex-flow: row nowrap;
    justify-content: center;
    @media (max-width: 899px) {
        flex-direction: column;
    }
    width: 100%;
    height: 100%;
`);

export const Aside = shadow(styled.aside`
    padding: 20px;
    width: 300px;
`);

export const Main = shadow(styled.aside`
    width: 60vw;
    padding: 0px 40px;
    @media (max-width: 899px) {
        width: 100vw;
        padding: 0 12px;
    }
`);

export const Sections = styled.div`
    height: 100%;
    overflow: scroll;
    section {
        /* Take full size */
        height: 100%;
        width: 100%;

        /* Stick to the top */
        position: sticky;
        top: 0;
    }
`;


export const Card = styled.div`
    display: flex;

    /* Put a card in the next row when previous cards take all width */
    flex-wrap: wrap;

    margin-left: -8px;
    margin-right: -8px;

    div {
        /* There will be 4 cards per row */
        flex-basis: 25%;

        padding-left: 8px;
        padding-right: 8px;
    }
`;


export const Columns = styled.div`
    display: flex;
    div {
        flex: 1;
        /* Space between columns */
        margin: 0 8px;

        /*  each column */
        display: flex;
        flex-direction: column;

        /* Take available height */
        flex: 1;
    }
`;

export const SimpleGrid = styled.div`
    display: flex;

    margin-left: -8px;
    margin-right: -8px;
    div {
        flex: 0 0 25%;
        padding-left: 8px;
        padding-right: 8px;
    }
    div {
        flex: 1;
        padding-left: 8px;
        padding-right: 8px;
    }
`;
