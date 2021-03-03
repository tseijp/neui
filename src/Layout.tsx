import styled from 'styled-components'
import {Shadow} from './components'
import {UseShadowProps} from './hooks'

export const WrapShadow = (props: UseShadowProps) =>
    <Shadow>{style => <WrapLayout {...props} style={style}/>}</Shadow>

export const HeaderShadow = (props: UseShadowProps) =>
    <Shadow>{style => <HeaderLayout {...props} style={style}/>}</Shadow>

export const FooterShadow = (props: UseShadowProps) =>
    <Shadow>{style => <FooterLayout {...props} style={style}/>}</Shadow>

export const SideShadow = (props: UseShadowProps) =>
    <Shadow>{style => <SideLayout {...props} style={style}/>}</Shadow>

export const AsideShadow = (props: UseShadowProps) =>
    <Shadow>{style => <AsideLayout {...props} style={style}/>}</Shadow>

export const MainShadow = (props: UseShadowProps) =>
    <Shadow>{style => <MainLayout {...props} style={style}/>}</Shadow>

export const WrapLayout = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const HeaderLayout = styled.header`
    /* Stick to the top */
    top: 0;
    width: 100%;
    height: 100%;
`;

export const FooterLayout = styled.footer`
    flex-shrink: 0;
    width: 100%;
    height: 100%;
`;

export const SideLayout = styled.div`
    dislay: flex;
    flex-flow: row nowrap;
    justify-content: center;
    @media (max-width: 899px) {
        flex-direction: column;
    }
    width: 100%;
    height: 100%;
`;

export const AsideLayout = styled.aside`
    padding: 20px;
    width: 300px;
`;

export const MainLayout = styled.aside`
    width: 60vw;
    padding: 0px 40px;
    @media (max-width: 899px) {
        width: 100vw;
        padding: 0 12px;
    }
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
