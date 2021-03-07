import {animated} from "react-spring"
import styled from "styled-components"
import {shadow} from "../components"
import {UseShadowProps} from "../hooks"

export type ButtonProps = Partial<UseShadowProps & {
    color: string,
    disabled: boolean,
    children: null | number | string | JSX.Element
}>

export function Button (props: ButtonProps): null | JSX.Element

export function Button (props: any) {
    return <ButtonContainer {...props}/>
}

export const ButtonContainer = shadow(styled(animated.button)<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    > a {
        color: ${({disabled=false}) => disabled? "#222": "000"};
    }
`)
