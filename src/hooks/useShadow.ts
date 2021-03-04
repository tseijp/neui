import { useState } from "react"

export type UseShadowProps = {
    blur: number,
    size: number,
    shape: number,
    radius: number,
    distance: number,
    gradient: boolean,
}

export function useShadow (props: Partial<UseShadowProps>): {
    borderRadius: string,
    background: string,
    boxShadow: string,
}

export function useShadow ({
    blur= 60,
    size= 300,
    shape= 0,
    radius= 50,
    distance= 20,
    gradient= false,
    ...props
}: any) {
    const [borderRadius, ] = useState("50px")
    const [background, ] = useState("#e0e0e0")
    const [firstShadow, ] = useState("inset 5px 5px 20px #c8c9cc")
    const [secondShadow, ] = useState("inset -5px -5px 20px #ffffff")
    return {borderRadius, background, boxShadow: `${firstShadow}, ${secondShadow}`}
}
