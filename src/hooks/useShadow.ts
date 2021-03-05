import { useMemo } from "react"
import { useSpring } from "react-spring"
import { useAtom } from 'jotai'
import { colorAtom } from '../atoms'
import {
    luminanced,
    rgb2hex,
    stringhex2rgb,
    numberhex2rgb
} from '../utils'

export type UseShadowProps = Partial<{
    color: string
    blur: number,
    radius: number,
    distance: number,

    // interpolate
    border: number | number[]
    shape: number,
    rotation: number,
    intensity: number,
}>

export function useShadow (props: UseShadowProps): any

export function useShadow ({
    color: c,
    blur: b= 60,
    radius: r= 50,
    distance: d= 20,
    // interpolate
    border= 1,
    shape= 2,
    rotation= 0,
    intensity= 0.15,
}: any) {
    const [color] = useAtom(colorAtom)
    const rgbxyz = useMemo(() => [...rgbFrom(c || color), d, d, b], [color, c, d, b])
    const spring = useSpring({rgbxyz, radius: r})
    return useMemo(() => {
        const borderRadius = spring.radius.to(borderRadiusFn(border))
        const background = spring.rgbxyz.to(backgroundFn(shape, rotation))
        const boxShadow = spring.rgbxyz.to(boxShadowFn(shape, intensity))
        return {borderRadius, background, boxShadow}
    }, [spring, border, shape, rotation, intensity])
}

function rgbFrom(hex: string|number="#212121"): number[] {
    return typeof hex==="string"
        ? stringhex2rgb(hex)
        : numberhex2rgb(hex)
}

function borderRadiusFn(b=[1, 1, 1, 1]) {
    if (!(b instanceof Array))
        b = [b]
    return [
        (r=0) => `${r * b[0]}px`,
        (r=0) => `${r * b[0]}px ${r * b[1]}px`,
        (r=0) => `${r * b[0]}px ${r * b[1]}px ${r * b[2]}px`,
        (r=0) => `${r * b[0]}px ${r * b[1]}px ${r * b[2]}px ${r * b[3]}px`
    ][b.length - 1]
}

function backgroundFn (shape= 1, rotation= 45) {
    return (r=0, g=0, b=0) => {
        if (shape !== 1)
            return rgb2hex(r, g, b)
        const gradColor1 = luminanced(r, g, b, -0.1)//shape == 3 ? 0.07 : -0.1
        const gradColor2 = luminanced(r, g, b, -0.1)//shape == 2 ? 0.07 : -0.1
        return `linear-gradient(${rotation}deg, ${gradColor1}, ${gradColor2})`
    }
}

function boxShadowFn (shape=1, intensity=0.15) {
    const inset = shape === 1 ? 'inset' : ''
    return (r=0, g=0, b=0, x=0, y=0, z=0) => {
        const color1 = luminanced(r, g, b,-intensity)
        const color2 = luminanced(r, g, b, intensity)
        const shadow1 = `${inset} ${ x}px ${ y}px ${z}px ${color1}`
        const shadow2 = `${inset} ${-x}px ${-y}px ${z}px ${color2}`
        return `${shadow1}, ${shadow2}`
    }
}
