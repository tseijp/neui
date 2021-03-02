import styled from 'styled-components'

export const Wrap = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const Side = styled.div`
    dislay: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    > aside {
        width: 30%;
    }
    > main {
        flex: 1;
    }
`;

export const Header = styled.header`
    /* Stick to the top */
    position: sticky;
    top: 0;
    width: 100%;
    height: 100%;
`;

export const Footer = styled.footer`
    flex-shrink: 0;
    width: 100%;
    height: 100%;
`;

export const Main = styled.main`
    width: 100%;
    height: 100%;
`;
export const Aside = styled.aside`
    width: 100%;
    height: 100%;
`;

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


export const CardLayout = styled.div`
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

        /* Layout each column */
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
