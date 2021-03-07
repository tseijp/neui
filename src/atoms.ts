import { atom } from "jotai";

export const colorAtom = atom("#e0e0e0")
export const themeAtom = atom(get => ({
    color: get(colorAtom)
}))


export type LightAtom = {
    x: number,
    y: number,
    color: string,
    intensity: number,
}

export type ShadowAtom = {
    blur: number
    size: number
    kappa: number
    radius: number
    distance: number
    intensity: number
    colorDifference: number
    maxSize: number
    maxRadius: number
    gradient: boolean
    color: string
}

export const lightAtom = atom<LightAtom[]>([])
export const shadowAtom = atom<ShadowAtom[]>([])
