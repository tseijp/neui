import {lightAtom} from '../atoms'

export type UseLightProps = {
    positionX: number,
    positionY: number,
    radius: string,
    size: string,
    blur: string,
    angle: string,
    textColor: string,
    baseColor: string,
    darkColor: string,
    lightColor: string,
    firstGradientColor: string,
    secondGradientColor: string,
}

export function useLight (props: Partial<UseLightProps>) {
    return [props]
}
