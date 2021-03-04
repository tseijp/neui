import styled from 'styled-components'
import {shadow} from './components'

export const Button = shadow(styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
`)

export const ButtonWithIcon = styled.button`
    /* Center the content */
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
