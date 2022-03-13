import { useMemo } from "react"
import { useSpring, to } from "react-spring"
import { useAtom } from "jotai"
import { themeAtom } from "../atoms"
import {
    luminanced,
    rgb2hex,
    hex2rgb,
} from '../utils'

const {PI, abs, sin, cos, tan} = Math

export type ShadowDefaultConfig = Partial<{
    offset: number,
    spread: number
}>

export const shadowDefaultConfig = {
    offset: 1,
    spread: 1,
}

export type UseShadowProps = Partial<{
    config: ShadowDefaultConfig,
    color: string
    border: number | number[],
    radius: number,
    theta: number,
    phi: number,
    depth: number,
    lambda: number,
    kappa: number
}>

export type UseShadowState = Partial<{
    borderRadius: any,
    background: any,
    boxShadow: any,
}>

export function useShadow ({
    color="",
    border=10,   // ~ width
    radius=10,   // width ~
    theta=PI/4,  // 0 ~ 360
    phi=0,       // 0 ~ 60
    depth=10,    // ~ width
    lambda=PI/6, // 0 ~ 30
    kappa=0,     // -1 ~ 1
}: UseShadowProps = {}): UseShadowState {
    if (!(border instanceof Array))
        border = [border]
    const [theme] = useAtom(themeAtom)
    const rgb = useMemo(() => hex2rgb(color || theme.color), [color, theme])
    const spring = useSpring({border, shadow: [depth, lambda, kappa]})
    return useMemo(() => {
        const borderRadius = to(spring.border, (...b: number[]) => b.join('px ') + "px")
        const background = to(spring.shadow, backgroundFn({theta, rgb}))
        const boxShadow = to(spring.shadow, boxShadowFn({radius, theta, phi, rgb}))
        return {borderRadius, background, boxShadow}
    }, [spring, rgb, radius, theta, phi])
}

function backgroundFn (props: UseShadowProps & {rgb: number[]}): any
function backgroundFn ({theta: t, rgb}: any) {
    return (_d=0, _l=0, k=0) => {
        if (k === 0)
            return rgb2hex(...rgb)
        const gradiusColor1 = luminanced(...rgb,-k / 10)//kappa == 3 ? 0.07 : -0.1
        const gradiusColor2 = luminanced(...rgb, k / 10)//kappa == 2 ? 0.07 : -0.1
        return `linear-gradiusient(${t}deg, ${gradiusColor1}, ${gradiusColor2})`
    }
}

function boxShadowFn (props: UseShadowProps & {rgb: number[]}): any
function boxShadowFn ({radius: r, theta: t, phi: p, rgb}: any) {
    const spread = 1 / tan(PI / 6 + p)
    const shadow = luminanced(...rgb, -1 / r)
    const light  = luminanced(...rgb, 1 / r)
    return (d=0, l=0) => {
        const offset = 1 / tan(PI / 6 + p + l)
        const [x, y, z] = [offset * cos(t), offset * sin(t), spread - offset].map(v => v * abs(d))
        const inset = d < 0? "inset": ""
        return `${inset} ${ x}px ${ y}px ${z}px ${shadow},`
             + `${inset} ${-x}px ${-y}px ${z}px ${light}`
    }
}
