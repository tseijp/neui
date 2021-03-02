import { atom } from "jotai";

export type Light = {
    x: number,
    y: number,
    color: string,
    intensity: number,
}

export type Shadow = {
    size: number,
    radius: number;
    distance: number,
    intensity: number,
    blur: number;
    color: string;
    shape: string;
}

export const lightAtom = atom<Light[]>([])
export const shadowAtom = atom<Shadow[]>([])
