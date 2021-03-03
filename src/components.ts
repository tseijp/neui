import {CSSProperties as CSS} from "react"
import {
    useLight,
    UseLightProps,
    useShadow,
    UseShadowProps
} from "./hooks"

export function Light (props: Partial<UseLightProps> & {
    children: (light: CSS) => null | JSX.Element
}): JSX.Element

export function Light ({children, ...props}: any) {
    return children(useLight(props))
}

export function Shadow (props: Partial<UseShadowProps> & {
    children: (shadow: CSS) => null | JSX.Element,
}): JSX.Element

export function Shadow ({children, ...props}: any) {
    return children(useShadow(props))
}
