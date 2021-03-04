import styled from 'styled-components'
import {shadow} from './components'

export const Root = shadow(styled.div`
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
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
`);

export const Wrapper = shadow(styled.div`
    display: flex;
    flex: 1 1 auto;
    overflow: hidden;
    padding-top: 64;
    width: 100%;
    height: 100%;
`);

export const Container = shadow(styled.div`
    display: flex;
    flex: 1 1 auto;
    overflow: hidden;
    width: 100%;
    height: 100%;
`)

export const Footer = shadow(styled.footer`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`);
