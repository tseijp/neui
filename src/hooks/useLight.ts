import {useAtom} from 'jotai'
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
export function useLight (props: Partial<UseLightProps>): [any, any]

export function useLight ({
    ...props
}: any) {
    const [light, set] = useAtom(lightAtom)
    return [light, set]
}
