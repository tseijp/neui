import {useAtom} from 'jotai'
import {lightAtom} from '../atoms'

export function useLight (props: {

}): [any, any]

export function useLight (props: any) {
    const [light, set] = useAtom(lightAtom)
    return [light, set]
}
