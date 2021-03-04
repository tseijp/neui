import React, {createElement, CSSProperties as CSS} from "react"
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

export function shadow (
    element: React.ReactElement | React.JSXElementConstructor<any>,
    props?: UseShadowProps
): any

export function shadow (element: any, config: any) {
    return (props: any) => {
        const children = React.useCallback((state: CSS) => {
            const style = {...state, ...props.style}
            return createElement(element, {...props, style})
        }, [props])
        return createElement(Shadow, config, children)
    }
}
