import { useState } from "react"

export type UseShadowProps = {
    positionX: number,
    positionY: number,
    blur: number,
    size: number,
    shape: number,
    radius: number,
    distance: number,
    intensity: number,
    colorDifference: number,
    maxSize: number,
    maxRadius: number,
    gradient: boolean,
    color: string,
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
    colorDifference= 0.15,
    maxSize= 410,
    maxRadius= 150,
    gradient= false,
    color= "#e0e0e0",
    ...props
}: any) {
    const [borderRadius, ] = useState("50px")
    const [background, ] = useState("#e0e0e0")
    const [firstShadow, ] = useState("inset 5px 5px 20px #c8c9cc")
    const [secondShadow, ] = useState("inset -5px -5px 20px #ffffff")
    return {borderRadius, background, boxShadow: `${firstShadow}, ${secondShadow}`}
}
