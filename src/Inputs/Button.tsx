import styled from "styled-components"
import {shadow} from "../components"
import {UseShadowProps} from "../hooks"

export type ButtonProps = Partial<UseShadowProps  & {
    href: string,
    color: string,
    disabled: boolean,
}>

export function Button (props: ButtonProps): null | number | string | JSX.Element

export function Button ({
    href,
    color,
    children,
    disabled=false,
}: any) {
    return (
        <ButtonContainer color={color}>
            <ButtonLink href={href} disabled={disabled}>
                {children}
            </ButtonLink>
        </ButtonContainer>
    )
}

export const ButtonContainer = shadow(styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
`)

export const ButtonLink = styled.a<ButtonProps>`
    color: ${({disabled}) => disabled? "#222": "000"};
`
