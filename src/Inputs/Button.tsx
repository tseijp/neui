import {animated} from "react-spring"
import styled from "styled-components"
import {shadow} from "../components"
import {UseShadowProps} from "../hooks"

export type ButtonProps = Partial<UseShadowProps & {
    href: string,
    color: string,
    disabled: boolean,
}>

export function Button (props: ButtonProps): null | number | string | JSX.Element

export function Button ({href, children, ...props}: any) {
    return (
        <ButtonContainer {...props}>
            <a href={href}>{children}</a>
        </ButtonContainer>
    )
}

export const ButtonContainer = shadow(styled(animated.button)<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    > a {
        color: ${({disabled=false}) => disabled? "#222": "000"};
    }
`)
